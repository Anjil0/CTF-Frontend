import React, { useEffect, useState } from "react";
import add from "../assets/more.png";
import setting from "../assets/setting.png";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import left from "../assets/left-arrow.png";
import right from "../assets/right-arrow.png";
import profilePic from "../assets/hacker.jpg";
import Addt from "../components/Addt";
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
    <div className="relative w-full h-full">
      <button
        id={isSidebarOpen ? "left" : "right"}
        className={`absolute top-12 w-8 transition-transform ease-in-out duration-300 transform z-50 ${
          isSidebarOpen ? "translate-x-[310px]" : "translate-x-0"
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
          className="w-12 h-12 rounded-full bg-stone-500 relative left-6 top-6 shadow-lg overflow-hidden"
        >
          <img
            src={profilePic}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-3xl absolute top-8 left-20 text-black bg-gradient-to-r from-rose-500 via-orange-500 to-orange-500 bg-clip-text text-transparent">
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
                  <h2 className="ml-3 text-lg text-black">Add Questions</h2>
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
        <div
          className="hover:bg-black hover:bg-opacity-20 transition-all bg-opacity-50 w-full h-14 flex items-center absolute bottom-14 cursor-pointer"
          onClick={() => navigate("/adminprofile")}
        >
          <img src={setting} alt="Settings" className="w-6 ml-8" />
          <h2 className="text-lg ml-3 text-black">Settings</h2>
        </div>
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
        className={`bg-black bg-opacity-10 backdrop-blur-sm h-screen absolute left-[250px] duration-[300ms] shadow-2xl  ${
          isSidebarOpen
            ? "w-[77%] translate-x-[100px]"
            : "w-[98%] translate-x-[-220px]"
        }`}
      >
        <div className="flex justify-evenly mt-6">
          <div
            className={` w-[450px] h-[200px] bg-sky-500 rounded-2xl duration-[300ms] flex flex-col items-center   ${
              isSidebarOpen ? "w-[29%] " : "w-[95%]"
            }`}
          >
            <h1 className="w-full h-full text-7xl relative top-5 left-5 uppercase font-bold text-white mt-5">
              200,000
            </h1>
            <h1 className=" w-full h-full text-3xl relative left-5  uppercase font-bold text-white mt-8">
              Users
            </h1>
          </div>
          <div
            className={` w-[450px] h-[200px] bg-lime-500 rounded-2xl duration-[300ms] flex flex-col items-center  ${
              isSidebarOpen ? "w-[29%] " : "w-[95%]"
            }`}
          >
            <h1 className="w-full h-full text-7xl relative top-5 left-5 uppercase font-bold text-white mt-5">
              186,000
            </h1>
            <h1 className=" w-full h-full text-3xl relative left-5  uppercase font-bold text-white mt-8">
              Flags Captured
            </h1>
          </div>
          <div
            className={` w-[450px] h-[200px] bg-rose-600 rounded-2xl  duration-[300ms] flex flex-col items-center  ${
              isSidebarOpen ? "w-[29%] " : "w-[95%]"
            }`}
          >
            <h1 className="w-full h-full text-7xl relative top-5 left-5 uppercase font-bold text-white mt-5">
              186
            </h1>
            <h1 className=" w-full h-full text-3xl relative left-5  uppercase font-bold text-white  mt-8">
              Games
            </h1>
          </div>
        </div>
        <div className="flex justify-evenly mt-6">
          <div
            className={` w-[870px] h-[440px] bg-gray-100 rounded-2xl duration-[300ms] ${
              isSidebarOpen ? "w-[60%] " : "w-[62%]"
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
              <p className="mb-3">Some topic</p>
            </div>
          </div>

          <div
            className={` w-[420px] h-[440px] bg-gray-100 rounded-2xl duration-[300ms] ${
              isSidebarOpen ? "w-[29%] " : "w-[29%]"
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
              <p className="mb-3">Player</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admin;