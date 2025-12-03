import {
  Award,
  Calendar,
  Flame,
  User,
  CheckCircle,
  Clock,
  TrendingUp,
  Sparkles,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import Loading from "../Components/Loading";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

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
  const [showCelebration, setShowCelebration] = useState(false);

  const categoryColors = {
    Fitness: "bg-green-100 text-green-700 border-green-200",
    Morning: "bg-blue-100 text-blue-700 border-blue-200",
    Study: "bg-purple-100 text-purple-700 border-purple-200",
    Evening: "bg-orange-100 text-orange-700 border-orange-200",
    Work: "bg-yellow-100 text-yellow-700 border-yellow-200",
    Default: "bg-gray-100 text-gray-700 border-gray-200",
  };

  useEffect(() => {
    fetch(`http://localhost:3000/habits/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setHabit(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <Loading />;

  if (!habit)
    return (
      <div className="h-screen flex items-center justify-center">
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

      const updatedHistory = [...(habit.completionHistory || []), today];
      updatedHistory.sort((a, b) => new Date(b) - new Date(a));

      let streak = 1;
      for (let i = 1; i < updatedHistory.length; i++) {
        const prev = new Date(updatedHistory[i - 1]);
        const curr = new Date(updatedHistory[i]);
        const diff = (prev - curr) / (1000 * 60 * 60 * 24);
        if (diff === 1) streak++;
        else break;
      }

      setHabit({
        ...habit,
        completionHistory: updatedHistory,
        daysCompleted: updatedHistory.length,
        currentStreak: streak,
      });

      const res = await fetch(`http://localhost:3000/habits/${id}/complete`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
      });

      const freshHabit = await res.json();
      setHabit(freshHabit);

      setShowCelebration(true);
      setTimeout(() => setShowCelebration(false), 2000);
    } catch (err) {
      console.error("Error:", err);
    } finally {
      setButtonLoading(false);
    }
  };

  return (
    <div>
      <Navbar />

      <main>
        <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-12 px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden"
            >
              <div className="relative h-80 overflow-hidden">
                <motion.img
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6 }}
                  src={habit.img}
                  className="w-full h-full object-cover"
                  alt={habit.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="absolute top-6 left-6"
                >
                  <span
                    className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-full border-2 backdrop-blur-sm bg-white/90 ${
                      categoryColors[habit.category] || categoryColors.Default
                    }`}
                  >
                    <Award size={16} />
                    {habit.category}
                  </span>
                </motion.div>
              </div>

              <div className="p-8 md:p-10">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
                >
                  {habit.title}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-gray-600 text-lg leading-relaxed mb-8"
                >
                  {habit.description}
                </motion.p>

                {/* ----------- UPDATED GRID (now only 2 cards) ----------- */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {/* Progress Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-6 border-2 border-green-200 shadow-lg"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 bg-green-500 rounded-xl">
                        <Calendar size={24} className="text-white" />
                      </div>
                      <h2 className="font-bold text-lg text-gray-800">
                        Progress
                      </h2>
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">
                          Last 30 Days
                        </span>
                        <span className="font-semibold text-gray-800">
                          {last30Days.length}/30
                        </span>
                      </div>

                      <div className="relative h-3 bg-green-200 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${progressPercentage}%` }}
                          transition={{ duration: 1, delay: 0.6 }}
                          className="absolute h-full bg-gradient-to-r from-green-500 to-emerald-600 rounded-full"
                        />
                      </div>

                      <div className="text-right">
                        <span className="text-2xl font-bold text-green-600">
                          {progressPercentage}%
                        </span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Streak Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="bg-gradient-to-br from-orange-50 to-red-100 rounded-2xl p-6 border-2 border-orange-200 shadow-lg"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 bg-orange-500 rounded-xl">
                        <Flame size={24} className="text-white" />
                      </div>
                      <h2 className="font-bold text-lg text-gray-800">
                        Streak
                      </h2>
                    </div>

                    <div className="text-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.7, type: "spring" }}
                        className="text-6xl font-bold text-orange-600 mb-2"
                      >
                        {habit.currentStreak || 0}
                      </motion.div>
                      <p className="text-sm text-gray-600 flex items-center justify-center gap-1">
                        days in a row <span className="text-xl">🔥</span>
                      </p>
                    </div>
                  </motion.div>
                </div>
                {/* ----------- END UPDATED GRID ----------- */}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-2xl border-2 border-gray-200 mb-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gray-600 rounded-xl">
                      <User size={24} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-800 mb-1 flex items-center gap-2">
                        Created by
                        <Sparkles size={16} className="text-yellow-500" />
                      </h3>
                      <p className="font-semibold text-gray-700">
                        {habit.name}
                      </p>
                      <p className="text-sm text-gray-600">{habit.email}</p>
                    </div>
                  </div>
                </motion.div>

                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  whileHover={!alreadyCompletedToday ? { scale: 1.02 } : {}}
                  whileTap={!alreadyCompletedToday ? { scale: 0.98 } : {}}
                  disabled={alreadyCompletedToday || buttonLoading}
                  onClick={handleMarkComplete}
                  className={`w-full py-5 rounded-2xl text-lg font-semibold flex justify-center items-center gap-3 transition-all shadow-lg ${
                    alreadyCompletedToday
                      ? "bg-gray-400 text-white cursor-not-allowed"
                      : "bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:shadow-xl"
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
                    transition={{ delay: 1 }}
                    className="text-center text-sm text-gray-500 mt-3"
                  >
                    💡 Complete your habit to maintain your streak!
                  </motion.p>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <AnimatePresence>
        {showCelebration && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 180 }}
              transition={{ type: "spring", duration: 0.6 }}
              className="bg-white p-12 rounded-3xl text-center shadow-2xl border-4 border-green-500"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  repeatDelay: 0.3,
                }}
                className="text-8xl mb-4"
              >
                🎉
              </motion.div>
              <h2 className="text-4xl font-bold text-green-600 mb-2">
                Awesome!
              </h2>
              <p className="text-xl text-gray-600">
                Habit Completed Successfully
              </p>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 2 }}
                className="h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mt-4"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default HabitDetails;
