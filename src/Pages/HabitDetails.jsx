import {
  Award,
  Calendar,
  Flame,
  User,
  CheckCircle,
  TrendingUp,
  Target,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { motion } from "framer-motion";
import Loading from "../Components/Loading";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SmallSpinner = () => (
  <motion.div
    animate={{ rotate: 360 }}
    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
  />
);

const HabitDetails = () => {
  const { id } = useParams();
  const [habit, setHabit] = useState(null);
  const [loading, setLoading] = useState(true);
  const [buttonLoading, setButtonLoading] = useState(false);

  const categoryColors = {
    Fitness: "bg-emerald-500/10 text-emerald-700 border-emerald-500/20",
    Morning: "bg-sky-500/10 text-sky-700 border-sky-500/20",
    Study: "bg-purple-500/10 text-purple-700 border-purple-500/20",
    Evening: "bg-amber-500/10 text-amber-700 border-amber-500/20",
    Work: "bg-blue-500/10 text-blue-700 border-blue-500/20",
    Default: "bg-slate-500/10 text-slate-700 border-slate-500/20",
  };

  const categoryGradients = {
    Fitness: "from-emerald-500 to-teal-500",
    Morning: "from-sky-500 to-blue-500",
    Study: "from-purple-500 to-indigo-500",
    Evening: "from-amber-500 to-orange-500",
    Work: "from-blue-500 to-cyan-500",
    Default: "from-slate-500 to-gray-500",
  };

  const normalizeCategory = (cat) => {
    if (!cat || typeof cat !== "string") return "Default";

    const formatted = cat.charAt(0).toUpperCase() + cat.slice(1).toLowerCase();

    const allowed = ["Fitness", "Morning", "Study", "Evening", "Work"];

    return allowed.includes(formatted) ? formatted : "Default";
  };

  useEffect(() => {
    fetch(`habittracker-weld.vercel.app/habits/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setHabit(data);
        setLoading(false);
      });
  }, [id]);

  if (loading)
    return (
      <div className="min-h-screen flex justify-center items-center">
        <Loading></Loading>;
      </div>
    );

  if (!habit)
    return (
      <div className="h-screen flex items-center justify-center text-xl font-semibold">
        Habit Not Found
      </div>
    );

  const last30Days = habit.completionHistory?.slice(-30) || [];
  const progressPercentage = Math.round((last30Days.length / 30) * 100);

  const today = new Date().toISOString().split("T")[0];
  const alreadyCompletedToday = habit.completionHistory?.includes(today);

  const handleMarkComplete = async () => {
    if (alreadyCompletedToday) return;

    try {
      setButtonLoading(true);

      const res = await fetch(
        `habittracker-weld.vercel.app/habits/${id}/complete`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
        }
      );

      const updatedHabit = await res.json();

      setHabit(updatedHabit);

      toast.success("Habit marked as completed ✔", {
        position: "top-center",
        autoClose: 2000,
        theme: "colored",
      });
    } catch (err) {
      console.error("Error:", err);

      toast.error("Something went wrong!", {
        position: "top-center",
        autoClose: 2000,
        theme: "colored",
      });
    } finally {
      setButtonLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
      <main>
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 py-8 px-4 sm:py-12">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200/50"
            >
              <div className="relative h-72 sm:h-80 overflow-hidden">
                <motion.img
                  initial={{ scale: 1.15 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  src={habit.img}
                  className="w-full h-full object-cover"
                  alt={habit.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="absolute top-4 left-4 sm:top-6 sm:left-6"
                >
                  <span
                    className={`inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-bold rounded-full border backdrop-blur-md bg-white/95 shadow-lg ${
                      categoryColors[normalizeCategory(habit.category)]
                    }`}
                  >
                    <Award size={16} />
                    {normalizeCategory(habit.category)}
                  </span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="absolute bottom-0 left-0 right-0 p-6 sm:p-8"
                >
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 drop-shadow-lg">
                    {habit.title}
                  </h1>
                  <p className="text-white/90 text-sm sm:text-base max-w-2xl line-clamp-2">
                    {habit.description}
                  </p>
                </motion.div>
              </div>

              <div className="p-6 sm:p-8 md:p-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    whileHover={{ y: -3, transition: { duration: 0.2 } }}
                    className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all"
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div
                        className={`p-2 bg-gradient-to-br ${
                          categoryGradients[habit.category] ||
                          categoryGradients.Default
                        } rounded-lg`}
                      >
                        <Calendar size={18} className="text-white" />
                      </div>
                      <h3 className="text-sm font-semibold text-slate-600 uppercase tracking-wide">
                        30-Day Progress
                      </h3>
                    </div>

                    <div className="flex items-end justify-between mb-6">
                      <div>
                        <div className="text-4xl font-bold text-slate-800 mb-1">
                          {progressPercentage}%
                        </div>
                        <div className="text-sm text-slate-500">
                          {last30Days.length} of 30 days completed
                        </div>
                      </div>
                    </div>

                    <div className="relative h-2 bg-slate-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${progressPercentage}%` }}
                        transition={{
                          duration: 1.2,
                          delay: 0.7,
                          ease: "easeOut",
                        }}
                        className={`absolute h-full bg-gradient-to-r ${
                          categoryGradients[habit.category] ||
                          categoryGradients.Default
                        } rounded-full`}
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    whileHover={{ y: -3, transition: { duration: 0.2 } }}
                    className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all"
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg">
                        <Flame size={18} className="text-white" />
                      </div>
                      <h3 className="text-sm font-semibold text-slate-600 uppercase tracking-wide">
                        Current Streak
                      </h3>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{
                            delay: 0.8,
                            type: "spring",
                            stiffness: 200,
                          }}
                          className="text-4xl font-bold text-slate-800 mb-1"
                        >
                          {habit.currentStreak || 0} days
                        </motion.div>
                        <div className="text-sm text-slate-500">
                          Consecutive completions
                        </div>
                      </div>

                      <div className="text-right border-l border-slate-200 pl-6">
                        <div className="text-2xl font-bold text-slate-800 mb-1">
                          {habit.completionHistory?.length || 0}
                        </div>
                        <div className="text-xs text-slate-500">Total days</div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="bg-slate-50 rounded-2xl p-6 mb-6 border border-slate-200/50"
                >
                  <h2 className="text-lg font-bold text-slate-800 mb-3 flex items-center gap-2">
                    <div className="w-1 h-6 bg-gradient-to-b from-emerald-500 to-teal-500 rounded-full"></div>
                    About This Habit
                  </h2>
                  <p className="text-slate-700 leading-relaxed">
                    {habit.description}
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                  className="bg-gradient-to-r from-slate-50 to-slate-100 p-5 rounded-2xl border border-slate-200/70 mb-6"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gradient-to-br from-slate-600 to-slate-700 rounded-xl shadow-md">
                      <User size={22} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">
                        Created By
                      </h3>
                      <p className="font-bold text-slate-800 text-lg">
                        {habit.name}
                      </p>
                      <p className="text-sm text-slate-600">{habit.email}</p>
                    </div>
                  </div>
                </motion.div>

                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  whileHover={
                    !alreadyCompletedToday ? { scale: 1.01, y: -2 } : {}
                  }
                  whileTap={!alreadyCompletedToday ? { scale: 0.99 } : {}}
                  disabled={alreadyCompletedToday || buttonLoading}
                  onClick={handleMarkComplete}
                  className={`w-full py-5 rounded-2xl text-lg font-bold flex justify-center items-center gap-3 transition-all shadow-lg ${
                    alreadyCompletedToday
                      ? "bg-slate-300 text-slate-600 cursor-not-allowed"
                      : `bg-gradient-to-r ${
                          categoryGradients[habit.category] ||
                          categoryGradients.Default
                        } text-white hover:shadow-xl`
                  }`}
                >
                  {buttonLoading ? <SmallSpinner /> : <CheckCircle size={24} />}
                  {alreadyCompletedToday
                    ? "✓ Completed Today"
                    : "Mark as Complete"}
                </motion.button>

                {!alreadyCompletedToday && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="text-center text-sm text-slate-500 mt-4 font-medium"
                  >
                    💡 Complete your habit today to keep your streak alive!
                  </motion.p>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HabitDetails;
