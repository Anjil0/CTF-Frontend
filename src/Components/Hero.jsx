import React from "react";
import ParticlesBackground from "./ParticlesBackground.jsx";

const Hero = () => {
  return (
    <div className="text-white h-screen bg-cover bg-center bg-no-repeat">
      <div className="max-w-[800px] mt-[-96px] w-full h-full mx-auto flex text-left items-center">
        <div className=" bg-yellow-600 bg-opacity-50 p-10  rounded-[20px] text-left ">
          <h1 className="  md:text-5xl sm:text-4xl text-xl text-black py-4 font-bold-Poppins ml-50 ">
            NEPAL'S FIRST CTF PLATFORM
          </h1>
          <button className="bg-yellow-600 text-white text-2xl w-[170px] h-[55px] rounded-md font-medium my-6 mx-auto py-3  hover:bg-yellow-700 transition duration-300 ease-in-out">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};
export default Hero;
