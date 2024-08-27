import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = (props) => {
  if (!sessionStorage.getItem("token")) return <Navigate to="/login" />;
  return <Outlet />;
};

export default ProtectedRoute;