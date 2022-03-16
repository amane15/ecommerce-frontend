import React from "react";
import auth from "../services/authService";

const LogOut = () => {
    auth.logout();
    window.location = "/";
    return null;
};

export default LogOut;
