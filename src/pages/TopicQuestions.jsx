import React from "react";
import NavBar from "../components/navbar";

const TopicQuestions = () => {
  return (
    <>
      <NavBar />
      <section className="container bg-[#243646] h-96">
        <div className="Flex flex-col py-16 px-20">
          <p className="text-lg text-gray-400 mb-4">Topic</p>
          <h1 className="text-white text-5xl mb-2">Jr Penetration Tester</h1>
          <p className="text-xl text-gray-300 mb-4">
            Learn the practical skills required to start your career as a
            professional penetration tester.
          </p>
          <p className="text-sm font-light text-gray-300">Difficulty Level</p>
          <p className="text-sm font-light text-yellow-600">Intermediate</p>
          <button className="px-6 py-2 rounded-xl bg-gray-500 mt-4">Enroll in Path</button>
        </div>
      </section>
    </>
  );
};

export default TopicQuestions;
