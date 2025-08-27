import React, { useState, useEffect } from "react";
import questions from "../data.js";
import { useNavigate } from "react-router-dom";

export default function Quiz() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [timer, setTimer] = useState(15);
  const navigate = useNavigate();

  // Timer countdown
  useEffect(() => {
    if (selected !== null) return; // pause timer after selection
    if (timer === 0) {
      setSelected("timeout");
      return;
    }

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer, selected]);

  const handleAnswer = (option) => {
    if (selected !== null) return;
    setSelected(option);

    const isCorrect = option === questions[current].answer;
    if (isCorrect) setScore((prev) => prev + 1);
  };

  const handleNext = () => {
    setSelected(null);
    setTimer(15); // reset timer
    if (current + 1 < questions.length) {
      setCurrent((prev) => prev + 1);
    } else {
      navigate("/result", { state: { score, total: questions.length } });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-pink-500 p-6">
      <div className="bg-white p-8 rounded-3xl shadow-2xl w-full max-w-lg relative overflow-hidden">
        
        {/* Floating circles animation */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse-slow"></div>

        {/* Top Info */}
        <div className="flex justify-between text-sm text-gray-500 mb-4 font-semibold">
          <span>Question {current + 1} / {questions.length}</span>
          <span>Score: {score}</span>
        </div>

        {/* Timer */}
        <div className="h-3 bg-gray-200 rounded-full overflow-hidden mb-4 shadow-inner">
          <div
            className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-1000"
            style={{ width: `${(timer / 15) * 100}%` }}
          ></div>
        </div>
        <p className="text-center text-gray-700 font-medium mb-4">
          Time Left: {timer} s
        </p>

        {/* Question Box */}
        <div className="mb-6 p-6 rounded-xl bg-gradient-to-r from-purple-50 to-pink-50 border border-gray-200 shadow-inner animate-fade-in">
          <h2 className="text-2xl font-bold text-gray-800">{questions[current].question}</h2>
        </div>

        {/* Options */}
        <div className="grid grid-cols-1 gap-4">
          {questions[current].options.map((opt, idx) => (
            <button
              key={idx}
              onClick={() => handleAnswer(opt)}
              disabled={selected !== null}
              className={`py-3 px-6 rounded-xl border font-semibold shadow hover:scale-105 transform transition-all duration-300
                ${selected === null
                  ? "bg-white text-gray-800 border-gray-300 hover:bg-purple-50 hover:border-purple-300"
                  : opt === questions[current].answer
                    ? "bg-green-500 text-white border-green-600 animate-pulse"
                    : selected === opt
                      ? "bg-red-500 text-white border-red-600 animate-shake"
                      : "bg-gray-100 text-gray-600 border-gray-300"
                }`}
            >
              {opt}
            </button>
          ))}
        </div>

        {/* Next / Finish Button */}
        {selected !== null && (
          <div className="mt-6 text-center">
            <button
              onClick={handleNext}
              className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-xl shadow-lg hover:scale-105 transform transition-all duration-300"
            >
              {current + 1 < questions.length ? "Next" : "Finish"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
