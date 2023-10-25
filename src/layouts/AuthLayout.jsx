import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "../components/auth/Header";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function AuthLayout() {
  const { token } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);
  return (
    <>
      <Header />
      <div className="grid md:grid-cols-2">
        <div className="anim hidden md:block md:order-2 items-center h-[25vh] justify-center md:h-screen px-3 lg:px-[60px]">
          <img
            loading="eager"
            className="w-full h-full object-contain"
            src="/auth/auth.jpg"
            alt="auth image"
          />
        </div>
        <div className="auth pt-28 md:order-1 flex items-center min-h-screen md:min-h-[75vh] justify-center md:h-screen px-3 md:px-[30px]">
          <Outlet />
        </div>
      </div>
    </>
  );
}
