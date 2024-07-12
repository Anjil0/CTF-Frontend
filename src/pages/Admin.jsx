import React, { useState } from "react";
import add from "../assets/more.png";
import setting from "../assets/setting.png";
import logout from "../assets/exit.png";
import left from "../assets/left-arrow.png";
import right from "../assets/right-arrow.png";
import profilePic from "../assets/hacker.jpg";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";

const Admin = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isAddHovered, setIsAddHovered] = useState(false);
  const navigate = useNavigate();

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleAddHover = () => {
    setIsAddHovered(true);
  };

  const handleAddLeave = () => {
    setIsAddHovered(false);
  };

  const handleSubMenuHover = () => {
    setIsAddHovered(true);
  };

  return (
    <>
      <NavBar />
      <div className="relative w-full h-full">
        <button
          id={isSidebarOpen ? "left" : "right"}
          className={`absolute top-9 w-7 transition-transform ease-in-out duration-300 transform z-50  ${
            isSidebarOpen ? "translate-x-[260px]" : "translate-x-0"
          }`}
          onClick={handleToggleSidebar}
        >
          <img
            src={isSidebarOpen ? left : right}
            alt={isSidebarOpen ? "left" : "right"}
          />
        </button>
        <section
          id="sidebar"
          className={`bg-gray-300 w-[500px] h-[650px] absolute transition-transform ease-in-out duration-300 transform ${
            isSidebarOpen ? "translate-x-[0px]" : "translate-x-[-104%]"
          }`}
        >
          <div
            id="profile"
            className="w-12 h-12 rounded-full bg-stone-500 relative left-4 top-6 shadow-lg overflow-hidden"
          >
            <img
              src={profilePic}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-3xl absolute top-8 left-[70px] text-black bg-gradient-to-r from-rose-500 via-orange-500 to-orange-500 bg-clip-text text-transparent">
            Utshab Thapa
          </h1>
          <hr className="bg-white h-1 mt-12" />
          <div
            className="relative"
            onMouseEnter={handleAddHover}
            onMouseLeave={handleAddLeave}
          >
            <a href="#">
              <div className="hover:bg-black hover:bg-opacity-20 transition-all bg-opacity-50 w-full h-14 flex items-center absolute top-0">
                <img src={add} alt="" className="w-6 ml-8" />
                <h2 className="ml-3 text-lg text-black">Add</h2>
              </div>
            </a>
            {isAddHovered && (
              <div
                className="absolute top-14 w-2/3 right-0 bg-black bg-opacity-20"
                onMouseEnter={handleSubMenuHover}
                onMouseLeave={handleAddLeave}
              >
                <a href="#">
                  <div className="hover:bg-black hover:bg-opacity-20 transition-all bg-opacity-50 w-full h-12 flex items-center">
                    <h2 className="ml-3 text-lg text-black">Add Topic</h2>
                  </div>
                </a>
                <a href="#">
                  <div className="hover:bg-black hover:bg-opacity-20 transition-all bg-opacity-50 w-full h-12 flex items-center">
                    <h2 className="ml-3 text-lg text-black">Add Questions</h2>
                  </div>
                </a>
              </div>
            )}
          </div>
          <div
            className="hover:bg-black hover:bg-opacity-20 transition-all bg-opacity-50 w-full h-14 flex items-center absolute bottom-14 cursor-pointer"
            onClick={() => navigate("/adminprofile")}
          >
            <img src={setting} alt="Settings" className="w-6 ml-8" />
            <h2 className="text-lg ml-3 text-black">Settings</h2>
          </div>
          <a href="#">
            <div className="hover:bg-black hover:bg-opacity-20 transition-all bg-opacity-50 w-full h-14 flex items-center absolute bottom-0">
              <img src={logout} alt="Log Out" className="ml-8 w-6" />
              <h2 className="text-lg ml-3 text-black">Log Out</h2>
            </div>
          </a>
        </section>
        <section
          id="main"
          className={`bg-gray-200 h-[650px] absolute left-[250px] duration-[300ms]   ${
            isSidebarOpen
              ? "w-[79%] translate-x-[50px]"
              : "w-[100%] translate-x-[-250px]"
          }`}
        >
          <div className="flex justify-evenly mt-6">
            <div
              className={`  h-[180px] bg-sky-500 rounded-2xl duration-[300ms] flex flex-col   ${
                isSidebarOpen ? "w-[250px] " : "w-[320px]"
              }`}
            >
              <h1 className="w-full h-full text-4xl relative top-7 left-5 uppercase font-bold text-white mt-5">
                200,000
              </h1>
              <h1 className=" w-full h-full text-xl relative -top-4 left-5  uppercase font-bold text-white mt-8">
                Users
              </h1>
            </div>
            <div
              className={`  h-[180px] bg-lime-500 rounded-2xl duration-[300ms] flex flex-col  ${
                isSidebarOpen ? "w-[250px] " : "w-[320px]"
              }`}
            >
              <h1 className="w-full h-full text-4xl relative top-7 left-5 uppercase font-bold text-white mt-5">
                186,000
              </h1>
              <h1 className=" w-full h-full text-xl relative -top-4 left-5  uppercase font-bold text-white mt-8">
                Flags Captured
              </h1>
            </div>
            <div
              className={`  h-[180px] bg-orange-500 rounded-2xl duration-[300ms] flex flex-col  ${
                isSidebarOpen ? "w-[250px] " : "w-[320px]"
              }`}
            >
              <h1 className="w-full h-full text-4xl relative top-7 left-5 uppercase font-bold text-white mt-5">
                186,000
              </h1>
              <h1 className=" w-full h-full text-xl relative -top-4 left-5  uppercase font-bold text-white mt-8">
                Flags Captured
              </h1>
            </div>
            <div
              className={`  h-[180px] bg-rose-600 rounded-2xl  duration-[300ms] flex flex-col  ${
                isSidebarOpen ? "w-[250px] " : "w-[320px]"
              }`}
            >
              <h1 className="w-full h-full text-4xl relative top-7 left-5 uppercase font-bold text-white mt-5">
                186
              </h1>
              <h1 className=" w-full h-full text-xl relative -top-4 left-5  uppercase font-bold text-white mt-8">
                Games
              </h1>
            </div>
          </div>
          <div className="flex justify-evenly mt-6">
            <div
              className={`  h-[390px] bg-gray-100 rounded-2xl duration-[300ms] ${
                isSidebarOpen ? "w-[710px] " : "w-[910px]"
              }`}
            >
              <h1 className=" text-4xl text-gray-600 font-black relative left-5 top-5">
                Popular Topics
              </h1>
              <div className="relative top-10 left-5 text-xl">
                <p className="mb-3">Some topic</p>
                <p className="mb-3">Some topic</p>
                <p className="mb-3">Some topic</p>
                <p className="mb-3">Some topic</p>
                <p className="mb-3">Some topic</p>
                <p className="mb-3">Some topic</p>
                <p className="mb-3">Some topic</p>
                <p className="mb-3">Some topic</p>
              </div>
            </div>

            <div
              className={`  h-[390px] bg-gray-100 rounded-2xl duration-[300ms] ${
                isSidebarOpen ? "w-[340px] " : "w-[440px]"
              }`}
            >
              <h1 className=" text-4xl text-gray-600 font-black relative left-5 top-5">
                Leaderboard
              </h1>
              <div className="relative top-10 left-5 text-xl">
                <p className="mb-3">Player</p>
                <p className="mb-3">Player</p>
                <p className="mb-3">Player</p>
                <p className="mb-3">Player</p>
                <p className="mb-3">Player</p>
                <p className="mb-3">Player</p>
                <p className="mb-3">Player</p>
                <p className="mb-3">Player</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Admin;
