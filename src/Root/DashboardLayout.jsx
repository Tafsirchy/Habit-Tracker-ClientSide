import React, { useContext, useState, useEffect, useRef } from "react";
import { Link, NavLink, Outlet } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { 
  LayoutDashboard, 
  Plus, 
  List, 
  User, 
  Menu, 
  X,
  LogOut
} from "lucide-react";
import { toast } from "react-toastify";
import logo from "../assets/habits (1).png";
import ThemeToggle from "../Components/ThemeToggle";

const DashboardLayout = () => {
  const { user, logOut } = useContext(AuthContext);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  
  const profileRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
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

  const NavActiveStyle = ({ isActive }) =>
    isActive
      ? "bg-[var(--color-secondary)] text-white font-semibold"
      : "hover:bg-[var(--color-bg-hover)] hover:text-[var(--color-primary-dark)] dark:hover:text-white";

  const menuItems = [
    {
      to: "/dashboard",
      icon: LayoutDashboard,
      label: "Dashboard Home",
      end: true,
    },
    {
      to: "/dashboard/add-habit",
      icon: Plus,
      label: "Add Habit",
    },
    {
      to: "/dashboard/my-habits",
      icon: List,
      label: "My Habits",
    },
    {
      to: "/dashboard/profile",
      icon: User,
      label: "Profile",
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--color-bg-secondary)] transition-colors duration-300">
      {/* Top Navbar */}
      <nav className="bg-[var(--color-primary-dark)] shadow-lg fixed top-0 left-0 right-0 z-50">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left: Logo and Menu Toggle */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-[var(--color-primary-light)] text-white transition-colors"
              >
                {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>

              <Link to="/" className="flex items-center gap-2">
                <img src={logo} alt="Habit Tracker" className="w-10 h-10" />
                <span className="text-white font-bold text-lg hidden sm:inline">
                  Habit Tracker
                </span>
              </Link>
            </div>

            {/* Right: Theme Toggle and Profile */}
            <div className="flex items-center gap-4">
              <ThemeToggle />

              {/* Profile Dropdown */}
              <div ref={profileRef} className="dropdown dropdown-end group">
                <div
                  tabIndex={0}
                  role="button"
                  onClick={() => setProfileOpen(!profileOpen)}
                  className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[var(--color-primary-light)] transition-colors cursor-pointer"
                >
                  {user?.photoURL ? (
                    <img
                      src={user?.photoURL}
                      alt="Profile"
                      className="w-8 h-8 rounded-full object-cover border-2 border-[var(--color-secondary)]"
                    />
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-[var(--color-bg-secondary)] dark:bg-[var(--color-bg-tertiary)] flex items-center justify-center border-2 border-[var(--color-secondary)] text-[var(--color-secondary)]">
                      <User className="w-5 h-5" />
                    </div>
                  )}
                  <div className="hidden md:block text-left">
                    <p className="text-white text-sm font-semibold truncate max-w-[150px]">
                      {user?.displayName || "User"}
                    </p>
                    <p className="text-gray-300 text-xs truncate max-w-[150px]">
                      {user?.email}
                    </p>
                  </div>
                </div>

                {/* Dropdown with padding-top to bridge the gap */}
                <div className={`absolute right-0 pt-3 transition-all ${profileOpen ? 'block' : 'hidden group-hover:block'}`}>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu p-3 shadow-xl bg-[var(--color-bg-primary)] rounded-xl w-64 border border-[var(--color-border)]"
                  >
                  <li className="pointer-events-none bg-[var(--color-bg-secondary)] rounded-lg mb-2 p-3">
                    <div className="flex items-center gap-3">
                      {user?.photoURL ? (
                        <img
                          src={user?.photoURL}
                          alt="Profile"
                          className="w-12 h-12 rounded-full object-cover"
                        />
                      ) : (
                        <div className="w-12 h-12 rounded-full bg-[var(--color-bg-tertiary)] flex items-center justify-center text-[var(--color-secondary)]">
                          <User className="w-7 h-7" />
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <p className="font-bold text-[var(--color-text-primary)] truncate">
                          {user?.displayName || "User"}
                        </p>
                        <p className="text-xs text-[var(--color-text-secondary)] truncate">
                          {user?.email}
                        </p>
                      </div>
                    </div>
                  </li>

                  <li>
                    <Link
                      to="/dashboard/profile"
                      className="text-[var(--color-text-primary)] hover:bg-[var(--color-secondary)] hover:text-white flex items-center gap-2 font-semibold"
                    >
                      <User className="w-4 h-4" />
                      Profile
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/"
                      className="text-[var(--color-text-primary)] hover:bg-[var(--color-secondary)] hover:text-white flex items-center gap-2 font-semibold"
                    >
                      <LayoutDashboard className="w-4 h-4" />
                      Home
                    </Link>
                  </li>

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
            </div>
          </div>
        </div>
      </nav>

      <div className="flex">
        {/* Sidebar */}
        <aside
          className={`fixed top-16 left-0 h-[calc(100vh-4rem)] bg-[var(--color-bg-primary)] border-r border-[var(--color-border)] transition-transform duration-300 z-40 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
          } w-64`}
        >
          <div className="p-4 space-y-2">
            <div className="mb-6">
              <h2 className="text-lg font-bold text-[var(--color-text-primary)] px-3">
                Dashboard Menu
              </h2>
            </div>

            {menuItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${NavActiveStyle(
                    { isActive }
                  )}`
              }
                onClick={() => setSidebarOpen(false)}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </NavLink>
            ))}
          </div>

          {/* Back to Home Button */}
          <div className="absolute bottom-4 left-4 right-4">
            <Link
              to="/"
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[var(--color-secondary)] text-[var(--color-primary-dark)] hover:bg-[var(--color-secondary-dark)] hover:text-white transition-all font-semibold"
            >
              <LayoutDashboard className="w-5 h-5" />
              Back to Home
            </Link>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-h-[calc(100vh-4rem)] lg:ml-64 mt-16">
          <Outlet />
        </main>
      </div>

      {/* Sidebar Overlay for Mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default DashboardLayout;
