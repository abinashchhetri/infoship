import React from "react";

const CompanyHomePage = () => {
    
  const jobList = [1, 2]; // Dummy list for rendering multiple jobs

  return (
    <div className="min-h-screen bg-gray-100 p-6 md:p-12">
      {/* Header */}
      <div className="flex items-center justify-between mb-10">
        <h1 className="text-4xl font-bold text-black">Hi, Company name</h1>
        <div className="w-10 h-10 border-2 border-black rounded-full"></div>
      </div>

      {/* "My list" Section */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-red-600">My list</h2>
        <button className="text-3xl text-red-600 font-bold">＋</button>
      </div>

      {/* Job Cards */}
      <div className="space-y-6">
        {jobList.map((_, index) => (
          <div key={index} className="bg-gray-200 p-6 rounded-lg shadow-md">
            {/* Top Row: Job Title and Number of Applicants */}
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-black">Job Title</h3>
                <p className="text-lg font-semibold text-gray-700">
                  Type of job selected - remote / hybrid / physical
                </p>
              </div>
              <p className="text-sm text-green-700 font-medium">
                Number of applicant - 00
              </p>
            </div>

            {/* Description */}
            <p className="text-gray-700 mb-4">
              A job is more than just a way to earn a living—it's an opportunity to grow,
              learn, and contribute your skills to something meaningful. It allows individuals
              to apply their talents in a real-world environment, solve problems, and be part
              of a team or mission. Whether it’s an internship, part-time role, or full-time
              position, every job plays a vital role in shaping one’s career. It also helps
              build professional experience, confidence, and connections for the future.
            </p>

            {/* Details */}
            <div className="text-gray-800 text-sm mb-4 space-y-1">
              <p><strong>Requirement</strong></p>
              <p><strong>Dateline</strong>: date</p>
              <p><strong>Location</strong></p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition">
                Delete
              </button>
              <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
                View Applicants
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyHomePage;
