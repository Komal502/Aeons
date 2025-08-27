import React from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../auth.js";

export default function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 to-purple-600 p-6 relative overflow-hidden">
      
      {/* Decorative Animated Background */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="w-72 h-72 bg-purple-400 rounded-full opacity-30 animate-pulse absolute -top-16 -left-16"></div>
        <div className="w-96 h-96 bg-indigo-400 rounded-full opacity-20 animate-ping absolute -bottom-24 -right-24"></div>
      </div>

      {/* Company Name */}
      <div className="mb-12 text-center">
        <h1 className="text-5xl font-extrabold text-white mb-2 drop-shadow-lg">Aeons</h1>
        <p className="text-white/80 text-lg">Empowering Knowledge, One Quiz at a Time</p>
      </div>

      {/* Main Card */}
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-10 flex flex-col items-center shadow-2xl w-full max-w-lg">
        
        <h2 className="text-3xl font-bold text-white text-center mb-6 drop-shadow-md">
          Welcome to the Quiz Platform 🎓
        </h2>
        <p className="text-white/90 text-center mb-10">
          Test your knowledge with short quizzes. Each attempt shows your score instantly.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          <button
            className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold px-8 py-4 rounded-2xl shadow-lg hover:scale-105 transform transition-all duration-300"
            onClick={() => navigate("/quiz")}
          >
            Start Quiz
          </button>
          <button
            className="bg-white/20 border border-white/30 text-white px-8 py-4 rounded-2xl shadow hover:bg-white/30 font-semibold transition-all duration-300"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
