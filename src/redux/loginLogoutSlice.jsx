import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiURL = "http://localhost:5300";

export const doRegister = createAsyncThunk(
  "auth/doRegister",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${apiURL}/api/users/register`,
        userData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("response", response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);

export const doLogin = createAsyncThunk(
  "auth/doLogin",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${apiURL}/api/users/login`, userData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("response", response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);

const loginLogOutSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    loading: false,
    userInfo: null,
    userToken: null,
    error: null,
    success: false,
  },
  reducers: {
    LogOut: (state) => {
      state.isAuthenticated = false;
      state.loading = false;
      state.userInfo = null;
      state.userToken = null;
      state.error = null;
      state.success = true;
      localStorage.removeItem("accessToken");
      localStorage.removeItem("persist:root");
      localStorage.removeItem("role");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(doRegister.pending, (state) => {
        state.isAuthenticated = false;
        state.loading = true;
        state.userInfo = null;
        state.userToken = null;
        state.error = null;
        state.success = null;
      })
      .addCase(doRegister.fulfilled, (state) => {
        sta
        state.te.loading = false;error = null;
        state.success = true;
      })
      .addCase(doRegister.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
      })
      .addCase(doLogin.pending, (state) => {
        state.isAuthenticated = false;
        state.loading = true;
        state.userInfo = null;
        state.userToken = null;
        state.error = null;
        state.success = null;
      })
      .addCase(doLogin.fulfilled, (state, action) => {
        console.log("action payload", action.payload);
        state.loading = false;
        state.error = null;
        state.success = true;
        state.userInfo = action.payload?.Result?.user_data;
        state.userToken = action.payload?.Result?.accessToken;
        state.isAuthenticated = true;
        localStorage.setItem("accessToken", action.payload?.Result?.accessToken);
        localStorage.setItem("role", action.payload?.Result?.user_data?.role);
      })
      .addCase(doLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
      });
  },
});

export const { LogOut } = loginLogOutSlice.actions;
export const isLoggedIn = (state) => state.user?.isAuthenticated ?? false;
export default loginLogOutSlice.reducer;
