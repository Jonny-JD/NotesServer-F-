import type {JSX, SubmitEvent} from "react";

type OptionsBlockProps = {
    header: string;
    fieldNames: string[];
    buttonName: string;
    onSubmit: (data: Record<string, unknown>) => void;
};


export const OptionsBlock =
    ({header, fieldNames, buttonName, onSubmit}: OptionsBlockProps): JSX.Element => {

        const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);

            const data: Record<string, unknown> = {};

            formData.forEach((value, key) => {
                data[key] = value;
            });

            onSubmit(data);
        }

        return (
            <div className={"filter-block"}>
                <form id={"form"} onSubmit={handleSubmit}>
                    <span className={"options-form-header"}>{header}</span>

                    {fieldNames.map((item) => {
                        let type = "text";

                        if (/.*date.*/.test(item.toLowerCase())) type = item.toLowerCase();

                        if (item.toUpperCase() === "PRIVATE") {
                            return (
                                <div key={item} className={"options-form-cell"}>
                                    <label className={"options-form-label"} htmlFor={"switch"}>{item}:</label>
                                    <div className={"switch"}>
                                        <input className={"switch-input"} type={"checkbox"} id={"switch"}/>
                                        <span className={"move"}></span>
                                    </div>
                                </div>)
                        }

                        return (
                            <div key={item} className={"options-form-cell"}>
                                <label className={"options-form-label"} htmlFor={item.toLowerCase()}>{item}:</label>
                                <input className={"options-form-input"} type={type} id={item.toLowerCase()}/>
                            </div>)
                    })}
                </form>
                <button type={"submit"} form={"form"}>
                    {buttonName.toUpperCase()}
                </button>
            </div>
        )
    }