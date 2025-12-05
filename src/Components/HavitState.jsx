import React from "react";
import { motion } from "framer-motion";
import {
  FaChartLine,
  FaClock,
  FaCheckCircle,
  FaTrophy,
  FaFire,
  FaCalendarCheck,
} from "react-icons/fa";

const HabitStats = () => {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.15,
        duration: 0.5,
        type: "spring",
        stiffness: 60,
      },
    }),
  };

  return (
    <section className=" bg-[#E3E3E3] hover:bg-white transition-color duration-1000">
      <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden py-16 sm:py-20 lg:py-24 w-11/12 mx-auto">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=1920&q=80"
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-blue-900/40 to-blue-900/70"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12 lg:mb-16"
          >
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-4 leading-tight"
            >
              Making lives easier
              <br />
              than before
            </motion.h2>
          </motion.div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {/* Card 1 - Streaks */}
            <motion.div
              custom={0}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              className="relative group overflow-hidden rounded-2xl border-2 border-white/30 backdrop-blur-sm bg-white/10 hover:bg-white/20 transition-all duration-300 p-6 sm:p-8"
            >
              <div className="relative z-10">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6"
                >
                  <FaFire className="w-8 h-8 sm:w-10 sm:h-10 text-orange-400" />
                </motion.div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                  Streaks
                </h3>
                <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                  Maintain consistency and never miss a day. Build momentum with
                  daily habit tracking.
                </p>
              </div>
            </motion.div>

            {/* Card 2 - Time Saved */}
            <motion.div
              custom={1}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              className="relative group overflow-hidden rounded-2xl border-2 border-white/30 backdrop-blur-sm bg-white/10 hover:bg-white/20 transition-all duration-300 p-6 sm:p-8"
            >
              <div className="relative z-10">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6"
                >
                  <FaClock className="w-8 h-8 sm:w-10 sm:h-10 text-blue-400" />
                </motion.div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                  Time Saved
                </h3>
                <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                  Automate routines and focus on what matters most. Track
                  efficiency gains.
                </p>
              </div>
            </motion.div>

            {/* Card 3 - Completion Rate */}
            <motion.div
              custom={2}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              className="relative group overflow-hidden rounded-2xl border-2 border-white/30 backdrop-blur-sm bg-white/10 hover:bg-white/20 transition-all duration-300 p-6 sm:p-8"
            >
              <div className="relative z-10">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6"
                >
                  <FaCheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-green-400" />
                </motion.div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                  Completion Rate
                </h3>
                <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                  Track your habits and celebrate your achievements. Monitor
                  your progress daily.
                </p>
              </div>
            </motion.div>

            {/* Card 4 - Progress Tracking */}
            <motion.div
              custom={3}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              className="relative group overflow-hidden rounded-2xl border-2 border-white/30 backdrop-blur-sm bg-white/10 hover:bg-white/20 transition-all duration-300 p-6 sm:p-8"
            >
              <div className="relative z-10">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6"
                >
                  <FaChartLine className="w-8 h-8 sm:w-10 sm:h-10 text-purple-400" />
                </motion.div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                  Progress Tracking
                </h3>
                <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                  Visualize your growth with detailed analytics and insights
                  over time.
                </p>
              </div>
            </motion.div>

            {/* Card 5 - Achievement System */}
            <motion.div
              custom={4}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              className="relative group overflow-hidden rounded-2xl border-2 border-white/30 backdrop-blur-sm bg-white/10 hover:bg-white/20 transition-all duration-300 p-6 sm:p-8"
            >
              <div className="relative z-10">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6"
                >
                  <FaTrophy className="w-8 h-8 sm:w-10 sm:h-10 text-yellow-400" />
                </motion.div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                  Achievement System
                </h3>
                <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                  Unlock badges and rewards as you reach milestones and complete
                  challenges.
                </p>
              </div>
            </motion.div>

            {/* Card 6 - Calendar View */}
            <motion.div
              custom={5}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              className="relative group overflow-hidden rounded-2xl border-2 border-white/30 backdrop-blur-sm bg-white/10 hover:bg-white/20 transition-all duration-300 p-6 sm:p-8"
            >
              <div className="relative z-10">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6"
                >
                  <FaCalendarCheck className="w-8 h-8 sm:w-10 sm:h-10 text-pink-400" />
                </motion.div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                  Calendar View
                </h3>
                <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                  View your habits at a glance with an intuitive calendar
                  interface.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HabitStats;
