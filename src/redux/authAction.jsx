import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
// import { useNavigate } from "react-router-dom";
import swal from "sweetalert2";

const backendURL = "http://localhost:5300";

export const registerUser = createAsyncThunk(
  "api/users/register",
  async (
    { fullname, username, country, email, password },
    { rejectWithValue }
  ) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      console.log("hit register api");
      await axios.post(
        `${backendURL}/api/users/register`,
        { fullname, username, country, email, password },
        config
      );
      swal.fire({
        icon: "success",
        title: "Registration Successful",
        text: "You have successfully registered!",
      });
    } catch (error) {
      const errorMessage =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
          console.log("error message from register", errorMessage);
      swal.fire({
        icon: "error",
        title: "Registration Failedd",
        text: errorMessage,
      });
      return rejectWithValue(errorMessage);
    }
  }
);

export const userLogin = createAsyncThunk(
  "api/users/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      console.log("email", email);
      console.log("password", password);
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      //   const navigate = useNavigate();
      const data = await axios.post(
        `${backendURL}/api/users/login`,
        { email, password },
        config
      );
      console.log("DATA FROM API SEND", data);
      console.log("data", data?.data?.Result?.accessToken);
      localStorage.setItem("userTokenHere",data?.data?.Result?.accessToken);

      return data.data;
    } catch (error) {
      const errorMessage =
        error.response && error.response.data.error_message
          ? error.response.data.error_message
          : error.message;

      swal.fire({
        icon: "error",
        title: "Login Failed",
        text: errorMessage,
      });
      return rejectWithValue(error.message);
    }
  }
);
