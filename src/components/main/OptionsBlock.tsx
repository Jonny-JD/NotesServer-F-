import React, {type JSX} from "react";

type OptionsBlockProps = {
    header: string;
    fields: Record<string, string | boolean> [];
    buttonName: string;
    onSubmit: (data: Record<string, unknown>) => void;
};


export const OptionsBlock =
    ({header, fields, buttonName, onSubmit}: OptionsBlockProps): JSX.Element => {


        const handleSubmit = (e: React.BaseSyntheticEvent) => {
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

                    {fields.map((item) => {
                        let type = "text";
                        const fieldName = Object.keys(item)[0];
                        const fieldValue = item[fieldName];

                        if (/.*date.*/.test(fieldName.toLowerCase())) type = fieldName.toLowerCase();

                        if (fieldName.toUpperCase() === "PRIVATE") {
                            return (
                                <div key={fieldName} className={"options-form-cell"}>
                                    <label className={"options-form-label"} htmlFor={"switch"}>{fieldName.toUpperCase()}:</label>
                                    <div className={"switch"}>
                                        <input
                                            className={"switch-input"}
                                            type={"checkbox"}
                                            id={"switch"}
                                            name={"private"}
                                            checked={typeof fieldValue === "boolean" ? fieldValue : false}
                                            onChange={(e) => e.target.value}
                                        />
                                        <span className={"move"}></span>
                                    </div>
                                </div>)
                        }

                        return (
                            <div key={fieldName} className={"options-form-cell"}>
                                <label className={"options-form-label"}
                                       htmlFor={fieldName.toLowerCase()}>{fieldName}:</label>
                                <input
                                    className={"options-form-input"}
                                    type={type}
                                    id={fieldName.toLowerCase()}
                                    name={fieldName.toLowerCase()}
                                    value={typeof fieldValue === "string" ? fieldValue : ""}
                                    onChange={(e) => e.target.value}/>
                            </div>)
                    })}
                </form>
                <button type={"submit"} form={"form"}>
                    {buttonName.toUpperCase()}
                </button>
            </div>
        )
    }