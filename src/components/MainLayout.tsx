import {Wrapper} from "./wrapper/Wrapper.tsx";
import {Outlet} from "react-router-dom";
import {LeftAside} from "./aside/LeftAside.tsx";


export const MainLayout = () => {
    return (
        <Wrapper aside={<LeftAside/>}>
            <Outlet />
        </Wrapper>

    )
};