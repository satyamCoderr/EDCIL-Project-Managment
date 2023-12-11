import React from "react";
import {Navigate,Outlet} from 'react-router-dom'
import {  useSelector } from "react-redux";

const PrivateRoutes = ({ children }) => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  if (!isAuthenticated) {
    return <Navigate  to="/login" />
  }
  return <Outlet />;
};

export default PrivateRoutes;
