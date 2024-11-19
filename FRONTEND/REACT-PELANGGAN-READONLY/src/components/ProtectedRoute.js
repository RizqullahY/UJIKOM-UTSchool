import React from 'react';
import { Navigate, Route } from 'react-router-dom';

const ProtectedRoute = ({ element }) => {
	const isAuthenticated = localStorage.getItem("loggedInUser");

	return isAuthenticated ? (
		<Route element={element} />
	) : (
		<Navigate to="/" />
	);
};

export default ProtectedRoute;
