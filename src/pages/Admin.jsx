import React, { useEffect, useState } from "react";
import add from "../assets/more.png";
import setting from "../assets/setting.png";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import left from "../assets/left-arrow.png";
import right from "../assets/right-arrow.png";
import profilePic from "../assets/hacker.jpg";
import Addq from "../Components/Addq";
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
    <div className="relative w-full h-full">
      <button
        id={isSidebarOpen ? "left" : "right"}
        className={`absolute top-12 w-10 transition-transform ease-in-out duration-300 transform ${
          isSidebarOpen ? "translate-x-[410px]" : "translate-x-4"
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
        className={`bg-black bg-opacity-20 backdrop-blur-sm w-1/5 h-[935px] absolute top-4 left-4 transition-transform ease-in-out duration-300 rounded-3xl shadow-2xl transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-[104%]"
        }`}
      >
        <div
          id="profile"
          className="w-16 h-16 rounded-full bg-stone-500 relative left-4 top-4 shadow-lg overflow-hidden"
        >
          <img
            src={profilePic}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-4xl absolute top-7 left-24 text-black bg-gradient-to-r from-rose-500 via-orange-500 to-orange-500 bg-clip-text text-transparent">
          Utshab Thapa
        </h1>
        <hr className="bg-white h-1 mt-8" />
        <div
          className="relative"
          onMouseEnter={handleAddHover}
          onMouseLeave={handleAddLeave}
        >
          <a href="#">
            <div className="hover:bg-black hover:bg-opacity-20 transition-all bg-opacity-50 w-full h-20 flex items-center absolute top-0">
              <img src={add} alt="" className="w-8 h-8 ml-5" />
              <h2 className="ml-3 text-xl text-black">Add</h2>
            </div>
          </a>
          {isAddHovered && (
            <div
              className="absolute top-20 w-2/3 right-0 bg-black bg-opacity-20 p-2"
              onMouseEnter={handleSubMenuHover}
              onMouseLeave={handleAddLeave}
            >
              <a href="#">
                <div className="hover:bg-black hover:bg-opacity-20 transition-all bg-opacity-50 w-full h-12 flex items-center">
                  <h2
                    className="ml-3 text-lg text-black"
                    // onClick={handleAddTopic}
                  >
                    <Link to={"/addTopic"}>Add Topic</Link>
                  </h2>
                </div>
              </a>
              <a href="#">
                <div className="hover:bg-black hover:bg-opacity-20 transition-all bg-opacity-50 w-full h-12 flex items-center">
                  <h2 className="ml-3 text-lg text-black" >   <Link to={"/addQ"}>Add Question</Link></h2>
                </div>
              </a>
              <a href="#">
                <div className="hover:bg-black hover:bg-opacity-20 transition-all bg-opacity-50 w-full h-12 flex items-center">
                  <h2
                    className="ml-3 text-lg text-black"
                    onClick={handleDeleteTopic}
                  >
                    Delete Topic
                  </h2>
                </div>
              </a>
              <a href="#">
                <div className="hover:bg-black hover:bg-opacity-20 transition-all bg-opacity-50 w-full h-12 flex items-center">
                  <h2
                    className="ml-3 text-lg text-black"
                    onClick={handleUpdateTopic}
                  >
                    Update Topic
                  </h2>
                </div>
              </a>
            </div>
          )}
        </div>
        <a href="#">
          <div className="hover:bg-black hover:bg-opacity-20 transition-all bg-opacity-50 w-full h-20 flex items-center absolute bottom-20">
            <img src={setting} alt="" className="w-8 ml-5" />
            <h2 className="text-xl ml-3 text-black">Settings</h2>
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
