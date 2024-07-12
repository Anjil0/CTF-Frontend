import React, { useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const QuizForm = () => {
  const [title, setTitle] = useState('');
  const [introduction, setIntroduction] = useState('');
  const [tools, setTools] = useState('');
  const [scenario, setScenario] = useState('');
  const [process, setProcess] = useState('');
  const [questions, setQuestions] = useState([{ question: '', answer: '', hint: '' }]);

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const newQuestions = [...questions];
    newQuestions[index][name] = value;
    setQuestions(newQuestions);
  };

  const handleAddQuestion = () => {
    setQuestions([...questions, { question: '', answer: '', hint: '' }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    MySwal.fire({
      title: <p>Submitted Data</p>,
      html: (
        <div>
          <p><strong>Title:</strong> {title}</p>
          <p><strong>Introduction:</strong> {introduction}</p>
          {tools && <p><strong>Tools:</strong> {tools}</p>}
          {scenario && <p><strong>Scenario:</strong> {scenario}</p>}
          {process && <p><strong>Process:</strong> {process}</p>}
          <h3>Questions</h3>
          {questions.map((q, index) => (
            <div key={index} className="mb-2">
              <p><strong>Question {index + 1}:</strong> {q.question}</p>
              <p><strong>Answer:</strong> {q.answer}</p>
              {q.hint && <p><strong>Hint:</strong> {q.hint}</p>}
            </div>
          ))}
        </div>
      ),
      icon: 'success',
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-bold mb-4">Quiz Form</h1>
      <form onSubmit={handleSubmit}>
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

        {questions.map((q, index) => (
          <div key={index} className="mb-4 p-4 border border-gray-200 rounded bg-gray-50">
            <h2 className="text-lg font-semibold mb-2">Quiz Question {index + 1}</h2>
            <div className="mb-2">
              <label className="block text-gray-700">Question</label>
              <input
                type="text"
                name="question"
                value={q.question}
                onChange={(e) => handleInputChange(e, index)}
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
                onChange={(e) => handleInputChange(e, index)}
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
                onChange={(e) => handleInputChange(e, index)}
                className="w-full mt-2 p-2 border border-gray-300 rounded"
              />
            </div>
          </div>
        ))}

        <button
          type="button"
          onClick={handleAddQuestion}
          className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
        >
          Add More Question
        </button>
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded mt-4"
        >
          Submit
        </button>
      </form>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Submitted Questions</h2>
        {questions.map((q, index) => (
          <div key={index} className="mb-4 p-4 border border-gray-200 rounded bg-gray-50">
            <h3 className="font-semibold">Question {index + 1}</h3>
            <p><strong>Question:</strong> {q.question}</p>
            <p><strong>Answer:</strong> {q.answer}</p>
            {q.hint && <p><strong>Hint:</strong> {q.hint}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizForm;
