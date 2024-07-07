import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
// import { useNavigate } from "react-router-dom";
import swal from "sweetalert2";

const backendURL = "http://localhost:5300";

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

      console.log("data", data.data.accessToken);
      localStorage.setItem("userToken", data.data.accessToken);

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

export const registerUser = createAsyncThunk(
  "api/users/register",
  async ({ fullname, username, email, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      await axios.post(
        `${backendURL}/api/users/register`,
        { fullname, username, email, password },
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
      swal.fire({
        icon: "error",
        title: "Registration Failed",
        text: errorMessage,
      });
      return rejectWithValue(errorMessage);
    }
  }
);
