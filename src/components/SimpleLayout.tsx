import {Wrapper} from "./wrapper/Wrapper.tsx";
import {Outlet} from "react-router-dom";


export const SimpleLayout = () => {
    return (
        <Wrapper>
            <Outlet />
        </Wrapper>

    )
};