import React, { useState } from "react";
import { NavLink } from "react-router";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold">MyWebsite</div>

        {/* Hamburger Menu for Mobile */}
        <button
          className="md:hidden  text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Links */}
        <div
          className={`md:flex bg-gray-700 top-10 absolute w-1/2 right-0  md:items-center md:space-x-4 ${
            isOpen ? "block" : "hidden"
          } w-full md:w-auto`}
        >
          <NavLink
            to="/"
            className={({ isActive }) =>
              `block md:inline px-3 py-2 rounded-lg text-sm font-medium hover:bg-gray-700 transition ${
                isActive ? "bg-gray-700" : ""
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/product"
            className={({ isActive }) =>
              `block md:inline px-3 py-2 rounded-lg text-sm font-medium hover:bg-gray-700 transition ${
                isActive ? "bg-gray-700" : ""
              }`
            }
          >
            Products
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `block md:inline px-3 py-2 rounded-lg text-sm font-medium hover:bg-gray-700 transition ${
                isActive ? "bg-gray-700" : ""
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `block md:inline px-3 py-2 rounded-lg text-sm font-medium hover:bg-gray-700 transition ${
                isActive ? "bg-gray-700" : ""
              }`
            }
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
