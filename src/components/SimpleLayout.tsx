import {Wrapper} from "./wrapper/Wrapper.tsx";
import {Outlet} from "react-router-dom";
import type {MenuOption} from "./types.ts";
import {useMenuOptions} from "../hook/useMenuOptions.tsx";
import {LeftAside} from "./aside/LeftAside.tsx";


export const SimpleLayout = () => {

    const menuOptions: MenuOption[] = useMenuOptions();

    return (
        <Wrapper menuOptions={menuOptions} aside={<LeftAside menuOptions={menuOptions}/>}>
            <Outlet/>
        </Wrapper>

    )
};