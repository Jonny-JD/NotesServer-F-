import { createContext, useState, useContext, useEffect } from "react";
import type { ReactNode } from "react";

interface User {
    id: number;
    username: string;
}

interface AuthContextType {
    user: User | null;
    setUser: (user: User | null) => void;
    isLoggedIn: boolean;
    loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/api/auth/me", {
            method: "GET",
            credentials: "include",
        })
            .then((res) => {
                if (!res.ok) throw new Error("Unauthorized");
                return res.json();
            })
            .then((data) => {
                console.log("Fetched user data:", data);
                console.log("typeof data.id:", typeof data.id);
                console.log("Object.keys(data):", Object.keys(data));
                setUser({
                    id: data.id,
                    username: data.username,
                });
            })
            .catch(() => {
                setUser(null);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    const value = {
        user,
        setUser,
        isLoggedIn: !!user,
        loading,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within AuthProvider");
    }
    return context;
};
