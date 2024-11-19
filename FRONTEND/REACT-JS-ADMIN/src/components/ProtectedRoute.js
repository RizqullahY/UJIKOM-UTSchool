import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ allowedRoles }) => {
	const roleUser = localStorage.getItem("roleUser");
	const isAuthorized =
		roleUser && allowedRoles && allowedRoles.includes(roleUser);

	return isAuthorized ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
