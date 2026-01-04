import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Clock,
  User,
  Mail,
  ChevronRight,
  BookOpen,
  Sun,
  Moon,
  Coffee,
} from "lucide-react";
import { FaDumbbell } from "react-icons/fa";
import { Link } from "react-router";
import Loading from "../Components/Loading";

import HabitsNotFound from "./HabitsNotFound ";

const PublicHabit = () => {
  const [habits, setHabits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("");
  const [search, setSearch] = useState("");
  const [initialLoad, setInitialLoad] = useState(true);
  const [categoryLoading, setCategoryLoading] = useState(false);

  const categoryColors = {
    Fitness: "bg-green-100 text-green-700",
    Morning: "bg-blue-100 text-blue-700",
    Study: "bg-purple-100 text-purple-700",
    Evening: "bg-orange-100 text-orange-700",
    Work: "bg-yellow-100 text-yellow-700",
    Default: "bg-gray-100 text-gray-700",
  };

  useEffect(() => {
    if (!initialLoad && category !== "") {
      setCategoryLoading(true);
    }

    fetch(
      `https://habittracker-weld.vercel.app/public-habits?category=${category}&search=${search}`
    )
      .then((res) => res.json())
      .then((data) => {
        setHabits(Array.isArray(data) ? data : data.habits || []);
        setLoading(false);

        setCategoryLoading(false);
        if (initialLoad) setInitialLoad(false);
      })
      .catch((err) => {
        console.log(err);
        setHabits([]);
        setLoading(false);
        setCategoryLoading(false);
      });
  }, [category, search]);


  const getCategoryIcon = (category) => {
    const c = category?.toLowerCase();

    if (c === "morning") return Sun;
    if (c === "work") return Coffee;
    if (c === "fitness") return FaDumbbell;
    if (c === "evening") return Moon;
    if (c === "study") return BookOpen;

    return Coffee;
  };

  const DEFAULT_PLACEHOLDER =
    "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&q=80";

  const getHabitImage = (habitImg) => {
    if (habitImg && !habitImg.includes("fakepath")) return habitImg;
    return DEFAULT_PLACEHOLDER;
  };

  const formatTime = (time) => {
    if (!time) return "Not set";
    const [hours, minutes] = time.split(":");
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? "PM" : "AM";
    const displayHour = hour % 12 || 12;
    return `${displayHour}:${minutes} ${ampm}`;
  };

  const normalizeCategory = (category) => {
    if (!category) return "Unknown";
    return category.charAt(0).toUpperCase() + category.slice(1).toLowerCase();
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        type: "spring",
        stiffness: 60,
      },
    }),
  };

  if (initialLoad && loading)
    return (
      <div className="min-h-screen flex justify-center items-center">
        <Loading></Loading>
      </div>
    );

  return (
    <div>
      <main className="bg-[var(--color-bg-secondary)] dark:bg-[var(--color-bg-secondary)] transition-color duration-500">
        <div className="w-11/12 mx-auto py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-text-primary)] mb-4">
                All Community Habits
              </h2>
              <p className="text-[var(--color-text-secondary)] text-lg max-w-2xl mx-auto">
                Explore every habit created by users across the platform
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-stretch gap-3 mb-10 max-w-3xl mx-auto"
            >
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="Search habits..."
                  className="w-full px-5 py-3.5 bg-white dark:bg-[var(--color-bg-tertiary)] border border-[var(--color-border)] rounded-full focus:ring-2 focus:ring-[var(--color-primary-dark)] focus:border-transparent outline-none transition-all duration-200 text-[var(--color-text-primary)] placeholder:text-[var(--color-text-tertiary)] shadow-sm"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <BookOpen className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--color-primary-dark)] pointer-events-none" />
              </div>

              <div className="flex flex-wrap sm:flex-nowrap gap-2 justify-center">
                <button
                  onClick={() => setCategory("")}
                  className={`px-5 py-2.5 rounded-full font-medium transition-all duration-200 ${
                    category === ""
                      ? "bg-gradient-to-r from-[var(--color-primary-dark)] to-[var(--color-primary-medium)] text-white shadow-md"
                      : "bg-white dark:bg-[var(--color-bg-secondary)] text-[var(--color-primary-dark)] dark:text-[var(--color-text-primary)] border border-[var(--color-border)] hover:border-[var(--color-primary-dark)]"
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setCategory("Morning")}
                  className={`px-5 py-2.5 rounded-full font-medium transition-all duration-200 ${
                    category === "Morning"
                      ? "bg-gradient-to-r from-[var(--color-primary-dark)] to-[var(--color-primary-medium)] text-white shadow-md"
                      : "bg-white dark:bg-[var(--color-bg-secondary)] text-[var(--color-primary-dark)] dark:text-[var(--color-text-primary)] border border-[var(--color-border)] hover:border-[var(--color-primary-dark)]"
                  }`}
                >
                  Morning
                </button>
                <button
                  onClick={() => setCategory("Fitness")}
                  className={`px-5 py-2.5 rounded-full font-medium transition-all duration-200 ${
                    category === "Fitness"
                      ? "bg-gradient-to-r from-[var(--color-primary-dark)] to-[var(--color-primary-medium)] text-white shadow-md"
                      : "bg-white dark:bg-[var(--color-bg-secondary)] text-[var(--color-primary-dark)] dark:text-[var(--color-text-primary)] border border-[var(--color-border)] hover:border-[var(--color-primary-dark)]"
                  }`}
                >
                  Fitness
                </button>
                <button
                  onClick={() => setCategory("Work")}
                  className={`px-5 py-2.5 rounded-full font-medium transition-all duration-200 ${
                    category === "Work"
                      ? "bg-gradient-to-r from-[var(--color-primary-dark)] to-[var(--color-primary-medium)] text-white shadow-md"
                      : "bg-white dark:bg-[var(--color-bg-secondary)] text-[var(--color-primary-dark)] dark:text-[var(--color-text-primary)] border border-[var(--color-border)] hover:border-[var(--color-primary-dark)]"
                  }`}
                >
                  Work
                </button>
                <button
                  onClick={() => setCategory("Evening")}
                  className={`px-5 py-2.5 rounded-full font-medium transition-all duration-200 ${
                    category === "Evening"
                      ? "bg-gradient-to-r from-[var(--color-primary-dark)] to-[var(--color-primary-medium)] text-white shadow-md"
                      : "bg-white dark:bg-[var(--color-bg-secondary)] text-[var(--color-primary-dark)] dark:text-[var(--color-text-primary)] border border-[var(--color-border)] hover:border-[var(--color-primary-dark)]"
                  }`}
                >
                  Evening
                </button>
                <button
                  onClick={() => setCategory("Study")}
                  className={`px-5 py-2.5 rounded-full font-medium transition-all duration-200 ${
                    category === "Study"
                      ? "bg-gradient-to-r from-[var(--color-primary-dark)] to-[var(--color-primary-medium)] text-white shadow-md"
                      : "bg-white dark:bg-[var(--color-bg-secondary)] text-[var(--color-primary-dark)] dark:text-[var(--color-text-primary)] border border-[var(--color-border)] hover:border-[var(--color-primary-dark)]"
                  }`}
                >
                  Study
                </button>
              </div>
            </motion.div>

            {categoryLoading ? (
              <div className="flex justify-center items-center py-20">
                <Loading></Loading>
              </div>
            ) : habits.length === 0 ? (
              <div className="py-12">
                <HabitsNotFound />
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
                {habits.map((habit, index) => {
                  const IconComponent = getCategoryIcon(habit.category);
                  const habitImage = getHabitImage(habit.img);

                  return (
                    <motion.div
                      key={habit._id}
                      custom={index}
                      variants={cardVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      whileHover={{ y: -10, transition: { duration: 0.3 } }}
                      className="bg-[var(--color-bg-primary)] dark:bg-[var(--color-bg-tertiary)] rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-[var(--color-border)]"
                    >
                      {/* Image */}
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={habitImage}
                          alt={habit.title}
                          className="w-full h-full min-h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          onError={(e) => (e.target.src = DEFAULT_PLACEHOLDER)}
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                        <div className="absolute top-4 left-4">
                          <span
                            className={`inline-block mt-2 px-5 py-2 text-sm rounded-full ${
                              categoryColors[
                                normalizeCategory(habit.category)
                              ] || categoryColors.Default
                            }`}
                          >
                            {normalizeCategory(habit.category)}
                          </span>
                        </div>

                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 360 }}
                          transition={{ duration: 0.6 }}
                          className="absolute top-4 right-4 w-12 h-12 bg-white/90 dark:bg-[var(--color-bg-secondary)]/90 rounded-full flex items-center justify-center shadow-lg"
                        >
                          <IconComponent className="w-6 h-6 text-[var(--color-primary-dark)]" />
                        </motion.div>
                      </div>

                      <div className="p-6">
                        <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-2">
                          {habit.title}
                        </h3>

                        {habit.description && (
                          <p className="text-sm text-[var(--color-text-secondary)] mb-4 line-clamp-2">
                            {habit.description}
                          </p>
                        )}

                        <div className="space-y-3 mb-5">
                          <div className="flex items-center gap-3 text-[var(--color-text-secondary)]">
                            <div className="w-8 h-8 rounded-full bg-[var(--color-bg-tertiary)] flex items-center justify-center">
                              <User className="w-4 h-4 text-[var(--color-primary-dark)]" />
                            </div>
                            <span className="text-sm truncate text-[var(--color-text-primary)]">
                              {habit.name || "Anonymous"}
                            </span>
                          </div>

                          <div className="flex items-center gap-3 text-[var(--color-text-secondary)]">
                            <div className="w-8 h-8 rounded-full bg-[var(--color-bg-tertiary)] flex items-center justify-center">
                              <Mail className="w-4 h-4 text-[var(--color-primary-dark)]" />
                            </div>
                            <span className="text-sm truncate text-[var(--color-text-primary)]">
                              {habit.email || "No email"}
                            </span>
                          </div>

                          <div className="flex items-center gap-3 text-[var(--color-text-secondary)]">
                            <div className="w-8 h-8 rounded-full bg-[var(--color-bg-tertiary)] flex items-center justify-center">
                              <Clock className="w-4 h-4 text-[var(--color-primary-dark)]" />
                            </div>
                            <span className="text-sm text-[var(--color-text-primary)]">
                              {formatTime(habit.reminderTime)}
                            </span>
                          </div>
                        </div>

                        <Link to={`/details/${habit._id}`}>
                          <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full bg-gradient-to-r from-[var(--color-primary-dark)] to-[var(--color-primary-medium)] text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 shadow-md hover:shadow-lg dark:hover:from-[var(--color-secondary)] dark:hover:to-[var(--color-primary-dark)]"
                          >
                            View Details
                            <ChevronRight className="w-5 h-5" />
                          </motion.button>
                        </Link>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default PublicHabit;
