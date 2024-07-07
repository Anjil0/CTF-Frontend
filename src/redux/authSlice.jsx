import { createSlice } from "@reduxjs/toolkit";
import { userLogin, registerUser } from "./authAction";
import swal from "sweetalert2";

const userToken = localStorage.getItem("userToken")
  ? localStorage.getItem("userToken")
  : null;

const initialState = {
  isAuthenticated: false,
  loading: false,
  userInfo: null,
  userToken: userToken ?? null,
  error: null,
  success: false,
};

const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem("userTokenHere");
      state.isAuthenticated = false;
      state.loading = false;
      state.userInfo = null;
      state.userToken = null;
      state.error = null;
    },
    setCredentials: (state, { payload }) => {
      state.userInfo = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(userLogin.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.userInfo = payload;
        state.userToken = payload.userToken;
        state.isAuthenticated = true;
        localStorage.setItem("userToken", payload.userToken);
        swal.fire({
          icon: "success",
          title: "Login Successful",
          text: "You have successfully logged in!",
        });
      })
      .addCase(userLogin.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      // register user
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.userInfo = payload;
        state.userToken = payload?.userToken;
        state.isAuthenticated = false;
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export const { logout, setCredentials } = authSlice.actions;
export const selectIsLoggedIn = (state) => state.user?.isAuthenticated ?? false;
export default authSlice.reducer;
