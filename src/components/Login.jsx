import React, { useState } from "react";
import { login } from "../auth.js";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login(email, password)) {
      navigate("/dashboard");
    } else {
      setError("Invalid email or password. Try signing up first.");
    }
  };

  return (
    <div className='flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 p-4'>
      <div className='bg-white p-8 rounded-2xl shadow-xl w-full max-w-md'>
        <h2 className='text-3xl font-bold mb-2 text-center'>Welcome Back</h2>
        <p className='text-gray-500 text-center mb-6'>Login to continue</p>
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
          {error && <p className='text-red-500 text-sm'>{error}</p>}
          <button className='w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition'>
            Login
          </button>
        </form>
        <p className='mt-4 text-sm text-center text-gray-600'>
          New user?{" "}
          <Link to='/signup' className='text-blue-600 underline'>
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
}
