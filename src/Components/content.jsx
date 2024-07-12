
import React from "react";
import { useNavigate } from "react-router-dom";

const Content = () => {
  const navigate = useNavigate();

  const handleViewAllClick = () => {
    navigate('/view');
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-2 py-16 mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-6xl font-bold">Latest From Our Blogs</h1>
          <button
            onClick={handleViewAllClick}
            className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 px-4 hover:text-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100 "
          >
            View All
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
          </button>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="p-4 md:w-1/3 ">
            <div
              className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden flex flex-col"
              style={{ height: "500px" }}
            >
              <div className="flex-grow" style={{ flexBasis: "70%" }}>
                <img
                  className="h-full w-full object-cover object-center"
                  src="https://images.unsplash.com/photo-1604156789095-3348604c0f43?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="blog"
                />
              </div>
              <div className="p-6 flex-grow" style={{ flexBasis: "30%" }}>
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  CATEGORY
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  The Catalyzer
                </h1>
                <p className="leading-relaxed mb-3">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet, reprehenderit?
                </p>
                <div className="flex items-center flex-wrap">
                  <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0  hover:text-indigo-400 cursor-pointer ">
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
          <div className="p-4 md:w-1/3">
            <div
              className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden flex flex-col"
              style={{ height: "500px" }}
            >
              <div className="flex-grow" style={{ flexBasis: "70%" }}>
                <img
                  className="h-full w-full object-cover object-center"
                  src="https://images.unsplash.com/photo-1604156789095-3348604c0f43?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="blog"
                />
              </div>
              <div className="p-6 flex-grow" style={{ flexBasis: "30%" }}>
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  CATEGORY
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  The Catalyzer
                </h1>
                <p className="leading-relaxed mb-3">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet, reprehenderit?
                </p>
                <div className="flex items-center flex-wrap">
                  <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0  hover:text-indigo-400 cursor-pointer">
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
          <div className="p-4 md:w-1/3">
            <div
              className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden flex flex-col"
              style={{ height: "500px" }}
            >
              <div className="flex-grow" style={{ flexBasis: "70%" }}>
                <img
                  className="h-full w-full object-cover object-center"
                  src="https://images.unsplash.com/photo-1604156789095-3348604c0f43?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="blog"
                />
              </div>
              <div className="p-6 flex-grow" style={{ flexBasis: "30%" }}>
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  CATEGORY
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  The Catalyzer
                </h1>
                <p className="leading-relaxed mb-3">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet, reprehenderit?
                </p>
                <div className="flex items-center flex-wrap">
                  <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0  hover:text-indigo-400 cursor-pointer">
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
        </div>
      </div>
    </section>
  );
};

export default Content;

