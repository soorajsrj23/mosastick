import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const ProtectedRoutes = ({ component: Component, isAuthenticated, ...rest }) => {
  return isAuthenticated ? (
    <Route {...rest} element={<Component />} />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default ProtectedRoutes;
