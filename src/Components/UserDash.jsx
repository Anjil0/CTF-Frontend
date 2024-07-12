
// import React, { useState } from 'react';

// const UserDash = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const handleLogin = () => {
//     setIsLoggedIn(true);
//   };

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//   };

//   return (
//     <div className="bg-gray-200 opacity-50 rounded-md w-full shadow-2xl p-5">
//       <div className="flex flex-col md:flex-row justify-between items-center">
//         <div className="text-center md:text-left">
//           <h1 className="text-black mx-[20px] font-[verdana] font-bold text-[29px] hover:text-[32px]">
//             User Dashboard
//           </h1>
//           {/* <p className="text-black font-regular mx-[20px]">
//             A perfect place to showcase your skills.
//           </p> */}
//         </div>
//         <div className="flex flex-col md:flex-row justify-center md:justify-between items-center mt-4 mx-[20px] w-full md:w-auto">
//           <nav className="flex justify-center px-56 space-x-14">
//             <a href="#" className="text-black text-[21px] justify-center font-bold hover:text-gray-700">Home</a>
//             <a href="#" className="text-black text-[21px] font-bold hover:text-gray-700">About Us</a>
//             <a href="#" className="text-black text-[21px] font-bold hover:text-gray-700">Blog</a>
//           </nav>
//           <div className="flex items-center space-x-5 mt-4 md:mt-0">
//             <div className="relative">
//               <input
//                 type="text"
//                 className="h-11 px-5 pr-10 rounded-full text-md focus:outline-none"
//                 placeholder="Search..."
//               />
//               <button type="submit" className="absolute right-0 top-0 mt-2 mr-2">
//                 <svg className="h-7 w-4 fill-current text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
//                   <path d="M12.9 14.32a8 8 0 1 0-1.41 1.41l5.25 5.25 1.41-1.41-5.25-5.25zm-6.9 0a6 6 0 1 1 0-12 6 6 0 0 1 0 12z"/>
//                 </svg>
//               </button>
//             </div>
//             {isLoggedIn ? (
//               <>
//                 <button className="relative text-gray-600 hover:text-gray-700">
//                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.155V11a6 6 0 10-12 0v3.155c0 .548-.22 1.074-.595 1.44L4 17h5m6 0v2a2 2 0 11-4 0v-2m6 0H9" />
//                   </svg>
//                 </button>
//                 <button className="bg-gray-800 text-white font-bold py-2 px-4 rounded-full hover:bg-gray-700" onClick={handleLogout}>
//                   Logout
//                 </button>
//               </>
//             ) : (
//               <>
//                 <button className="bg-blue-800 text-white font-black py-2 px-4 rounded-full hover:bg-blue-700">
//                   Register
//                 </button>
//                 <button className="bg-green-800 text-white font-black py-2 px-4 rounded-full hover:bg-green-700" onClick={handleLogin}>
//                   Login
//                 </button>
//               </>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserDash;

// import React, { useState } from 'react';

// const UserDash = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);

//   const handleLogin = () => {
//     setIsLoggedIn(true);
//   };

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//   };

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <div className="bg-gray-200 opacity-50 rounded-md w-full shadow-2xl p-5">
//       <div className="flex flex-col md:flex-row justify-between items-center">
//         <div className="text-center md:text-left">
//           <h1 className="text-black mx-[20px] font-[verdana] font-bold text-[29px] hover:text-[32px]">
//             User Dashboard
//           </h1>
//         </div>
//         <div className="flex flex-col md:flex-row justify-center md:justify-between items-center mt-4 mx-[20px] w-full md:w-auto">
//           <nav className="hidden md:flex justify-center space-x-14">
//             <a href="#" className="text-black text-[21px] justify-center font-bold hover:text-gray-700">Home</a>
//             <a href="#" className="text-black text-[21px] font-bold hover:text-gray-700">About Us</a>
//             <a href="#" className="text-black text-[21px] font-bold hover:text-gray-700">Blog</a>
//           </nav>
//           <div className="relative md:hidden">
//             <button onClick={toggleMenu} className="text-black text-[21px] font-bold">
//               ☰
//             </button>
//             {menuOpen && (
//               <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50">
//                 <a href="#" className="block px-4 py-2 text-black hover:bg-gray-200">Home</a>
//                 <a href="#" className="block px-4 py-2 text-black hover:bg-gray-200">About Us</a>
//                 <a href="#" className="block px-4 py-2 text-black hover:bg-gray-200">Blog</a>
//               </div>
//             )}
//           </div>
//           <div className="flex items-center space-x-5 mt-4 md:mt-0">
//             <div className="relative">
//               <input
//                 type="text"
//                 className="h-11 px-5 pr-10 rounded-full text-md focus:outline-none"
//                 placeholder="Search..."
//               />
//               <button type="submit" className="absolute right-0 top-0 mt-2 mr-2">
//                 <svg className="h-7 w-4 fill-current text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
//                   <path d="M12.9 14.32a8 8 0 1 0-1.41 1.41l5.25 5.25 1.41-1.41-5.25-5.25zm-6.9 0a6 6 0 1 1 0-12 6 6 0 0 1 0 12z"/>
//                 </svg>
//               </button>
//             </div>
//             {isLoggedIn ? (
//               <>
//                 <button className="relative text-gray-600 hover:text-gray-700">
//                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.155V11a6 6 0 10-12 0v3.155c0 .548-.22 1.074-.595 1.44L4 17h5m6 0v2a2 2 0 11-4 0v-2m6 0H9" />
//                   </svg>
//                 </button>
//                 <button className="bg-gray-800 text-white font-bold py-2 px-4 rounded-full hover:bg-gray-700" onClick={handleLogout}>
//                   Logout
//                 </button>
//               </>
//             ) : (
//               <>
//                 <button className="bg-blue-800 text-white font-black py-2 px-4 rounded-full hover:bg-blue-700" onClick={handleLogin}>
//                   Register
//                 </button>
//                 <button className="bg-green-800 text-white font-black py-2 px-4 rounded-full hover:bg-green-700" onClick={handleLogin}>
//                   Login
//                 </button>
//               </>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserDash;


