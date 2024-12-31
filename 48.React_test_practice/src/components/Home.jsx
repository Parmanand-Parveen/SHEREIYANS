import React from 'react';
import { NavLink } from 'react-router';

function Home() {
  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center py-12 px-6">
      <div className="text-center">
        <h1 className="text-5xl font-extrabold text-blue-500 mb-6">Welcome to Our Website!</h1>
        <p className="text-gray-700 text-lg leading-relaxed mb-8">
          Discover a world of quality products, exceptional services, and an unparalleled shopping experience. Start exploring today!
        </p>
        <div className="space-x-4">
          <NavLink to={"/product"} className="px-6 py-3 bg-blue-500 text-white text-lg rounded-lg shadow-md hover:bg-blue-600 transition">
            Explore Products
          </NavLink>
          <NavLink to={"/contact"} className="px-6 py-3 bg-green-500 text-white text-lg rounded-lg shadow-md hover:bg-green-600 transition">
            Contact Us
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Home;
