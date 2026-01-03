import React, { useContext, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router";
import logo from "../assets/habits (1).png";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";
import ThemeToggle from "./ThemeToggle";
import { LayoutDashboard, LogOut, Menu, X, ChevronDown, BookOpen, Mail, HelpCircle, User as UserIcon } from "lucide-react";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [resourcesOpen, setResourcesOpen] = React.useState(false);
  const [profileOpen, setProfileOpen] = React.useState(false);
  
  const resourcesRef = useRef(null);
  const profileRef = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (resourcesRef.current && !resourcesRef.current.contains(event.target)) {
        setResourcesOpen(false);
      }
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setProfileOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogOut = () => {
    logOut()
      .then(() => toast.success("Logout Successfully"))
      .catch((error) => console.error(error));
  };

  // tightened and consistent nav link styles
  const NavActiveStyle = ({ isActive }) =>
    isActive
      ? "!text-white font-semibold px-3 py-2 rounded-md bg-[var(--color-secondary)] shadow-sm text-sm whitespace-nowrap"
      : "!text-white hover:bg-[var(--color-primary-light)] px-3 py-2 rounded-md transition-colors duration-200 text-sm whitespace-nowrap";

  return (
    <nav className="w-full bg-[var(--color-primary-dark)] shadow-lg fixed top-0 z-50">
      {/* Content Container */}
      <div className="w-11/12 max-w-7xl mx-auto">
        {/* make this relative so we can absolutely center the nav links */}
        <div className="relative flex items-center justify-between h-16 md:h-20">
          {/* Left: Logo */}
          <div className="flex items-center flex-1">
            <Link
              to="/"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <img
                src={logo}
                alt="Habit Tracker"
                className="w-10 h-10 md:w-12 md:h-12"
              />
              <span className="text-white font-bold text-lg md:text-xl">
                Habit Tracker
              </span>
            </Link>
          </div>

          {/* Center: Navigation Links (Desktop) - absolutely centered */}
          <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 items-center gap-1.5">
            <NavLink className={NavActiveStyle} to="/">
              Home
            </NavLink>
            <NavLink className={NavActiveStyle} to="/publicHabit">
              Explore Habits
            </NavLink>
            
            {/* Resources Dropdown */}
            <div ref={resourcesRef} className="relative group">
              <button
                onClick={() => setResourcesOpen(!resourcesOpen)}
                className="flex items-center gap-1 !text-white hover:bg-[var(--color-primary-light)] px-3 py-2 rounded-md transition-colors duration-200 text-sm whitespace-nowrap"
              >
                Resources
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {/* Dropdown Menu */}
              <div className={`absolute top-full left-0 mt-2 w-48 bg-[var(--color-bg-primary)] rounded-lg shadow-xl border border-[var(--color-border)] overflow-hidden transition-all duration-200 ${resourcesOpen || 'opacity-0 invisible group-hover:opacity-100 group-hover:visible'}`}>
                <Link
                  to="/about"
                  className="flex items-center gap-3 px-4 py-3 text-[var(--color-text-primary)] hover:bg-[var(--color-bg-secondary)] transition-colors"
                  onClick={() => setResourcesOpen(false)}
                >
                  <BookOpen className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span className="font-medium">About Us</span>
                </Link>
                <Link
                  to="/contact"
                  className="flex items-center gap-3 px-4 py-3 text-[var(--color-text-primary)] hover:bg-[var(--color-bg-secondary)] transition-colors"
                  onClick={() => setResourcesOpen(false)}
                >
                  <Mail className="w-4 h-4 text-green-600 dark:text-green-400" />
                  <span className="font-medium">Contact</span>
                </Link>
                <Link
                  to="/help"
                  className="flex items-center gap-3 px-4 py-3 text-[var(--color-text-primary)] hover:bg-[var(--color-bg-secondary)] transition-colors"
                  onClick={() => setResourcesOpen(false)}
                >
                  <HelpCircle className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  <span className="font-medium">Help & Support</span>
                </Link>
              </div>
            </div>
            
            {user && (
              <>
                <NavLink className={NavActiveStyle} to="/dashboard">
                  <span className="flex items-center gap-2">
                    <LayoutDashboard className="w-4 h-4" />
                    Dashboard
                  </span>
                </NavLink>
                <NavLink className={NavActiveStyle} to="/dashboard/add-habit">
                  Add Habit
                </NavLink>
                <NavLink className={NavActiveStyle} to="/dashboard/my-habits">
                  My Habits
                </NavLink>
              </>
            )}
          </div>

          {/* Right: Theme Toggle & User Menu - give min width to avoid overlap */}
          <div className="min-w-[160px] flex-1 flex items-center gap-3 md:gap-4 justify-end">
            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-[var(--color-primary-light)] text-white transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* User Profile or Login Button */}
            {user ? (
              <div ref={profileRef} className="relative group">
                <div
                  tabIndex={0}
                  role="button"
                  onClick={() => setProfileOpen(!profileOpen)}
                  className="flex items-center gap-2 p-1.5 rounded-full border-2 border-[var(--color-secondary)] cursor-pointer hover:scale-105 transition-transform"
                >
                  {user.photoURL ? (
                    <img
                      src={user.photoURL}
                      alt="User"
                      className="w-8 h-8 md:w-9 md:h-9 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-[var(--color-bg-secondary)] flex items-center justify-center text-[var(--color-secondary)]">
                      <UserIcon className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                  )}
                </div>

                {/* Dropdown with padding-top to bridge the gap */}
                <div className={`absolute right-0 pt-2 transition-all ${profileOpen ? 'block' : 'hidden group-hover:block'}`}>
                  <ul
                    tabIndex={0}
                    className="menu p-3 shadow-xl bg-[var(--color-bg-primary)] rounded-xl w-64 border border-[var(--color-border)]"
                  >
                    {/* User Info */}
                    <li className="pointer-events-none bg-[var(--color-bg-secondary)] rounded-lg mb-2 p-3">
                      <div className="flex items-center gap-3">
                        {user.photoURL ? (
                          <img
                            src={user.photoURL}
                            alt="Profile"
                            className="w-12 h-12 rounded-full object-cover"
                          />
                        ) : (
                          <div className="w-12 h-12 rounded-full bg-[var(--color-bg-tertiary)] flex items-center justify-center text-[var(--color-secondary)]">
                            <UserIcon className="w-7 h-7" />
                          </div>
                        )}
                        <div className="flex-1 min-w-0">
                          <p className="font-bold text-[var(--color-text-primary)] truncate">
                            {user.displayName || "User"}
                          </p>
                          <p className="text-xs text-[var(--color-text-secondary)] truncate">
                            {user.email}
                          </p>
                        </div>
                      </div>
                    </li>

                    {/* Dashboard Link */}
                    <li>
                      <Link
                        to="/dashboard"
                        className="text-[var(--color-text-primary)] hover:bg-[var(--color-secondary)] hover:text-white flex items-center gap-2 font-semibold"
                      >
                        <LayoutDashboard className="w-4 h-4" />
                        Dashboard
                      </Link>
                    </li>

                    {/* Logout Button */}
                    <li>
                      <button
                        onClick={handleLogOut}
                        className="text-red-600 hover:bg-red-100 dark:hover:bg-red-900 dark:hover:text-white flex items-center gap-2 font-bold w-full"
                      >
                        <LogOut className="w-4 h-4" />
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <Link
                to="/auth/login"
                className="bg-[var(--color-secondary)] !text-white px-6 md:px-8 py-2 hover:bg-[var(--color-secondary-dark)] border-none font-bold text-sm md:text-base rounded-lg transition-colors"
              >
                Login
              </Link>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-3 border-t border-[var(--color-primary-light)]">
            <div className="flex flex-col space-y-2">
              <NavLink
                onClick={() => setMobileMenuOpen(false)}
                className={NavActiveStyle}
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                onClick={() => setMobileMenuOpen(false)}
                className={NavActiveStyle}
                to="/publicHabit"
              >
                Explore Habits
              </NavLink>
              
              {/* Resources Section - Mobile */}
              <div className="py-2 border-t border-[var(--color-primary-light)] mt-2">
                <p className="text-white/60 text-xs font-semibold uppercase tracking-wider px-3 mb-2">Resources</p>
                <Link
                  to="/about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 !text-white hover:bg-[var(--color-primary-light)] px-3 py-2 rounded-md transition-colors duration-200"
                >
                  <BookOpen className="w-4 h-4" />
                  About Us
                </Link>
                <Link
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 !text-white hover:bg-[var(--color-primary-light)] px-3 py-2 rounded-md transition-colors duration-200"
                >
                  <Mail className="w-4 h-4" />
                  Contact
                </Link>
                <Link
                  to="/help"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 !text-white hover:bg-[var(--color-primary-light)] px-3 py-2 rounded-md transition-colors duration-200"
                >
                  <HelpCircle className="w-4 h-4" />
                  Help & Support
                </Link>
              </div>
              
              {user && (
                <>
                  <NavLink
                    onClick={() => setMobileMenuOpen(false)}
                    className={NavActiveStyle}
                    to="/dashboard"
                  >
                    <span className="flex items-center gap-2">
                      <LayoutDashboard className="w-4 h-4" />
                      Dashboard
                    </span>
                  </NavLink>
                  <NavLink
                    onClick={() => setMobileMenuOpen(false)}
                    className={NavActiveStyle}
                    to="/dashboard/add-habit"
                  >
                    Add Habit
                  </NavLink>
                  <NavLink
                    onClick={() => setMobileMenuOpen(false)}
                    className={NavActiveStyle}
                    to="/dashboard/my-habits"
                  >
                    My Habits
                  </NavLink>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
