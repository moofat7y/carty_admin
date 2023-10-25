import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";
import { getUserInfo } from "../user/userSlice";
import errHandler from "../../utils/errHandler";

const token = JSON.parse(localStorage.getItem("token"));
const initialState = {
  status: "idle",
  message: "",
  token: token || null,
};

export const signUp = createAsyncThunk(
  "seller/register",
  async ({ data, navigate }, thunkApi) => {
    try {
      const res = await authService.signUp(data);
      localStorage.setItem("token", JSON.stringify(res.data.token));
      await thunkApi.dispatch(getUserInfo({ navigate }));
      return res.data;
    } catch (error) {
      error = errHandler(error);
      notifyError(error);
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const signIn = createAsyncThunk(
  "seller/signin",
  async ({ data, navigate }, thunkApi) => {
    try {
      const res = await authService.signIn(data);
      localStorage.setItem("token", JSON.stringify(res.data.token));
      await thunkApi.dispatch(getUserInfo({ navigate }));
      return res.data;
    } catch (error) {
      error = errHandler(error);
      notifyError(error);
      return thunkApi.rejectWithValue(error);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(signUp.pending, (state) => {
        state.status = "loading";
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.status = "success";
        state.token = action.payload.token;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.status = "error";
        console.log(action.payload);
      })
      .addCase(signIn.pending, (state) => {
        state.status = "loading";
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.status = "success";
        state.token = action.payload.token;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.status = "error";
        state.message = action.payload;
      });
  },
});

export default authSlice.reducer;
