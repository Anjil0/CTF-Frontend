import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert2";
import NavBar from "./NavBar";
import img1 from "../assets/img1.jpeg";
import { fetchTopic } from "../redux/topicSlice";

const Topic = () => {
  const isLoggedIn = localStorage.getItem("accessToken");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const fetchedTopics = useSelector(
    (state) => state.topicSlice?.topics?.Result?.Topics || []
  );

  const fetchTopics = async () => {
    try {
      const response = await axios.get('http://localhost:5300/api/topic/getAllTopic');
      console.log("response from get topics", response)
      setTopics(response.data?.Result?.Topics);
    } catch (err) {
      setError('Failed to fetch topics');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTopics();
  }, []);
  useEffect(() => {
    dispatch(fetchTopic());
  }, [dispatch]);

  const handleLearnMore = (topicId) => {
    if (isLoggedIn) {
      navigate(`/topic/${topicId}`);
      console.log("Navigated to topic  ");
    } else {
      swal.fire({
        icon: "error",
        title: "Unauthenticated",
        text: "Please login",
      });
    }
  };

  return (
    <>
      <NavBar />
      <div className="flex w-full min-h-screen bg-gray-700">
        <nav className="w-1/6 bg-gray-800 text-white font-size-15 p-4 min-h-screen bg-gray-500">
          <h2 className="text-2xl font-bold mb-10">Dive Into Challenges..</h2>
          <ul>
            <li className="mb-5">
              <button
                className="w-full text-left px-4 py-2 bg-blue-600 rounded hover:bg-blue-700"
                onClick={() => navigate("/learn")}
              >
                Quiz Hour
              </button>
            </li>
            <li className="mb-5">
              <button
                className="w-full text-left px-4 py-2 bg-green-600 rounded hover:bg-green-700"
                onClick={() => navigate("/play")}
              >
                Check Rank
              </button>
            </li>
            <li className="mb-5">
              <button
                className="w-full text-left px-4 py-2 bg-yellow-600 rounded hover:bg-yellow-700"
                onClick={() => navigate("/practice")}
              >
                History
              </button>
            </li>
            <li className="mb-5">
              <button
                className="w-full text-left px-4 py-2 bg-purple-600 rounded hover:bg-purple-700"
                onClick={() => navigate("/practice")}
              >
                Hint
              </button>
            </li>
          </ul>
        </nav>

        {/* Main Content */}
        <div className="flex-grow p-12">
          {/* Hero Section */}
          <div className="bg-gray-200 p-10 mb-6 rounded-lg shadow-lg text-center">
            <h1 className="text-4xl font-bold text-gray-800">
              Welcome to the Cybersecurity Learning Platform
            </h1>
            <p className="mt-4 text-gray-600">
              Explore the topics below to start your journey in cybersecurity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">
            {fetchedTopics.map((topic) => (
              <div
                key={topic._id}
                className="relative bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={img1}
                  alt={topic.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-3">
                  <h3 className="text-lg font-bold text-gray-800">
                    {topic.title}
                  </h3>
                  <p className="text-gray-600">{topic.topic}</p>
                  <button
                    onClick={() => handleLearnMore(topic._id)}
                    className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Topic;
