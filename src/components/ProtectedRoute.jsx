import React from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import auth from "../services/authService";

const ProtectedRoute = () => {
    const user = auth.getCurrentUser();
    const location = useLocation();

    return user ? (
        <Outlet />
    ) : (
        <Navigate to="/login" state={{ from: location }} replace />
    );
};

export default ProtectedRoute;
