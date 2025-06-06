import { useEffect } from "react";

const useTabInTextarea = () => {
    useEffect(() => {
        const handleTab = (e: KeyboardEvent) => {
            const target = e.target as HTMLElement;
            if (
                e.key === "Tab" &&
                target.tagName === "TEXTAREA"
            ) {
                e.preventDefault();

                const textarea = target as HTMLTextAreaElement;
                const start = textarea.selectionStart;
                const end = textarea.selectionEnd;

                textarea.value =
                    textarea.value.substring(0, start) +
                    "\t" +
                    textarea.value.substring(end);

                textarea.selectionStart = textarea.selectionEnd = start + 1;
            }
        };

        document.addEventListener("keydown", handleTab);
        return () => {
            document.removeEventListener("keydown", handleTab);
        };
    }, []);
};

export default useTabInTextarea;