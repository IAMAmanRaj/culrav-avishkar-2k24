import React from "react";
import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

const AdminRoute = () => {
  const { token, role } = useSelector((state) => state.user);

  if (!token) {
    return <Navigate to="/login" />;
  }

  if (role !== "admin") {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default AdminRoute;