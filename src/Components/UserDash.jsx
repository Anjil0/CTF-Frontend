
import React, { useState } from 'react';

const UserDash = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="bg-gray-200 opacity-50 rounded-md w-full shadow-2xl p-5">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left">
          <h1 className="text-black mx-[20px] font-[verdana] font-bold text-[29px] hover:text-[32px]">
            User Dashboard
          </h1>
          <p className="text-black font-regular mx-[20px]">
            A perfect place to showcase your skills.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center mt-4 mx-[20px] w-full md:w-auto">
          <nav className="flex justify-center px-56 space-x-14">
            <a href="#" className="text-black text-[21px] justify-center font-bold hover:text-gray-700">Home</a>
            <a href="#" className="text-black text-[21px] font-bold hover:text-gray-700">About Us</a>
            <a href="#" className="text-black text-[21px] font-bold hover:text-gray-700">Blog</a>
          </nav>
          <div className="flex items-center space-x-5 mt-4 md:mt-0">
            <div className="relative">
              <input
                type="text"
                className="h-11 px-5 pr-10 rounded-full text-md focus:outline-none"
                placeholder="Search..."
              />
              <button type="submit" className="absolute right-0 top-0 mt-2 mr-2">
                <svg className="h-7 w-4 fill-current text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M12.9 14.32a8 8 0 1 0-1.41 1.41l5.25 5.25 1.41-1.41-5.25-5.25zm-6.9 0a6 6 0 1 1 0-12 6 6 0 0 1 0 12z"/>
                </svg>
              </button>
            </div>
            {isLoggedIn ? (
              <>
                <button className="relative text-gray-600 hover:text-gray-700">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.155V11a6 6 0 10-12 0v3.155c0 .548-.22 1.074-.595 1.44L4 17h5m6 0v2a2 2 0 11-4 0v-2m6 0H9" />
                  </svg>
                </button>
                <button className="bg-gray-800 text-white font-bold py-2 px-4 rounded-full hover:bg-gray-700" onClick={handleLogout}>
                  Logout
                </button>
              </>
            ) : (
              <>
                <button className="bg-blue-800 text-white font-black py-2 px-4 rounded-full hover:bg-blue-700">
                  Register
                </button>
                <button className="bg-green-800 text-white font-black py-2 px-4 rounded-full hover:bg-green-700" onClick={handleLogin}>
                  Login
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDash;



