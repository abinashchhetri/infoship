import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets'; // Adjust the path if needed

const Login = () => {
  const [email, setEmail] = useState("");
  const [londonMetId, setLondonMetId] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white p-10 rounded-lg shadow-xl w-full max-w-lg">
        <h1 className="text-5xl font-serif text-center text-red-700 my-8">Infoship</h1>

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-lg text-gray-800 font-medium">Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Add your LondonMet email"
              className="w-full px-5 py-3 text-lg border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div className="mb-6">
            <label className="block text-lg text-gray-800 font-medium">London Met ID:</label>
            <input
              type="text"
              value={londonMetId}
              onChange={(e) => setLondonMetId(e.target.value)}
              placeholder="Add your LondonMet ID"
              className="w-full px-5 py-3 text-lg border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div className="mb-6">
            <label className="block text-lg text-gray-800 font-medium">
              <span className="cursor-pointer">Password:</span>
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Your LondonMet email password"
              className="w-full px-5 py-3 text-lg border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-700 text-white text-lg py-3 rounded-md hover:bg-red-800 transition duration-300 cursor-pointer"
          >
            Log in
          </button>
        </form>

        <p className="mt-5 text-textColor text-center">
          Don't have an account?{" "}
          <Link to="/signup" className="text-red-700 font-medium mt-1 ">
            Signup Here
          </Link>
        </p>

        <div className="flex justify-end mt-8">
          <img
            src={assets.logo}
            alt="Informatics College Logo"
            className="w-28"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
