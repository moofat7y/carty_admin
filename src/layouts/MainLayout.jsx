import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { getUserInfo } from "../redux/user/userSlice";
import { SideBar } from "../components/sidebar/SideBar";
import Header from "../components/header/Header";
import { getProducts } from "../redux/product/productSlice";
import { getCategories } from "../redux/category/categorySlice";

export default function MainLayout() {
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (token) {
      dispatch(getUserInfo({ navigate }));
      dispatch(getProducts());
      dispatch(getCategories());
    } else {
      navigate("/auth/signin");
    }
  }, []);

  return (
    <div className="flex">
      <SideBar />
      <div className="flex-1">
        <Header />
        <Outlet />
      </div>
    </div>
  );
}
