import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate()
  const {cartItem} = useSelector(state => state.cart)

  return (
    <nav className="bg-gray-800 text-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold cursor-pointer" onClick={() => navigate("/")}>MyWebsite</div>

        {/* Hamburger Menu for Mobile */}
        <button
          className="md:hidden text-white focus:outline-none"
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
          className={`md:flex md:items-center top-10  md:space-x-4 ${
            isOpen ? "block absolute w-1/2 right-0 bg-slate-900" : "hidden"
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
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `block md:inline px-3 py-2 rounded-lg w-16 text-sm font-medium hover:bg-gray-700 transition relative ${
                isActive ? "bg-gray-700" : ""
              }`
            }
          >
           Cart 
          {cartItem.length > 0 ?<p className="rounded-full h-5 w-5 bg-orange-500 flex justify-center items-center  text-white absolute top-2 right-0">{cartItem.length}</p> : ""}
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Nav;