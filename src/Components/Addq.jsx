import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { addQuestions } from "../redux/questionSlice";
import { fetchTopic } from "../redux/topicSlice";
import Select from "react-select";

const Addq = () => {
  const [title, setTitle] = useState("");
  const [introduction, setIntroduction] = useState("");
  const [tools, setTools] = useState("");
  const [scenario, setScenario] = useState("");
  const [process, setProcess] = useState("");
  const [topic, setTopic] = useState(null);
  const [quiz, setQuiz] = useState([{ question: "", answer: "", hint: "" }]);

  const dispatch = useDispatch();
  const ourTopics = useSelector(
    (state) => state.topicSlice?.topics?.Result?.Topics
  );

  useEffect(() => {
    dispatch(fetchTopic());
  }, [dispatch]);

  const handleTopicChange = (topic) => {
    console.log(topic);
    setTopic(topic ? topic.label : null);
  };

  const handleQuestionChange = (e, index) => {
    const { name, value } = e.target;
    const newQuestions = [...quiz];
    newQuestions[index][name] = value;
    setQuiz(newQuestions);
    console.log("Updated Quiz State:", newQuestions);
  };

  const handleAddQuestions = async () => {
    try {
      if (!title || !introduction || !tools || !scenario || !process || !topic) {
        throw new Error("Title, Introduction, Tools, Scenario, Process, and Topic are required.");
      }

      const payload = { title, introduction, tools, scenario, process, quiz, topic };

      console.log("Payload being sent to backend:", payload);

      const resultAction = await dispatch(addQuestions(payload));

      if (addQuestions.fulfilled.match(resultAction)) {
        const { StatusCode, Result } = resultAction.payload.data;
        console.log("Result Action Payload:", resultAction.payload);
        if (StatusCode === 200) {
          Swal.fire({ icon: "success", title: "Success!", text: Result.message, timer: 1500, showConfirmButton: false });
        } else {
          Swal.fire({ icon: "warning", title: "Warning!", text: `Received unexpected status code: ${StatusCode}` });
        }
      } else if (addQuestions.rejected.match(resultAction)) {
        const errorMessage = resultAction.error.message;
        Swal.fire({ icon: "error", title: "Error", text: errorMessage });
      }
    } catch (error) {
      console.error("Failed to create topic:", error);
      Swal.fire({ icon: "error", title: "Error", text: "An error occurred while adding questions. Please try again later." });
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (!title || !introduction || !tools || !scenario || !process || !topic) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill out all fields!",
      });
    } else {
      handleAddQuestions();
    }

    console.log("The topic is ", topic);

    console.log(
      "The data is ",
      title,
      introduction,
      tools,
      scenario,
      process,
      topic,
      quiz
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-bold mb-4">Quiz Form</h1>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700">Title</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full mt-2 p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Introduction</label>
          <textarea
            name="introduction"
            value={introduction}
            onChange={(e) => setIntroduction(e.target.value)}
            className="w-full mt-2 p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Tools</label>
          <textarea
            name="tools"
            value={tools}
            onChange={(e) => setTools(e.target.value)}
            className="w-full mt-2 p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Scenario</label>
          <textarea
            name="scenario"
            value={scenario}
            onChange={(e) => setScenario(e.target.value)}
            className="w-full mt-2 p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Process</label>
          <textarea
            name="process"
            value={process}
            onChange={(e) => setProcess(e.target.value)}
            className="w-full mt-2 p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Topic</label>
          <Select
            options={ourTopics?.map((t) => ({ value: t._id, label: t.topic }))}
            name="topic"
            onChange={handleTopicChange}
            className="w-full mt-2 p-2 border border-gray-300 rounded"
            required
          />
        </div>
        {quiz.map((q, index) => (
          <div
            key={index}
            className="mb-4 p-4 border border-gray-200 rounded bg-gray-50"
          >
            <h2 className="text-lg font-semibold mb-2">
              Quiz Question {index + 1}
            </h2>
            <div className="mb-2">
              <label className="block text-gray-700">Question</label>
              <input
                type="text"
                name="question"
                value={q.question}
                onChange={(e) => handleQuestionChange(e, index)}
                className="w-full mt-2 p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-700">Answer</label>
              <input
                type="text"
                name="answer"
                value={q.answer}
                onChange={(e) => handleQuestionChange(e, index)}
                className="w-full mt-2 p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-700">Hint</label>
              <input
                type="text"
                name="hint"
                value={q.hint}
                onChange={(e) => handleQuestionChange(e, index)}
                className="w-full mt-2 p-2 border border-gray-300 rounded"
              />
            </div>
          </div>
        ))}
        <button
          type="submit"
          className="bg-green-500 text-white px-10 py-3 rounded mt-4 float-right hover:bg-green-700"
          onClick={handleClick}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Addq;
