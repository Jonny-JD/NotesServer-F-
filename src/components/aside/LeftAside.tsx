import type {JSX} from "react";
import type {MenuOption} from "../types.ts";
import {useAuth} from "../../hook/useAuth.ts";


export const LeftAside = (props: { menuOptions: MenuOption[] }): JSX.Element => {

    const {user} = useAuth();


    const visibleOptions = props.menuOptions.filter(menuOption => {
        if (menuOption.requiresLogin && !user) return false;
        return !(menuOption.requiresLogout && user);
    });

    return (
        <aside>
            <div className={"aside-interaction-buttons"}>
                {visibleOptions.map((option) => {
                        const isLogout = option.label.toLowerCase() === "logout";
                        return (<button className={isLogout ? "red-button" : ""}
                                        style={isLogout ? {marginTop: "10vmin"} : {}}
                                        key={option.label}
                                        onClick={(e) => option.onClick(e)}>
                            {option.label}
                        </button>)
                    }
                )}
            </div>
        </aside>
    )
}