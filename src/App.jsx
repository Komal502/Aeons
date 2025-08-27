import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";
import Dashboard from "./components/Dashboard.jsx";
import Quiz from "./components/Quiz.jsx";
import Result from "./components/Result.jsx";
import { isAuthenticated } from "./auth.js";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to='/login' />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route
          path='/dashboard'
          element={isAuthenticated() ? <Dashboard /> : <Navigate to='/login' />}
        />
        <Route
          path='/quiz'
          element={isAuthenticated() ? <Quiz /> : <Navigate to='/login' />}
        />
        <Route
          path='/result'
          element={isAuthenticated() ? <Result /> : <Navigate to='/login' />}
        />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </BrowserRouter>
  );
}
