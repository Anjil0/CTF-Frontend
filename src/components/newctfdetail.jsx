// import React, { useState, useEffect } from "react";
// import img from "../assets/img.png";
// import NavBar from "../components/NavBar";
// import { useSelector, useDispatch } from "react-redux";
// import { useParams } from "react-router-dom";
// import { fetchTopic } from "../redux/topicSlice";
// import { fetchQuestions } from "../redux/questionSlice";
// import { createSelector } from "reselect";

// const selectTopicById = (state, topicId) =>
//   state.topicSlice?.topics?.Result?.Topics || [];

// console.log("The topic by id is", selectTopicById);
// const selectQuestionsByTopic = (state, topicId) =>
//   state.questionSlice?.questionsByTopic[topicId]?.Result?.Questions || [];
// console.log("The questions by topic is", selectQuestionsByTopic);
// const makeSelectTopicById = () =>
//   createSelector(
//     [selectTopicById, (state, topicId) => topicId],
//     (topics, topicId) => topics.find((topic) => topic._id === topicId)
//   );

// const makeSelectQuestionsByTopic = () =>
//   createSelector(
//     [selectQuestionsByTopic, (state, topicId) => topicId],
//     (questions, topicId) => questions
//   );

// function CtfDetail() {
//   const { id } = useParams();
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchTopic(id));
//     const token = localStorage.getItem("accessToken");
//     if (token) {
//       dispatch(fetchQuestions({ topicId: id, token }));
//     }
//   }, [dispatch, id]);

//   const selectTopic = makeSelectTopicById();
//   const selectQuestions = makeSelectQuestionsByTopic();

//   const Topic = useSelector((state) => selectTopic(state, id));
//   const questions = useSelector((state) => selectQuestions(state, id));

//   console.log("Topics", Topic);
//   console.log("The token is", localStorage.getItem("accessToken"));
//   console.log("the questions", questions);

//   const [answers, setAnswers] = useState({});
//   const [feedbacks, setFeedbacks] = useState({});

//   const [windowDimensions, setWindowDimensions] = useState({
//     width: 0,
//     height: 0,
//   });

//   const handleSubmit = (questionId, answer) => {
//     const isCorrect = checkAnswer(questionId, answer);
//     setAnswers({ ...answers, [questionId]: answer });
//     setFeedbacks({ ...feedbacks, [questionId]: isCorrect });

//     setTimeout(() => setFeedbacks({ ...feedbacks, [questionId]: null }), 3000);
//   };

//   const checkAnswer = (questionId, answer) => {
//     return false;
//   };

//   useEffect(() => {
//     const updateWindowDimensions = () => {
//       setWindowDimensions({
//         width: window.innerWidth,
//         height: window.innerHeight,
//       });
//     };

//     updateWindowDimensions();
//     window.addEventListener("resize", updateWindowDimensions);

//     return () => window.removeEventListener("resize", updateWindowDimensions);
//   }, []);

//   if (!Topic) {
//     return (
//       <div className="flex items-center justify-center min-h-screen bg-gray-800 text-white">
//         Topic not found
//       </div>
//     );
//   }

//   return (
//     <>
//       {/* <NavBar /> */}
//       <div className="relative h-50">
//         <div
//           className="absolute inset-0 bg-cover bg-center"
//           style={{
//             backgroundImage: `url(${img})`,
//             backgroundColor: "rgba(0,0,0,0.5)",
//           }}
//         >
//           <div className="absolute inset-0 bg-black opacity-75"></div>
//         </div>

//         <div className="relative z-10 flex flex-col justify-center items-center h-full text-white">
//           <h1 className="text-4xl font-bold mb-4 mt-10">{Topic?.topic}</h1>
//           <p className="text-lg mb-8">{Topic?.description}</p>
//           <a
//             href="/topic"
//             className=" mb-10 px-4 py-2 bg-white text-gray-800 f
//             ont-semibold rounded hover:bg-gray-300 transition duration-300"
//           >
//             Finish
//           </a>
//         </div>
//       </div>

