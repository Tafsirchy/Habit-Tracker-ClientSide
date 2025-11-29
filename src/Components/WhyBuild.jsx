import React from "react";
import { motion } from "framer-motion";
import { FaBrain, FaClock, FaRocket, FaHandsHelping } from "react-icons/fa";
import { CheckCircle } from "lucide-react";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      type: "spring",
      stiffness: 50,
    },
  }),
};

const WhyBuild = () => {
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Why Build Habits?
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto">
            Habits are the foundation of success. Developing powerful habits can
            enhance focus, save time, and accelerate your personal growth.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {/* Card 1 */}
          <motion.div
            custom={0}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="bg-white p-6 sm:p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-start gap-4"
          >
            <div className="flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-3">
              <FaBrain className="w-10 h-10 text-indigo-500" />
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800">
              Improve Focus
            </h3>
            <p className="text-gray-600 text-sm sm:text-base md:text-base">
              Daily habits sharpen your mind and boost your productivity.
            </p>
            <CheckCircle className="w-6 h-6 text-green-500 mt-auto" />
          </motion.div>

          {/* Card 2 */}
          <motion.div
            custom={1}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="bg-white p-6 sm:p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-start gap-4"
          >
            <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-3">
              <FaClock className="w-10 h-10 text-green-500" />
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800">
              Save Time
            </h3>
            <p className="text-gray-600 text-sm sm:text-base md:text-base">
              Automate routines and free up mental energy for important tasks.
            </p>
            <CheckCircle className="w-6 h-6 text-green-500 mt-auto" />
          </motion.div>

          {/* Card 3 */}
          <motion.div
            custom={2}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="bg-white p-6 sm:p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-start gap-4"
          >
            <div className="flex items-center justify-center w-16 h-16 bg-pink-100 rounded-full mb-3">
              <FaRocket className="w-10 h-10 text-pink-500" />
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800">
              Accelerate Growth
            </h3>
            <p className="text-gray-600 text-sm sm:text-base md:text-base">
              Consistency compounds into massive personal and professional
              growth.
            </p>
            <CheckCircle className="w-6 h-6 text-green-500 mt-auto" />
          </motion.div>

          {/* Card 4 */}
          <motion.div
            custom={3}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="bg-white p-6 sm:p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-start gap-4"
          >
            <div className="flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-3">
              <FaHandsHelping className="w-10 h-10 text-yellow-500" />
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800">
              Build Discipline
            </h3>
            <p className="text-gray-600 text-sm sm:text-base md:text-base">
              Strengthen your self-control and stay consistent with your goals.
            </p>
            <CheckCircle className="w-6 h-6 text-green-500 mt-auto" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyBuild;
