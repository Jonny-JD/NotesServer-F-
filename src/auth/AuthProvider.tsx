
import {useEffect, useMemo, useState} from "react";
import {Outlet} from "react-router-dom";
import { AuthContext } from "./AuthContext";
import type {User} from "../components/types.ts";



const AuthProvider = () => {

    const [user, setUser] = useState(() => {
        const storedUser = localStorage.getItem("user");
        return storedUser ? JSON.parse(storedUser) : null;
    });


    const setCurrentUser = (newUser: User | null) => {
        setUser(newUser);
    }


    useEffect(() => {
        if (user) {
            localStorage.setItem("user", JSON.stringify(user));
        } else {
            localStorage.removeItem("user");
        }
    }, [user]);

    const contextValue = useMemo(() => ({
        user,
        setCurrentUser
    }), [user]);

    return (
        <AuthContext.Provider value={contextValue}>
            <Outlet/>
        </AuthContext.Provider>
    );
};

export default AuthProvider;