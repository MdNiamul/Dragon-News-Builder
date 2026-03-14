import React from "react";
import { useNavigate } from "react-router";

const About = () => {

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-5">

      {/* Navigation Buttons */}
      <div className="max-w-6xl mx-auto mb-6 flex gap-4">
        <button
          onClick={() => navigate("/")}
          className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Home
        </button>

        <button
          onClick={() => navigate(-1)}
          className="bg-gray-700 text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition"
        >
          Back
        </button>
      </div>

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg p-10 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          About Our Website
        </h1>
        <p className="text-gray-600 text-lg">
          We are committed to providing quality content and services.
          Our platform is built to make your experience fast, secure
          and enjoyable.
        </p>
      </div>

      {/* About Content */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 mt-12 items-center">

        <div>
          <img
            src="https://i.ibb.co/9cK9KqP/about.jpg"
            alt="about"
            className="rounded-xl shadow-lg"
          />
        </div>

        <div>
          <h2 className="text-3xl font-semibold mb-4 text-gray-800">
            Who We Are
          </h2>
          <p className="text-gray-600 mb-4">
            Our website is designed to deliver the best online experience.
            We focus on quality service, modern technology and user-friendly
            design.
          </p>

          <p className="text-gray-600">
            Our team continuously works to improve the platform and provide
            reliable services to our users.
          </p>
        </div>

      </div>

      {/* Features Section */}
      <div className="max-w-6xl mx-auto mt-16">

        <h2 className="text-3xl font-bold text-center mb-10">
          Our Features
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Fast Service</h3>
            <p className="text-gray-600">
              Our system is optimized to provide fast and smooth performance.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Secure Platform</h3>
            <p className="text-gray-600">
              Security is our top priority to keep your data safe.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">User Friendly</h3>
            <p className="text-gray-600">
              We designed our platform to be simple and easy to use.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};

export default About;