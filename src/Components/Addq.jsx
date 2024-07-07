// import React, { useState } from 'react';
// import axios from 'axios';
// import { FiPlus } from 'react-icons/fi';
// import Swal from 'sweetalert2';

// const Addq = () => {
//   const [questionTitle, setQuestionTitle] = useState('');
//   const [introduction, setIntroduction] = useState('');
//   const [tools, setTools] = useState('');
//   const [scenario, setScenario] = useState('');
//   const [process, setProcess] = useState('');
//   const [quiz, setQuiz] = useState([{ question: '', answer: '', hint: '' }]);
//   const [showQuizForm, setShowQuizForm] = useState(false);
//   const [quizDetails, setQuizDetails] = useState({ question: '', answer: '', hint: '' });

//   const handleSubmit = async () => {
//     // Validate main form fields
//     if (!questionTitle || !introduction || !tools || !scenario || !process) {
//       Swal.fire({
//         icon: 'error',
//         title: 'Oops...',
//         text: 'Please fill out all fields in the main form!',
//       });
//       return;
//     }

//     // Validate quiz questions
//     for (const q of quiz) {
//       if (!q.question || !q.answer || !q.hint) {
//         Swal.fire({
//           icon: 'error',
//           title: 'Oops...',
//           text: 'Please fill out all fields for each quiz question!',
//         });
//         return;
//       }
//     }

//     try {
//       const response = await axios.post('API_ENDPOINT', {
//         title: questionTitle,
//         introduction,
//         tools,
//         scenario,
//         process,
//         quiz,
//       });

//       if (response.status === 200) {
//         Swal.fire({
//           position: 'middle-center',
//           icon: 'success',
//           title: 'Question has been added',
//           showConfirmButton: false,
//           timer: 1500,
//         });

//         // Resetting the form fields
//         setQuestionTitle('');
//         setIntroduction('');
//         setTools('');
//         setScenario('');
//         setProcess('');
//         setQuiz([{ question: '', answer: '', hint: '' }]);
//         setQuizDetails({ question: '', answer: '', hint: '' });
//         setShowQuizForm(false);
//       } else {
//         Swal.fire({
//           icon: 'error',
//           title: 'Error',
//           text: 'Something went wrong!',
//         });
//       }
//     } catch (error) {
//       Swal.fire({
//         icon: 'error',
//         title: 'Error',
//         text: 'Something went wrong!',
//       });
//     }
//   };

//   const addQuizQuestion = () => {
//     // Validate quiz question fields
//     if (!quizDetails.question || !quizDetails.answer || !quizDetails.hint) {
//       Swal.fire({
//         icon: 'error',
//         title: 'Oops...',
//         text: 'Please fill out all fields in the quiz question!',
//       });
//       return;
//     }

//     setQuiz([...quiz, quizDetails]);
//     setQuizDetails({ question: '', answer: '', hint: '' });
//   };

//   const handleQuizChange = (e, index, field) => {
//     const newQuiz = [...quiz];
//     newQuiz[index][field] = e.target.value;
//     setQuiz(newQuiz);
//   };

//   return (
//     <div className="bg-gray-100 font-verdana flex items-center justify-center min-h-screen py-8 px-4">
//       <div className={`bg-white p-8 rounded-lg shadow-lg w-full max-w-lg transform transition-transform duration-500 ${showQuizForm ? '-translate-x-[50px]' : ''}`}>
//         <form className="space-y-6">
//           <div>
//             <label htmlFor="question-title" className="text-2xl font-semibold block text-gray-700">Title</label>
//             <input
//               id="question-title"
//               name="question-title"
//               type="text"
//               value={questionTitle}
//               onChange={(e) => setQuestionTitle(e.target.value)}
//               className="text-[17px] h-12 mt-1 block w-full px-4 py-1 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-yellow-600 focus:border-yellow-600"
//               placeholder="Enter question title..."
//               required
//             />
//           </div>

