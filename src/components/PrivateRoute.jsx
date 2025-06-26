// components/PrivateRoute.jsx
import React, { useContext } from 'react';
// import { Navigate, useLocation } from 'react-router-dom';
import { valueContext } from '../Rootlayout';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({ children }) => {
  const { currentUser, loading } = useContext(valueContext);
  const location = useLocation();

  if (loading) return <div className="text-center mt-10">Loading...</div>;

  if (!currentUser) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoute;
