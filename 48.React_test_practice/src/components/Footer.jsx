import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Branding Section */}
        <div className="text-lg font-bold">MyWebsite</div>

        {/* Links Section */}
        <div className="flex space-x-4">
          <a href="/" className="hover:underline">Home</a>
          <a href="/about" className="hover:underline">About</a>
          <a href="/contact" className="hover:underline">Contact</a>
        </div>

        {/* Copyright Section */}
        <div className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} MyWebsite. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
