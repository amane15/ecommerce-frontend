import React from "react";
import { Outlet } from "react-router-dom";
import auth from "../services/authService";
import "../assets/css/admin.css";

const AdminRoute = () => {
    const user = auth.getCurrentUser();

    return user.isAdmin ? (
        <Outlet />
    ) : (
        <h1 className="admin-route">You do not have access to this page!</h1>
    );
};

export default AdminRoute;
