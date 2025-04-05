import React, { useState } from "react";
import axios from "axios";
import UploadWidget from "@/components/UploadWidget";
import { Link, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CompanyRegister = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    companyLocation: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [panFile, setPanFile] = useState({
    url: "",
    publicId: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    const data = {
      companyName: formData.companyName,
      companyLocation: formData.companyLocation,
      email: formData.email,
      password: formData.password,
      role: "company",
      panNumberUrl: panFile.url,
    };

    try {
      const response = await axios.post(
        "http://localhost:8081/api/company/register-company",
        data
      );

      toast.success("Company registered successfully!");
      setTimeout(() => navigate("/companylogin"), 2000);
    } catch (error) {
      console.error("Registration failed:", error.response?.data || error.message);
      toast.error("Registration failed! Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <ToastContainer />
      <div className="bg-white p-10 rounded-lg shadow-xl w-full max-w-4xl">
        <h1 className="text-5xl font-serif text-center text-red-700 my-8">Infoship</h1>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-lg text-gray-800 font-medium">Company Name</label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="Your company name"
              className="w-full px-5 py-3 text-lg border rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-lg text-gray-800 font-medium">Company Location</label>
            <input
              type="text"
              name="companyLocation"
              value={formData.companyLocation}
              onChange={handleChange}
              placeholder="Company location"
              className="w-full px-5 py-3 text-lg border rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-lg text-gray-800 font-medium">Company Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Company email"
              className="w-full px-5 py-3 text-lg border rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-lg text-gray-800 font-medium">Upload PAN Document</label>
            <UploadWidget
              setUrl={(file) => setPanFile(file)}
              contentType="application/pdf"
            />
          </div>

          <div>
            <label className="block text-lg text-gray-800 font-medium">Create Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Create password"
              className="w-full px-5 py-3 text-lg border rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-lg text-gray-800 font-medium">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm password"
              className="w-full px-5 py-3 text-lg border rounded-md"
              required
            />
          </div>

          <button
            type="submit"
            className="col-span-2 mt-4 bg-red-700 text-white text-lg py-3 rounded-md hover:bg-red-800 transition"
          >
            Register
          </button>
        </form>

        <p className="mt-5 text-textColor text-center">
          Already have an account?{" "}
          <Link to="/companylogin" className="text-red-700 font-medium">Login Here</Link>
        </p>

        <div className="flex justify-end mt-8">
          <img src={assets.logo} alt="Informatics College Logo" className="w-28" />
        </div>
      </div>
    </div>
  );
};

export default CompanyRegister;
