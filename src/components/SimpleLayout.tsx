import {Wrapper} from "./wrapper/Wrapper.tsx";
import {Outlet} from "react-router-dom";
import type {MenuOption} from "./types.ts";
import {useMenuOptions} from "../hook/useMenuOptions.tsx";


export const SimpleLayout = () => {

    const menuOptions: MenuOption[] = useMenuOptions();

    return (
        <Wrapper menuOptions={menuOptions}>
            <Outlet />
        </Wrapper>

    )
};