import {type JSX} from "react";


export const FilterBlock = ({header, fieldNames}: { header: string, fieldNames: string[] }): JSX.Element => {


    return (
        <div className={"filter-block"}>
            <form>
                <span className={"options-form-header"}>{header}</span>

                {fieldNames.map((item) => {
                    let type = "text";
                    if (item.toUpperCase() === "DATE") type = item.toLowerCase();
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
            <button type={"submit"}>
                FILTER
            </button>
        </div>
    )
}