// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Link, useNavigate } from "react-router-dom";
// import { LogOut } from "../redux/loginLogoutSlice";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faBell,
//   faSearch,
//   faBars,
//   faTimes,
// } from "@fortawesome/free-solid-svg-icons";

// const NavBar = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const isLoggedIn = localStorage.getItem("accessToken");
//   console.log("is logged in token here", isLoggedIn);

//   const handleLogOut = () => {
//     dispatch(LogOut())
//     navigate("/login");
//   };

//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <header className="w-full flex justify-between items-center h-16 bg-gray-200 bg-opacity-50 text-black shadow-xl fixed backdrop-blur-3 z-10">
//       <div className="flex items-center">
//         <button className="ml-4 lg:hidden" onClick={toggleMenu}>
//           <FontAwesomeIcon
//             icon={isOpen ? faTimes : faBars}
//             className="text-2xl"
//           />
//         </button>
//         <ul className="hidden lg:flex items-center">
//           <li className="ml-20 text-3xl">ING</li>
//         </ul>
//       </div>
//       <ul className="hidden lg:flex ml-32">
//         <a
//           href="#"
//           className="mr-20 text-lg hover:bg-yellow-500 hover:text-black hover:shadow-2xl transition-all px-3 py-1 rounded-full"
//         >
//           <li>Home</li>
//         </a>
//         <a
//           href="#"
//           className="mr-20 text-lg hover:bg-lime-500 hover:text-black hover:shadow-2xl transition-all px-3 py-1 rounded-full"
//         >
//           <li>
//             {" "}
//             <Link to={"/topic"}>CTF</Link>
//           </li>
//         </a>
//         <a
//           href="#"
//           className="mr-20 text-lg hover:bg-sky-600 hover:text-black hover:shadow-2xl transition-all px-3 py-1 rounded-full"
//         >
//           <li>About Us</li>
//         </a>
//       </ul>
//       <ul className="hidden lg:flex items-center">
//         <li className="ml-4">
//           <input
//             type="text"
//             placeholder="Search..."
//             className="mr-4 px-3 py-1 rounded-full outline-none"
//           />
//         </li>
//         <a href="#">
//           <li className="mr-6">
//             <FontAwesomeIcon
//               icon={faSearch}
//               className="text-xl hover:scale-125 transition-all"
//             />
//           </li>
//         </a>
//         <a href="#">
//           <li className="mr-6">
//             <FontAwesomeIcon
//               icon={faBell}
//               className="text-xl hover:scale-125 transition-all"
//             />
//           </li>
//         </a>
//         {isLoggedIn ? (
//           <div>
//             <button
//               className="my-2 text-lg bg-rose-500 hover:scale-105 shadow-2xl transition-all px-3 py-1 rounded-full"
//               onClick={handleLogOut}
//             >
//               Logout
//             </button>
//           </div>
//         ) : (
//           <a
//             href="#"
//             className="mr-8 text-lg bg-rose-500 hover:scale-105 shadow-2xl transition-all px-3 py-1 rounded-full"
//           >
//             <li>
//               <Link to={"/register"}>Register</Link>
//             </li>
//           </a>
//         )}
//       </ul>
//       <div
//         className={`lg:hidden fixed top-16 left-0 w-full bg-gray-200 bg-opacity-50 backdrop-blur-lg transition-transform duration-300 ${
//           isOpen ? "transform translate-x-0" : "transform -translate-x-full"
//         }`}
//       >
//         <ul className="flex flex-col items-start ml-3 py-4">
//           <a
//             href="#"
//             className="my-2 text-lg hover:bg-yellow-500 hover:text-black hover:shadow-2xl transition-all px-3 py-1 rounded-full"
//             onClick={toggleMenu}
//           >
//             <li>Home</li>
//           </a>
//           <a
//             href="#"
//             className="my-2 text-lg hover:bg-lime-500 hover:text-black hover:shadow-2xl transition-all px-3 py-1 rounded-full"
//             onClick={toggleMenu}
//           >
//             <li>CTF</li>
//           </a>
//           <a
//             href="#"
//             className="my-2 text-lg hover:bg-sky-600 hover:text-black hover:shadow-2xl transition-all px-3 py-1 rounded-full"
//             onClick={toggleMenu}
//           >
//             <li>About Us</li>
//           </a>
//           <div className="flex flex-col items-start ml-2">
//             <input
//               type="text"
//               placeholder="Search..."
//               className="my-2 px-3 py-1 rounded-full outline-none"
//             />
//             <a href="#">
//               <FontAwesomeIcon
//                 icon={faSearch}
//                 className="hidden text-xl my-2 hover:scale-125 transition-all"
//               />
//             </a>
//             <a href="#">
//               <FontAwesomeIcon
//                 icon={faBell}
//                 className="hidden text-xl my-2 hover:scale-125 transition-all"
//               />
//             </a>
//             <div></div>
//           </div>
//         </ul>
//       </div>
//     </header>
//   );
// };

