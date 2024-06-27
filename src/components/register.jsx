import { useState } from "react";
import axios from "axios";
import logo from "../assets/hacker.jpg";
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";
import Select from "react-select";
import { getData } from "country-list";

const UserRegister = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    username: "",
    email: "",
    password: "",
    country: "", // Add country to formData
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSelectChange = (selectedOption) => {
    setFormData((prevData) => ({
      ...prevData,
      country: selectedOption.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);

    try {
      if (
        !formData.fullname ||
        !formData.username ||
        !formData.email ||
        !formData.password ||
        !formData.country // Check if country is filled
      ) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Please fill in all fields.",
        });
        setError("Please fill in all fields.");
        return;
      }

      const apiUrl = "http://localhost:5300";
      const response = await axios.post(
        `${apiUrl}/api/users/register`,
        formData
      );

      if (response.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Registration successful",
        });
        console.log("Registration successful", response.data);
        setSuccess("Registration successful! Redirecting to login...");
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 400) {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: error.response.data.message,
          });
          setError(error.response.data.message);
        } else if (error.response.status === 409) {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Email is already registered",
          });
          setError("Email is already registered");
        } else {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "An error occurred",
          });
          setError("An error occurred");
        }
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "An error occurred",
        });
        setError("An error occurred");
      }
      console.error("An error occurred", error);
    }
  };

  const countries = getData().map((country) => ({
    value: country.code,
    label: country.name,
  }));

  return (
    <>
      <div className="flex w-full h-screen">
        <div className="w-1/2">
          <img
            src={logo}
            alt="hacker theme image"
            className="w-full h-full object-cover ml-30"
          />
        </div>
        <div className="w-1/2 flex flex-col justify-center p-4 bg-black">
          <div>
            <h2 className="text-6xl font-extrabold text-left text-red-600">
              Register
            </h2>
          </div>
          <form className="w-2/3 mb- mt-8 space-y-6" onSubmit={handleSubmit}>
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
                className="bg-white appearance-none rounded-md relative block w-full h-9 px-3 py-2 border-3 border-gray-300 text-gray-900 "
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
              <p className="text-left text-white">Country:</p>
              <label htmlFor="country" className="sr-only">
                Country
              </label>
              <Select
                id="country"
                name="country"
                options={countries}
                className=" appearance rounded-md relative block w-full h-9  border-3 border-gray-300 text-gray-900"
                value={countries.find(
                  (option) => option.value === formData.country
                )}
                onChange={handleSelectChange}
              />
            </div>
            <div>
              <p className="text-left text-white ">Email:</p>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="bg-white appearance-none rounded-md relative block w-full h-9 px-3 py-2 border-3 border-gray-300 text-gray-900 "
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
              >
                Register
              </button>
            </div>
            <p className="text-white font-bold text-left">
              Already have an account?{" "}
              <span className="text-red-600 cursor-pointer">
                {" "}
                <Link to="/login">Login</Link>
              </span>
            </p>
            {error && <p className="text-red-600">{error}</p>}
            {success && <p className="text-green-600">{success}</p>}
          </form>
        </div>
      </div>
    </>
  );
};

export default UserRegister;
