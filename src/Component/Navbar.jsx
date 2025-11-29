// import React, { useContext } from "react";
import React from "react";

import { Link, NavLink } from "react-router"; // ❗ react-router → react-router-dom
// ❗ Duplicate import removed, keep only one logo import
import logo from "../assets/habits (1).png";
// import { UserIcon } from "lucide-react";
// import { AuthContext } from "../Provider/AuthProvider";
// import { toast } from "react-toastify";

const Navbar = () => {
  // ❗ You commented out user & logOut — but still using "user"
  // If AuthProvider is ready, uncomment below:
  // const { user, logOut } = useContext(AuthContext);

  // const handleLogOut = () => {
  //   logOut()
  //     .then(() => toast.success("Logout Successfully"))
  //     .catch((error) => console.error(error));
  // };

  const NavActiveStyle = ({ isActive }) =>
    isActive ? "bg-[#A3B18A] text-white font-semibold" : "";

  return (
    <nav className="bg-[#043915] shadow-md font-sans">
      <div className="navbar w-11/12 mx-auto px-0">
        {/* LEFT SIDE */}
        <div className="navbar-start text-white">
          {/* MOBILE DROPDOWN */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            {/* MOBILE LINKS */}
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content rounded-box z-10 mt-3 w-52 p-2 shadow bg-white text-[#043915] font-bold"
            >
              {/* ❗ Replace old plants/profile links with your actual pages */}
              <li>
                <NavLink className={NavActiveStyle} to="/">
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink className={NavActiveStyle} to="/addHabit">
                  Add Habit
                </NavLink>
              </li>

              <li>
                <NavLink className={NavActiveStyle} to="/myHabit">
                  My Habits
                </NavLink>
              </li>

              <li>
                <NavLink className={NavActiveStyle} to="/publicHabit">
                  Public Habits
                </NavLink>
              </li>
            </ul>
          </div>

          {/* LOGO */}
          <Link
            to="/"
            className="flex justify-center items-center gap-1 btn-ghost text-2xl text-white"
          >
            <img className="w-12 h-12 mr-0" src={logo} alt="Habit Logo" />
            <span className="text-xl pl-1 font-semibold text-white">
              Habit Tracker
            </span>
          </Link>
        </div>

        {/* DESKTOP MENU */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-white">
            <li>
              <NavLink className={NavActiveStyle} to="/">
                Home
              </NavLink>
            </li>

            <li>
              <NavLink className={NavActiveStyle} to="/addHabit">
                Add Habit
              </NavLink>
            </li>

            <li>
              <NavLink className={NavActiveStyle} to="/myHabit">
                My Habits
              </NavLink>
            </li>

            <li>
              <NavLink className={NavActiveStyle} to="/publicHabit">
                Public Habits
              </NavLink>
            </li>
          </ul>
        </div>

        {/* RIGHT SIDE - AUTH */}
        <div className="navbar-end gap-2">
          {/* ❗ user is commented out in context — temporary fallback */}
          {false ? ( // change false → user when Auth works
            <div className="dropdown dropdown-end dropdown-hover">
              <div
                tabIndex={0}
                role="button"
                className="p-1 rounded-full border border-[#D9E4D2] cursor-pointer"
              >
                <img
                  className="w-9 h-9 rounded-full"
                  src={user?.photoURL}
                  alt="User"
                />
              </div>

              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-white rounded-box w-52 text-[#043915] text-center items-center"
              >
                <li className="font-semibold pointer-events-none bg-gray-100 rounded-lg">
                  <span className="font-bold text-lg">{user?.displayName}</span>
                </li>

                <li>
                  <button
                    // onClick={handleLogOut}
                    className="font-semibold text-red-600 hover:bg-red-100 rounded-lg"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link
              to="/auth/login"
              className="font-bold btn bg-[#A3B18A] text-[#F5F0E1] px-8 hover:bg-white hover:text-[#043915]"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
