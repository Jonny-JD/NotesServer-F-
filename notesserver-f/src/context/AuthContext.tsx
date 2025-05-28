
import { createContext, useState, type ReactNode, useContext } from "react";

interface AuthContextType {
    userId: string | null;
    setUserId: (id: string | null) => void;
    isLoggedIn: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [userId, setUserId] = useState<string | null>(null);

    const value = {
        userId,
        setUserId,
        isLoggedIn: !!userId,
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
