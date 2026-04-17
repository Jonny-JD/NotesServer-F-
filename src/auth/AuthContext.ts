import {createContext} from "react";
import type {User} from "../components/types.ts";

interface AuthContextType {
    user: User | null;
    setCurrentUser: (user: User | null) => void;
    login: (username: string | null, password: string | null) => void | Promise<void>;
    logout: () => void;
    isLoading: boolean;
}


export const AuthContext = createContext<AuthContextType>({
    user: null,
    setCurrentUser: () => {
    },
    login: () => {
    },
    logout: () => {
    },
    isLoading: false,
});