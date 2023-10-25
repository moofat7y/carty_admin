import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/authSlice";
import userSlice from "./user/userSlice";
import categorySlice from "./category/categorySlice";
import productSlice from "./product/productSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    user: userSlice,
    category: categorySlice,
    product: productSlice,
  },
});

export default store;
