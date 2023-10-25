import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import categoryService from "./categoryService";
import errHandler from "../../utils/errHandler";
import { notifyError, notifySuccess } from "../../utils/notifies";

const initialState = {
  status: "idle",
  categories: [],
};

export const createCategory = createAsyncThunk(
  "/category/create",
  async ({ data, navigate }, thunkApi) => {
    try {
      const res = await categoryService.createCategory(data);
      navigate("/categories");
      notifySuccess("لقد تم اضافة التصنيف بنجاح");
      return res.data;
    } catch (error) {
      error = errHandler(error);
      notifyError(error);
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const updateCategory = createAsyncThunk(
  "/category/update",
  async ({ data, id, navigate }, thunkApi) => {
    try {
      const res = await categoryService.updateCategory(data, id);
      navigate("/categories");
      notifySuccess("لقد تم تحديث التصنيف بنجاح");
      console.log(res);
      return res.data;
    } catch (error) {
      error = errHandler(error);
      notifyError(error);
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const deleteCategory = createAsyncThunk(
  "/category/delete",
  async ({ id, navigate }, thunkApi) => {
    try {
      const res = await categoryService.deleteCategory(id);
      navigate("/categories");
      notifySuccess("لقد تم حذف المنتج بنجاح");
      return res.data;
    } catch (error) {
      error = errHandler(error);
      notifyError(error);
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const getCategories = createAsyncThunk(
  "/category/get-all",
  async (thunkApi) => {
    try {
      const res = await categoryService.getCategories();
      return res.data;
    } catch (error) {
      error = errHandler(error);
      return thunkApi.rejectWithValue(error);
    }
  }
);

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createCategory.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createCategory.fulfilled, (state, action) => {
        state.status = "success";
        state.categories = [action.payload, ...state.categories];
      })
      .addCase(createCategory.rejected, (state) => {
        state.status = "error";
      })
      .addCase(getCategories.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.status = "success";
        state.categories = action.payload;
      })
      .addCase(getCategories.rejected, (state) => {
        state.status = "error";
      })
      .addCase(deleteCategory.fulfilled, (state, action) => {
        state.categories = state.categories.filter(
          (item) => item.id !== action.meta.arg.id
        );
      })
      .addCase(updateCategory.fulfilled, (state, action) => {
        state.categories = state.categories.map((item) =>
          item.id === action.meta.arg.id ? action.payload : item
        );
      });
  },
});

export default categorySlice.reducer;
