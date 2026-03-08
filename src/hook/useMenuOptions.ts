import type {MenuOption} from "../components/types.ts";
import {useNavigate} from "react-router-dom";
import {useAuth} from "./useAuth.ts";
import api from "../api/axios.ts";


export const useMenuOptions = ():MenuOption[] => {
    const navigate = useNavigate();
    const {setCurrentUser} = useAuth();

    const handleLogout = async () => {
        await api.post("/auth/logout");
        setCurrentUser(null);
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
            label: "LOGIN",
            onClick: () =>  navigate("/login"),
            requiresLogin: false,
            requiresLogout: true
        },
        {
            label: "LOGOUT",
            onClick: () =>  handleLogout(),
            requiresLogin: true
        }

    ]
}