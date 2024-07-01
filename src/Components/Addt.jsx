import React, { useState } from 'react';
import { FiChevronDown, FiPlus } from 'react-icons/fi';
import Swal from 'sweetalert2';

const Addt = () => {
  const [topicTitle, setTopicTitle] = useState('');
  const [description, setDescription] = useState('');
  const [topicType, setTopicType] = useState('');
  const [hoveredType, setHoveredType] = useState('');

  const handleClick = () => {
    if (!topicTitle || !description || !topicType) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please fill out all fields!',
      });
    } else {
      Swal.fire({
        position: "middle-center",
        icon: "success",
        title: "Your work has been added",
        showConfirmButton: false,
        timer: 1500
      });
    }
  };

  return (
    <div className="bg-gray-100 font-[verdana] flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg h-auto w-full max-w-lg">
        <form className="space-y-6">
          <div>
            <label htmlFor="topic-title" className="text-[24px] font-semibold block text-gray-700">Title</label>
            <input
              id="topic-title"
              name="topic-title"
              type="text"
              value={topicTitle}
              onChange={(e) => setTopicTitle(e.target.value)}
              className="text-[20px] h-[50px] mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-yellow-600 focus:border-yellow-600"
              placeholder="Enter topic title..."
            />
          </div>
          <div>
            <label htmlFor="description" className="text-[24px] block font-semibold text-gray-700">Description</label>
            <textarea
              id="description"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="4"
              className="text-[20px] mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-yellow-600 focus:border-yellow-600 resize-none"
              placeholder="Enter description..."
            ></textarea>
          </div>
          <div className="relative group">
            <label htmlFor="question-type" className="text-[24px] block font-semibold text-gray-700">Topic Type</label>
            <div className="flex items-center mt-1 w-full border border-gray-300 rounded-md shadow-md focus-within:ring-yellow-600 focus-within:border-yellow-600">
              <input
                id="question-type"
                name="question-type"
                type="text"
                value={topicType}
                readOnly
                className="text-[20px] block w-full px-4 py-2 focus:outline-none"
                placeholder={hoveredType || "Select topic type..."}
              />
              <FiChevronDown className="mx-2 text-gray-400" />
            </div>
            <div className="absolute mt-1 w-full hidden group-hover:block">
              <div className="bg-white border border-gray-300 rounded-md shadow-lg">
                <button
                  type="button"
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                  onMouseEnter={() => setHoveredType('Technology')}
                  onMouseLeave={() => setHoveredType('')}
                  onClick={() => setTopicType('Technology')}
                >
                  Technology
                </button>
                <button
                  type="button"
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                  onMouseEnter={() => setHoveredType('Science')}
                  onMouseLeave={() => setHoveredType('')}
                  onClick={() => setTopicType('Science')}
                >
                  Science
                </button>
                <button
                  type="button"
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                  onMouseEnter={() => setHoveredType('Art')}
                  onMouseLeave={() => setHoveredType('')}
                  onClick={() => setTopicType('Art')}
                >
                  Art
                </button>
                <button
                  type="button"
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                  onMouseEnter={() => setHoveredType('Business')}
                  onMouseLeave={() => setHoveredType('')}
                  onClick={() => setTopicType('Business')}
                >
                  Business
                </button>
                <button
                  type="button"
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                  onMouseEnter={() => setHoveredType('Health')}
                  onMouseLeave={() => setHoveredType('')}
                  onClick={() => setTopicType('Health')}
                >
                  Health
                </button>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center mt-4">
            <button
              type="button"
              onClick={handleClick}
              className="text-[20px] w-[220px] h-[55px] flex items-center px-4 py-2 bg-yellow-600 text-white rounded-md shadow-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-600 font-bold"
            >
              <FiPlus className="mr-2" />
              Add Topic
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Addt;


