import type {MenuOption} from "../components/types.ts";
import {useNavigate} from "react-router-dom";
import {useAuth} from "./useAuth.ts";


export const useMenuOptions = ():MenuOption[] => {
    const navigate = useNavigate();
    const {setTokenState} = useAuth();

    const handleLogout = () => {
        setTokenState(null);
        navigate("/login");
    }

    return [
        {
            label: "DISCOVER",
            onClick: () =>  navigate("/discover"),
            requiresLogin: false,
        },
        {
            label: "CREATE",
            onClick: () =>  navigate("/create"),
            requiresLogin: false,
        },
        {
            label: "EDIT",
            onClick: () =>  navigate("/edit"),
            requiresLogin: false,
        },
        {
            label: "MY NOTES",
            onClick: () =>  navigate("/my"),
            requiresLogin: true,
        },
        {
            label: "PROFILE",
            onClick: () =>  navigate("/profile"),
            requiresLogin: true
        },
        {
            label: "LOGOUT",
            onClick: () =>  handleLogout(),
            requiresLogin: true
        },

    ]
}