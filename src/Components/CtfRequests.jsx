import React, { useState } from "react";
import { Link } from "react-router-dom";

const AdminPanel = () => {
  const [requests, setRequests] = useState([
    {
      id: 1,
      name: "Rhijula Pradhan",
      email: "rhijulapradhan@gmail.com",
      status: "pending",
    },
    {
      id: 2,
      name: "Ronisha Shrestha",
      email: "ronishashrestha@gmail.com",
      status: "pending",
    },
    // { id: 3, name: 'Request 3', status: 'pending' },
  ]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">User Requests</h1>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full leading-normal">
          <thead>
            <tr>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Name
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Email
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Status
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {requests.map((request) => (
              <tr key={request.id}>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">
                    {request.name}
                  </p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">
                    {request.email}
                  </p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <span
                    className={`relative inline-block px-3 py-1 font-semibold leading-tight ${
                      request.status === "Pending"
                        ? "text-yellow-900"
                        : request.status === "Accepted"
                        ? "text-green-900"
                        : "text-red-900"
                    }`}
                  >
                    <span
                      aria-hidden
                      className={`absolute inset-0 ${
                        request.status === "Pending"
                          ? "bg-yellow-200"
                          : request.status === "Accepted"
                          ? "bg-green-200"
                          : "bg-red-200"
                      } opacity-50 rounded-full`}
                    ></span>
                    <span className="relative">{request.status}</span>
                  </span>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <button
                    className="bg-green-500 text-white py-2 px-4 rounded-lg mr-2"
                    onClick={() => handleAccept(request.id)}
                    disabled={request.status !== "Pending"}
                  >
                    <Link to={`/adminrequests/${request.id}`}>View</Link>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPanel;
