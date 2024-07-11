import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import img1 from "../assets/img1.jpeg";

const Intro = () => {
  const {id} = useParams();
  console.log('id from params', id)
  


  const navigate = useNavigate();

  const topics = useSelector(
    (state) => state.topicSlice?.topics?.Result?.Topics
  );
  console.log("Fetched Topics", topics);

  const theTopic = topics ? topics.find((topic) => topic._id === id) : null;
  console.log("Fetched Topic", theTopic);

  if (!theTopic) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-800 text-white">
        Topic not found
      </div>
    );
  } 

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-500 to-gray-900 text-black">
        <div className="max-w-2xl w-full p-2 bg-white rounded-lg shadow-lg">
          <img
            src={img1}
            alt={theTopic}
            className="w-full h-60 object-cover rounded-lg mb-7"
          />
          <div className="p-6">
          <p className="text-sm mb-8">{theTopic?.topic}</p>
            <p className="text-sm mb-8">{theTopic?.description}</p>

            <button className="px-6 py-3 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-colors duration-300">
              <Link to={`/newctfdetail/${id}`}>Get Details</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
