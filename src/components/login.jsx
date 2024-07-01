import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../redux/authAction";
import logo from "../assets/hackerimage.jpg";
import { Link } from "react-router-dom";
import swal from "sweetalert2";

const LoginUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
      await dispatch(userLogin(formData)).unwrap();
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
    <div className="flex">
      <div className="w-1/2">
        <img
          src={logo}
          alt="hacker theme image"
          className="w-full h-full object-cover rounded-lg ml-30"
        />
      </div>
      <div className="w-1/2 flex flex-col justify-center p-4 bg-black">
        <div>
          <h2 className="text-4xl font-extrabold text-left text-red-600">
            Login
          </h2>
        </div>
        <form className="w-90 mb-4 mt-8 space-y-6" onSubmit={handleSubmit}>
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
              className="appearance-none relative block w-64 h-8 px-3 py-2 border-3 border-gray-300 text-gray-900"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <p className="text-left text-white">Password:</p>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="appearance-none rounded-md relative block w-64 h-8 px-3 py-2 border-30"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="flex">
            <button
              type="submit"
              className="py-2 px-4 border border-transparent font-medium rounded-md text-white bg-red-600 hover:bg-black"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </div>
          <p className="text-white font-bold mr-80">
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
