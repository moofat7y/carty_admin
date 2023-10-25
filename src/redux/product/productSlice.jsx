import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productService from "./productService";
import { notifyError, notifySuccess } from "../../utils/notifies";
import errHandler from "../../utils/errHandler";

const initialState = {
  status: "idle",
  products: [],
};

export const createProduct = createAsyncThunk(
  "/product/create",
  async ({ data, navigate }, thunkApi) => {
    try {
      const res = await productService.createProduct(data);
      navigate("/dashboard/products");
      notifySuccess("لقد تم اضافة المنتج بنجاح");
      return res.data;
    } catch (error) {
      error = errHandler(error);
      notifyError(error);
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "/product/delete",
  async ({ id }, thunkApi) => {
    try {
      const res = await productService.deleteProduct(id);
      notifySuccess("لقد تم حذف المنتج بنجاح");
      return res.data;
    } catch (error) {
      error = errHandler(error);
      notifyError(error);
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const getProducts = createAsyncThunk(
  "/product/get-all",
  async (thunkApi) => {
    try {
      const res = await productService.getProducts();
      return res.data;
    } catch (error) {
      error = errHandler(error);
      return thunkApi.rejectWithValue(error);
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createProduct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.status = "success";
        state.products = [action.payload, ...state.products];
      })
      .addCase(createProduct.rejected, (state) => {
        state.status = "error";
      })
      .addCase(getProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.status = "success";
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state) => {
        state.status = "error";
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.products = state.products.filter(
          (item) => item.id !== action.meta.arg.id
        );
      });
  },
});

export default productSlice.reducer;
