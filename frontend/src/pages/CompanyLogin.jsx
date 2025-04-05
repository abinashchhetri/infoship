import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets"; // Ensure this path is correct

const CompanyLogin = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white p-10 rounded-lg shadow-xl w-full max-w-lg">
        
        {/* Title */}
        <h1 className="text-5xl font-serif text-center text-red-700 my-8">Infoship</h1>

        {/* Company Name */}
        <div className="mb-6">
          <label className="block text-lg text-gray-800 font-medium">Company name</label>
          <input
            type="text"
            placeholder="Your Company name"
            className="w-full px-5 py-3 text-lg border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        {/* Company Email */}
        <div className="mb-6">
          <label className="block text-lg text-gray-800 font-medium">Company Email</label>
          <input
            type="email"
            placeholder="Your Company Email"
            className="w-full px-5 py-3 text-lg border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="block text-lg text-gray-800 font-medium">Password</label>
          <input
            type="password"
            placeholder="Your Password"
            className="w-full px-5 py-3 text-lg border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        {/* Login Button */}
        <button className="w-full bg-red-700 text-white text-lg py-3 rounded-md hover:bg-red-800 transition duration-300 cursor-pointer">
          Log in
        </button>
        <p className="mt-5 text-textColor text-center'>Don't have an account? <Link to='/companylogin' className='text-primary font-medium">Don't have an account? <Link to='/companysignup' className="text-red-700 font-medium mt-1"> Login Here</Link></p>
        
        

        {/* Logo Bottom Right */}
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

export default CompanyLogin;