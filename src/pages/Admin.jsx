import React, { useEffect, useState } from "react";
import add from "../assets/more.png";
import setting from "../assets/setting.png";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import left from "../assets/left-arrow.png";
import right from "../assets/right-arrow.png";
import profilePic from "../assets/hacker.jpg";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import Addq from "../components/Addq";
import { useDispatch, useSelector } from "react-redux";
import {
  createTopic,
  updateTopic,
  deleteTopic,
  fetchTopic,
} from "../redux/topicSlice";

import loginLogoutSlice, { LogOut } from "../redux/loginLogoutSlice";

const Admin = () => {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const { topics, isLoading, error } = useSelector(
    (state) => state?.topicSlice
  );

  useEffect(() => {
    dispatch(fetchTopic());
  }, [dispatch]);

  const handleDeleteTopic = async (topicId) => {
    try {
      await dispatch(deleteTopic(topicId));
      dispatch(fetchTopic());
    } catch (error) {
      console.error("Failed to delete topic:", error);
    }
  };

  const handleUpdateTopic = async (topicId, updatedData) => {
    try {
      await dispatch(updateTopic({ topicId, updatedData }));
      dispatch(fetchTopic());
    } catch (error) {
      console.error("Failed to update topic:", error);
    }
  };
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleAddTopicClick = () => {
    setIsFormOpen(true);
  };

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

  // const handleLogOut = () => {
  //   localStorage.removeItem("userTokenHere")
  // navigate("/login")
  // };

  const handleLogOut = () => {
    dispatch(LogOut());
    Navigate("/login");
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
        </a>
        <a href="#">
          <div className="hover:bg-black hover:bg-opacity-20 transition-all bg-opacity-50 w-full h-20 flex items-center rounded-b-3xl absolute bottom-0">
            <img src={handleLogOut} alt="" className="ml-5 w-8" />
            <h2 className="text-xl ml-3 text-black" onClick={handleLogOut}>
              Log Out
            </h2>
          </div>
        </a>
      </section>
      <section
        id="main"
        className={`bg-black bg-opacity-20 backdrop-blur-sm w-9/12 h-[935px] absolute top-4 left-[460px] transition-transform ease-in-out duration-300 rounded-3xl shadow-2xl transform ${
          isSidebarOpen
            ? "scale-x-98 translate-x-0"
            : "scale-x-[125%] translate-x-[-15%]"
        }`}
      ></section>
    </div>
  );
};

export default Admin;
