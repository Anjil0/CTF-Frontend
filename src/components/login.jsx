import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { doLogin } from "../redux/loginLogoutSlice";
import logo from "../assets/hackerimage.jpg";
import usePasswordToggle from "./usePasswordToggle";
import swal from "sweetalert2";
import NavBar from "./NavBar.jsx";

const LoginUser = () => {
  const [PasswordInputType, ToggleIcon] = usePasswordToggle();

  const isLoggedIn = localStorage.getItem("accessToken");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await dispatch(doLogin(formData)).unwrap();
      swal.fire({
        icon: "success",
        title: "Login Successful",
        text: "You have successfully logged in!",
      });

      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (err) {
      swal.fire({
        icon: "error",
        title: "Login Failed",
        text: "Incorrect email or password",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="basis-3/12 flex h-[90vh]">
      <NavBar></NavBar>
      <div>
        <img
          src={logo}
          alt="hacker theme image"
          className="w-full h-full object-cover  ml-30"
        />
      </div>
      <div className="basis-3/4 flex flex-col justify-center items-center p-4 bg-black">
        <div>
          <h2 className="text-4xl font-extrabold text-left text-red-600">
            Login
          </h2>
        </div>
        <form className="w-full mb-4 mt-8 space-y-6 " onSubmit={handleSubmit}>
          <div>
            <p className="text-left text-white">Email:</p>
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="appearance-none rounded-md relative block w-64 h-8 px-3 py-2 border-3 border-gray-300 text-gray-900"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <p className="text-left text-white">Password:</p>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                name="password"
                type={PasswordInputType}
                autoComplete="current-password"
                required
                className="appearance-none rounded-md relative block w-64 h-8 px-3 py-2 border-3 border-gray-300 text-gray-900"
                value={formData.password}
                onChange={handleChange}
              />
              <span className="absolute inset-y-0 left-[14.5rem] pl-30 flex items-center cursor-pointer">
                {ToggleIcon}
              </span>
            </div>
          </div>
          <div className="flex">
            <button
              type="submit"
              className="py-2 px-4 border border-transparent font-medium rounded-md text-white bg-red-600 hover:bg-red-400"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </div>
          <p className="text-white font-bold">
            Don't have an account?{" "}
            <span className="text-red-600 cursor-pointer">
              <Link to="/register"> Register</Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginUser;
