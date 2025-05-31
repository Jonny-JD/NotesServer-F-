
import { createContext, useState, type ReactNode, useContext } from "react";

interface UserReadDto {
    id: string;
    username: string;
    email: string;
    roles: Set<string>; // или string[] — в зависимости от реализации
}

interface AuthContextType {
    user: UserReadDto | null;
    setUser: (user: UserReadDto | null) => void;
    isLoggedIn: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<UserReadDto | null>(null);

    const value = {
        user,
        setUser,
        isLoggedIn: !!user,
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
