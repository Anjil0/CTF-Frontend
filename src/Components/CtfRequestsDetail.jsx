import React, { useState } from "react";

const AdminRequestsPage = () => {
  // Sample data for user requests
  const [requests, setRequests] = useState([
    {
      id: 1,
      name: "Rhijula Pradhan",
      email: "rhijulapradhan@example.com",
      status: "Pending",
      introduction:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero vel dolor ultricies, et iaculis orci lacinia.",
    },
  ]);

  // Function to handle accept request
  const handleAccept = (id) => {
    setRequests(
      requests.map((request) =>
        request.id === id ? { ...request, status: "Accepted" } : request
      )
    );
  };

  // Function to handle decline request
  const handleDecline = (id) => {
    setRequests(
      requests.map((request) =>
        request.id === id ? { ...request, status: "Declined" } : request
      )
    );
  };

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
                Introduction
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {requests.map((request) => (
              <tr key={request.id}>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900">{request.name}</p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900">{request.email}</p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900">{request.introduction}</p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <span
                    className={`inline-block px-3 py-1 font-semibold leading-tight ${
                      request.status === "Pending"
                        ? "text-yellow-900 bg-yellow-200"
                        : request.status === "Accepted"
                        ? "text-green-900 bg-green-200"
                        : "text-red-900 bg-red-200"
                    }`}
                  >
                    {request.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Accept and Decline buttons outside of the table */}
      <div className="mt-4 flex justify-end">
        <button
          className="bg-green-500 text-white py-2 px-4 rounded-lg mr-2"
          onClick={() => handleAccept(requests[0].id)} // Assuming you only have one request for this example
          disabled={requests[0].status !== "Pending"} // Assuming you only have one request for this example
        >
          Accept
        </button>
        <button
          className="bg-red-500 text-white py-2 px-4 rounded-lg"
          onClick={() => handleDecline(requests[0].id)} // Assuming you only have one request for this example
          disabled={requests[0].status !== "Pending"} // Assuming you only have one request for this example
        >
          Decline
        </button>
      </div>
    </div>
  );
};

export default AdminRequestsPage;