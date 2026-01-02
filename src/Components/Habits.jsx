import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Clock,
  User,
  ChevronRight,
  BookOpen,
  Sun,
  Moon,
  Coffee,
} from "lucide-react";
import { FaDumbbell } from "react-icons/fa";
import Loading from "./Loading";
import { Link } from "react-router";

const Habits = () => {
  const [habits, setHabits] = useState([]);
  const [loading, setLoading] = useState(true);

  const normalizeCategory = (cat) => {
    if (!cat || typeof cat !== "string") return "Default";
    const formatted = cat.charAt(0).toUpperCase() + cat.slice(1).toLowerCase();
    const allowed = ["Fitness", "Morning", "Study", "Evening", "Work"];
    return allowed.includes(formatted) ? formatted : "Default";
  };

  const categoryColors = {
    Fitness: "bg-green-500",
    Morning: "bg-blue-500",
    Study: "bg-purple-500",
    Evening: "bg-orange-500",
    Work: "bg-yellow-500",
    Default: "bg-gray-500",
  };

  useEffect(() => {
    setLoading(true);
    fetch("https://habittracker-weld.vercel.app/habits")
      .then((res) => res.json())
      .then((habit) => {
        setHabits(habit.slice(0, 6)); // Show 6 habits in clean grid
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const getCategoryIcon = (category) => {
    switch (category) {
      case "Morning":
        return Sun;
      case "Work":
        return Coffee;
      case "Fitness":
        return FaDumbbell;
      case "Evening":
        return Moon;
      case "Study":
        return BookOpen;
      default:
        return Coffee;
    }
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  if (loading)
    return (
      <div className="min-h-screen flex justify-center items-center">
        <Loading></Loading>
      </div>
    );

  return (
    <section className="w-full py-20">
      <div className="w-11/12 max-w-7xl mx-auto">
        {/* Header - Centered & Symmetrical */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-text-primary)] mb-4">
            Popular Habits
          </h2>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            Explore and track the newest habits created by our community
          </p>
        </motion.div>

        {/* Cards Grid - Perfect Symmetry */}
        {habits.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-[var(--color-text-secondary)] text-lg">
              No habits found. Create your first habit!
            </p>
          </div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {habits.map((habit, index) => {
              const IconComponent = getCategoryIcon(habit.category);
              const habitImage = getHabitImage(habit.img);
              const category = normalizeCategory(habit.category);

              return (
                <motion.div
                  key={habit._id}
                  variants={cardVariants}
                  whileHover={{
                    y: -8,
                    transition: { duration: 0.3 },
                  }}
                  className="bg-white dark:bg-[var(--color-bg-secondary)] rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
                >
                  {/* Image Section - Fixed Height */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={habitImage}
                      alt={habit.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => (e.target.src = DEFAULT_PLACEHOLDER)}
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                    {/* Category Badge - Top Left */}
                    <div className="absolute top-4 left-4">
                      <span
                        className={`inline-flex items-center px-3 py-1.5 text-sm font-semibold text-white ${categoryColors[category]} rounded-full`}
                      >
                        {category}
                      </span>
                    </div>

                    {/* Icon - Top Right */}
                    <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 dark:bg-[var(--color-bg-primary)]/90 rounded-full flex items-center justify-center shadow-lg">
                      <IconComponent className="w-6 h-6 text-[var(--color-primary-dark)]" />
                    </div>
                  </div>

                  {/* Content Section - Consistent Padding */}
                  <div className="p-6">
                    {/* Title */}
                    <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-3 line-clamp-1">
                      {habit.title}
                    </h3>

                    {/* Description */}
                    {habit.description && (
                      <p className="text-sm text-[var(--color-text-secondary)] mb-4 line-clamp-2 h-10">
                        {habit.description}
                      </p>
                    )}

                    {/* Info Grid - Symmetrical */}
                    <div className="space-y-3 mb-6">
                      {/* User */}
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[var(--color-bg-tertiary)] flex items-center justify-center flex-shrink-0">
                          <User className="w-5 h-5 text-[var(--color-primary-dark)]" />
                        </div>
                        <span className="text-sm text-[var(--color-text-secondary)] truncate">
                          {habit.name || "Anonymous"}
                        </span>
                      </div>

                      {/* Time */}
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[var(--color-bg-tertiary)] flex items-center justify-center flex-shrink-0">
                          <Clock className="w-5 h-5 text-[var(--color-primary-dark)]" />
                        </div>
                        <span className="text-sm text-[var(--color-text-secondary)]">
                          {formatTime(habit.reminderTime)}
                        </span>
                      </div>
                    </div>

                    {/* CTA Button - Full Width */}
                    <Link to={`/details/${habit._id}`} className="block">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-gradient-to-r from-[var(--color-primary-dark)] to-[var(--color-primary-medium)] text-white font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-shadow"
                      >
                        View Details
                        <ChevronRight className="w-5 h-5" />
                      </motion.button>
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        )}

        {/* View All CTA - Centered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link to="/publicHabit">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-secondary-dark)] text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-shadow"
            >
              Explore All Habits
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Habits;
