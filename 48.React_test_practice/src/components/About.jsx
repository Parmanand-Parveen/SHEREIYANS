import React from 'react';

function About() {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">About Us</h1>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Welcome to our website! We are committed to delivering the best products and services to our customers. Our team works tirelessly to ensure that your experience with us is seamless and enjoyable.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          With years of experience in the industry, we pride ourselves on our dedication to quality and customer satisfaction. Thank you for choosing us, and we look forward to serving you.
        </p>
        <div className="flex items-center space-x-4 mt-8">
          <div className="bg-blue-500 text-white rounded-full p-4 shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 10h11M9 21V3m7 6l4 4m0 0l-4 4m4-4H13"
              />
            </svg>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">Our Mission</h2>
            <p className="text-gray-600 mt-2">
              To deliver excellence and innovation, exceeding customer expectations at every step.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