//           <div>
//             <label htmlFor="introduction" className="text-xl block font-semibold text-gray-700">Introduction</label>
//             <textarea
//               id="introduction"
//               name="introduction"
//               value={introduction}
//               onChange={(e) => setIntroduction(e.target.value)}
//               rows="2"
//               className="text-[17px] mt-1 block w-full px-4 py-1 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-yellow-600 focus:border-yellow-600 resize-none"
//               placeholder="Enter introduction..."
//               required
//             ></textarea>
//           </div>

//           <div>
//             <label htmlFor="tools" className="text-xl block font-semibold text-gray-700">Tools</label>
//             <textarea
//               id="tools"
//               name="tools"
//               value={tools}
//               onChange={(e) => setTools(e.target.value)}
//               rows="2"
//               className="text-[17px] mt-1 block w-full px-4 py-1 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-yellow-600 focus:border-yellow-600 resize-none"
//               placeholder="Enter tools..."
//               required
//             ></textarea>
//           </div>

//           <div>
//             <label htmlFor="scenario" className="text-xl block font-semibold text-gray-700">Scenario</label>
//             <textarea
//               id="scenario"
//               name="scenario"
//               value={scenario}
//               onChange={(e) => setScenario(e.target.value)}
//               rows="2"
//               className="text-[17px] mt-1 block w-full px-4 py-1 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-yellow-600 focus:border-yellow-600 resize-none"
//               placeholder="Enter scenario..."
//               required
//             ></textarea>
//           </div>

//           <div>
//             <label htmlFor="process" className="text-xl block font-semibold text-gray-700">Process</label>
//             <textarea
//               id="process"
//               name="process"
//               value={process}
//               onChange={(e) => setProcess(e.target.value)}
//               rows="2"
//               className="text-[17px] mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-yellow-600 focus:border-yellow-600 resize-none"
//               placeholder="Enter process..."
//               required
//             ></textarea>
//           </div>

//           {/* Quiz Questions Section */}
//           {quiz.map((q, index) => (
//             <div key={index} className="bg-white p-4 rounded-lg shadow-lg mt-4">
//               <h3 className="text-[20px] font-semibold text-gray-700">Quiz Question {index + 1}</h3>
//               <div className="space-y-2">
//                 <div>
//                   <label htmlFor={`quiz-question-${index}`} className="text-[18px] block font-semibold text-gray-700">Question</label>
//                   <input
//                     id={`quiz-question-${index}`}
//                     name={`quiz-question-${index}`}
//                     type="text"
//                     value={q.question}
//                     onChange={(e) => handleQuizChange(e, index, 'question')}
//                     className="text-[16px] h-12 mt-1 block w-full px-4 py-1 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-yellow-600 focus:border-yellow-600"
//                     placeholder="Enter quiz question..."
//                     required
//                   />
//                 </div>

//                 <div>
//                   <label htmlFor={`quiz-answer-${index}`} className="text-xl block font-semibold text-gray-700">Answer</label>
//                   <input
//                     id={`quiz-answer-${index}`}
//                     name={`quiz-answer-${index}`}
//                     type="text"
//                     value={q.answer}
//                     onChange={(e) => handleQuizChange(e, index, 'answer')}
//                     className="text-[16px] h-12 mt-1 block w-full px-4 py-1 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-yellow-600 focus:border-yellow-600"
//                     placeholder="Enter quiz answer..."
//                     required
//                   />
//                 </div>

//                 <div>
//                   <label htmlFor={`quiz-hint-${index}`} className="text-xl block font-semibold text-gray-700">Hint</label>
//                   <input
//                     id={`quiz-hint-${index}`}
//                     name={`quiz-hint-${index}`}
//                     type="text"
//                     value={q.hint}
//                     onChange={(e) => handleQuizChange(e, index, 'hint')}
//                     className="text-[16px] h-12 mt-1 block w-full px-4 py-1 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-yellow-600 focus:border-yellow-600"
//                     placeholder="Enter quiz hint..."
//                   />
//                 </div>
//               </div>
//             </div>
//           ))}

