import React from "react";
import { motion } from "framer-motion";
import { FaBrain, FaClock, FaRocket, FaHandsHelping } from "react-icons/fa";

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
    <section className="w-11/12 mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
          >
            Why Build Habits?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-gray-600 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto"
          >
            Habits are the foundation of success. Developing powerful habits can
            enhance focus, save time, and accelerate your personal growth.
          </motion.p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Card 1 - Improve Focus */}
          <motion.div
            custom={0}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex flex-col sm:flex-row">
              <div className="relative w-full sm:w-2/5 h-64 sm:h-auto overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80"
                  alt="Improve Focus"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-indigo-600/30 to-transparent"></div>
              </div>

              <div className="flex-1 p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-indigo-50 to-indigo-100 mb-4"
                  >
                    <FaBrain className="w-7 h-7 text-indigo-600" />
                  </motion.div>

                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                    Improve Focus
                  </h3>

                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
                    Daily habits sharpen your mind and boost your productivity.
                  </p>
                </div>

                <motion.button
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  className="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-700 transition-colors group/btn"
                >
                  Learn more
                  <motion.svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{ x: [0, 4, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatDelay: 1,
                    }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </motion.svg>
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Card 2 - Save Time */}
          <motion.div
            custom={1}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex flex-col sm:flex-row">
              <div className="relative w-full sm:w-2/5 h-64 sm:h-auto overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  src="https://images.unsplash.com/photo-1501139083538-0139583c060f?w=800&q=80"
                  alt="Save Time"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-green-600/30 to-transparent"></div>
              </div>

              <div className="flex-1 p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-green-50 to-green-100 mb-4"
                  >
                    <FaClock className="w-7 h-7 text-green-600" />
                  </motion.div>

                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                    Save Time
                  </h3>

                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
                    Automate routines and free up mental energy for important
                    tasks.
                  </p>
                </div>

                <motion.button
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  className="inline-flex items-center text-green-600 font-semibold hover:text-green-700 transition-colors group/btn"
                >
                  Learn more
                  <motion.svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{ x: [0, 4, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatDelay: 1,
                    }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </motion.svg>
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Card 3 - Accelerate Growth */}
          <motion.div
            custom={2}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex flex-col sm:flex-row">
              <div className="relative w-full sm:w-2/5 h-64 sm:h-auto overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80"
                  alt="Accelerate Growth"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-pink-600/30 to-transparent"></div>
              </div>

              <div className="flex-1 p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-pink-50 to-pink-100 mb-4"
                  >
                    <FaRocket className="w-7 h-7 text-pink-600" />
                  </motion.div>

                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                    Accelerate Growth
                  </h3>

                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
                    Consistency compounds into massive personal and professional
                    growth.
                  </p>
                </div>

                <motion.button
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  className="inline-flex items-center text-pink-600 font-semibold hover:text-pink-700 transition-colors group/btn"
                >
                  Learn more
                  <motion.svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{ x: [0, 4, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatDelay: 1,
                    }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </motion.svg>
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Card 4 - Build Discipline */}
          <motion.div
            custom={3}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex flex-col sm:flex-row">
              <div className="relative w-full sm:w-2/5 h-64 sm:h-auto overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                  alt="Build Discipline"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-amber-600/30 to-transparent"></div>
              </div>

              <div className="flex-1 p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-amber-50 to-amber-100 mb-4"
                  >
                    <FaHandsHelping className="w-7 h-7 text-amber-600" />
                  </motion.div>

                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                    Build Discipline
                  </h3>

                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
                    Strengthen your self-control and stay consistent with your
                    goals.
                  </p>
                </div>

                <motion.button
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  className="inline-flex items-center text-amber-600 font-semibold hover:text-amber-700 transition-colors group/btn"
                >
                  Learn more
                  <motion.svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{ x: [0, 4, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatDelay: 1,
                    }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </motion.svg>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyBuild;
