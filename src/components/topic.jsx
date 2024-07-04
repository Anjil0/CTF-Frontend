import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import img1 from "../assets/img1.jpeg";
import NavBar from "../components/NavBar";

const topics = [
  {
    id: 1,
    title: "Introduction to Cyber Security",
    image: img1,
    description:
      "Introduction: Enumeration is the ordered listing of all items in a collection, often used in math and computer science.",
  },
  {
    id: 2,
    title: "Ethical Hacking – Using ViewDNS ",
    image: img1,
    description: "Introduction to Malware Analysis.",
  },
  {
    id: 3,
    title: "Scanning Network Using Censys.io ",
    image: img1,
    description: "Introduction to Network Security.",
  },
  {
    id: 4,
    title: "Ethical Hacking - Using WhatWeb",
    image: img1,
    description: "Introduction to Web Security.",
  },
  {
    id: 5,
    title: "Digital Forensic Steganography",
    image: img1,
    description: "Introduction to Incident Response.",
  },
  {
    id: 6,
    title: "Footprinting Using Have I Been Pwned ",
    image: img1,
    description: "Introduction to Threat Intelligence.",
  },
  {
    id: 1,
    title: "Scanning Network",
    image: img1,
    description:
      "Introduction: Enumeration is the ordered listing of all items in a collection, often used in math and computer science.",
  },
  {
    id: 2,
    title: "Ethical Hacking – Using ViewDNS ",
    image: img1,
    description: "Introduction to Malware Analysis.",
  },
  {
    id: 3,
    title: "Scanning Network Using Censys.io ",
    image: img1,
    description: "Introduction to Network Security.",
  },
  {
    id: 4,
    title: "Ethical Hacking - Using WhatWeb",
    image: img1,
    description: "Introduction to Web Security.",
  },
  {
    id: 5,
    title: "Digital Forensic Steganography",
    image: img1,
    description: "Introduction to Incident Response.",
  },
  {
    id: 6,
    title: "Footprinting Using Have I Been Pwned ",
    image: img1,
    description: "Introduction to Threat Intelligence.",
  },
  {
    id: 1,
    title: "Scanning Network",
    image: img1,
    description:
      "Introduction: Enumeration is the ordered listing of all items in a collection, often used in math and computer science.",
  },
  {
    id: 2,
    title: "Ethical Hacking – Using ViewDNS ",
    image: img1,
    description: "Introduction to Malware Analysis.",
  },
  {
    id: 3,
    title: "Scanning Network Using Censys.io ",
    image: img1,
    description: "Introduction to Network Security.",
  },
  {
    id: 4,
    title: "Ethical Hacking - Using WhatWeb",
    image: img1,
    description: "Introduction to Web Security.",
  },
  {
    id: 5,
    title: "Digital Forensic Steganography",
    image: img1,
    description: "Introduction to Incident Response.",
  },
  {
    id: 6,
    title: "Footprinting Using Have I Been Pwned ",
    image: img1,
    description: "Introduction to Threat Intelligence.",
  },
];

const Topic = () => {
  const navigate = useNavigate();
  const [topics, setTopics] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const response = await axios.get('http://localhost:5300/api/topic/getAllTopic'); // URL of the backend API
        if (Array.isArray(response.data)) {
          setTopics(response.data);
        } else {
          setError('Unexpected response format');
        }
      } catch (error) {
        setError('Failed to fetch topics');
      } finally {
        setLoading(false);
      }
    };

    fetchTopics();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <div className="flex w-full min-h-screen bg-gray-700 ">
        <nav className="w-1/6 bg-gray-800 text-white font-size-15 p-4 min-h-screen bg-gray-500">
          <h2 className="text-2xl font-bold mb-10">Dive Into Challenges..</h2>
          <ul>
            <li className="mb-5">
              <button className="w-full text-left px-4 py-2 bg-blue-600 rounded hover:bg-blue-700" onClick={() => navigate('/learn')}>Quiz Hour</button>
            </li>
            <li className="mb-5">
              <button className="w-full text-left px-4 py-2 bg-green-600 rounded hover:bg-green-700" onClick={() => navigate('/play')}>Check Rank</button>
            </li>
            <li className="mb-5">
              <button className="w-full text-left px-4 py-2 bg-yellow-600 rounded hover:bg-yellow-700" onClick={() => navigate('/practice')}>History</button>
            </li>
            <li className="mb-5">
              <button className="w-full text-left px-4 py-2 bg-purple-600 rounded hover:bg-purple-700" onClick={() => navigate('/practice')}>Hint</button>
            </li>
          </ul>
        </nav>

        <div className="flex-grow p-12">
          <div className="bg-gray-200 p-10 mb-6 rounded-lg shadow-lg text-center">
            <h1 className="text-4xl font-bold text-gray-800">Welcome to the Cybersecurity Learning Platform</h1>
            <p className="mt-4 text-gray-600">Explore the topics below to start your journey in cybersecurity.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">
            {topics.map(topic => (
              <div key={topic.id} className="relative bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img src={img1} alt={topic.title} className="w-full h-48 object-cover" />
                <div className="p-3">
                  <h3 className="text-lg font-bold text-gray-800">{topic.title}</h3>
                  <p className="text-gray-600">{topic.description}</p>
                  <button
                    onClick={() => navigate(`/topic/${topic.id}`)}
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
