import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header className="bg-gradient-to-r from-white via-pink-100 to-white shadow sticky top-0 z-50">
    <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
      <h1 className="text-3xl font-bold text-pink-600">GlowUp Cosmetics</h1>
      <nav>
        <ul className="flex space-x-8 text-gray-800 font-bold">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-pink-500 underline" : "hover:text-pink-500"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/best-sellers"
              className={({ isActive }) =>
                isActive ? "text-pink-500 underline" : "hover:text-pink-500"
              }
            >
              Best Sellers
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/trending-now"
              className={({ isActive }) =>
                isActive ? "text-pink-500 underline" : "hover:text-pink-500"
              }
            >
              Trending Now
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/gallery"
              className={({ isActive }) =>
                isActive ? "text-pink-500 underline" : "hover:text-pink-500"
              }
            >
              Gallery
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
