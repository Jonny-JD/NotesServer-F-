import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext.tsx";

const ProtectedRoute: React.FC = () => {
    const { isLoggedIn, loading } = useAuth();

    if (loading) {
        // Можно вернуть лоадер, пока идет проверка
        return <div>Loading...</div>;
    }

    if (!isLoggedIn) {
        // Не авторизован - редирект на логин
        return <Navigate to="/login" replace />;
    }

    // Авторизован - рендерим вложенные роуты
    return <Outlet />;
};

export default ProtectedRoute;