//       <div className="p-6 bg-white shadow-lg">
//         <div className="flex">
//           <div className="w-1/2 p-4">
//             {questions && questions.length > 0 ? (
//               questions.map((question) => (
//                 <div key={question._id} className="mb-8">
//                   <h1 className="text-xl mb-4">{question.title}</h1>
//                   <form
//                     onSubmit={(e) => {
//                       e.preventDefault();
//                       handleSubmit(question._id, answers[question._id] || "");
//                     }}
//                     className="flex items-center space-x-2 mb-4"
//                   >
//                     <input
//                       type="text"
//                       value={answers[question._id] || ""}
//                       onChange={(e) =>
//                         setAnswers({
//                           ...answers,
//                           [question._id]: e.target.value,
//                         })
//                       }
//                       placeholder="Enter your answer"
//                       className="p-2 border border-gray-300 rounded-lg flex-grow focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                     <button
//                       type="submit"
//                       className="p-2 rounded-lg bg-green-500 text-white hover:bg-green-600 transition duration-300"
//                     >
//                       Submit
//                     </button>
//                   </form>
//                   {feedbacks[question._id] !== null && (
//                     <div
//                       className={`p-2 rounded-lg ${
//                         feedbacks[question._id] ? "bg-green-500" : "bg-red-500"
//                       } text-white`}
//                     >
//                       {feedbacks[question._id] ? "Correct!" : "Wrong!"}
//                     </div>
//                   )}
//                 </div>
//               ))
//             ) : (
//               <p>No questions available for this topic.</p>
//             )}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default CtfDetail;
import React, { useState, useEffect } from "react";
import img from "../assets/img.png";
import NavBar from "../components/NavBar";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchTopic } from "../redux/topicSlice";
import { fetchQuestions } from "../redux/questionSlice";
import { createSelector } from "reselect";

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

function CtfDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTopic(id));
    const token = localStorage.getItem("accessToken");
    if (token) {
      dispatch(fetchQuestions({ topicId: id, token }));
    }
  }, [dispatch, id]);

  const selectTopic = makeSelectTopicById();
  const selectQuestions = makeSelectQuestionsByTopic();

  const Topic = useSelector((state) => selectTopic(state, id));
  const questionsObject = useSelector((state) => selectQuestions(state, id));
  const questions = Object.values(questionsObject || {});
  const actualQuestions = questions[3]?.Questions || [];

  console.log("Actual questions:", actualQuestions);

  console.log("Topics", Topic);
  console.log("The token is", localStorage.getItem("accessToken"));
  console.log("these are the questons :::::", questions);

  const [answers, setAnswers] = useState({});
  const [feedbacks, setFeedbacks] = useState({});

  const [windowDimensions, setWindowDimensions] = useState({
    width: 0,
    height: 0,
  });

  const handleSubmit = (questionId, answer) => {
    const isCorrect = checkAnswer(questionId, answer);
    setAnswers({ ...answers, [questionId]: answer });
    setFeedbacks({ ...feedbacks, [questionId]: isCorrect });

    setTimeout(() => setFeedbacks({ ...feedbacks, [questionId]: null }), 3000);
  };

  const checkAnswer = (questionId, answer) => {
    return false; 
  };

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
            className=" mb-10 px-4 py-2 bg-white text-gray-800 font-semibold rounded hover:bg-gray-300 transition duration-300"
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
                  <h1 className="text-xl mb-4">{question?.scenario}</h1>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleSubmit(question._id, answers[question._id] || "");
                    }}
                    className="flex items-center space-x-2 mb-4"
                  >
                    <input
                      type="text"
                      value={answers[question._id] || ""}
                      onChange={(e) =>
                        setAnswers({
                          ...answers,
                          [question._id]: e.target.value,
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
                  {feedbacks[question._id] !== null && (
                    <div
                      className={`p-2 rounded-lg ${
                        feedbacks[question._id] ? "bg-green-500" : "bg-red-500"
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
