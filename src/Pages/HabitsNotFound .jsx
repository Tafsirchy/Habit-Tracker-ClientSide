import { motion } from "framer-motion";
import {
  Home,
  Plus,
  Zap,
  Star,
  Heart,
  Coffee,
  Book,
  Dumbbell,
} from "lucide-react";

const HabitsNotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4 relative overflow-hidden">
      {/* Animated Particle Background */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [Math.random() * window.innerHeight, -100],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

      {/* Background Orbs */}
      <motion.div
        animate={{ scale: [1, 1.4, 1], opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute top-16 left-16 w-72 h-72 bg-purple-500 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.3, 0.2] }}
        transition={{ duration: 9, repeat: Infinity }}
        className="absolute bottom-16 right-16 w-72 h-72 bg-pink-500 rounded-full blur-3xl"
      />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* 3D Box */}
        <motion.div
          initial={{ scale: 0, rotateY: -180 }}
          animate={{ scale: 1, rotateY: 0 }}
          transition={{ duration: 1, type: "spring", bounce: 0.4 }}
          className="mb-6 flex justify-center"
        >
          <div className="relative" style={{ perspective: "900px" }}>
            <motion.div
              animate={{
                rotateY: [0, 4, 0, -4, 0],
                rotateX: [0, 1.5, 0, -1.5, 0],
              }}
              transition={{ duration: 6, repeat: Infinity }}
              className="relative w-64 h-64"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Front */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-800 rounded-3xl border-4 border-gray-600 shadow-xl"
                style={{ transform: "translateZ(35px)" }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 to-transparent rounded-3xl" />

                {/* Empty Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1], rotate: [0, 4, -4, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="text-gray-500"
                  >
                    <svg width="90" height="90" viewBox="0 0 120 120">
                      <motion.path
                        d="M30 60 L50 80 L90 40"
                        stroke="currentColor"
                        strokeWidth="8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0, opacity: 0.3 }}
                        animate={{
                          pathLength: [0, 1, 0],
                          opacity: [0.3, 0.8, 0.3],
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                      />
                    </svg>
                  </motion.div>
                </div>

                {/* Dashed lines */}
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: [0, 1] }}
                    transition={{ delay: i * 0.08 + 0.4 }}
                    className="absolute h-0.5 bg-gray-600"
                    style={{
                      top: `${25 + i * 11}%`,
                      left: "22%",
                      right: "22%",
                    }}
                  />
                ))}
              </motion.div>

              {/* Top */}
              <div
                className="absolute inset-0 bg-gradient-to-br from-gray-600 to-gray-700 rounded-3xl border-4 border-gray-500"
                style={{ transform: "rotateX(90deg) translateZ(35px)" }}
              />

              {/* Side */}
              <div
                className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl border-4 border-gray-700"
                style={{ transform: "rotateY(90deg) translateZ(35px)" }}
              />
            </motion.div>

            {/* Floating Icons */}
            {[
              /* same icons but unchanged */
              {
                Icon: Coffee,
                color: "from-amber-400 to-orange-500",
                pos: "-top-8 -left-8",
                delay: 0,
              },
              {
                Icon: Book,
                color: "from-blue-400 to-cyan-500",
                pos: "-top-6 -right-12",
                delay: 0.3,
              },
              {
                Icon: Dumbbell,
                color: "from-green-400 to-emerald-500",
                pos: "top-24 -left-14",
                delay: 0.6,
              },
              {
                Icon: Heart,
                color: "from-pink-400 to-rose-500",
                pos: "bottom-16 -right-16",
                delay: 0.9,
              },
              {
                Icon: Star,
                color: "from-yellow-400 to-amber-500",
                pos: "-bottom-6 left-6",
                delay: 1.2,
              },
              {
                Icon: Zap,
                color: "from-purple-400 to-violet-500",
                pos: "-bottom-10 -right-6",
                delay: 1.5,
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: [0, 1], rotate: [-180, 0], y: [0, -10, 0] }}
                transition={{
                  scale: { delay: 0.7 + item.delay, duration: 0.45 },
                  rotate: { delay: 0.7 + item.delay, duration: 0.45 },
                  y: { delay: 1.2, duration: 2.6, repeat: Infinity },
                }}
                className={`absolute ${item.pos}`}
              >
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 360 }}
                  className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl shadow-xl flex items-center justify-center cursor-pointer backdrop-blur-sm border-2 border-white/20`}
                >
                  <item.Icon
                    className="text-white"
                    size={22}
                    strokeWidth={2.5}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="py-5 text-4xl md:text-5xl font-black text-white text-center mb-4"
        >
          No Habits Found
        </motion.h1>

      
      </div>
    </div>
  );
};

export default HabitsNotFound;
