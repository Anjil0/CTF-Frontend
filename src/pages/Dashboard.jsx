// Dashboard.jsx
import React from "react";
import NavBar from "../components/navbar";
import hacker from "../assets/hacker.jpg";
import utshab from "../assets/utshab.jpg";
import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import Graph from "../components/graph";
import BarGraph from "../components/BarGraph";

const Dashboard = () => {
  return (
    <>
      <NavBar />
      <div className="flex justify-between w-[93%] mx-auto relative mt-20">
        <div className="shadow-l bg-gray-300 rounded-xl w-[37%] h-80 p-3 m-">
          <div className="flex">
            <h1 className="mr-7 font-semibold">
              Learning Path for Cyber Security
            </h1>
          </div>
          <hr className="mt-2 h-[2px] bg-black" />
          <div className="flex justify-between mt-4 text-sm text-gray-600">
            <h1>Continue with the Jr Penetration Tester Path</h1>
            <h1>Your progress</h1>
          </div>
        </div>
        <div className="shadow-l bg-gray-300 w-[37%] h-80 p-3 m- rounded-xl">
          <h1 className="text-2xl font-light">Welcome to CTF!</h1>
          <p className="text-base font-thin mt-2">
            Complete these first steps to kickstart your cyber learning
          </p>
          <div></div>
        </div>
        <div
          id="profile"
          className="relative  bg-gray-300 w-[24%] h-[715px] m- p-3 rounded-xl"
        >
          <div className="inline-flex items-center justify-center w-full">
            <hr className="w-64 h-px my-5 bg-gray-200 border-0 dark:bg-gray-700" />
            <span className="absolute px-2 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-black dark:bg-gray-300 uppercase">
              overview
            </span>
          </div>
          <img
            src={utshab}
            alt="user"
            className="w-28 h-28 border-4 border-cyan-900 rounded-full object-cover mx-auto"
          />
          <h1 className="text-center mt-2 text-xl uppercase font-semibold text-gray-900">
            Utshab Thapa
          </h1>
          <h1 className="text-center text-base text-gray-900">
            Rank: Unranked
          </h1>
          <div className="w-full flex justify-evenly mt-2 text-white font-thin ">
            <button className="text-center w-2/5  py-2 rounded-xl bg-sky-900 hover:bg-sky-950 transition-all">
              Profile
            </button>
            <button className="text-center w-2/5 py-2 rounded-xl bg-sky-900 hover:bg-sky-950 transition-all">
              Create CTF
            </button>
          </div>
          <div className="flex flex-col justify-around mt-2">
            <div className="flex justify-between ml-5 mt-2 mr-5 text-center">
              <h2 className="text-gray-600">Games Played</h2>
              <p className="text-2xl text-gray-900 font-semibold">28</p>
            </div>
            <div className="flex justify-between ml-5 mt-2 mr-5 text-center">
              <h2 className="text-gray-600">Questions Answered</h2>
              <p className="text-2xl text-gray-900 font-semibold">643</p>
            </div>
            <div className="flex justify-between ml-5 mt-2 mr-5 text-center">
              <h2 className="text-gray-600">Flags Captured</h2>
              <p className="text-2xl text-gray-900 font-semibold">76</p>
            </div>
          </div>
        </div>
      </div>
      <div
        id="graph"
        className="absolute top-[410px] left-12 rounded-xl w-[70%] bg-gray-300 h-96"
      >
        <Graph />
        {/* <BarGraph /> */}
      </div>
      <div
        id="graph"
        className="w-[93%] mx-auto rounded-xl bg-gray-300 h-96 mt-3"
      >
        {/* <Graph /> */}
      </div>
      <div className="flex justify-between w-[94%] mx-auto h-96 mt-1">
        <div className="w-1/2 m-2 bg-gray-300 rounded-xl p-2">
          <Graph />
        </div>
        <div className="w-1/2 m-2 bg-gray-300 rounded-xl p-2">
          <BarGraph />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
