// src/components/UserProfile.jsx

import React, { useState } from 'react';
import './parallax.css';

const UserProfile = ({ user }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isViewingAchievements, setIsViewingAchievements] = useState(false);
  const [editedUser, setEditedUser] = useState(user || {
    photo: '',
    name: 'Ronisha Shrestha',
    username: 'Ronii',
    password: 'Ronii',
    address: 'Dmk',
    phone: '54769745',
    email: 'shrestharonisha374@gmail.com',
    rank: '2'
  });

  const handleEditChange = (e) => {
    setEditedUser({ ...editedUser, [e.target.name]: e.target.value });
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
    // Update user information logic here
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="relative w-full h-full bg-gray-100 overflow-hidden">
        <div className="parallax-bg"></div>
        <div className="container mx-auto p-6 relative z-10">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-2/3 lg:w-1/2 xl:w-1/3 mx-auto transform transition duration-500 hover:scale-105">
            <div
              className={`w-24 h-24 rounded-full overflow-hidden border-4 border-blue-500 mx-auto transition-all duration-500 ${isHovered ? 'border-red-500' : ''}`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <img
                src={editedUser?.photo || 'default-profile.png'}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center mt-4">
              <h2 className="text-xl font-semibold text-gray-700">{editedUser?.name || 'John Doe'}</h2>
              <p className="text-gray-500">@{editedUser?.username || 'username'}</p>
              <p className="mt-2 text-gray-600">{editedUser?.address || 'Address'}</p>
              <p className="mt-2 text-gray-600">Phone: {editedUser?.phone || '000-000-0000'}</p>
              <p className="mt-2 text-gray-600">Email: {editedUser?.email || 'email@example.com'}</p>
              <p className="mt-2 text-gray-600">Rank: {editedUser?.rank || 'Rank'}</p>
            </div>
            <div className="mt-4 flex justify-around">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transform hover:scale-110 transition duration-300"
                onClick={() => setIsEditing(true)}
              >
                Edit Profile
              </button>
              <button
                className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-300 transform hover:scale-110 transition duration-300"
                onClick={() => setIsViewingAchievements(true)}
              >
                View Achievements
              </button>
            </div>
          </div>
        </div>

        {/* Edit Profile Modal */}
        {isEditing && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg w-3/4 md:w-1/2 lg:w-1/3">
              <h2 className="text-xl font-semibold mb-4">Edit Profile</h2>
              <form onSubmit={handleEditSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-700">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={editedUser.name}
                    onChange={handleEditChange}
                    className="w-full px-3 py-2 border rounded-lg"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Username</label>
                  <input
                    type="text"
                    name="username"
                    value={editedUser.username}
                    onChange={handleEditChange}
                    className="w-full px-3 py-2 border rounded-lg"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Password</label>
                  <input
                    type="password"
                    name="password"
                    value={editedUser.password}
                    onChange={handleEditChange}
                    className="w-full px-3 py-2 border rounded-lg"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Address</label>
                  <input
                    type="text"
                    name="address"
                    value={editedUser.address}
                    onChange={handleEditChange}
                    className="w-full px-3 py-2 border rounded-lg"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Phone</label>
                  <input
                    type="text"
                    name="phone"
                    value={editedUser.phone}
                    onChange={handleEditChange}
                    className="w-full px-3 py-2 border rounded-lg"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={editedUser.email}
                    onChange={handleEditChange}
                    className="w-full px-3 py-2 border rounded-lg"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Rank</label>
                  <input
                    type="text"
                    name="rank"
                    value={editedUser.rank}
                    onChange={handleEditChange}
                    className="w-full px-3 py-2 border rounded-lg"
                  />
                </div>
                <div className="flex justify-between">
                  <button
                    type="button"
                    className="bg-gray-300 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-400 transition duration-300"
                    onClick={() => setIsEditing(false)}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* View Achievements Modal */}
        {isViewingAchievements && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg w-3/4 md:w-1/2 lg:w-1/3">
              <h2 className="text-xl font-semibold mb-4">Achievements</h2>
              {/* Achievements content here */}
              <div className="mb-4">
                <p className="text-gray-700">Achievement 1</p>
                <p className="text-gray-700">Achievement 2</p>
                <p className="text-gray-700">Achievement 3</p>
              </div>
              <button
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-400 transition duration-300"
                onClick={() => setIsViewingAchievements(false)}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
