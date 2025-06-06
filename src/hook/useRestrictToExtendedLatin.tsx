import { useEffect } from "react";

const EXTENDED_LATIN_CHAR_REGEX = /[\u0020-\u007E\u00A0-\u024F\r\n\t]/;

const sanitizeInput = (value: string) =>
    [...value].filter(char => EXTENDED_LATIN_CHAR_REGEX.test(char)).join("");

const showTooltip = (input: HTMLElement, message: string) => {
    if ((input as any).dataset.tooltipShown === "true") return;

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
    (input as any).dataset.tooltipShown = "true";

    setTimeout(() => {
        tooltip.remove();
        delete (input as any).dataset.tooltipShown;
    }, 3000);
};

const useRestrictToExtendedLatinWithTooltip = () => {
    useEffect(() => {
        const handler = (e: Event) => {
            const target = e.target as HTMLInputElement | HTMLTextAreaElement;
            if (
                target &&
                (target.tagName === "INPUT" || target.tagName === "TEXTAREA") &&
                target.type !== "password"
            ) {
                const original = target.value;
                const sanitized = sanitizeInput(original);
                if (original !== sanitized) {
                    target.value = sanitized;
                    showTooltip(target, "Latin symbols only!");
                }
            }
        };

        document.addEventListener("input", handler);
        return () => document.removeEventListener("input", handler);
    }, []);
};

export default useRestrictToExtendedLatinWithTooltip;
