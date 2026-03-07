import axios from "axios";
import {useEffect, useMemo, useState} from "react";
import {Outlet} from "react-router-dom";
import { AuthContext } from "./AuthContext";



const AuthProvider = () => {

    const [token, setToken] = useState(localStorage.getItem("token"));


    const setTokenState = (newToken: string) => {
        setToken(newToken);
    }

    useEffect(() => {
        if (token) {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
            localStorage.setItem("token", token);
        } else {
            delete axios.defaults.headers.common['Authorization'];
            localStorage.removeItem("token");
        }
    }, [token]);

    const contextValue = useMemo(() => ({
        token,
        setTokenState,
    }), [token]);

    return (
        <AuthContext.Provider value={contextValue}>
            <Outlet/>
        </AuthContext.Provider>
    );
};

export default AuthProvider;