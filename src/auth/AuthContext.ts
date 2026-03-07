import {createContext} from "react";

interface AuthContextType {
    token: string | null,
    setTokenState: (newToken: string | null) => void
}


export const AuthContext = createContext<AuthContextType>({
    token: null,
    setTokenState: () => {
    },
});