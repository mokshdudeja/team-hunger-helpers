import React from "react";
import { Navigate, useLocation } from "react-router-dom";

export const ProtectedRoute = ({ element: Element }) => {
  const { pathname } = useLocation();
  const moksh = localStorage.getItem("moksh");

  if (!moksh && ["/map"].includes(pathname)) {
    return <Navigate to="/" />;
  }
  return <Element />;
};
