import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `px-2 py-1 font-semibold text-[#131313]/80 mr-2 ${isActive ? "border border-green-500 text-green-500" : ""}`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/books"
          className={({ isActive }) =>
            `px-2 py-1 font-semibold text-[#131313]/80 mr-2 ${isActive ? "border border-green-500 text-green-500" : ""}`
          }
        >
          Listed Books
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/pages-to-read"
          className={({ isActive }) =>
            `px-2 py-1 font-semibold text-[#131313]/80 ${isActive ? "border border-green-500 text-green-500" : ""}`
          }
        >
          Pages to Read
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-base-100 shadow-sm w-full ">
    <div className="navbar container mx-auto px-4 ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <h2 className="font-bold text-2xl text-[#131313]">Book Vibe</h2>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end gap-2">
        <button className="btn btn-success bg-[#23BE0A] shadow-none border-none text-white">Sign In</button>
        <button className="btn btn-info bg-[#59C6D2] shadow-none border-none text-white">Sign Up</button>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
