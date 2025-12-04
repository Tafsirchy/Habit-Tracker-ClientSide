import { motion } from "framer-motion";
import {
  Home,
  Plus,
  Calendar,
  Target,
  Sparkles,
  TrendingUp,
} from "lucide-react";

const HabitsNotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 flex items-center justify-center px-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-purple-300/20 to-pink-300/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          rotate: [360, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-br from-indigo-300/20 to-blue-300/20 rounded-full blur-3xl"
      />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        {/* Animated Empty Checklist Illustration */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="mb-12 flex justify-center"
        >
          <div className="relative">
            {/* Main Clipboard */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="w-64 h-80 bg-white rounded-2xl shadow-2xl border-4 border-gray-200 relative p-8"
            >
              {/* Clipboard Clip */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <motion.div
                  animate={{ scaleY: [1, 0.9, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-24 h-12 bg-gradient-to-b from-gray-400 to-gray-500 rounded-t-3xl shadow-lg"
                />
              </div>

              {/* Empty Checkboxes with Animation */}
              <div className="space-y-5 mt-6">
                {[0, 1, 2, 3, 4].map((index) => (
                  <motion.div
                    key={index}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <motion.div
                      animate={{
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.2,
                      }}
                      className="w-8 h-8 border-3 border-gray-300 rounded-lg bg-gray-50"
                    />
                    <div className="flex-1 h-3 bg-gray-200 rounded-full" />
                  </motion.div>
                ))}
              </div>

              {/* Sad Face on Clipboard */}
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
              >
                <div className="flex flex-col items-center gap-2">
                  <div className="flex gap-3">
                    <div className="w-3 h-3 bg-gray-400 rounded-full" />
                    <div className="w-3 h-3 bg-gray-400 rounded-full" />
                  </div>
                  <div className="w-8 h-3 border-b-3 border-gray-400 rounded-b-full" />
                </div>
              </motion.div>
            </motion.div>

            {/* Floating Icons Around Clipboard */}
            {[
              { Icon: Calendar, color: "text-blue-400", pos: "top-0 -left-12" },
              {
                Icon: Target,
                color: "text-purple-400",
                pos: "top-8 -right-12",
              },
              {
                Icon: Sparkles,
                color: "text-pink-400",
                pos: "bottom-20 -left-16",
              },
              {
                Icon: TrendingUp,
                color: "text-emerald-400",
                pos: "bottom-12 -right-16",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
                className={`absolute ${item.pos}`}
              >
                <div className="w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center">
                  <item.Icon className={item.color} size={24} />
                </div>
              </motion.div>
            ))}

            {/* Question Marks */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  delay: i * 0.4,
                }}
                className="absolute text-4xl font-bold text-gray-300"
                style={{
                  top: `${10 + i * 20}%`,
                  left: i % 2 === 0 ? "-20%" : "105%",
                }}
              >
                ?
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-10"
        >
          <h1 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 mb-4">
            No Habits Found
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-3 font-semibold">
            Your habit tracker is empty!
          </p>
          <p className="text-lg text-gray-600 max-w-xl mx-auto leading-relaxed">
            Looks like you haven't created any habits yet. Start building
            positive routines and track your progress today.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => (window.location.href = "/add-habit")}
            className="px-10 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 hover:from-purple-700 hover:via-pink-700 hover:to-indigo-700 text-white font-bold rounded-full shadow-xl hover:shadow-2xl transition-all flex items-center gap-3 text-lg"
          >
            <Plus size={24} />
            Create Your First Habit
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => (window.location.href = "/")}
            className="px-10 py-4 bg-white hover:bg-gray-50 text-gray-800 font-bold rounded-full shadow-lg hover:shadow-xl transition-all flex items-center gap-3 text-lg border-2 border-gray-300"
          >
            <Home size={22} />
            Back To Home
          </motion.button>
        </motion.div>

        {/* Motivational Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-12 p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-purple-200 shadow-lg max-w-lg mx-auto"
        >
          <p className="text-gray-700 italic text-sm md:text-base">
            ✨{" "}
            <strong>"The secret of getting ahead is getting started."</strong>
          </p>
          <p className="text-gray-500 text-xs mt-2">— Mark Twain</p>
        </motion.div>
      </div>
    </div>
  );
};

export default HabitsNotFound;
