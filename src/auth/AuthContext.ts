import {createContext} from "react";
import type {User} from "../components/types.ts";

interface AuthContextType {
    user: User | null;
    setCurrentUser: (user: User | null) => void;
}


export const AuthContext = createContext<AuthContextType>({
    user: null,
    setCurrentUser: () => {
    }
});