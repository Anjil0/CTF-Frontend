import React from 'react'

const View = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-6xl font-bold"> Our Blogs</h1>
          {/* <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
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
                  </a> */}
        </div>
        <div className="flex flex-wrap -m-4">
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
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae, sit.
                </p>
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
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, earum..
                </p>
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
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, earum..
                </p>
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
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, earum..
                </p>
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
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, earum..
                </p>
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
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, earum..
                </p>
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
          <div className="p-4 md:w-1/3">
            <div
              className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden flex flex-col"
              style={{ height: "500px" }}
            >
              <div className="flex-grow" style={{ flexBasis: "60%" }}>
                <img
                  className="h-full w-full object-cover object-center"
                  src="https://images.unsplash.com/photo-1604156789095-3348604c0f43?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="blog"
                />
              </div>
              <div className="p-6 flex-grow" style={{ flexBasis: "40%" }}>
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  CATEGORY
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  The Catalyzer
                </h1>
                <p className="leading-relaxed mb-3">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, earum..
                </p>
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
          <div className="p-4 md:w-1/3">
            <div
              className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden flex flex-col"
              style={{ height: "500px" }}
            >
              <div className="flex-grow" style={{ flexBasis: "60%" }}>
                <img
                  className="h-full w-full object-cover object-center"
                  src="https://images.unsplash.com/photo-1604156789095-3348604c0f43?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="blog"
                />
              </div>
              <div className="p-6 flex-grow" style={{ flexBasis: "40%" }}>
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  CATEGORY
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  The Catalyzer
                </h1>
                <p className="leading-relaxed mb-3">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, earum..
                </p>
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
        </div>
      </div>
    </section>
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-17 mx-auto">
    <div className="text-center mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">Raw Denim Heirloom Man Braid</h1>
      <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug.</p>
    </div>
    <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-medium">Authentic Cliche Forage</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-medium">Kinfolk Chips Snackwave</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-medium">Coloring Book Ethical</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-medium">Typewriter Polaroid Cray</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-medium">Pack Truffaut Blue</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-medium">The Catcher In The Rye</span>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="max-w-6xl text-gray-600 body-font mx-auto">
  <div className="container h-44 bg-gray-200 shadow-2xl px-5 py-4  rounded-2xl flex justify-evenly items-center">
    <div className="flex flex-col text-center w-1/2 ">
      <h1 className="sm:text-3xl text-3xl font-semibold title-font  text-black">
        Receive our weekly <br /> blog digest 📧
      </h1>
    </div>
    <div className="flex items-center mr-16 lg:w-1/2 w-full sm:flex-row flex-col mx-auto  sm:space-x-4 sm:space-y-0  sm:px-0">
        <input
          type="email"
          id="email"
          name="email"
          placeholder='Enter your email to subscribe'
          className="w-full bg-gray-100 rounded border border-gray-700 focus:bg-transparent focus:ring-2 text-base outline-none text-gray-900 py-2 px-3  transition-colors duration-200 ease-in-out"
        />
      <button className="text-black bg-blue-500  py-2 px-6 focus:outline-none hover:bg-blue-600 rounded-md text-lg">
        SUBMIT
      </button>
    </div>
  </div>
</section>

<section className="max-w-xl text-gray-600 body-font mt-20 shadow-2xl mx-auto mb-40">
  <div className="container bg-gray-200 px-5 py-4 mx-auto rounded-2xl text-center">
    <h1 className="sm:text-4xl text-3xl font-semibold py-[10px] text-b mb-12">
      Ready to start your <br /> hacking journey?
    </h1>
    <button className="text-black bg-blue-500 border-0 py-3 px-8 focus:outline-none hover:bg-blue-600 rounded-md text-lg">
      JOIN NOW
    </button>
  </div>
</section>
<section className="text-gray-600 body-font">
<div className="flex flex-wrap -m-4">
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
        </div>

</section>

    </div>
  )
}

export default View
