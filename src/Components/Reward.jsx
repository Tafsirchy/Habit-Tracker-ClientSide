import React from "react";
import { motion } from "framer-motion";
import { FaMedal, FaStar, FaGift } from "react-icons/fa";

const cardVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      type: "spring",
      stiffness: 60,
    },
  }),
};

const Reward = () => {
  return (
    <section className="w-full py-20">
      <div className="w-11/12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="order-2 lg:order-1"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-8"
              >
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="font-bold text-sm sm:text-base tracking-wider uppercase mb-3 text-[#456882] dark:text-blue-400"
                >
                  GAMIFICATION
                </motion.p>
                <h2
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight text-[#1B3C53] dark:text-white"
                >
                  Gamify Your Habits
                </h2>
                <p
                  className="text-base sm:text-lg leading-relaxed mb-6 text-[#234C6A] dark:text-gray-300"
                >
                  Earn rewards, badges, and celebrate your streaks to stay
                  motivated every day. Transform your daily routines into an
                  exciting journey of personal growth.
                </p>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-gradient-to-r from-[#234C6A] to-[#1B3C53] text-white font-semibold py-3 px-7 rounded-lg flex items-center justify-center gap-2 shadow-md hover:shadow-xl "
                >
                  Discover More
                </motion.button>
              </motion.div>
            </motion.div>

            <div className="order-1 lg:order-2 grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6">
              <motion.div
                custom={0}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-80 sm:h-96">
                  <img
                    src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=600&q=80"
                    alt="Badges"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-yellow-900/90 via-yellow-900/50 to-transparent"></div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                    >
                      <motion.div
                        className="inline-flex items-center justify-center w-14 h-14 bg-yellow-500/30 backdrop-blur-sm rounded-full mb-1"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <FaMedal className="w-7 h-7 text-yellow-300" />
                      </motion.div>
                      <div className="text-5xl sm:text-6xl font-bold text-yellow-400 mb-2">
                        1.
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold mb-3">
                        Badges
                      </h3>
                      <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                        Earn badges as you complete milestones and streaks.
                        Collect achievements to showcase your progress.
                      </p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                custom={1}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-80 sm:h-96">
                  <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80"
                    alt="Leaderboards"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/90 via-indigo-900/50 to-transparent"></div>

                  <div className="absolute bottom-0 left-0 right-0 px-5 py-6 text-white">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 }}
                    >
                      <motion.div
                        className="inline-flex items-center justify-center w-14 h-14 bg-indigo-500/30 backdrop-blur-sm rounded-full mb-1"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <FaStar className="w-7 h-7 text-indigo-500" />
                      </motion.div>
                      <div className="text-5xl sm:text-6xl font-bold text-indigo-400 mb-2">
                        2.
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold mb-3">
                        Leaderboards
                      </h3>
                      <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                        Compete with friends and see who keeps their streak
                        alive. Stay motivated through friendly competition.
                      </p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                custom={2}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-80 sm:h-96">
                  <img
                    src="https://images.unsplash.com/photo-1513201099705-a9746e1e201f?w=600&q=80"
                    alt="Rewards"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-pink-900/90 via-pink-900/50 to-transparent"></div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 }}
                    >
                      <motion.div
                        className="inline-flex items-center justify-center w-14 h-14 bg-pink-500/30 backdrop-blur-sm rounded-full mb-1"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <FaGift className="w-7 h-7 text-pink-200 " />
                      </motion.div>
                      <div className="text-5xl sm:text-6xl font-bold text-pink-400 mb-2">
                        3.
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold mb-3">
                        Rewards
                      </h3>
                      <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                        Redeem points for goodies or perks as you progress.
                        Celebrate your achievements with real rewards.
                      </p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
    </section>
  );
};

export default Reward;
