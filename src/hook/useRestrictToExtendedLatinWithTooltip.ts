import { useEffect } from "react";

const EXTENDED_LATIN_CHAR_REGEX = /[\u0020-\u007E\u00A0-\u024F\r\n\t]/;
const EMAIL_CHAR_REGEX = /[a-zA-Z0-9._%+\-@]/;

const getRegex = (target: HTMLInputElement | HTMLTextAreaElement) =>
    target.type === "email" ? EMAIL_CHAR_REGEX : EXTENDED_LATIN_CHAR_REGEX;

const isTextField = (target: EventTarget | null): target is HTMLInputElement | HTMLTextAreaElement =>
    target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement;

const nativeSetter = (el: HTMLInputElement | HTMLTextAreaElement) =>
    Object.getOwnPropertyDescriptor(
        el instanceof HTMLTextAreaElement ? HTMLTextAreaElement.prototype : HTMLInputElement.prototype,
        "value"
    )?.set;

const showTooltip = (input: HTMLElement, message: string) => {
    if (input.dataset.tooltipShown === "true") return;

    const tooltip = document.createElement("div");
    tooltip.className = "input-tooltip";
    tooltip.textContent = message;

    const rect = input.getBoundingClientRect();
    Object.assign(tooltip.style, {
        position: 'absolute',
        top: `${rect.top - 30 + window.scrollY}px`,
        left: `${rect.left + window.scrollX}px`,
        background: 'rgba(247, 80, 73, 0.9)',
        color: 'white',
        padding: '4px 8px',
        borderRadius: '4px',
        fontSize: '0.8em',
        fontWeight: 'bold',
        zIndex: '9999',
        boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
        pointerEvents: 'none'
    });

    document.body.appendChild(tooltip);
    input.dataset.tooltipShown = "true";

    setTimeout(() => {
        tooltip.remove();
        delete input.dataset.tooltipShown;
    }, 3000);
};

const sanitizeAndApply = (target: HTMLInputElement | HTMLTextAreaElement) => {
    const regex = getRegex(target);
    const original = target.value;
    const sanitized = Array.from(original).filter(char => regex.test(char)).join("");
    if (original === sanitized) return;

    const selectionStart = target.selectionStart ?? original.length;
    const removedBeforeCursor = Array.from(original.slice(0, selectionStart))
        .filter(char => !regex.test(char))
        .length;

    nativeSetter(target)?.call(target, sanitized);
    target.dispatchEvent(new Event("input", { bubbles: true }));
    target.setSelectionRange(selectionStart - removedBeforeCursor, selectionStart - removedBeforeCursor);

    showTooltip(target, "Latin symbols only!");
};

const useRestrictToExtendedLatinWithTooltip = () => {
    useEffect(() => {
        const beforeInputHandler = (e: InputEvent) => {
            if (!isTextField(e.target) || e.target.type === "email") return;
            if (e.inputType === "insertText" && e.data) {
                const hasInvalid = Array.from(e.data).some(char => !EXTENDED_LATIN_CHAR_REGEX.test(char));
                if (hasInvalid) {
                    e.preventDefault();
                    showTooltip(e.target, "Latin symbols only!");
                }
            }
        };

        // email не реагирует на preventDefault в beforeinput — чистим постфактум
        const inputHandler = (e: Event) => {
            if (!isTextField(e.target) || e.target.type !== "email") return;
            sanitizeAndApply(e.target);
        };

        const pasteHandler = (e: ClipboardEvent) => {
            if (!isTextField(e.target)) return;
            const regex = getRegex(e.target);
            const pasted = e.clipboardData?.getData("text/plain") ?? "";
            const sanitized = Array.from(pasted).filter(char => regex.test(char)).join("");
            if (sanitized !== pasted) {
                e.preventDefault();
                document.execCommand("insertText", false, sanitized);
                showTooltip(e.target, "Latin symbols only!");
            }
        };

        document.addEventListener("beforeinput", beforeInputHandler);
        document.addEventListener("input", inputHandler);
        document.addEventListener("paste", pasteHandler);

        return () => {
            document.removeEventListener("beforeinput", beforeInputHandler);
            document.removeEventListener("input", inputHandler);
            document.removeEventListener("paste", pasteHandler);
        };
    }, []);
};

export default useRestrictToExtendedLatinWithTooltip;