import React, { useState, useEffect } from "react";
import img from "../assets/img.png";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchTopic } from "../redux/topicSlice";
import { fetchQuestions } from "../redux/questionSlice";
import { createSelector } from "reselect";

// Selectors
const selectTopicById = (state, topicId) =>
  state.topicSlice?.topics?.Result?.Topics?.find(
    (topic) => topic._id === topicId
  ) || [];

const selectQuestionsByTopic = (state, topicId) =>
  state.questionSlice?.questionsByTopic[topicId] || [];

const makeSelectTopicById = () =>
  createSelector(
    [selectTopicById, (state, topicId) => topicId],
    (topic) => topic
  );

const makeSelectQuestionsByTopic = () =>
  createSelector(
    [selectQuestionsByTopic, (state, topicId) => topicId],
    (questionsByTopic) => questionsByTopic
  );

const MySwal = withReactContent(Swal);

// Component
function CtfDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();

  // Fetch data on mount
  useEffect(() => {
    dispatch(fetchTopic(id));
    const token = localStorage.getItem("accessToken");
    if (token) {
      dispatch(fetchQuestions({ topicId: id, token }));
    }
  }, [dispatch, id]);

  const apiURL = "http://localhost:5300";

  // Selectors
  const selectTopic = makeSelectTopicById();
  const selectQuestions = makeSelectQuestionsByTopic();

  const Topic = useSelector((state) => selectTopic(state, id));
  const questionsObject = useSelector((state) => selectQuestions(state, id));
  const questions = Object.values(questionsObject || {});
  const actualQuestions = questions[3]?.Questions || [];
  console.log("questionshere", actualQuestions);

  // State for answers and feedbacks
  const [answers, setAnswers] = useState({});
  const [feedbacks, setFeedbacks] = useState({});

  const [windowDimensions, setWindowDimensions] = useState({
    width: 0,
    height: 0,
  });

  // Handle answer submission
  const handleSubmit = async (quizId, answer) => {
    if (answer.trim() === "") {
      MySwal.fire({
        icon: "warning",
        title: "Empty Answer",
        text: "Please enter your answer.",
      });
      return;
    }

    const token = localStorage.getItem("accessToken");
    const userData = {
      quizId: quizId,
      answer: answer,
    };

    try {
      const response = await axios.post(
        `${apiURL}/api/track/submitAnswer/`,
        userData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("The response is", response);

      const isCorrect = checkAnswer(quizId, answer);
      setAnswers({ ...answers, [quizId]: "" });
      setFeedbacks({ ...feedbacks, [quizId]: isCorrect });

      MySwal.fire({
        icon: "success",
        title: "Flag Captured successfully",
        text: `You earned ${response.data.Result.points} points!`,
      });

      setTimeout(() => {
        setFeedbacks((prevFeedbacks) => ({
          ...prevFeedbacks,
          [quizId]: null,
        }));
      }, 3000);
    } catch (error) {
      console.error("Error submitting answer:", error);

      if (error.response.status === 400) {
        if (
          error?.response?.data?.ErrorMessage[0]?.message === "Incorrect Answer"
        ) {
          MySwal.fire({
            icon: "error",
            title: "Incorrect Answer",
            text: "Your answer is incorrect.",
          });
        } else if (
          error?.response?.data?.ErrorMessage[0]?.message === "Quiz not found"
        ) {
          MySwal.fire({
            icon: "error",
            title: "Quiz Not Found",
            text: "The quiz associated with this question was not found.",
          });
        } else if (
          error?.response?.data?.ErrorMessage[0]?.message ===
          "Quiz question not found"
        ) {
          MySwal.fire({
            icon: "error",
            title: "Quiz Question Not Found",
            text: "The question associated with this quiz was not found.",
          });
        } else if (
          error?.response?.data?.ErrorMessage[0]?.message ===
          "Flag already Captured"
        ) {
          MySwal.fire({
            icon: "error",
            title: "Flag Already Captured",
            text: "The flag for this question has already been captured.",
          });
        } else {
          MySwal.fire({
            icon: "error",
            title: "Error",
            text: error.message || "Error submitting answer.",
          });
        }
      } else if (error.response.status === 403) {
        MySwal.fire({
          icon: "error",
          title: "Unauthorized",
          text: "User not authorized. Please login again.",
        });
      } else if (error.request) {
        MySwal.fire({
          icon: "error",
          title: "Request Error",
          text: "No response received from the server. Please try again later.",
        });
      } else {
        MySwal.fire({
          icon: "error",
          title: "Error",
          text: error.message || "Error submitting answer.",
        });
      }
    }
  };

  // Handle window resize
  useEffect(() => {
    const updateWindowDimensions = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateWindowDimensions();
    window.addEventListener("resize", updateWindowDimensions);

    return () => window.removeEventListener("resize", updateWindowDimensions);
  }, []);

  if (!Topic) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-800 text-white">
        Topic not found
      </div>
    );
  }

  return (
    <>
      <div className="relative h-50">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${img})`,
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-75"></div>
        </div>

        <div className="relative z-10 flex flex-col justify-center items-center h-full text-white">
          <h1 className="text-4xl font-bold mb-4 mt-10">{Topic?.topic}</h1>
          <p className="text-lg mb-8">{Topic?.description}</p>
          <a
            href="/topic"
            className="mb-10 px-4 py-2 bg-white text-gray-800 font-semibold rounded hover:bg-gray-300 transition duration-300"
          >
            Finish
          </a>
        </div>
      </div>

      <div className="p-6 bg-white shadow-lg">
        <div className="flex">
          <div className="w-1/2 p-4">
            {actualQuestions && actualQuestions.length > 0 ? (
              actualQuestions.map((question) => (
                <div key={question._id} className="mb-8">
                  <h1 className="text-xl mb-4">
                    {question?.quiz[0]?.question}
                  </h1>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleSubmit(question?._id, answers[question?._id] || "");
                    }}
                    className="flex items-center space-x-2 mb-4"
                  >
                    <input type="hidden" name="quizId" value={question?._id} />
                    <input
                      type="text"
                      value={answers[question?._id] || ""}
                      onChange={(e) =>
                        setAnswers({
                          ...answers,
                          [question?._id]: e.target.value,
                        })
                      }
                      placeholder="Enter your answer"
                      className="p-2 border border-gray-300 rounded-lg flex-grow focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                      type="submit"
                      className="p-2 rounded-lg bg-green-500 text-white hover:bg-green-600 transition duration-300"
                    >
                      Submit
                    </button>
                  </form>
                  {feedbacks[question._id] !== null &&
                    feedbacks[question._id] !== undefined && (
                      <div
                        className={`p-2 rounded-lg ${
                          feedbacks[question._id]
                            ? "bg-green-500"
                            : "bg-red-500"
                        } text-white`}
                      >
                        {feedbacks[question._id] ? "Correct!" : "Wrong!"}
                      </div>
                    )}
                </div>
              ))
            ) : (
              <p>No questions available for this topic.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default CtfDetail;
