import {useContext} from "react";
import {AuthContext} from "../auth/AuthContext.ts"

export const useAuth = () => {
    return useContext(AuthContext)
};