import React from "react";
import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

const AdminRoute = () => {
  const user = useSelector((state) => state.user.currentUser);
  const token = useSelector((state) => state.user.token);

  const role = user?.role;

  if (!token) {
    return <Navigate to="/login" />;
  }

  if (role == "User") {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default AdminRoute;
