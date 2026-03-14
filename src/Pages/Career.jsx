import React from "react";
import { useNavigate } from "react-router";

const Career = () => {

  const navigate = useNavigate();

  const jobs = [
    {
      title: "Chief Executive Officer (CEO)",
      desc: "Lead the company, manage strategies and business growth."
    },
    {
      title: "Business Manager",
      desc: "Manage company operations and ensure business performance."
    },
    {
      title: "Frontend Developer",
      desc: "Experience with React, Tailwind CSS and modern JavaScript frameworks."
    },
    {
      title: "Backend Developer",
      desc: "Experience with Node.js, Express and database management."
    },
    {
      title: "Full Stack Developer",
      desc: "Ability to work on both frontend and backend technologies."
    },
    {
      title: "UI/UX Designer",
      desc: "Strong design skills with Figma, Adobe XD or similar tools."
    },
    {
      title: "Digital Marketer",
      desc: "Experience with SEO, social media marketing and campaigns."
    },
    {
      title: "Customer Support Executive",
      desc: "Handle customer queries and provide excellent service."
    },
    {
      title: "Warehouse Worker",
      desc: "Manage product storage and delivery preparation."
    },
    {
      title: "Delivery Rider",
      desc: "Responsible for fast and safe product delivery."
    },
    {
      title: "Office Assistant",
      desc: "Assist daily office activities and documentation."
    },
    {
      title: "Sales Executive",
      desc: "Promote products and increase company sales."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-5">

      {/* Navigation Buttons */}
      <div className="max-w-6xl mx-auto flex gap-4 mb-8">
        <button
          onClick={() => navigate("/")}
          className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
        >
          Home
        </button>

        <button
          onClick={() => navigate(-1)}
          className="bg-gray-700 text-white px-5 py-2 rounded-lg hover:bg-gray-800"
        >
          Back
        </button>
      </div>

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg p-10 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Join Our Team
        </h1>
        <p className="text-gray-600 text-lg">
          We are always looking for talented and passionate people to join our team.
          Explore our open positions and build your career with us.
        </p>
      </div>

      {/* Job Listings */}
      <div className="max-w-6xl mx-auto mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {jobs.map((job, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2 cursor-pointer">
              {job.title}
            </h3>

            <p className="text-gray-600 mb-4">
              {job.desc}
            </p>

            <button className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 cursor-pointer">
              Apply Now
            </button>
          </div>
        ))}

      </div>

    </div>
  );
};

export default Career;