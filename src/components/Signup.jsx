import React, { useState } from "react";
import { signup } from "../auth.js";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(email, password);
    navigate("/login");
  };

  return (
    <div className='flex items-center justify-center min-h-screen bg-gradient-to-r from-green-400 to-blue-500 p-4'>
      <div className='bg-white p-8 rounded-2xl shadow-xl w-full max-w-md'>
        <h2 className='text-3xl font-bold mb-2 text-center'>Create Account</h2>
        <p className='text-gray-500 text-center mb-6'>Sign up to get started</p>
        <form onSubmit={handleSubmit} className='space-y-3'>
          <input
            type='email'
            placeholder='Email'
            className='w-full p-3 border rounded-lg focus:outline-none focus:ring'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type='password'
            placeholder='Password'
            className='w-full p-3 border rounded-lg focus:outline-none focus:ring'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className='w-full bg-green-600 text-white py-3 rounded-xl hover:bg-green-700 transition'>
            Sign Up
          </button>
        </form>
        <p className='mt-4 text-sm text-center text-gray-600'>
          Already have an account?{" "}
          <Link to='/login' className='text-green-600 underline'>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
