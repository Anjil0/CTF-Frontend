// // import { Link } from "react-router-dom";

// import React from "react";
// import { useState, useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { doLogin } from "../redux/loginLogoutSlice";
// import logo from "../assets/hackerimage.jpg";
// import { Link } from "react-router-dom";
// import swal from "sweetalert2";

// const LoginUser = () => {
//   const isLoggedIn = localStorage.getItem("accessToken");
//   console.log("is logged in token here", isLoggedIn);

//   useEffect(() => {
//     if (isLoggedIn) {
//       navigate("/");
//     }
//   });
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       await dispatch(doLogin(formData)).unwrap();
//       swal.fire({
//         icon: "success",
//         title: "Login Successful",
//         text: "You have successfully logged in!",
//       });

//       setTimeout(() => {
//         navigate("/");
//       }, 3000);
//     } catch (err) {
//       swal.fire({
//         icon: "error",
//         title: "Login Failed",
//         text: "Incorrect email or password",
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex">
//       <div className="w-1/2">
//         <img
//           src={logo}
//           alt="hacker theme image"
//           className="w-full h-full object-cover rounded-lg ml-30"
//         />
//       </div>
//       <div className="w-1/2 flex flex-col justify-center p-4 bg-black">
//         <div>
//           <h2 className="text-4xl font-extrabold text-left text-red-600">
//             Login
//           </h2>
//         </div>
//         <form className="w-90 mb-4 mt-8 space-y-6" onSubmit={handleSubmit}>
//           <div>
//             <p className="text-left text-white">Email:</p>
//             <label htmlFor="email-address" className="sr-only">
//               Email address
//             </label>
//             <input
//               id="email-address"
//               name="email"
//               type="email"
//               autoComplete="email"
//               required
//               className="appearance-none relative block w-64 h-8 px-3 py-2 border-3 border-gray-300 text-gray-900"
//               value={formData.email}
//               onChange={handleChange}
//             />
//           </div>
//           <div>
//             <p className="text-left text-white">Password:</p>
//             <label htmlFor="password" className="sr-only">
//               Password
//             </label>
//             <input
//               id="password"
//               name="password"
//               type="password"
//               autoComplete="current-password"
//               required
//               className="appearance-none rounded-md relative block w-64 h-8 px-3 py-2 border-30"
//               value={formData.password}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="flex">
//             <button
//               type="submit"
//               className="py-2 px-4 border border-transparent font-medium rounded-md text-white bg-red-600 hover:bg-black"
//               disabled={loading}
//             >
//               {loading ? "Logging in..." : "Login"}
//             </button>
//           </div>
//           <p className="text-white font-bold mr-80">
//             Don't have an account?{" "}
//             <span className="text-red-600 cursor-pointer">
//               <Link to="/register"> Register</Link>
//             </span>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LoginUser;

import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { doLogin } from "../redux/loginLogoutSlice";
import { Link } from "react-router-dom";
import swal from "sweetalert2";
import video from "../assets/rgbg.mp4";

const LoginUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLoggedIn = localStorage.getItem("accessToken");
  console.log("is logged in token here", isLoggedIn);

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
          Login
        </h2>
        <form className="space-y-6 mt-8" onSubmit={handleSubmit}>
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
            {loading ? "Logging in..." : "Login"}
          </button>
          <p className="text-gray-700 text-center mt-4">
            Don&apos;t have an account?{" "}
            <span className="text-blue-600 cursor-pointer">
              <Link to="/register"> Register</Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginUser;


