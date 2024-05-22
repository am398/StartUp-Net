import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ children }) => {
    const location = useLocation();
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);


    return isAuthenticated ? (
        children
    ) : (
        <Navigate to="/login" state={{ from: location }} replace />
    );
};

export default PrivateRoute;