import React from "react";
import { motion } from "framer-motion";
import { FaChartLine, FaClock, FaCheckCircle } from "react-icons/fa";

const HabitStats = () => {
  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        type: "spring",
        stiffness: 60,
      },
    }),
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: (value) => ({
      width: `${value}%`,
      transition: { duration: 1, ease: "easeInOut" },
    }),
  };

  return (
    <section className="w-11/12 mx-auto">
      <div className="py-16">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Track Your Progress
          </h2>
          <p className="text-gray-600 sm:text-lg lg:text-xl max-w-3xl mx-auto">
            Monitor your streaks, completion rate, and time saved with
            interactive visual feedback. Stay motivated and see your growth
            every day.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          <motion.div
            custom={0}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="bg-white p-6 sm:p-8 rounded-3xl shadow-xl flex flex-col justify-between hover:scale-105 transition-transform duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center justify-center w-16 h-16 bg-indigo-50 rounded-full">
                <FaChartLine className="w-10 h-10 text-indigo-500" />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">
                Streaks
              </h3>
            </div>
            <p className="text-gray-600 mb-6">
              Maintain consistency and never miss a day.
            </p>
            <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden">
              <motion.div
                custom={75}
                variants={progressVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="h-3 rounded-full bg-gradient-to-r from-indigo-500 to-indigo-400"
              ></motion.div>
            </div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-sm text-gray-500 mt-2"
            >
              75% completed
            </motion.span>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            custom={1}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="bg-white p-6 sm:p-8 rounded-3xl shadow-xl flex flex-col justify-between hover:scale-105 transition-transform duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center justify-center w-16 h-16 bg-green-50 rounded-full">
                <FaClock className="w-10 h-10 text-green-500" />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">
                Time Saved
              </h3>
            </div>
            <p className="text-gray-600 mb-6">
              Automate routines and focus on what matters most.
            </p>
            <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden">
              <motion.div
                custom={60}
                variants={progressVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="h-3 rounded-full bg-gradient-to-r from-green-500 to-green-400"
              ></motion.div>
            </div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-sm text-gray-500 mt-2"
            >
              60% completed
            </motion.span>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            custom={2}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="bg-white p-6 sm:p-8 rounded-3xl shadow-xl flex flex-col justify-between hover:scale-105 transition-transform duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center justify-center w-16 h-16 bg-pink-50 rounded-full">
                <FaCheckCircle className="w-10 h-10 text-pink-500" />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">
                Completion Rate
              </h3>
            </div>
            <p className="text-gray-600 mb-6">
              Track your habits and celebrate your achievements.
            </p>
            <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden">
              <motion.div
                custom={90}
                variants={progressVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="h-3 rounded-full bg-gradient-to-r from-pink-500 to-pink-400"
              ></motion.div>
            </div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-sm text-gray-500 mt-2"
            >
              90% completed
            </motion.span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HabitStats;