import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faSearch,
  faBars,
  faTimes,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";

const UserDash = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = !!localStorage.getItem("accessToken");

  const handleLogOut = () => {
    localStorage.removeItem("accessToken");
    navigate("/login");
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full flex justify-between items-center h-16 bg-gray-200 bg-opacity-100 text-black shadow-xl fixed backdrop-blur-3 z-10">
      <div className="flex items-center">
        <button className="ml-4 lg:hidden" onClick={toggleMenu}>
          <FontAwesomeIcon
            icon={isOpen ? faTimes : faBars}
            className="text-2xl"
          />
        </button>
        <ul className="hidden lg:flex items-center">
          <li className="ml-14 text-[30px]">User&nbsp;Dashboard</li>
        </ul>
      </div>
      <ul className="hidden lg:flex ml-32">
        <li className="mr-20 text-lg hover:bg-yellow-500 hover:text-black hover:shadow-2xl transition-all px-3 py-1 rounded-full">
          <Link to="/">Home</Link>
        </li>
        <li className="mr-20 text-lg hover:bg-lime-500 hover:text-black hover:shadow-2xl transition-all px-3 py-1 rounded-full">
          <Link to="/topic">CTF</Link>
        </li>
        <li className="mr-20 text-lg hover:bg-sky-600 hover:text-black hover:shadow-2xl transition-all px-3 py-1 rounded-full">
          <Link to="/about">About&nbsp;Us</Link>
        </li>
      </ul>
      <ul className="hidden lg:flex items-center">
        <li className="relative ml-4">
          <input
            type="text"
            placeholder="Search..."
            className="pr-10 pl-3 py-2 rounded-xl outline-none mr-6"
          />
          <FontAwesomeIcon
            icon={faSearch}
            className="absolute right-9 top-1/2 transform -translate-y-1/2 text-gray-500"
          />
        </li>
        {isLoggedIn ? (
          <>
            <li className="mr-6">
              <FontAwesomeIcon
                icon={faBell}
                className="text-xl hover:scale-125 transition-all"
              />
            </li>
            <li className="mr-6">
              <FontAwesomeIcon
                icon={faUserCircle}
                className="text-3xl hover:scale-125 transition-all"
              />
            </li>
            <li>
              <button
                className="my-2 text-lg bg-rose-500 hover:scale-105 shadow-2xl transition-all px-3 py-1 rounded-xl"
                onClick={handleLogOut}
              >
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li className="mr-6 text-lg bg-lime-600 hover:scale-105 shadow-2xl transition-all px-4 py-1 rounded-xl">
              <Link to="/register">Register</Link>
            </li>
            <li className="mr-16 text-lg bg-green-600 hover:scale-105 shadow-2xl transition-all px-4 py-1 rounded-xl">
              <Link to="/login">Login</Link>
            </li>
          </>
        )}
      </ul>
      <div
        className={`lg:hidden fixed top-16 left-0 w-full bg-gray-200 bg-opacity-50 backdrop-blur-lg transition-transform duration-300 ${
          isOpen ? "transform translate-x-0" : "transform -translate-x-full"
        }`}
      >
        <ul className="flex flex-col items-start ml-3 py-4">
          <li
            className="my-2 text-lg hover:bg-yellow-500 hover:text-black hover:shadow-2xl transition-all px-3 py-1 rounded-full"
            onClick={toggleMenu}
          >
            <Link to="/">Home</Link>
          </li>
          <li
            className="my-2 text-lg hover:bg-lime-500 hover:text-black hover:shadow-2xl transition-all px-3 py-1 rounded-full"
            onClick={toggleMenu}
          >
            <Link to="/topic">CTF</Link>
          </li>
          <li
            className="my-2 text-lg hover:bg-sky-600 hover:text-black hover:shadow-2xl transition-all px-3 py-1 rounded-full"
            onClick={toggleMenu}
          >
            <Link to="/about">About Us</Link>
          </li>
          <li className="flex flex-col items-start ml-2">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="pr-10 pl-3 py-1 rounded-full outline-none"
              />
              <FontAwesomeIcon
                icon={faSearch}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              />
            </div>
            {isLoggedIn && (
              <FontAwesomeIcon
                icon={faBell}
                className="text-xl my-2 hover:scale-125 transition-all"
              />
            )}
          </li>
          <li>
            {isLoggedIn ? (
              <button
                className="my-2 text-lg bg-rose-500 hover:scale-105 shadow-2xl transition-all px-3 py-1 rounded-full"
                onClick={handleLogOut}
              >
                Logout
              </button>
            ) : (
              <>
                <Link
                  to="/register"
                  className="my-2 text-lg bg-lime-500 hover:scale-105 shadow-2xl transition-all px-3 py-1 rounded-full"
                  onClick={toggleMenu}
                >
                  Register
                </Link>
                <Link
                  to="/login"
                  className="my-2 text-lg bg-green-500 hover:scale-105 shadow-2xl transition-all px-3 py-1 rounded-full"
                  onClick={toggleMenu}
                >
                  Login
                </Link>
              </>
            )}
          </li>
        </ul>
      </div>
    </header>
  );
};

export default UserDash;
