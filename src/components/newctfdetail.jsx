import React, { useState, useEffect } from "react";
import img from "../assets/img.png";
import greenFlagImage from "../assets/greenflag.png";
import redFlagImage from "../assets/redflag.png";
import Confetti from "react-confetti";
import NavBar from "../components/NavBar";

function CtfDetail() {
  const [answers, setAnswers] = useState({ answer1: '', answer2: '' });
  const [isAnswerCorrect, setIsAnswerCorrect] = useState({ correct1: null, correct2: null });
  const [showFlags, setShowFlags] = useState({ showFlag1: false, showFlag2: false });
  const [showRedFlags, setShowRedFlags] = useState({ showRedFlag1: false, showRedFlag2: false });
  const [windowDimensions, setWindowDimensions] = useState({ width: 0, height: 0 });
  const [flagsCaptured, setFlagsCaptured] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get('http://localhost:5300/api/question/getQuestion/:id');
        setQuestions(response.data);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch quiz questions. Please try again later.');
        setLoading(false);
      }
    };

    fetchQuestions();
  }, []);

  const handleSubmit = (e, answerKey, questionIndex, correctKey, flagKey, redFlagKey) => {
    e.preventDefault();
    const correct = answers[answerKey] === questions[questionIndex]?.correct_answer;
    setIsAnswerCorrect((prev) => ({ ...prev, [correctKey]: correct }));
    if (correct) {
      setShowFlags((prev) => ({ ...prev, [flagKey]: true }));
      setShowRedFlags((prev) => ({ ...prev, [redFlagKey]: false }));
      setFlagsCaptured((prev) => prev + 1);
      setTimeout(() => setShowFlags((prev) => ({ ...prev, [flagKey]: false })), 3000);
      setShowPopup(true);
    } else {
      setShowRedFlags((prev) => ({ ...prev, [redFlagKey]: true }));
      setShowFlags((prev) => ({ ...prev, [flagKey]: false }));
      setTimeout(() => setShowRedFlags((prev) => ({ ...prev, [redFlagKey]: false })), 3000);
    }
  };

  const handleAnswerChange = (e, answerKey) => {
    const { value } = e.target;
    setAnswers((prev) => ({ ...prev, [answerKey]: value }));
  };

  const closePopup = () => setShowPopup(false);

  return (
    <>
      {/* <Header/> */}
      <div className="relative h-50">
        {/* Background Image and Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${img})`,
            backgroundColor: "rgba(0,0,0,0.5)", // Adjust opacity as needed
          }}
        >
          <div className="absolute inset-0 bg-black opacity-75"></div>
        </div>
        {/* Content Container */}
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-white">
          <h1 className="text-4xl font-bold mb-4 mt-10">
        Network Scanning (Shodan)
          </h1>
          <p className="text-lg mb-8">
            Explore the details of this Capture The Flag event.
          </p>
          <a
            href="topic"
            className=" mb-10 px-4 py-2 bg-white text-gray-800 font-semibold rounded hover:bg-gray-300 transition duration-300"
          >
            Finish
          </a>
        </div>
      </div>

      <div className="p-6 bg-white shadow-lg">
        <div className="flex">
          {loading ? (
            <div>Loading...</div>
          ) : error ? (
            <div>{error}</div>
          ) : (
            <>
              <div className="w-1/2 p-4">
                <h1 className="text-xl mb-4">Flag 1: {questions[0]?.question}</h1>
                <form onSubmit={(e) => handleSubmit(e, 'answer1', 0, 'correct1', 'showFlag1', 'showRedFlag1')} className="flex items-center space-x-2 mb-4">
                  <input
                    type="text"
                    value={answers.answer1}
                    onChange={(e) => handleAnswerChange(e, 'answer1')}
                    placeholder="Answer format: **,***"
                    className="p-2 border border-gray-300 rounded-lg flex-grow focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    type="submit"
                    className="p-2 rounded-lg bg-green-500 text-white hover:bg-green-600 transition duration-300"
                  >
                    Submit
                  </button>
                </form>
                {isAnswerCorrect.correct1 !== null && (
                  <div className={`p-2 rounded-lg ${isAnswerCorrect.correct1 ? 'bg-green-500' : 'bg-red-500'} text-white mt-2 transition duration-300`}>
                    {isAnswerCorrect.correct1 ? 'Correct! You answered Flag 1 correctly.' : 'Incorrect. Try again for Flag 1.'}
                  </div>
                )}

                {showFlags.showFlag1 && (
                  <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="relative z-10 p-8 rounded-lg animate-fade-in flex justify-center items-center">
                      <img src={greenFlagImage} alt="Flag 1 Correct" className="max-w-[200px] max-h-[250px]" />
                    </div>
                    <div className="fixed inset-0 bg-slate-200 bg-opacity-50 backdrop-blur-sm"></div>
                  </div>
                )}

                {showRedFlags.showRedFlag1 && (
                  <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="relative z-10 p-8 rounded-lg animate-fade-in flex justify-center items-center">
                      <img src={redFlagImage} alt="Flag 1 Incorrect" className="max-w-[200px] max-h-[250px]" />
                    </div>
                    <div className="fixed inset-0 bg-slate-200 bg-opacity-50 backdrop-blur-sm"></div>
                  </div>
                )}

                <h1 className="text-xl text-black-500 mb-4 mt-8">Flag 2: {questions[1]?.question}</h1>
                <form onSubmit={(e) => handleSubmit(e, 'answer2', 1, 'correct2', 'showFlag2', 'showRedFlag2')} className="flex items-center space-x-2">
                  <input
                    type="text"
                    value={answers.answer2}
                    onChange={(e) => handleAnswerChange(e, 'answer2')}
                    placeholder="Answer format: ****** ***"
                    className="p-2 border border-gray-300 rounded-lg flex-grow focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    type="submit"
                    className="p-2 rounded-lg bg-green-500 text-white hover:bg-green-600 transition duration-300"
                  >
                    Submit
                  </button>
                </form>
                {isAnswerCorrect.correct2 !== null && (
                  <div className={`p-2 rounded-lg ${isAnswerCorrect.correct2 ? 'bg-green-500' : 'bg-red-500'} text-white mt-2 transition duration-300`}>
                    {isAnswerCorrect.correct2 ? 'Correct! You answered Flag 2 correctly.' : 'Incorrect. Try again for Flag 2.'}
                  </div>
                )}

                {showFlags.showFlag2 && (
                  <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="relative z-10 p-8 rounded-lg animate-fade-in flex justify-center items-center">
                      <img src={greenFlagImage} alt="Flag 2 Correct" className="max-w-[200px] max-h-[250px]" />
                    </div>
                    <div className="fixed inset-0 bg-slate-200 bg-opacity-50 backdrop-blur-sm"></div>
                  </div>
                )}

                {showRedFlags.showRedFlag2 && (
                  <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="relative z-10 p-8 rounded-lg animate-fade-in flex justify-center items-center">
                      <img src={redFlagImage} alt="Flag 2 Incorrect" className="max-w-[200px] max-h-[250px]" />
                    </div>
                    <div className="fixed inset-0 bg-slate-200 bg-opacity-50 backdrop-blur-sm"></div>
                  </div>
                )}
              </div>
              <div className="mx-[80px] p-4 px-[20px] bg-black bg-opacity-20 border rounded-xl">
                <h1 className="text-xl font-bold mb-4 text-center">Process to perform:</h1>
                <ul className="list-disc list-inside mx-10">
                  <li>To begin, we have to take IP of anything.</li>
                  <li>For this, you need to go through the website;</li>
                  <li><a href="https://www.shodan.io/host/8.8.8x" target="_blank" className="text-blue-500 hover:underline">Shodan.io</a></li>
                  <li>This is the IP address of Google DNS Server</li>
                  <li>Through this, you can search for more IPs</li>
                </ul>
              </div>
            </>
          )}
        </div>
      </div>

      {showPopup && <Popup flagsCaptured={flagsCaptured} closePopup={closePopup} />}
    </>
  );
}

export default CtfDetail;
