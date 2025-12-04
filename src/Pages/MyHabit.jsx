import React, { useContext, useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Loading from "../Components/Loading";
import { AuthContext } from "../Provider/AuthProvider";

import { motion, AnimatePresence } from "framer-motion";
import {
  Trash2,
  Edit2,
  CheckCircle,
  Plus,
  TrendingUp,
  Calendar,
  Tag,
} from "lucide-react";
import { Link } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const MyHabit = () => {
  const [myHabits, setMyHabits] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);

  // track which habit ids are currently being updated
  const [loadingIds, setLoadingIds] = useState(new Set());

  const categoryColors = {
    Fitness: "bg-green-100 text-green-700",
    Morning: "bg-blue-100 text-blue-700",
    Study: "bg-purple-100 text-purple-700",
    Evening: "bg-orange-100 text-orange-700",
    Work: "bg-yellow-100 text-yellow-700",
    Default: "bg-gray-100 text-gray-700",
  };

  useEffect(() => {
    if (!user?.email) {
      setMyHabits([]);
      setLoading(false);
      return;
    }

    setLoading(true);
    fetch(
      `http://localhost:3000/my-habits?email=${encodeURIComponent(user.email)}`
    )
      .then((res) => res.json())
      .then((habits) => {
        setMyHabits(habits || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load my habits:", err);
        setLoading(false);
        toast.error("Failed to load habits");
      });
  }, [user?.email]);

  // ----- UTIL: FORMAT CREATED DATE -----
  const formatDate = (dateValue) => {
    try {
      // support different date shapes
      const maybeDate = dateValue?.$date || dateValue;
      const date = new Date(maybeDate);

      const day = String(date.getDate()).padStart(2, "0");
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const year = date.getFullYear();

      return `${day}-${month}-${year}`;
    } catch {
      return "Invalid Date";
    }
  };

  if (loading) {
    return <Loading></Loading>;
  }

  // helper to check whether a habit has an entry for today
  const isCompletedToday = (habit) => {
    const today = new Date().toISOString().split("T")[0];
    return (
      Array.isArray(habit?.completionHistory) &&
      habit.completionHistory.includes(today)
    );
  };

  // MARK COMPLETE handler (optimistic update using server response)
  const handleMarkComplete = (id) => {
    if (!id || loadingIds.has(id)) return;

    setLoadingIds((prev) => new Set(prev).add(id));

    axios
      .patch(`http://localhost:3000/habits/${id}/complete`)
      .then((res) => {
        const updatedHabit = res.data;

        setMyHabits((prev) =>
          prev.map((h) =>
            String(h._id) === String(updatedHabit._id) ? updatedHabit : h
          )
        );

        toast.success("Habit marked as completed ✔", {
          position: "top-center",
          autoClose: 2000,
        });
      })
      .catch((err) => {
        console.error("Axios ERROR →", err);
        toast.error("Could not update. Try again.");
      })
      .finally(() => {
        setLoadingIds((prev) => {
          const copy = new Set(prev);
          copy.delete(id);
          return copy;
        });
      });
  };

  const handleDelete = (id) => {
    // Show confirmation dialog
    const confirmed = window.confirm(
      "Are you sure? This action cannot be undone."
    );

    if (!confirmed) return; // User canceled

    axios
      .delete(`http://localhost:3000/delete/${id}`)
      .then((res) => {
        // Filter out the deleted habit
        const filteredHabit = myHabits.filter(
          (habit) => String(habit._id) !== String(id)
        );
        setMyHabits(filteredHabit);
        toast.success("Habit deleted successfully ✔");
      })
      .catch((err) => {
        console.error(err);
        toast.error("Could not delete. Try again.");
      });
  };

  return (
    <div>
      <ToastContainer />
      <header>
        <Navbar />
      </header>
      <main>
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 p-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <h1 className="text-4xl font-bold text-gray-800 mb-2">
                My Habits
              </h1>
              <p className="text-gray-600">
                Track your daily habits and build consistency
              </p>
            </motion.div>

            <Link to="/addHabit" className="inline-block">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mb-6 px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium shadow-lg hover:bg-indigo-700 transition-colors flex items-center gap-2"
              >
                <Plus size={20} /> Add New Habit
              </motion.button>
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl shadow-xl overflow-hidden"
            >
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                    <tr>
                      <th className="px-6 py-4">Title</th>
                      <th className="px-6 py-4">Category</th>
                      <th className="px-6 py-4">Current Streak</th>
                      <th className="px-6 py-4">Created Date</th>
                      <th className="px-6 py-4 text-center">Actions</th>
                    </tr>
                  </thead>

                  <tbody>
                    <AnimatePresence>
                      {myHabits.map((habit, index) => {
                        const completedToday = isCompletedToday(habit);
                        const isLoading = loadingIds.has(String(habit._id));

                        return (
                          <motion.tr
                            key={habit._id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ delay: index * 0.05 }}
                            className="border-b hover:bg-indigo-50"
                          >
                            <td className="px-6 py-4">
                              <span className="font-medium text-gray-800">
                                {habit.title}
                              </span>
                            </td>

                            <td className="px-6 py-4">
                              <span
                                className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${
                                  categoryColors[habit.category] ||
                                  categoryColors.Default
                                }`}
                              >
                                <Tag size={12} /> {habit.category}
                              </span>
                            </td>

                            <td className="px-6 py-4">
                              <div className="flex items-center gap-2">
                                <TrendingUp
                                  size={16}
                                  className="text-indigo-600"
                                />
                                <span className="font-bold text-indigo-600 text-lg">
                                  {habit.currentStreak || 0}
                                </span>
                                <span className="text-gray-500 text-sm">
                                  days
                                </span>
                              </div>
                            </td>

                            <td className="px-6 py-4">
                              <div className="flex items-center gap-2 text-gray-600">
                                <Calendar size={14} />
                                <span className="text-sm">
                                  {formatDate(habit.createdAt)}
                                </span>
                              </div>
                            </td>

                            <td className="px-6 py-4 text-center">
                              <div className="flex justify-center gap-2">
                                {/* MARK COMPLETE BUTTON */}
                                <button
                                  onClick={() => handleMarkComplete(habit._id)}
                                  disabled={completedToday || isLoading}
                                  className={`p-2 rounded-lg transition ${
                                    completedToday
                                      ? "bg-green-100 text-green-600 cursor-not-allowed"
                                      : "bg-green-50 text-green-600 hover:bg-green-100 hover:text-green-800"
                                  } ${
                                    isLoading ? "opacity-70 cursor-wait" : ""
                                  }`}
                                  title={
                                    completedToday
                                      ? "Already completed today"
                                      : "Mark completed"
                                  }
                                >
                                  {isLoading ? (
                                    <svg
                                      className="w-4 h-4 animate-spin"
                                      viewBox="0 0 24 24"
                                    >
                                      <circle
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                        fill="none"
                                      ></circle>
                                    </svg>
                                  ) : (
                                    <CheckCircle size={18} />
                                  )}
                                </button>

                                <Link
                                  to={`/updateHabit/${habit?._id}`}
                                  className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 hover:text-blue-800 transition hover:scale-105"
                                >
                                  <Edit2 size={18} />
                                </Link>

                                <button
                                  onClick={() => handleDelete(habit?._id)}
                                  className="p-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 hover:text-red-800 transition hover:scale-105"
                                >
                                  <Trash2 size={18} />
                                </button>
                              </div>

                              {/* Completed Today text */}
                              {completedToday && (
                                <div className="mt-2 text-sm text-green-600 font-semibold">
                                  ✓ Completed Today
                                </div>
                              )}
                            </td>
                          </motion.tr>
                        );
                      })}
                    </AnimatePresence>
                  </tbody>
                </table>
              </div>

              {myHabits.length === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-12"
                >
                  <div className="text-gray-400 mb-4">
                    <TrendingUp size={48} className="mx-auto" />
                  </div>
                  <p className="text-gray-500 text-lg">
                    No habits yet. Start building your routine!
                  </p>
                </motion.div>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-6 text-center text-sm text-gray-500"
            >
              Total Habits: {myHabits.length} | Keep building your consistency!
              🎯
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MyHabit;