// export default NavBar;

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

const NavBar = () => {
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
    <header className="w-full flex justify-between items-center h-16 bg-gray-200 bg-opacity-100 text-black shadow-xl fixed top-0 backdrop-blur-3 z-[100]">
      <div className="flex items-center w-1/3">
        <button className="ml-4 lg:hidden" onClick={toggleMenu}>
          <FontAwesomeIcon
            icon={isOpen ? faTimes : faBars}
            className="text-2xl"
          />
        </button>
        <ul className="hidden lg:flex items-center">
          <li className="ml-14 text-[30px]">Dashboard</li>
        </ul>
      </div>
      <ul className="hidden lg:flex  w-2/4">
        <li className=" text-lg hover:bg-yellow-500 hover:text-black hover:shadow-2xl transition-all px-3 py-1 rounded-xl mr-4">
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li className=" text-lg hover:bg-yellow-500 hover:text-black hover:shadow-2xl transition-all px-3 py-1 rounded-xl mr-4">
          <Link to="/">Home</Link>
        </li>
        <li className=" text-lg hover:bg-lime-500 hover:text-black hover:shadow-2xl transition-all px-3 py-1 rounded-xl mr-4">
          <Link to="/topic">CTF</Link>
        </li>
        <li className=" text-lg hover:bg-orange-500 hover:text-black hover:shadow-2xl transition-all px-3 py-1 rounded-xl mr-4">
          <Link to="/products">Products</Link>
        </li>
        <li className=" text-lg hover:bg-sky-600 hover:text-black hover:shadow-2xl transition-all px-3 py-1 rounded-xl mr-4">
          <Link to="/about">About&nbsp;Us</Link>
        </li>
      </ul>
      <ul className="hidden lg:flex items-center w-1/3">
        <li className="relative ml-4">
          <input
            type="text"
            placeholder="Search..."
            className=" px-3 py-2 rounded-xl outline-none mr-3"
          />
          <FontAwesomeIcon
            icon={faSearch}
            className="absolute right-9 top-1/2 transform -translate-y-1/2 text-gray-500"
          />
        </li>
        {isLoggedIn ? (
          <>
            <li className="mr-3">
              <FontAwesomeIcon
                icon={faBell}
                className="text-xl hover:scale-125 transition-all"
              />
            </li>
            <li className="mr-3">
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
            <li className="mr-3 text-lg bg-lime-600 hover:scale-105 shadow-2xl transition-all px-4 py-1 rounded-xl">
              <Link to="/register">Register</Link>
            </li>
            <li className="mr-14 text-lg bg-green-600 hover:scale-105 shadow-2xl transition-all px-4 py-1 rounded-xl">
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
            <Link to="/dashboard">Dashboard</Link>
          </li>
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
            className="my-2 text-lg hover:bg-orange-500 hover:text-black hover:shadow-2xl transition-all px-3 py-1 rounded-full"
            onClick={toggleMenu}
          >
            <Link to="/products">Products</Link>
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

export default NavBar;
