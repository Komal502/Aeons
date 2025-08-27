import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Result() {
  const location = useLocation();
  const navigate = useNavigate();
  const { score = 0, total = 0 } = location.state || {};

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-yellow-400 to-orange-500 p-4">
      <div className="bg-white/20 backdrop-blur-lg p-10 rounded-2xl border border-white/30 text-center shadow-2xl transform transition-all scale-100 hover:scale-105">
        
        {/* Title */}
        <h1 className="text-4xl font-extrabold text-white drop-shadow-lg">
          🎉 Quiz Completed!
        </h1>

        {/* Score */}
        <p className="mt-6 text-2xl text-white font-semibold">
          You scored 
          <span className="mx-2 px-4 py-1 bg-white/30 rounded-xl text-yellow-100 shadow-md">
            {score}
          </span>
          out of 
          <span className="ml-2 font-bold">{total}</span>
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate("/dashboard")}
            className="bg-white text-yellow-700 px-6 py-3 rounded-xl shadow-lg hover:bg-gray-200 transition font-medium"
          >
            ⬅ Back to Dashboard
          </button>
          <button
            onClick={() => navigate("/quiz")}
            className="bg-yellow-600 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-yellow-700 transition font-medium"
          >
            🔄 Retry Quiz
          </button>
        </div>
      </div>
    </div>
  );
}
