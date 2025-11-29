import React from "react";
import { motion } from "framer-motion";
import { FaMedal, FaStar, FaGift } from "react-icons/fa";

const rewardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      type: "spring",
      stiffness: 60,
    },
  }),
};

const Reward = () => {
  return (
    <section className="w-11/12 mx-auto">
      <div className="py-16 ">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Gamify Your Habits
          </h2>
          <p className="text-gray-600 sm:text-lg lg:text-xl max-w-2xl mx-auto">
            Earn rewards, badges, and celebrate your streaks to stay motivated
            every day.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Reward Card 1 */}
          <motion.div
            custom={0}
            variants={rewardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl flex flex-col items-start gap-4 hover:scale-105 transition-transform"
          >
            <div className="flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-3">
              <FaMedal className="w-10 h-10 text-yellow-500" />
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">
              Badges
            </h3>
            <p className="text-gray-600">
              Earn badges as you complete milestones and streaks.
            </p>
          </motion.div>

          {/* Reward Card 2 */}
          <motion.div
            custom={1}
            variants={rewardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl flex flex-col items-start gap-4 hover:scale-105 transition-transform"
          >
            <div className="flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-3">
              <FaStar className="w-10 h-10 text-indigo-500" />
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">
              Leaderboards
            </h3>
            <p className="text-gray-600">
              Compete with friends and see who keeps their streak alive.
            </p>
          </motion.div>

          {/* Reward Card 3 */}
          <motion.div
            custom={2}
            variants={rewardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl flex flex-col items-start gap-4 hover:scale-105 transition-transform"
          >
            <div className="flex items-center justify-center w-16 h-16 bg-pink-100 rounded-full mb-3">
              <FaGift className="w-10 h-10 text-pink-500" />
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">
              Rewards
            </h3>
            <p className="text-gray-600">
              Redeem points for goodies or perks as you progress.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Reward;
