import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoutes = ({ children }) => {
  const user = JSON.parse(localStorage.getItem('user')) || null;
  return user ? children  : <Navigate to="/login" />;
};

export default ProtectedRoutes;
