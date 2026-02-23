import type {MenuOption} from "../components/types.ts";
import {useNavigate} from "react-router-dom";


export const useMenuOptions = ():MenuOption[] => {
    const navigate = useNavigate();
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
            onClick: () =>  navigate("/edit"), //TODO
            requiresLogin: true,
        },
        {
            label: "PROFILE",
            onClick: () =>  navigate("/edit"), //TODO
            requiresLogin: true
        },
        {
            label: "LOGOUT",
            onClick: () =>  navigate("/logout"), //TODO
            requiresLogin: true
        },

    ]
}