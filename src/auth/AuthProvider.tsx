import {useCallback, useEffect, useMemo, useState} from "react";
import {Outlet, useNavigate} from "react-router-dom";
import {AuthContext} from "./AuthContext";
import type {User} from "../components/types.ts";
import api from "../api/axios.ts";


const AuthProvider = () => {

    const navigate = useNavigate();

    const [user, setUser] = useState(() => {
        const storedUser = localStorage.getItem("user");
        return storedUser ? JSON.parse(storedUser) : null;
    });

    const setCurrentUser = useCallback((newUser: User | null) => {
        setUser(newUser);
    }, []);

    const login = useCallback(async (username: string | null, password: string | null) => {
        const response = await api.post("/auth/login", {username, password});
        setCurrentUser({id: response.data.id, username: response.data.username, email: response.data.email});
    }, [setCurrentUser]);


    const logout = useCallback(async () => {
        await api.post("/auth/logout");
        setCurrentUser(null);
        navigate("/login");
    }, [navigate, setCurrentUser]);


    useEffect(() => {
        if (user) {
            localStorage.setItem("user", JSON.stringify(user));
        } else {
            localStorage.removeItem("user");
        }
    }, [user]);

    const contextValue = useMemo(() => ({
        user,
        setCurrentUser,
        login,
        logout,
    }), [user, login, logout, setCurrentUser]);

    return (
        <AuthContext.Provider value={contextValue}>
            <Outlet/>
        </AuthContext.Provider>
    );
};

export default AuthProvider;