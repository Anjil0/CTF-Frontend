import React from "react";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import Navbar from "../components/navbar";
import background from "../assets/background.jpg";
import ingLogo from "../assets/ingLogo.png";
import islington from "../assets/islington.png";
import herald from "../assets/herald.png";
import mst from "../assets/mst.png";
import iic from "../assets/iic.png";
import informatics from "../assets/informatics.png";
import kavya from "../assets/kavya.png";
import vairav from "../assets/vairav.png";
import Footer from "../components/Footer";
import Marquee from "react-fast-marquee";
import Swal from "sweetalert2";
import Content from "../components/content";

const Home = () => {
  const handleClick = () => {
    const mainElement = document.getElementById("main");
    if (mainElement) {
      mainElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleClickgames = () => {
    const mainElement = document.getElementById("games");
    if (mainElement) {
      mainElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <ParallaxProvider>
        <div>
          <Navbar />
        </div>
        <div>
          <div
            id="hero"
            className="relative w-full h-[100vh] bg-gray-200 z-[2]"
          >
            <Parallax
              translateY={[-600, 200]}
              className="sm:absolute sm:top-[750px] absolute top-[600px] left-12  sm:left-[60px] font-bold text-gray-900 uppercase leading-none"
            >
              <div className="sm:flex-grow sm:w-full text-[50px] lg:text-[70px] md:text-[60px]  lg:pr-24 md:pr-16 flex flex-col  sm:items-center sm:justify-center  md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                Nepal's First <br /> CTF Platform
                <div className="lg:text-xl text-xs md:text-base  font-extralight text-gray-600">
                  Learn more about our page and play the games you want <br />
                  and hone your skills to the max. Good luck Hackers!
                </div>
                <div className="sm:w-full sm:flex sm:justify-between sm:max-w-72 sm:mt-6 w-full flex justify-between max-w-72 mt-6 ">
                  <button
                    onClick={handleClick}
                    className="text-xl bg-lime-500 px-3 py-2 rounded-2xl hover:scale-105 transition-all hover:bg-lime-500 shadow-2xl"
                  >
                    Learn More
                  </button>
                  <button
                    onClick={handleClickgames}
                    className="  text-xl bg-gray-300 shadow-lg px-3 py-2 rounded-2xl hover:scale-105 transition-all hover:bg-rose-500"
                  >
                    Play Games
                  </button>
                </div>
                <div>
                  <button
                    onClick={handleClickgames}
                    className=" mt-5 left-1 w-72 text-xl text-gray-200 hover:text-lime-400 bg-gray-700 shadow-2xl px-1 py-1 rounded-xl transition-all flex items-center justify-start"
                  >
                    <div className="bg-gray-600 px-1 py-1 rounded-lg text-lime-400 text-sm font-medium">
                      NEW
                    </div>
                    <p className="text-sm ml-3 font-normal transition-all">
                      Start a 14 day business trial for free
                    </p>
                  </button>
                </div>
              </div>
            </Parallax>
            <Parallax
              translateX={[140, 300, "easeIn"]}
              translateY={[-55, 55]}
              opacity={[6, -3]}
              rotate={[-96, 100]}
              className="bg-gray-300 shadow-2xl bg-opacity-50 w-1/3 h-[560px] rounded-xl sm:absolute sm:top-11 hidden md:block"
            ></Parallax>
          </div>
          <div className="relative z-[3]">
            <div className="bg-gray-300 w-screen h-[160vh] shadow-xl">
              <div
                id="games"
                className="h-full absolute inset-0 flex flex-col items-center justify-between"
              >
                <div className=" w-full h-52 bg-gray-800  flex items-center  justify-center">
                  <Marquee
                    gradient={true}
                    gradientWidth={300}
                    gradientColor="#1f2937"
                    speed={50}
                    className=" flex  w-3/4 space-x-"
                  >
                    <img
                      src={ingLogo}
                      alt="Sponsor 1"
                      className="w-52 h- pr-8 "
                    />
                    <img
                      src={islington}
                      alt="Sponsor 1"
                      className="w-52 h- pr-8 "
                    />
                    <img src={iic} alt="Sponsor 2" className="w-52 h- pr-8" />
                    <img
                      src={herald}
                      alt="Sponsor 3"
                      className="w-52 h- pr-8"
                    />
                    <img
                      src={vairav}
                      alt="Sponsor 4"
                      className="w-52 h- pr-8"
                    />
                    <img
                      src={informatics}
                      alt="Sponsor 5"
                      className="w-52 h- pr-8"
                    />
                    <img src={mst} alt="Sponsor 5" className="w-52 h- pr-8" />
                    <img src={kavya} alt="Sponsor 5" className="w-52 h- pr-8" />
                  </Marquee>
                </div>
                <div
                  id="redirect"
                  className="w-3/4 h-16 flex items-center justify-center bg-gray-700 bg-opacity-50 text-gray-200 text-lg font-semibold rounded-xl shadow-lg cursor-pointer hover:scale-[101%] transition-all "
                  onClick={() => window.open("https://ingskill.com", "_blank")}
                >
                  <img
                    src={ingLogo}
                    alt="IngSkill Logo"
                    className="h-10 mr-4"
                  />
                  IngSkill: Become the best version of you and enhance your
                  skills with ing skills academy.
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h1 className="font-medium text-xl text-center bg-gradient-to-r from-rose-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
                    CTF Games
                  </h1>
                  <h1 className="mt-3 text-7xl font-bold text-center ml-auto mr-auto uppercase text-shadow-xl text-gray-800">
                    Crack The Codes
                  </h1>
                  <p className="text-lg text-gray-400 font-extralight w-1/2 text-center ml-auto mr-auto mt-3 ">
                    Try the games and challenge yourself. For more games, click
                    on any of the games and it will redirect you to the CTF
                    games page.
                  </p>
                </div>
                <Parallax
                  opacity={[0, 4]}
                  id="image"
                  className="w-full flex justify-evenly mb-"
                >
                  <Parallax
                    className="w-1/4 h-96 rounded-3xl"
                    translateX={[-200, 0, "easeOutQuint"]}
                  >
                    <div
                      className="w-full h-5/6 bg-gray-500 rounded-3xl shadow-2xl bg-cover bg-center bg-no-repeat hover:scale-105 transition-all"
                      style={{ backgroundImage: `url(${background})` }}
                    ></div>
                    <h1 className="h-full text-center text-3xl font-bold text-gray-800 uppercase mt-2 text-shadow-sm">
                      Disgruntled
                    </h1>
                  </Parallax>
                  <div className="w-1/4 h-96 rounded-3xl">
                    <h1 className="text-center text-3xl font-bold text-gray-100 uppercase text-shadow-sm">
                      Expose
                    </h1>
                    <div
                      className="w-full h-5/6 bg-gray-500 rounded-3xl shadow-2xl bg-cover bg-center bg-no-repeat mt-1 hover:scale-105 transition-all"
                      style={{ backgroundImage: `url(${background})` }}
                    ></div>
                  </div>
                  <Parallax
                    className="w-1/4 h-96 rounded-3xl"
                    translateX={[200, 0, "easeOutQuint"]}
                  >
                    <div
                      className="w-full h-5/6 bg-gray-500 rounded-3xl shadow-2xl bg-cover bg-center bg-no-repeat hover:scale-105 transition-all"
                      style={{ backgroundImage: `url(${background})` }}
                    ></div>
                    <h1 className="h-full text-center text-3xl font-bold text-gray-800 mt-2 uppercase text-shadow-sm">
                      Cyborg
                    </h1>
                  </Parallax>
                </Parallax>
              </div>
            </div>
          </div>
          <div className="relative z-[1]  ">
            <Parallax translateY={[-1000, 1000]} className="">
              <Content />
            </Parallax>
          </div>
        </div>
        <div className="relative z-[3]">
          <div className="bg-gradient-to-b from-gray-800 via-gray-800 to-white w-screen h-[160vh] shadow-xl">
            <div
              id="games"
              className="h-full absolute inset-0 flex flex-col items-center justify-evenly"
            >
              <div className=" w-full  flex items-center  justify-center">
                <Marquee
                  gradient={true}
                  gradientWidth={300}
                  gradientColor="#1f2837"
                  speed={50}
                  className=" flex  w-3/4 space-x-"
                >
                  <img
                    src={ingLogo}
                    alt="Sponsor 1"
                    className="w-52 h- pr-8 "
                  />
                  <img
                    src={islington}
                    alt="Sponsor 1"
                    className="w-52 h- pr-8 "
                  />
                  <img src={iic} alt="Sponsor 2" className="w-52 h- pr-8" />
                  <img src={herald} alt="Sponsor 3" className="w-52 h- pr-8" />
                  <img src={vairav} alt="Sponsor 4" className="w-52 h- pr-8" />
                  <img
                    src={informatics}
                    alt="Sponsor 5"
                    className="w-52 h- pr-8"
                  />
                  <img src={mst} alt="Sponsor 5" className="w-52 h- pr-8" />
                  <img src={kavya} alt="Sponsor 5" className="w-52 h- pr-8" />
                </Marquee>
              </div>
              <div
                id="redirect"
                className="w-3/4 h-16 flex items-center justify-center bg-gray-700 bg-opacity-50 text-gray-200 text-lg font-semibold rounded-xl shadow-lg cursor-pointer hover:scale-[101%] transition-all "
                onClick={() => window.open("https://ingskill.com", "_blank")}
              >
                <img src={ingLogo} alt="IngSkill Logo" className="h-10 mr-4" />
                IngSkill: Become the best version of you and enhance your skills
                with ing skills academy.
              </div>
              <div className="flex flex-col items-center justify-center">
                <h1 className="font-medium text-xl text-center bg-gradient-to-r from-rose-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
                  CTF Games
                </h1>
                <h1 className="mt-3 text-7xl font-bold text-center ml-auto mr-auto uppercase text-shadow-xl text-gray-200">
                  Crack The Codes
                </h1>
                <p className="text-lg text-gray-400 font-extralight w-1/2 text-center ml-auto mr-auto mt-3 ">
                  Try the games and challenge yourself. For more games, click on
                  any of the games and it will redirect you to the CTF games
                  page.
                </p>
              </div>
              <Parallax
                opacity={[0, 4]}
                id="image"
                className="w-full flex justify-evenly mb-"
              >
                <Parallax
                  className="w-1/4 h-96 rounded-3xl"
                  translateX={[-200, 0, "easeOutQuint"]}
                >
                  <div
                    className="w-full h-5/6 bg-gray-500 rounded-3xl shadow-2xl bg-cover bg-center bg-no-repeat hover:scale-105 transition-all"
                    style={{ backgroundImage: `url(${background})` }}
                  ></div>
                  <h1 className="h-full text-center text-3xl font-bold text-gray-800 uppercase mt-2 text-shadow-sm">
                    Disgruntled
                  </h1>
                </Parallax>
                <div className="w-1/4 h-96 rounded-3xl">
                  <h1 className="text-center text-3xl font-bold text-gray-100 uppercase text-shadow-sm">
                    Expose
                  </h1>
                  <div
                    className="w-full h-5/6 bg-gray-500 rounded-3xl shadow-2xl bg-cover bg-center bg-no-repeat mt-1 hover:scale-105 transition-all"
                    style={{ backgroundImage: `url(${background})` }}
                  ></div>
                </div>
                <Parallax
                  className="w-1/4 h-96 rounded-3xl"
                  translateX={[200, 0, "easeOutQuint"]}
                >
                  <div
                    className="w-full h-5/6 bg-gray-500 rounded-3xl shadow-2xl bg-cover bg-center bg-no-repeat hover:scale-105 transition-all"
                    style={{ backgroundImage: `url(${background})` }}
                  ></div>
                  <h1 className="h-full text-center text-3xl font-bold text-gray-800 mt-2 uppercase text-shadow-sm">
                    Cyborg
                  </h1>
                </Parallax>
              </Parallax>
            </div>
          </div>
        </div>
        <div className="relative z-[2]">
          <Footer />
        </div>
      </ParallaxProvider>
    </>
  );
};

export default Home;
