import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify'; // Import Toastify
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS

const Login = () => {
  const [formData, setFormData] = useState({
    londonMetEmail: "",
    password: "",
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

    // Prepare the data to send to the backend
    const data = {
      londonMetEmail: formData.londonMetEmail,
      password: formData.password,
    };

    try {
      // Make the API request to the backend  
      const response = await axios.post(
        `http://localhost:8081/api/auth/login`, // Direct URL
        data
      );

      // Handle success
      console.log("Login successful:", response.data);
      toast.success("Login successful! Redirecting to dashboard..."); // Show success toast
      navigate("/"); // Redirect to the dashboard after successful login
    } catch (error) {
      // Handle error
      console.error("Error during login:", error.response?.data || error.message);
      toast.error("Login failed! Please check your credentials and try again."); // Show error toast
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white p-10 rounded-lg shadow-xl w-full max-w-4xl">
        <h1 className="text-5xl font-serif text-center text-red-700 my-8">Infoship</h1>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
          <div className="mb-6">
            <label className="block text-lg text-gray-800 font-medium">College Email:</label>
            <input
              type="email"
              name="londonMetEmail"
              value={formData.londonMetEmail}
              onChange={handleChange}
              placeholder="Enter your LondonMet email"
              className="w-full px-5 py-3 text-lg border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
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
          <Link to="/signup" className="text-red-700 font-medium mt-1">
            Sign Up Here
          </Link>
        </p>

        <div className="flex justify-end mt-8">
          <img
            src="/path-to-your-logo.png" // Adjust path if necessary
            alt="Informatics College Logo"
            className="w-28"
          />
        </div>
      </div>

      <ToastContainer /> {/* Toast container to display success/error messages */}
    </div>
  );
};

export default Login;
