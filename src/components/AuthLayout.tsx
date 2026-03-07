import {Wrapper} from "./wrapper/Wrapper.tsx";
import {Navigate, Outlet} from "react-router-dom";
import {LeftAside} from "./aside/LeftAside.tsx";
import type {MenuOption} from "./types.ts";
import {useMenuOptions} from "../hook/useMenuOptions.ts";
import {useAuth} from "../hook/useAuth.ts";


export const AuthLayout = () => {
    const {token} = useAuth();


    const menuOptions: MenuOption[] = useMenuOptions();

    if (token) {
        return <Navigate to={"/login"} />
    }
    return (
        <Wrapper aside={<LeftAside menuOptions={menuOptions}/>} menuOptions={menuOptions}>
            <Outlet />
        </Wrapper>

    )
};