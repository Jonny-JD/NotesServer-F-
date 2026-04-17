import {useCallback, useEffect, useMemo, useState} from "react";
import {Outlet, useNavigate} from "react-router-dom";
import {AuthContext} from "./AuthContext";
import type {User} from "../components/types.ts";
import api from "../api/axios.ts";
import {NavigationProgress} from "../components/NavigationProgress.tsx";


const AuthProvider = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);


    const [user, setUser] = useState(() => {
        const storedUser = localStorage.getItem("user");
        return storedUser ? JSON.parse(storedUser) : null;
    });

    const setCurrentUser = useCallback((newUser: User | null) => {
        setUser(newUser);
    }, []);

    useEffect(() => {
        const interceptor = api.interceptors.response.use(
            response => response,
            error => {
                if (error.response?.status === 401 && !error.config.url?.includes("/auth/")) {
                    setCurrentUser(null);
                    navigate("/");
                }
                return Promise.reject(error);
            }
        );

        return () => api.interceptors.response.eject(interceptor);
    }, [navigate, setCurrentUser]);

    const login = useCallback(async (username: string | null, password: string | null) => {
        const response = await api.post("/auth/login", {username, password});
        setCurrentUser({id: response.data.id, username: response.data.username, email: response.data.email});
    }, [setCurrentUser]);


    const logout = useCallback(async () => {
        setCurrentUser(null);
        await api.post("/auth/logout");
        navigate("/login");
    }, [navigate, setCurrentUser]);


    useEffect(() => {
        if (user) {
            localStorage.setItem("user", JSON.stringify(user));
        } else {
            localStorage.removeItem("user");
        }
    }, [user]);

    useEffect(() => {
        const checkAuth = async () => {
            await api.get("/auth/me")
                .then(resp => {
                    setCurrentUser({
                        id: resp.data.id,
                        username: resp.data.username,
                        email: resp.data.email
                    });
                }).catch(() => {
                    setCurrentUser(null);
                }).finally(() => {
                    setIsLoading(false);
                })
        };
        checkAuth();

    }, [navigate, setCurrentUser]);

    const contextValue = useMemo(() => ({
        user,
        setCurrentUser,
        login,
        logout,
        isLoading
    }), [user, setCurrentUser, login, logout, isLoading]);

    return (
        <AuthContext.Provider value={contextValue}>
            <NavigationProgress/>
            <Outlet/>
        </AuthContext.Provider>
    );
};

export default AuthProvider;