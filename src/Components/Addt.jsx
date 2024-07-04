import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { createTopic, fetchTopic } from "../redux/topicSlice";

const Addt = () => {
  const dispatch = useDispatch();
  const [topic, setTopic] = useState("");
  const [description, setDescription] = useState("");
  const [difficulty, setDifficulty] = useState("");

  const handleAddTopic = async (topic, description, difficulty) => {
    try {
      console.log("topics to be sent", topic, description, difficulty);
      const resultAction = await dispatch(
        createTopic({ topic, description, difficulty })
      );
      if (createTopic.fulfilled.match(resultAction)) {
        const { StatusCode, Result } = resultAction.payload;
        if (StatusCode === 200) {
          Swal.fire({
            icon: "success",
            title: "Success!",
            text: Result.message,
            timer: 1500,
            showConfirmButton: false,
          });
          dispatch(fetchTopic());
        } else {
          Swal.fire({
            icon: "warning",
            title: "Warning!",
            text: `Received unexpected status code: ${StatusCode}`,
          });
        }
      } else if (createTopic.rejected.match(resultAction)) {
        const errorMessage = resultAction.error.message;
        Swal.fire({
          icon: "error",
          title: "Error",
          text: errorMessage,
        });
      }
    } catch (error) {
      console.error("Failed to create topic:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "An error occurred while creating the topic. Please try again later.",
      });
    }
  };

  const handleClick = () => {
    if (!topic || !description || !difficulty) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill out all fields!",
      });
    } else {
      handleAddTopic(topic, description, difficulty);
    }
  };

  return (
    <div className="bg-gray-100 font-[verdana] flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg h-auto w-full max-w-lg">
        <form className="space-y-6">
          <div>
            <label
              htmlFor="topic"
              className="text-[24px] font-semibold block text-gray-700"
            >
              Title
            </label>
            <input
              id="topic"
              name="topic"
              type="text"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="text-[20px] h-[50px] mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-yellow-600 focus:border-yellow-600"
              placeholder="Enter topic title..."
            />
          </div>
          <div>
            <label
              htmlFor="description"
              className="text-[24px] block font-semibold text-gray-700"
            >
              Description
            </label>
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
          <div>
            <label
              htmlFor="difficulty"
              className="text-[24px] block font-semibold text-gray-700"
            >
              Difficulty
            </label>
            <select
              id="difficulty"
              name="difficulty"
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
              className="text-[20px] mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-yellow-600 focus:border-yellow-600"
            >
              <option value="" disabled>
                Select difficulty...
              </option>
              <option value="Easy" name="Easy">
                Easy
              </option>
              <option value="Medium" name="Medium">
                Medium
              </option>
              <option value="Hard" name="Hard">
                Hard
              </option>
              <option value="Advanced" name="Advanced">
                Advanced
              </option>
            </select>
          </div>

          <div className="flex justify-center items-center mt-4">
            <button
              type="button"
              onClick={handleClick}
              className="text-[20px] w-[220px] h-[55px] flex items-center px-4 py-2 bg-yellow-600 text-white rounded-md shadow-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-600 font-bold"
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
