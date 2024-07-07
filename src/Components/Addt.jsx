import React, { useState } from 'react';
import { FiChevronDown, FiPlus } from 'react-icons/fi';
import Swal from 'sweetalert2';
import axios from 'axios';

const Addt = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [hoveredDifficulty, setHoveredDifficulty] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleClick = async () => {
    if (!title || !description || !difficulty) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill out all fields!",
      });
    } else {
      try {
        await axios.post('http://localhost:5300/api/topic/createTopic', {
          title,
          description,
          difficulty,
        });
        Swal.fire({
          position: 'middle-center',
          icon: 'success',
          title: 'Your topic has been added',
          showConfirmButton: false,
          timer: 1500,
        });
        // Optionally clear the form fields
        setTitle('');
        setDescription('');
        setDifficulty('');
      } catch (error) {
        console.error('Error adding topic:', error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Failed to add topic!',
        });
      }
    }
  };

  const handleDifficultyChange = (difficulty) => {
    setDifficulty(difficulty);
    setDropdownOpen(false);
  };

  return (
    <div className="bg-gray-100 font-[verdana] flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg h-auto w-full max-w-lg">
        <form className="space-y-6">
          <div>
            <label htmlFor="topic-title" className="text-24px font-semibold block text-gray-700">Title</label>
            <input
              id="topic"
              name="topic"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="text-20px h-50px mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-yellow-600 focus:border-yellow-600"
              placeholder="Enter topic title..."
            />
          </div>
          <div>
            <label htmlFor="description" className="text-24px block font-semibold text-gray-700">Description</label>
            <textarea
              id="description"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="4"
              className="text-20px mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-yellow-600 focus:border-yellow-600 resize-none"
              placeholder="Enter description..."
            ></textarea>
          </div>
          <div className="relative group">
            <label htmlFor="difficulty" className="text-24px block font-semibold text-gray-700">Difficulty</label>
            <div className="flex items-center mt-1 w-full border border-gray-300 rounded-md shadow-md focus-within:ring-yellow-600 focus-within:border-yellow-600">
              <input
                id="difficulty"
                name="difficulty"
                type="text"
                value={difficulty}
                readOnly
                className="text-20px block w-full px-4 py-2 focus:outline-none cursor-pointer"
                placeholder={hoveredDifficulty || "Select difficulty..."}
                onFocus={() => setDropdownOpen(true)}
              />
              <FiChevronDown className="mx-2 text-gray-400 cursor-pointer" onClick={() => setDropdownOpen(!dropdownOpen)} />
            </div>
            {dropdownOpen && (
              <div className="absolute mt-1 w-full">
                <div className="bg-white border border-gray-300 rounded-md shadow-lg">
                  <button
                    type="button"
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                    onMouseEnter={() => setHoveredDifficulty('Easy')}
                    onMouseLeave={() => setHoveredDifficulty('')}
                    onClick={() => handleDifficultyChange('Easy')}
                  >
                    Easy
                  </button>
                  <button
                    type="button"
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                    onMouseEnter={() => setHoveredDifficulty('Medium')}
                    onMouseLeave={() => setHoveredDifficulty('')}
                    onClick={() => handleDifficultyChange('Medium')}
                  >
                    Medium
                  </button>
                  <button
                    type="button"
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                    onMouseEnter={() => setHoveredDifficulty('Hard')}
                    onMouseLeave={() => setHoveredDifficulty('')}
                    onClick={() => handleDifficultyChange('Hard')}
                  >
                    Hard
                  </button>
                  <button
                    type="button"
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                    onMouseEnter={() => setHoveredDifficulty('Advanced')}
                    onMouseLeave={() => setHoveredDifficulty('')}
                    onClick={() => handleDifficultyChange('Advanced')}
                  >
                    Advanced
                  </button>
                </div>
              </div>
            )}
          </div>
          <div className="flex justify-center items-center mt-4">
            <button
              type="button"
              onClick={handleClick}
              className="text-20px w-220px h-55px flex items-center px-4 py-2 bg-yellow-600 text-white rounded-md shadow-md hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-600 font-bold"
            >
              <FiPlus className="mr-2" />
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Addt;