//           {/* Add Quiz Question Button */}
//           <div className="flex justify-center items-center space-x-4">
//             <button
//               type="button"
//               onClick={() => setShowQuizForm(true)}
//               className="text-[17px] w-56 h-12 flex items-center justify-center px-4 py-2 bg-yellow-600 text-white rounded-md shadow-md hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-600 font-bold"
//             >
//               <FiPlus className="mr-2 " />
//               Add Quiz Question
//             </button>
//           </div>

//           {/* Submit Button */}
//           <div className="flex justify-center items-center space-x-4 mt-4">
//             <button
//               type="button"
//               onClick={handleSubmit}
//               className="text-[17px] w-56 h-12 flex items-center px-4 py-2 bg-yellow-600 text-white rounded-md shadow-md hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-600 font-bold"
//             >
//               <FiPlus className="mr-2" />
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>

//       {/* Quiz Question Input Form */}
//       {showQuizForm && (
//         <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg ml-8">
//           <div className="space-y-6">
//             <div>
//               <label htmlFor="quiz-question" className="text-xl block font-semibold text-gray-700">Question</label>
//               <input
//                 id="quiz-question"
//                 name="quiz-question"
//                 type="text"
//                 value={quizDetails.question}
//                 onChange={(e) => setQuizDetails({ ...quizDetails, question: e.target.value })}
//                 className="text-[16px]l h-12 mt-1 block w-full px-4 py-1 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-yellow-600 focus:border-yellow-600"
//                 placeholder="Enter quiz question..."
//                 required
//               />
//             </div>

//             <div>
//               <label htmlFor="quiz-answer" className="text-xl block font-semibold text-gray-700">Answer</label>
//               <input
//                 id="quiz-answer"
//                 name="quiz-answer"
//                 type="text"
//                 value={quizDetails.answer}
//                 onChange={(e) => setQuizDetails({ ...quizDetails, answer: e.target.value })}
//                 className="text-[16px] h-12 mt-1 block w-full px-4 py-1 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-yellow-600 focus:border-yellow-600"
//                 placeholder="Enter quiz answer..."
//                 required
//               />
//             </div>

//             <div>
//               <label htmlFor="quiz-hint" className="text-xl block font-semibold text-gray-700">Hint</label>
//               <input
//                 id="quiz-hint"
//                 name="quiz-hint"
//                 type="text"
//                 value={quizDetails.hint}
//                 onChange={(e) => setQuizDetails({ ...quizDetails, hint: e.target.value })}
//                 className="text-[16px] h-12 mt-1 block w-full px-4 py-1 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-yellow-600 focus:border-yellow-600"
//                 placeholder="Enter quiz hint..."
//               />
//             </div>

//             {/* Add More Quiz Question Button */}
//             <button
//               type="button"
//               onClick={addQuizQuestion}
//               className="text-lg w-56 h-12 flex items-center px-4 py-2 bg-yellow-600 text-white rounded-md shadow-md hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-600 font-bold"
//             >
//               <FiPlus className="mr-2" />
//               Add More
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Addq;

import React, { useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const Addq = () => {
  const [title, setTitle] = useState('');
  const [introduction, setIntroduction] = useState('');
  const [tools, setTools] = useState('');
  const [scenario, setScenario] = useState('');
  const [process, setProcess] = useState('');
  const [topic, setTopic] = useState('');
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
        <div className="mb-4">
          <label className="block text-gray-700">Topic</label>
          <textarea
            name="topic"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
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
          className="bg-blue-500 text-white px-4 py-3 rounded mt-2 hover:bg-blue-700 "
        >
          Add More Question
        </button>
        <button
          type="submit"
          className="bg-green-500 text-white px-10 py-3 rounded mt-4 float-right hover:bg-green-700"
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

export default Addq;
