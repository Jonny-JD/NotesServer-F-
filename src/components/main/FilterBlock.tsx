import type {JSX} from "react";


export const FilterBlock = ({header, fieldNames}: { header: string, fieldNames: string[] }): JSX.Element => {

    return (
        <div className={"filter-block"}>
            <form>
                <span className={"options-form-header"}>{header}</span>

                {fieldNames.map((item) => {
                    let type = "text";
                    if (item.toUpperCase() === "DATE") type=item;
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