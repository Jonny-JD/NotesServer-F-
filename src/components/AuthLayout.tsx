import {Wrapper} from "./wrapper/Wrapper.tsx";
import {Navigate, Outlet} from "react-router-dom";
import {LeftAside} from "./aside/LeftAside.tsx";
import type {MenuOption} from "./types.ts";
import {useMenuOptions} from "../hook/useMenuOptions.ts";
import {useAuth} from "../hook/useAuth.ts";
import {RightAside} from "./aside/RightAside.tsx";


export const AuthLayout = () => {
    const {user} = useAuth();


    const menuOptions: MenuOption[] = useMenuOptions();

    if (!user) {
        return <Navigate to={"/login"}/>
    }
    return (
        <Wrapper menuOptions={menuOptions}
                 aside={
                     [
                         <LeftAside key="left" menuOptions={menuOptions}/>,
                         <RightAside key="right"/>
                     ]
                 }>
            <Outlet/>
        </Wrapper>

    )
};