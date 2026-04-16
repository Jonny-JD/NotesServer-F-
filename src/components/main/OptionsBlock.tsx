import React, {type JSX, useEffect, useState} from "react";

type OptionsBlockProps = {
    header: string;
    fields: Record<string, string | boolean> [];
    buttonName: string;
    onSubmit: (data: Record<string, unknown>) => void;
};


export const OptionsBlock =
    ({header, fields: initialFields, buttonName, onSubmit}: OptionsBlockProps): JSX.Element => {
        const [localFields, setLocalFields] = useState(initialFields);

        useEffect(() => {
            setLocalFields(initialFields);
        }, [initialFields]);

        const handleChange = (name: string, value: string | boolean) => {
            setLocalFields(prev => prev.map(item => {
                const key = Object.keys(item)[0];
                if (key === name) {
                    return { [key]: value };
                }
                return item;
            }));
        };

        const handleSubmit = (e: React.BaseSyntheticEvent) => {
            e.preventDefault();

            const dataToSubmit: Record<string, unknown> = {};
            localFields.forEach(item => {
                const key = Object.keys(item)[0];
                dataToSubmit[key] = item[key];
            });
            onSubmit(dataToSubmit);
        };


        return (
            <div className={"filter-block"}>
                <form id={"form"} onSubmit={handleSubmit}>
                    <span className={"options-form-header"}>{header}</span>

                    {localFields.map((item) => {
                        let type = "text";
                        const fieldName = Object.keys(item)[0];
                        const fieldValue = item[fieldName];

                        if (/.*date.*/.test(fieldName.toLowerCase())) type = fieldName.toLowerCase();

                        if (fieldName.toUpperCase() === "PRIVATE") {
                            return (
                                <div key={fieldName} className={"options-form-cell"}>
                                    <label className={"options-form-label"}
                                           htmlFor={fieldName.toLowerCase()}>{fieldName.toUpperCase()}:</label>
                                    <div className={"switch"}>
                                        <input
                                            className={"switch-input"}
                                            type={"checkbox"}
                                            id={fieldName.toLowerCase()}
                                            name={fieldName.toLowerCase()}
                                            checked={!!fieldValue}
                                            onChange={(e) => handleChange(fieldName, e.target.checked)}
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
                                    onChange={(e) => handleChange(fieldName, e.target.value)}
                                />
                            </div>)
                    })}
                </form>
                <button type={"submit"} form={"form"}>
                    {buttonName.toUpperCase()}
                </button>
            </div>
        )
    }