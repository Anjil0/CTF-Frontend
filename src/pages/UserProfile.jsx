// src/components/Profile.jsx
import React from "react";
import hacker from "../assets/hacker.jpg";
import {
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaLink,
  FaCheck,
} from "react-icons/fa";

const UserProfile = () => {
  return (
    <div className="bg-gray-100 text-black min-h-screen flex flex-col items-center ">
      <div className="bg-gray-300 w-full max-w-7xl rounded-2xl mt-10 p-8 shadow-xl">
        <div className="flex flex-col items-center">
          <div className="relative">
            <img
              src={hacker} // Placeholder for profile image
              alt="Profile"
              className="rounded-full w-32 h-32 object-cover object-center"
            />
            <div className="absolute bottom-0 right-0 bg-green-500 rounded-full w-8 h-8 flex items-center justify-center">
              <FaCheck className="text-white" />
            </div>
          </div>
          <h1 className="mt-4 text-2xl font-bold">
            Utshab Thapa <span className="text-lg">[BUG HUNTER]</span>
          </h1>
          <div className="flex mt-2 w-2/5  justify-between">
            <div className=" text-center w-1/3">
              <p className="text-xl">812</p>
              <p>Rooms Completed</p>
            </div>
            <div className=" text-center w-1/3">
              <p className="text-xl">999</p>
              <p>Level</p>
            </div>
            <div className="text-center w-1/3">
              <p className="text-xl">44</p>
              <p>Badges</p>
            </div>
          </div>
        </div>
        <div className="mt-6 text-center">
          <p className="text-rose-500 cursor-default">0day [BUG HUNTER]</p>
          <p className="cursor-default">
            Serial Entrepreneur / Child Safety Warrior / Penetration Tester
          </p>
          <div className="flex justify-center mt-4 space-x-4">
            <FaTwitter className="cursor-pointer" />
            <FaGithub className="cursor-pointer" />
            <FaLinkedin className="cursor-pointer" />
            <FaInstagram className="cursor-pointer" />
            <FaLink className="cursor-pointer" />
          </div>
        </div>
        <div className="flex justify-around mt-6 border-t border-gray-600 pt-4">
          <button className="text-lg">Unranked</button>
          <button className="text-lg">Rooms Complete</button>
          <button className="text-lg">Badges</button>
          <button className="text-lg">Yearly Activity</button>
        </div>
      </div>
      <div className="mt-6 grid grid-cols-3 gap-4 text-white font-medium">
        <div className="bg-gray-800 p-4 rounded-lg text-center">
          <p className="text-lg ">Fowsniff CTF</p>
          <p>Hack this machine and get the flag. There are lots of...</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg text-center">
          <p className="text-lg ">Mr Robot CTF</p>
          <p>Based on the Mr. Robot show, can you root this box?</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg text-center">
          <p className="text-lg ">Crack the hash</p>
          <p>Cracking hashes challenges</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
