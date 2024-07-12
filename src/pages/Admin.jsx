import React, { useEffect, useState } from "react";
import add from "../assets/more.png";
import setting from "../assets/setting.png";
import left from "../assets/left-arrow.png";
import right from "../assets/right-arrow.png";
import profilePic from "../assets/hacker.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../components/NavBar";
import {
  createTopic,
  updateTopic,
  deleteTopic,
  fetchTopic,
} from "../redux/topicSlice";
import { LogOut } from "../redux/loginLogoutSlice";

const Admin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const { topics, isLoading, error } = useSelector(
  //   (state) => state?.topicSlice
  // );
  const topics = useSelector((state) => state?.topicSlice?.topics?.Result?.Topics)
  console.log("The topics are", topics);

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

  const handleLogOut = () => {
    dispatch(LogOut());
    navigate("/login");
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
            <div className="hover:bg-black hover:bg-opacity-20 transition-all bg-opacity-50 w-full h-14 flex items-center absolute top-0">
              <img src={add} alt="" className="w-6 ml-8" />
              <h2 className="ml-3 text-lg text-black">Add</h2>
            </div>
            {isAddHovered && (
              <div
                className="absolute top-14 w-2/3 right-0 bg-black bg-opacity-20"
                onMouseEnter={handleAddHover}
                onMouseLeave={handleAddLeave}
              >
                <div
                  className="hover:bg-black hover:bg-opacity-20 transition-all bg-opacity-50 w-full h-12 flex items-center"
                  onClick={() => navigate("/add-topic")}
                >
                  <h2 className="ml-3 text-lg text-black">Add Topic</h2>
                </div>
                <div
                  className="hover:bg-black hover:bg-opacity-20 transition-all bg-opacity-50 w-full h-12 flex items-center"
                  onClick={() => navigate("/add-questions")}
                >
                  <h2 className="ml-3 text-lg text-black">Add Questions</h2>
                </div>
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
          <div className="hover:bg-black hover:bg-opacity-20 transition-all bg-opacity-50 w-full h-20 flex items-center rounded-b-3xl absolute bottom-0 cursor-pointer">
            <img src={right} alt="Log Out" className="ml-5 w-8" />
            <h2 className="text-xl ml-3 text-black" onClick={handleLogOut}>
              Log Out
            </h2>
          </div>
        </section>
        <section
          id="main"
          className={`bg-black bg-opacity-20 backdrop-blur-sm w-9/12 h-[935px] absolute top-4 left-[460px] transition-transform ease-in-out duration-300 rounded-3xl shadow-2xl transform ${
            isSidebarOpen
              ? "scale-x-98 translate-x-0"
              : "scale-x-[125%] translate-x-[-15%]"
          }`}
        >
          {isLoading ? (
            <div className="flex justify-center items-center h-full">
              <div className="text-white">Loading...</div>
            </div>
          ) : error ? (
            <div className="flex justify-center items-center h-full text-red-500">
              {error}
            </div>
          ) : (
            <div className="p-10">
              <h1 className="text-2xl font-bold mb-4 text-white">Topics</h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {topics.map((topic) => (
                  <div
                    key={topic._id}
                    className="bg-white rounded-lg shadow-lg p-4"
                  >
                    <h2 className="text-xl font-bold mb-2">{topic.title}</h2>
                    <p className="mb-4">{topic.description}</p>
                    <button
                      className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                      onClick={() => handleDeleteTopic(topic._id)}
                    >
                      Delete
                    </button>
                    <button
                      className="bg-blue-500 text-white px-4 py-2 ml-2 rounded-lg hover:bg-blue-600"
                      onClick={() =>
                        handleUpdateTopic(topic._id, { title: "Updated Title" })
                      }
                    >
                      Update
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>
      </div>
    </>
  );
};

export default Admin;
