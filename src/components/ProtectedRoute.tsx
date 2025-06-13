import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext.tsx";
import Loader from "./Loader.tsx";

const ProtectedRoute: React.FC = () => {
    const { isLoggedIn, loading } = useAuth();

    if (loading) {
        return <Loader/>;
    }

    if (!isLoggedIn) {
        return <Navigate to="/login" replace />;
    }

    return <Outlet />;
};

export default ProtectedRoute;
