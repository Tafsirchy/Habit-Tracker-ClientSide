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
  Sparkles,
  Target,
  Flame,
  Clock,
} from "lucide-react";
import { Link } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const MyHabit = () => {
  const [myHabits, setMyHabits] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);

  const [loadingIds, setLoadingIds] = useState(new Set());

  const categoryColors = {
    Fitness: "bg-green-100 text-green-700",
    Morning: "bg-blue-100 text-blue-700",
    Study: "bg-purple-100 text-purple-700",
    Evening: "bg-orange-100 text-orange-700",
    Work: "bg-yellow-100 text-yellow-700",
    Default: "bg-gray-100 text-gray-700",
  };

  const getCategoryColor = (rawCategory) => {
    if (!rawCategory) return categoryColors.Default;

    const formatted = rawCategory.trim();
    const key =
      formatted.charAt(0).toUpperCase() + formatted.slice(1).toLowerCase();

    return categoryColors[key] || categoryColors.Default;
  };

  const formatCategory = (value) => {
    if (!value) return "";
    return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
  };

  useEffect(() => {
    if (!user?.email) {
      setMyHabits([]);
      setLoading(false);
      return;
    }

    setLoading(true);

    fetch(`habittracker-weld.vercel.app/my-habits?email=${user.email}`)
      .then((res) => res.json())
      .then((habits) => {
        setMyHabits(habits || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load habits:", err);
        setLoading(false);
        toast.error("Failed to load habits");
      });
  }, [user?.email]);

  const formatDate = (value) => {
    try {
      const date = new Date(value?.$date || value);
      const d = String(date.getDate()).padStart(2, "0");
      const m = String(date.getMonth() + 1).padStart(2, "0");
      const y = date.getFullYear();
      return `${d}-${m}-${y}`;
    } catch {
      return "Invalid Date";
    }
  };

  if (loading)
    return (
      <div className="min-h-screen flex justify-center items-center">
        <Loading />
      </div>
    );

  const isCompletedToday = (habit) => {
    const today = new Date().toISOString().split("T")[0];
    return habit?.completionHistory?.includes(today);
  };

  const handleMarkComplete = (id) => {
    if (!id || loadingIds.has(id)) return;

    setLoadingIds((prev) => new Set(prev).add(id));

    axios
      .patch(`habittracker-weld.vercel.app/habits/${id}/complete`)
      .then((res) => {
        const updatedHabit = res.data;

        setMyHabits((prev) =>
          prev.map((h) =>
            String(h._id) === String(updatedHabit._id) ? updatedHabit : h
          )
        );

        toast.success("Habit marked as completed ✔");
      })
      .catch((err) => {
        console.error(err);
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
    if (!window.confirm("Are you sure? This action cannot be undone.")) return;

    axios
      .delete(`habittracker-weld.vercel.app/delete/${id}`)
      .then(() => {
        setMyHabits((prev) =>
          prev.filter((habit) => String(habit._id) !== String(id))
        );
        toast.success("Habit deleted successfully ✔");
      })
      .catch(() => toast.error("Could not delete. Try again."));
  };

  return (
    <div>
      <ToastContainer />
      <header>
        <Navbar />
      </header>

      <main>
        <div className="min-h-screen bg-gradient-to-br from-[#E3E3E3] via-slate-100 to-gray-100 py-12 px-4 relative overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.08, 0.15, 0.08],
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-20 left-20 w-96 h-96 bg-[#456882] rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.08, 0.12, 0.08],
            }}
            transition={{ duration: 10, repeat: Infinity, delay: 1 }}
            className="absolute bottom-20 right-20 w-96 h-96 bg-[#234C6A] rounded-full blur-3xl"
          />

          <div className="max-w-5xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-10"
            >
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#1B3C53] to-[#234C6A] text-white px-6 py-2 rounded-full mb-4 shadow-lg">
                <Target size={20} />
                <span className="font-semibold">Habit Tracker</span>
              </div>
              <h1 className="text-5xl  font-black text-transparent bg-clip-text bg-gradient-to-r from-[#1B3C53] via-[#234C6A] to-[#456882] mb-3">
                My Habits
              </h1>
              <p className="text-gray-600 text-lg mb-6">
                Track your daily habits and build lasting consistency
              </p>

              <Link to="/addHabit">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#1B3C53] to-[#234C6A] text-white rounded-xl font-bold shadow-xl hover:shadow-2xl transition-all text-lg hover:from-[#A3B18A] hover:to-[#234C6A]"
                >
                  <Plus size={24} />
                  Add New Habit
                  <Sparkles size={20} />
                </motion.button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-500 text-sm font-medium mb-1">
                      Total Habits
                    </p>
                    <p className="text-4xl font-bold text-[#1B3C53]">
                      {myHabits.length}
                    </p>
                  </div>
                  <div className="w-16 h-16 bg-gradient-to-br from-[#E3E3E3] to-gray-200 rounded-2xl flex items-center justify-center">
                    <Target className="text-[#1B3C53]" size={32} />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-500 text-sm font-medium mb-1">
                      Completed Today
                    </p>
                    <p className="text-4xl font-bold text-[#234C6A]">
                      {myHabits.filter(isCompletedToday).length}
                    </p>
                  </div>
                  <div className="w-16 h-16 bg-gradient-to-br from-[#E3E3E3] to-gray-200 rounded-2xl flex items-center justify-center">
                    <CheckCircle className="text-[#234C6A]" size={32} />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-500 text-sm font-medium mb-1">
                      Total Streak
                    </p>
                    <p className="text-4xl font-bold text-[#456882]">
                      {myHabits.reduce(
                        (sum, h) => sum + (h.currentStreak || 0),
                        0
                      )}
                    </p>
                  </div>
                  <div className="w-16 h-16 bg-gradient-to-br from-[#E3E3E3] to-gray-200 rounded-2xl flex items-center justify-center">
                    <Flame className="text-[#456882]" size={32} />
                  </div>
                </div>
              </div>
            </motion.div>

            {myHabits.length > 0 ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="space-y-4"
              >
                <AnimatePresence>
                  {myHabits.map((habit, index) => {
                    const completedToday = isCompletedToday(habit);
                    const isLoading = loadingIds.has(String(habit._id));

                    return (
                      <motion.div
                        key={habit._id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{ x: 4 }}
                        className={`bg-white rounded-2xl shadow-lg border-2 overflow-hidden ${
                          completedToday
                            ? "border-[#456882] bg-gradient-to-r from-white to-[#E3E3E3]"
                            : "border-gray-200 hover:border-[#456882]"
                        } transition-all`}
                      >
                        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 p-6">
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start gap-3 mb-3">
                              <h3 className="text-xl font-bold text-gray-800 flex-1">
                                {habit.title}
                              </h3>
                              {completedToday && (
                                <motion.div
                                  initial={{ scale: 0, rotate: -180 }}
                                  animate={{ scale: 1, rotate: 0 }}
                                  className="flex-shrink-0"
                                >
                                  <div className="w-8 h-8 bg-[#456882] rounded-full flex items-center justify-center">
                                    <CheckCircle
                                      className="text-white"
                                      size={18}
                                    />
                                  </div>
                                </motion.div>
                              )}
                            </div>

                            <div className="flex flex-wrap items-center gap-3">
                              <span
                                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold shadow-md ${getCategoryColor(
                                  habit.category
                                )}`}
                              >
                                <Tag size={12} />
                                {formatCategory(habit.category)}
                              </span>

                              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#E3E3E3] text-gray-700 rounded-full text-xs font-medium">
                                <Calendar size={12} />
                                {formatDate(habit.createdAt)}
                              </span>
                            </div>
                          </div>

                          <div className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#E3E3E3] to-gray-100 rounded-xl border border-gray-300">
                            <Flame className="text-[#456882]" size={24} />
                            <div>
                              <p className="text-xs text-gray-600 font-medium">
                                Streak
                              </p>
                              <p className="text-2xl font-black text-[#456882]">
                                {habit.currentStreak || 0}
                              </p>
                            </div>
                          </div>

                          <div className="flex gap-2 md:flex-shrink-0">
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={() => handleMarkComplete(habit._id)}
                              disabled={completedToday || isLoading}
                              className={`px-5 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 ${
                                completedToday
                                  ? "bg-[#E3E3E3] text-[#456882] cursor-not-allowed"
                                  : "bg-[#456882] text-white hover:bg-[#234C6A] shadow-md hover:shadow-lg"
                              } ${isLoading ? "opacity-70 cursor-wait" : ""}`}
                            >
                              {isLoading ? (
                                <svg
                                  className="w-5 h-5 animate-spin"
                                  viewBox="0 0 24 24"
                                >
                                  <circle
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                    fill="none"
                                  />
                                </svg>
                              ) : (
                                <>
                                  <CheckCircle size={18} />
                                  <span className="hidden sm:inline">
                                    {completedToday ? "Done" : "Complete"}
                                  </span>
                                </>
                              )}
                            </motion.button>

                            <Link to={`/updateHabit/${habit._id}`}>
                              <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="p-3 bg-[#234C6A] text-white rounded-xl hover:bg-[#1B3C53] shadow-md transition-all"
                              >
                                <Edit2 size={18} />
                              </motion.button>
                            </Link>

                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              onClick={() => handleDelete(habit._id)}
                              className="p-3 bg-red-500 text-white rounded-xl hover:bg-red-600 shadow-md transition-all"
                            >
                              <Trash2 size={18} />
                            </motion.button>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-2xl shadow-xl p-16 text-center"
              >
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="mb-6"
                >
                  <TrendingUp size={80} className="mx-auto text-gray-300" />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-700 mb-2">
                  No habits yet
                </h3>
                <p className="text-gray-500 text-lg mb-6">
                  Start building your routine and track your progress!
                </p>
                <Link to="/addHabit">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 bg-gradient-to-r from-[#1B3C53] to-[#234C6A] text-white rounded-xl font-bold shadow-lg flex items-center gap-2 mx-auto"
                  >
                    <Plus size={20} />
                    Create Your First Habit
                  </motion.button>
                </Link>
              </motion.div>
            )}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-12 text-center"
            >
              <p className="text-gray-500">
                💪 Keep building your consistency! Every day counts. 🎯
              </p>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MyHabit;
