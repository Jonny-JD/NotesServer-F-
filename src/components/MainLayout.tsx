import {Wrapper} from "./wrapper/Wrapper.tsx";
import {Outlet} from "react-router-dom";
import {LeftAside} from "./aside/LeftAside.tsx";
import type {MenuOption} from "./types.ts";
import {useMenuOptions} from "../hook/useMenuOptions.tsx";


export const MainLayout = () => {

    const menuOptions: MenuOption[] = useMenuOptions();

    return (
        <Wrapper aside={<LeftAside menuOptions={menuOptions}/>} menuOptions={menuOptions}>
            <Outlet />
        </Wrapper>

    )
};