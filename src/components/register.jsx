
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { doRegister } from "../redux/loginLogoutSlice";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert2";
import { Country } from "country-state-city";
import Select from "react-select";
import video from "../assets/rgbg.mp4";

const UserRegister = () => {
  const countryData = Country.getAllCountries();
  const countryOptions = countryData.map((country) => ({
    value: country.isoCode,
    label: country.name,
  }));

  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleCountryChange = (selectedOption) => {
    setSelectedCountry(selectedOption);
    setFormData((prevData) => ({
      ...prevData,
      country: selectedOption.label,
    }));
  };

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await dispatch(doRegister(formData)).unwrap();
      swal.fire({
        icon: "success",
        title: "Registration Successful",
        text: "You have successfully registered!",
      });
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } catch (err) {
      console.log("Error occurred in register page", err);
      swal.fire({
        icon: "error",
        title: "Registration Failed",
        text: err.message,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white relative">
      <video 
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={video} type="video/mp4" />
      </video>
      <div className="relative z-10 bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-extrabold text-center text-blue-600">
          Register
        </h2>
        <form className="space-y-6 mt-8" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="full-name" className="block text-left text-gray-700">
              Full Name:
            </label>
            <input
              id="full-name"
              name="fullname"
              type="text"
              autoComplete="name"
              required
              className="mt-1 bg-white border border-gray-300 rounded-md w-full px-3 py-2 text-gray-900"
              value={formData.fullname}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="username" className="block text-left text-gray-700">
              Username:
            </label>
            <input
              id="username"
              name="username"
              type="text"
              autoComplete="username"
              required
              className="mt-1 bg-white border border-gray-300 rounded-md w-full px-3 py-2 text-gray-900"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="country" className="block text-left text-gray-700">
              Country:
            </label>
            <Select
              id="country"
              value={selectedCountry}
              onChange={handleCountryChange}
              options={countryOptions}
              className="mt-1"
            />
          </div>
          <div>
            <label htmlFor="email-address" className="block text-left text-gray-700">
              Email:
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="mt-1 bg-white border border-gray-300 rounded-md w-full px-3 py-2 text-gray-900"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-left text-gray-700">
              Password:
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="mt-1 bg-white border border-gray-300 rounded-md w-full px-3 py-2 text-gray-900"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent rounded-md text-white bg-blue-600 hover:bg-blue-800"
            disabled={loading}
          >
            {loading ? "Registering..." : "Register"}
          </button>
          <p className="text-gray-700 text-center mt-4">
            Already have an account?{" "}
            <span className="text-blue-600 cursor-pointer">
              <Link to="/login">Login</Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default UserRegister;






