import React from "react";
import { NavLink } from "react-router";

function Nav() {
  return (
    <nav className="bg-gray-800 text-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="text-xl font-bold">MyWebsite</div>
        <div className="flex space-x-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-3 py-2 rounded-lg text-sm font-medium hover:bg-gray-700 transition ${
                isActive ? "bg-gray-700" : ""
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/product"
            className={({ isActive }) =>
              `px-3 py-2 rounded-lg text-sm font-medium hover:bg-gray-700 transition ${
                isActive ? "bg-gray-700" : ""
              }`
            }
          >
            Products
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `px-3 py-2 rounded-lg text-sm font-medium hover:bg-gray-700 transition ${
                isActive ? "bg-gray-700" : ""
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `px-3 py-2 rounded-lg text-sm font-medium hover:bg-gray-700 transition ${
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
