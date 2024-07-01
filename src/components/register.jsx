import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../redux/authAction";
import logo from "../assets/hacker.jpg";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert2";
// import Select from "react-select";
// import { getData } from "country-list";

const UserRegister = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    username: "",
    country: "",
    email: "",
    password: "",

  });
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // const handleSelectChange = (selectedOption) => {
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     country: selectedOption.value,
  //   }));
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await dispatch(registerUser(formData)).unwrap();
      swal.fire({
        icon: "success",
        title: "Registration Successful",
        text: "You have successfully registered!",
      });
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } catch (err) {
      console.log("error occured in register page", err);
      swal.fire({
        icon: "error",
        title: "Registration Failedd",
        text: err,
      });
    } finally {
      setLoading(false);
    }
  };

  // const countries = getData().map((country) => ({
  //   value: country.code,
  //   label: country.name,
  // }));

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
          <h2 className="text-5xl font-extrabold text-left text-red-600">
            Register
          </h2>
        </div>
        <form className="w-2/3 mb-4 mt-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <p className="text-left text-white">Full Name:</p>
            <label htmlFor="full-name" className="sr-only">
              Full Name
            </label>
            <input
              id="full-name"
              name="fullname"
              type="text"
              autoComplete="name"
              required
              className="bg-white appearance-none rounded-md relative block w-full h-9 px-3 py-2 border-3 border-gray-300 text-gray-900"
              value={formData.fullname}
              onChange={handleChange}
            />
          </div>
          <div>
            <p className="text-left text-white">Username:</p>
            <label htmlFor="username" className="sr-only">
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              autoComplete="username"
              required
              className="bg-white appearance-none rounded-md relative block w-full h-9 px-3 py-2 border-3 border-gray-300 text-gray-900"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div>
            <p className="text-left text-white">country:</p>
            <label htmlFor="country" className="sr-only">
              Country
            </label>
            <input
              id="country"
              name="country"
              type="text"
              autoComplete="country"
              required
              className="bg-white appearance-none rounded-md relative block w-full h-9 px-3 py-2 border-3 border-gray-300 text-gray-900"
              value={formData.country}
              onChange={handleChange}
            />
          </div>
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
              className="bg-white appearance-none rounded-md relative block w-full h-9 px-3 py-2 border-3 border-gray-300 text-gray-900"
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
              className="bg-white appearance-none rounded-md relative block w-full h-9 px-3 py-2 border-30 text-gray-900"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div className="flex">
            <button
              type="submit"
              className="w-full py-2 px-4 mt-1 border border-transparent font-medium rounded-md text-white bg-red-600 hover:bg-red-800"
              disabled={loading}
            >
              {loading ? "Registering..." : "Register"}
            </button>
          </div>
          <p className="text-white font-bold text-left">
            Already have an account?{" "}
            <span className="text-red-600 cursor-pointer">
              <Link to="/login">Login</Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default UserRegister;
