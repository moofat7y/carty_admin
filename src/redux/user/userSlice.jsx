import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userService from "./userService";
import errHandler from "../../utils/errHandler";
import { notifyError, notifySuccess } from "../../utils/notifies";

const initialState = {
  status: "idle",
  user: null,
};

export const getUserInfo = createAsyncThunk(
  "user/get-info",
  async ({ navigate }, thunkApi) => {
    try {
      const res = await userService.getUserInfo();
      if (!res.data.email_verified_at) {
        navigate("/store/verify-email");
      } else if (!res.data.store) {
        navigate("/store/create-store");
      }
      return res;
    } catch (error) {
      window.localStorage.clear();
      navigate("/auth/signin");
      errHandler(error);
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const verifyEmail = createAsyncThunk(
  "user/verify-email",
  async ({ code, navigate }, thunkApi) => {
    try {
      const res = await userService.verifyEmail(code);
      navigate("/store/create-store");
      return res;
    } catch (error) {
      error = errHandler(error);
      notifyError(error);
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const createStore = createAsyncThunk(
  "user/create-store",
  async ({ data, navigate }, thunkApi) => {
    try {
      const res = await userService.createStore(data);
      navigate("/");
      notifySuccess("لقد تم انشاء متجرك بنجاح");
      return res.data;
    } catch (error) {
      error = errHandler(error);
      notifyError(error);
      return thunkApi.rejectWithValue(error);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserInfo.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getUserInfo.fulfilled, (state, action) => {
        state.status = "success";
        state.user = action.payload.data;
      })
      .addCase(getUserInfo.rejected, (state, action) => {
        state.status = "error";
      })
      .addCase(verifyEmail.pending, (state) => {
        state.status = "loading";
      })
      .addCase(verifyEmail.fulfilled, (state, action) => {
        state.status = "success";
        state.user = { ...state.user, email_verified_at: true };
      })
      .addCase(verifyEmail.rejected, (state, action) => {
        state.status = "error";
      })
      .addCase(createStore.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createStore.fulfilled, (state, action) => {
        state.status = "success";
        state.user = { ...state.user, store: true };
      })
      .addCase(createStore.rejected, (state, action) => {
        state.status = "error";
      });
  },
});

export default userSlice.reducer;
