import type {JSX} from "react";


export const FilterBlock = (): JSX.Element => {
    return (
        <div className={"filter-block"}>
            <form>
                <span className={"options-form-header"}>FILTER BY:</span>
                <div className={"options-form-cell"}>
                    <label className={"options-form-label"} htmlFor={"tag"}>TAG:</label>
                    <input className={"options-form-input"} type={"text"} id={"tag"}/>
                </div>
                <div className={"options-form-cell"}>
                    <label className={"options-form-label"} htmlFor={"title"}>TITLE:</label>
                    <input className={"options-form-input"} type={"text"} id={"title"}/>
                </div>
                <div className={"options-form-cell"}>
                    <label className={"options-form-label"} htmlFor={"author"}>AUTHOR:</label>
                    <input className={"options-form-input"} type={"text"} id={"author"}/>
                </div>
                <div className={"options-form-cell"}>
                    <label className={"options-form-label"} htmlFor={"date"}>DATE:</label>
                    <input className={"options-form-input"} type={"text"} id={"date"}/>
                </div>
            </form>
            <button type={"submit"}>
                FILTER
            </button>
        </div>
    )
}