/* eslint-disable no-unused-vars */
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoutes = ({ children }) => {
    const token = sessionStorage.getItem('authorized'); // Get token from storage

    // Check if the token exists (you can add more validations here)
    if (!token) {
        return <Navigate to={'/Login'} /> // Redirect to login if not authorized
    }

    return children; // Render the protected route if authorized
};

export default ProtectedRoutes;
