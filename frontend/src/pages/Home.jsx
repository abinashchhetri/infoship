import React from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6">
      {/* Title */}
      <h1 className="text-6xl font-serif text-center text-red-700 my-12">Infoship</h1>

      {/* Buttons */}
      <div className="w-full max-w-md flex flex-col gap-6">
        <button className="w-full bg-red-700 text-white text-xl py-4 rounded-lg hover:bg-red-800 transition duration-300 cursor-pointer">
          Company
        </button>

        <button
          onClick={() => navigate("/login")}
          className="w-full bg-red-700 text-white text-xl py-4 rounded-lg hover:bg-red-800 transition duration-300 cursor-pointer"
        >
          Student
        </button>

        <button
         
          className="w-full bg-red-700 text-white text-xl py-4 rounded-lg hover:bg-red-800 transition duration-300 cursor-pointer"
        >
          Admin
        </button>

      </div>

      {/* Footer Logo */}
      <div className="flex justify-end mt-10 w-full max-w-md">
        <img
          src={assets.logo}
          alt="Informatics College Logo"
          className="w-36"
        />
      </div>
    </div>
  );
};

export default Home;
