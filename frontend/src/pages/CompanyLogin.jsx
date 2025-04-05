import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { assets } from "@/assets/assets";

const CompanyLogin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "company", // hard-coded to 'company'
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8081/api/company/login", formData);

      console.log("Login successful:", response.data);
      toast.success("Login successful! Redirecting to dashboard...");

      // Store token or other user info if necessary
      // localStorage.setItem("token", response.data.token);

      navigate("/companyhomepage"); // Redirect to company dashboard
    } catch (error) {
      console.error("Error during login:", error.response?.data || error.message);
      toast.error("Login failed! Please check your credentials and try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white p-10 rounded-lg shadow-xl w-full max-w-4xl">
        <h1 className="text-5xl font-serif text-center text-red-700 my-8">Infoship</h1>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
          <div className="mb-6">
            <label className="block text-lg text-gray-800 font-medium">Company Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your company email"
              className="w-full px-5 py-3 text-lg border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-lg text-gray-800 font-medium">Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full px-5 py-3 text-lg border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-700 text-white text-lg py-3 rounded-md hover:bg-red-800 transition duration-300 cursor-pointer"
          >
            Login
          </button>
        </form>

        <p className="mt-5 text-textColor text-center">
          Don't have an account?{" "}
          <Link to="/companysignup" className="text-red-700 font-medium">
            Sign Up Here
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

export default CompanyLogin;
