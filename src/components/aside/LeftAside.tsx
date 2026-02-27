import type {JSX} from "react";
import type {MenuOption} from "../types.ts";


export const LeftAside = (props: {menuOptions: MenuOption[]}): JSX.Element => {

    const isLoggedIn = true; //TODO auth

    const visibleOptions = props.menuOptions.filter(menuOption => !menuOption.requiresLogin || isLoggedIn);

    return (
        <aside>
            <div className={"aside-interaction-buttons"}>
                {visibleOptions.map((option) =>(
                    <button className={option.label.toLowerCase() === "logout" ? "red-button" : ""}
                            style={option.label.toLowerCase() === "logout"? {marginTop: "10vmin"} : {}}
                            key={option.label}
                            onClick={(e) => option.onClick(e)}>
                        {option.label}
                    </button>
                )
                )}
            </div>
        </aside>
    )
}