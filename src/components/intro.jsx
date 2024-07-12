  import React from "react";
  import { Link } from "react-router-dom";
  import { useSelector } from "react-redux";
  import img1 from "../assets/img1.jpeg";

  const Intro = () => {
    const questions = useSelector(
      (state) => state.questionSlice?.questionsByTopic[topic._id]?.questions
    );
    console.log("Fetched questiosn", questions);

    if (!questions || questions.length === 0) {
      return (
        <div className="flex items-center justify-center min-h-screen bg-gray-800 text-white">
          No questions found
        </div>
      );
    }

    return (
      <div className="flex flex-wrap items-center justify-center min-h-screen bg-gradient-to-br from-gray-500 to-gray-900 text-black">
        {questions.map((question) => (
          <div
            key={question._id}
            className="max-w-xs w-full p-2 m-2 bg-white rounded-lg shadow-lg"
          >
            <div className="p-6">
              <p className="text-sm mb-8">{question.topic}</p>
              <p className="text-sm mb-8">{question.description}</p>
              <button className="px-6 py-3 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-colors duration-300">
                <Link to={`/newctfdetail/${question._id}`}>Get Details</Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  };

  export default Intro;
