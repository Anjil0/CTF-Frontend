import React from "react";
import { useNavigate } from "react-router-dom";
import img1 from "../assets/img1.jpeg";
import NavBar from "./navbar";
import Typewriter from "typewriter-effect";

const topics = [
  {
    imgSrc: "https://dummyimage.com/720x400",
    title: "The Catalyzer",
    description:
      "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
  },
  {
    imgSrc: "https://dummyimage.com/721x401",
    title: "The 400 Blows",
    description:
      "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
  },
  {
    imgSrc: "https://dummyimage.com/722x402",
    title: "Shooting Stars",
    description:
      "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
  },
  // Add more topics as needed
];

const Topics = () => {
  return (
    <>
      <div>
        <NavBar />
      </div>
      <section className="container h-80 bg-gray-300 mb-5">
        <h2 className="text-[25px] md:text-5xl font-bold mb-4">
          <Typewriter
            options={{
              strings: [
                'Innovation <span class="text-lime-600 text-[30px]">is in our DNA.</span>',
              ],
              autoStart: true,
              loop: true,
              delay: 75,
              deleteSpeed: 50,
            }}
          />
        </h2>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-5 mx-auto">
          <div className="flex flex-wrap -m-4">
            {topics.map((topic, index) => (
              <div key={index} className="p-4 md:w-1/3">
                <div className="h-full border-2 border-gray-400 border-opacity-60 rounded-lg overflow-hidden">
                  <img
                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                    src={topic.imgSrc}
                    alt="blog"
                  />
                  <div className="p-4">
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                      {topic.title}
                    </h1>
                    <p className="leading-relaxed mb-2">{topic.description}</p>
                    <div className="flex items-center flex-wrap">
                      <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                        Learn More
                        <svg
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Topics;
