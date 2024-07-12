import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import hacker from "../assets/hacker.jpg";

const AdminProfile = () => {
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen p-4">
      <main className="w-full ">
        <section className="relative bg-white shadow-md rounded-3xl h-full ">
          <div className="flex items-center space-x-6  bg-gradient-to-r from-sky-500 to-sky-200 rounded-t-2xl h-52">
            <img
              src={hacker}
              alt="Profile"
              className="h-40 w-40 mb-5 object-cover rounded-full border-[6px] border-white absolute top-32 left-4"
            />
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded-md absolute top-56 right-4"
              onClick={() => navigate("/admin")}
            >
              Dashboard
            </button>
          </div>
          <div className="flex-grow mt-20 ml-4">
            <h1 className="text-xl font-semibold">Clay Jensen</h1>
            <p>Northridge, California(CA), 91326, USA</p>
            <p>
              Age: 24 | Gender: Male | Status:{" "}
              <span className="text-green-500">Active</span>
            </p>
          </div>
          <div className="mt-6 ml-4">
            <p className="mb-4">
              <strong>Role:</strong> Administrator
            </p>
            <p className="mb-4">
              <strong>Email:</strong> clay.jensen@email.com
            </p>
            <p className="mb-4">
              <strong>Contact:</strong> (+61) (45687) (45687)
            </p>
            <p className="mb-4 pb-4">
              <strong>Region:</strong> Central US
            </p>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-lg font-semibold ml-4">Your Activities</h2>
          <div className="bg-white shadow-md rounded-lg p-6 mt-4">
            <p>You added a role 'Sales Lead'</p>
            <p>
              You assigned task 'API Integration' to a role 'Technical Lead -
              BE'
            </p>
          </div>
        </section>
      </main>

      {isEditModalOpen && (
        <EditProfileModal onClose={() => setEditModalOpen(false)} />
      )}
    </div>
  );
};

const EditProfileModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg w-full h-full max-w-2xl p-6 relative">
        <button
          className="absolute top-2 right-2 text-gray-500"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-xl font-semibold mb-4">Edit Profile</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              className="w-full p-2 border rounded-md"
              defaultValue="Clay Jensen"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Date of birth</label>
            <input
              type="date"
              className="w-full p-2 border rounded-md"
              defaultValue="1998-09-04"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Gender</label>
            <select className="w-full p-2 border rounded-md">
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full p-2 border rounded-md"
              defaultValue="clay.jensen@email.com"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Contact</label>
            <input
              type="tel"
              className="w-full p-2 border rounded-md"
              defaultValue="(+61) (45687) (45687)"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Region</label>
            <input
              type="text"
              className="w-full p-2 border rounded-md"
              defaultValue="Central US"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Address</label>
            <input
              type="text"
              className="w-full p-2 border rounded-md"
              defaultValue="Northridge, California(CA), 91326, USA"
            />
          </div>
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              className="px-4 py-2 bg-red-500 text-white rounded-md"
              onClick={onClose}
            >
              Discard changes
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminProfile;
