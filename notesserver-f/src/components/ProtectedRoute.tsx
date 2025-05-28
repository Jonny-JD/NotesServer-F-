import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext.tsx";

const ProtectedRoute = () => {
    const { userId } = useAuth();

    return userId ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;