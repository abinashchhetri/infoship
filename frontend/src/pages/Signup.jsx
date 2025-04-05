// import React, { useState } from "react";
// import UploadWidget from "@/components/UploadWidget"; // Assuming UploadWidget is in the components folder
// import { Link, useNavigate } from "react-router-dom";
// import { assets } from "../assets/assets"; // Adjust the path if needed

// const Signup = () => {
//   const [formData, setFormData] = useState({
//     studentName: "",
//     londonMetId: "",
//     londonMetEmail: "",
//     createPassword: "",
//   });

//   const [cvFile, setCvFile] = useState({
//     url: "",
//     publicId: "",
//   });

//   const [profilePic, setProfilePic] = useState({
//     url: "",
//     publicId: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle signup logic (validation, API call, etc.)
//     console.log(formData, cvFile, profilePic); // For debugging purposes
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen">
//       <div className="bg-white p-10 rounded-lg shadow-xl w-full max-w-4xl">
//         <h1 className="text-5xl font-serif text-center text-red-700 my-8">Infoship</h1>

//         <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div className="mb-6">
//             <label className="block text-lg text-gray-800 font-medium">Student Name:</label>
//             <input
//               type="text"
//               name="studentName"
//               value={formData.studentName}
//               onChange={handleChange}
//               placeholder="Enter your full name"
//               className="w-full px-5 py-3 text-lg border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
//             />
//           </div>

//           <div className="mb-6">
//             <label className="block text-lg text-gray-800 font-medium">London Met ID:</label>
//             <input
//               type="text"
//               name="londonMetId"
//               value={formData.londonMetId}
//               onChange={handleChange}
//               placeholder="Enter your LondonMet ID"
//               className="w-full px-5 py-3 text-lg border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
//             />
//           </div>

//           <div className="mb-6">
//             <label className="block text-lg text-gray-800 font-medium">College Email:</label>
//             <input
//               type="email"
//               name="londonMetEmail"
//               value={formData.londonMetEmail}
//               onChange={handleChange}
//               placeholder="Enter your LondonMet email"
//               className="w-full px-5 py-3 text-lg border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
//             />
//           </div>

//           <div className="mb-6">
//             <label className="block text-lg text-gray-800 font-medium">Create Password:</label>
//             <input
//               type="password"
//               name="createPassword"
//               value={formData.createPassword}
//               onChange={handleChange}
//               placeholder="Create a password"
//               className="w-full px-5 py-3 text-lg border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
//             />
//           </div>

//           {/* Cloudinary Upload for CV */}
//           <div className="mb-6">
//             <label className="block text-lg text-gray-800 font-medium">Upload CV:</label>
//             <UploadWidget
//               setUrl={(file) => setCvFile(file)} // Use setCvFile to update state for CV
//               contentType="application/pdf"
//             />
//           </div>

//           {/* Cloudinary Upload for Profile Picture */}
//           <div className="mb-6">
//             <label className="block text-lg text-gray-800 font-medium">Upload Profile Picture:</label>
//             <UploadWidget
//               setUrl={(file) => setProfilePic(file)} // Use setProfilePic to update state for profile pic
//               contentType="image/*"
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-red-700 text-white text-lg py-3 rounded-md hover:bg-red-800 transition duration-300 cursor-pointer col-span-2"
//           >
//             Sign Up
//           </button>
//         </form>

//         <p className="mt-5 text-textColor text-center">
//           Already have an account?{" "}
//           <Link to="/login" className="text-red-700 font-medium mt-1">
//             Login Here
//           </Link>
//         </p>

//         <div className="flex justify-end mt-8">
//           <img
//             src={assets.logo}
//             alt="Informatics College Logo"
//             className="w-28"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signup;




import React, { useState } from "react";
import axios from "axios";
import UploadWidget from "@/components/UploadWidget"; // Assuming UploadWidget is in the components folder
import { Link, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets"; // Adjust the path if needed
import { toast, ToastContainer } from 'react-toastify'; // Import Toastify
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS

const Signup = () => {
  const [formData, setFormData] = useState({
    studentName: "",
    londonMetId: "",
    londonMetEmail: "",
    createPassword: "",
  });

  const [cvFile, setCvFile] = useState({
    url: "",
    publicId: "",
  });

  const [profilePic, setProfilePic] = useState({
    url: "",
    publicId: "",
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
      studentName: formData.studentName,
      londonMetId: formData.londonMetId,
      londonMetEmail: formData.londonMetEmail,
      createPassword: formData.createPassword,
      cvUrl: cvFile.url,
      profilePicUrl: profilePic.url,
    };

    try {
      // Make the API request to the backend  
      const response = await axios.post(
        `http://localhost:8081/api/auth/register-student`, // Direct URL
        data
      );

      // Handle success
      console.log("Registration successful:", response.data);
      toast.success("Registration successful! Redirecting to login page..."); // Show success toast
      navigate("/login"); // Redirect to login page after successful registration
    } catch (error) {
      // Handle error
      console.error("Error during registration:", error.response?.data || error.message);
      toast.error("Registration failed! Please try again."); // Show error toast
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white p-10 rounded-lg shadow-xl w-full max-w-4xl">
        <h1 className="text-5xl font-serif text-center text-red-700 my-8">Infoship</h1>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="mb-6">
            <label className="block text-lg text-gray-800 font-medium">Student Name:</label>
            <input
              type="text"
              name="studentName"
              value={formData.studentName}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full px-5 py-3 text-lg border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div className="mb-6">
            <label className="block text-lg text-gray-800 font-medium">London Met ID:</label>
            <input
              type="text"
              name="londonMetId"
              value={formData.londonMetId}
              onChange={handleChange}
              placeholder="Enter your LondonMet ID"
              className="w-full px-5 py-3 text-lg border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

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
            <label className="block text-lg text-gray-800 font-medium">Create Password:</label>
            <input
              type="password"
              name="createPassword"
              value={formData.createPassword}
              onChange={handleChange}
              placeholder="Create a password"
              className="w-full px-5 py-3 text-lg border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          {/* Cloudinary Upload for CV */}
          <div className="mb-6">
            <label className="block text-lg text-gray-800 font-medium">Upload CV:</label>
            <UploadWidget
              setUrl={(file) => setCvFile(file)} // Use setCvFile to update state for CV
              contentType="application/pdf"
            />
          </div>

          {/* Cloudinary Upload for Profile Picture */}
          <div className="mb-6">
            <label className="block text-lg text-gray-800 font-medium">Upload Profile Picture:</label>
            <UploadWidget
              setUrl={(file) => setProfilePic(file)} // Use setProfilePic to update state for profile pic
              contentType="image/*"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-700 text-white text-lg py-3 rounded-md hover:bg-red-800 transition duration-300 cursor-pointer col-span-2"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-5 text-textColor text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-red-700 font-medium mt-1">
            Login Here
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

export default Signup;

