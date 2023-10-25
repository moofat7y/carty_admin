import React, { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const [isAuth, setIsAuth] = useState(
    JSON.parse(localStorage.getItem("token")) || null
  );
  return <>{isAuth ? <Outlet /> : <Navigate to="/auth/signin" />}</>;
}
