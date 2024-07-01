import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout, selectIsLoggedIn } from "../redux/authSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faSearch,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const isLoggedIn = localStorage.getItem("userTokenHere")
  console.log("is logged in token here", isLoggedIn);

  const handleLogOut = () => {
    localStorage.removeItem("userTokenHere")
  navigate("/login")
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full flex justify-between items-center h-16 bg-gray-200 bg-opacity-50 text-black shadow-xl fixed backdrop-blur-3 z-10">
      <div className="flex items-center">
        <button className="ml-4 lg:hidden" onClick={toggleMenu}>
          <FontAwesomeIcon
            icon={isOpen ? faTimes : faBars}
            className="text-2xl"
          />
        </button>
        <ul className="hidden lg:flex items-center">
          <li className="ml-20 text-3xl">ING</li>
        </ul>
      </div>
      <ul className="hidden lg:flex ml-32">
        <a
          href="#"
          className="mr-20 text-lg hover:bg-yellow-500 hover:text-black hover:shadow-2xl transition-all px-3 py-1 rounded-full"
        >
          <li>Home</li>
        </a>
        <a
          href="#"
          className="mr-20 text-lg hover:bg-lime-500 hover:text-black hover:shadow-2xl transition-all px-3 py-1 rounded-full"
        >
          <li>
            {" "}
            <Link to={"/topic"}>CTF</Link>
          </li>
        </a>
        <a
          href="#"
          className="mr-20 text-lg hover:bg-sky-600 hover:text-black hover:shadow-2xl transition-all px-3 py-1 rounded-full"
        >
          <li>About Us</li>
        </a>
      </ul>
      <ul className="hidden lg:flex items-center">
        <li className="ml-4">
          <input
            type="text"
            placeholder="Search..."
            className="mr-4 px-3 py-1 rounded-full outline-none"
          />
        </li>
        <a href="#">
          <li className="mr-6">
            <FontAwesomeIcon
              icon={faSearch}
              className="text-xl hover:scale-125 transition-all"
            />
          </li>
        </a>
        <a href="#">
          <li className="mr-6">
            <FontAwesomeIcon
              icon={faBell}
              className="text-xl hover:scale-125 transition-all"
            />
          </li>
        </a>
        {isLoggedIn ? (
          <div>
            <button
              className="my-2 text-lg bg-rose-500 hover:scale-105 shadow-2xl transition-all px-3 py-1 rounded-full"

            onClick={handleLogOut}>Logout</button>
          </div> ) : (
        <a
          href="#"
          className="mr-8 text-lg bg-rose-500 hover:scale-105 shadow-2xl transition-all px-3 py-1 rounded-full"
        >
          <li>
            <Link to={"/register"}>Register</Link>
          </li>
        </a> )}
      </ul>
      <div
        className={`lg:hidden fixed top-16 left-0 w-full bg-gray-200 bg-opacity-50 backdrop-blur-lg transition-transform duration-300 ${
          isOpen ? "transform translate-x-0" : "transform -translate-x-full"
        }`}
      >
        <ul className="flex flex-col items-start ml-3 py-4">
          <a
            href="#"
            className="my-2 text-lg hover:bg-yellow-500 hover:text-black hover:shadow-2xl transition-all px-3 py-1 rounded-full"
            onClick={toggleMenu}
          >
            <li>Home</li>
          </a>
          <a
            href="#"
            className="my-2 text-lg hover:bg-lime-500 hover:text-black hover:shadow-2xl transition-all px-3 py-1 rounded-full"
            onClick={toggleMenu}
          >
            <li>CTF</li>
          </a>
          <a
            href="#"
            className="my-2 text-lg hover:bg-sky-600 hover:text-black hover:shadow-2xl transition-all px-3 py-1 rounded-full"
            onClick={toggleMenu}
          >
            <li>About Us</li>
          </a>
          <div className="flex flex-col items-start ml-2">
            <input
              type="text"
              placeholder="Search..."
              className="my-2 px-3 py-1 rounded-full outline-none"
            />
            <a href="#">
              <FontAwesomeIcon
                icon={faSearch}
                className="hidden text-xl my-2 hover:scale-125 transition-all"
              />
            </a>
            <a href="#">
              <FontAwesomeIcon
                icon={faBell}
                className="hidden text-xl my-2 hover:scale-125 transition-all"
              />
            </a>
            <div>



        </div>

            {/* {isLoggedIn ?(<div><button onClick={handleLogOut}>Logout </button></div>): (<></>)} */}


          </div>
        </ul>
      </div>
    </header>
  );
};

export default NavBar;
