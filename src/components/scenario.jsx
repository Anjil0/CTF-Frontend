import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import NavBar from "./NavBar.jsx";

const scenarios = [
  {
    id: 1,
    description:
      "Scenario for Code Analysis. You are an ethical hacker tasked with gathering DNS information of a target domain using ViewDNS. Your job is to find the total number of DNS records and identify one mail server (MX) record.",
  },
  {
    id: 2,
    description:
      "Scenario for Malware Analysis. You have discovered a suspicious executable file on a client’s computer. Your task is to analyze the file, determine its behavior, and propose a mitigation strategy.",
  },
  {
    id: 3,
    description:
      "Scenario for Code Analysis. You are an ethical hacker tasked with gathering DNS information of a target domain using ViewDNS. Your job is to find the total number of DNS records and identify one mail server (MX) record.",
  },
  {
    id: 4,
    description:
      "Scenario for Malware Analysis. You have discovered a suspicious executable file on a client’s computer. Your task is to analyze the file, determine its behavior, and propose a mitigation strategy.",
  },
  {
    id: 5,
    description:
      "Scenario for Code Analysis. You are an ethical hacker tasked with gathering DNS information of a target domain using ViewDNS. Your job is to find the total number of DNS records and identify one mail server (MX) record.",
  },
  {
    id: 6,
    description:
      "Scenario for Malware Analysis. You have discovered a suspicious executable file on a client’s computer. Your task is to analyze the file, determine its behavior, and propose a mitigation strategy.",
  },
];

const Scenario = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const scenario = scenarios.find((s) => s.id === parseInt(id));

  if (!scenario) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-800 text-black">
        Scenario not found
      </div>
    );
  }

  return (
    <>
      <NavBar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-500 to-gray-900 text-black">
        <div className="max-w-2xl w-full p-5 bg-white rounded-lg shadow-lg">
          <div className="p-6">
            <h2 className="text-lg font-bold mb-4">Scenario</h2>
            <p className="text-sm mb-8">{scenario.description}</p>
            <button
              onClick={() => navigate("/newctfdetail")}
              className="px-6 py-3 bg-purple-500 text-white rounded-lg shadow-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition-colors duration-300"
            >
              Let's Play
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Scenario;
