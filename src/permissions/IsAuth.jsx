import React, { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function IsAuth() {
  const [isAuth, setIsAuth] = useState(
    JSON.parse(localStorage.getItem("token")) || null
  );
  return <>{isAuth ? <Navigate to="/" /> : <Outlet />}</>;
}
