import {createContext} from "react";

interface AuthContextType {
    token: string | null,
    setTokenState: (newToken: string) => void
}


export const AuthContext = createContext<AuthContextType>({
    token: null,
    setTokenState: () => {
    },
});