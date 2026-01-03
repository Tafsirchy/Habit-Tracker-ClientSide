import React from "react";
import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaBullseye,
  FaChartLine,
  FaTrophy,
} from "react-icons/fa";

const HabitProcess = () => {
  const steps = [
    {
      id: 1,
      icon: FaBullseye,
      title: "Choose a Habit",
      description:
        "Select from our curated collection or create your own custom habit to track",
      color: "from-blue-500 to-cyan-500",
      delay: 0.1,
    },
    {
      id: 2,
      icon: FaCheckCircle,
      title: "Set Daily Goals",
      description:
        "Define your targets and schedule reminders to stay on track every day",
      color: "from-purple-500 to-pink-500",
      delay: 0.2,
    },
    {
      id: 3,
      icon: FaChartLine,
      title: "Track Progress",
      description:
        "Monitor your streaks, view detailed analytics, and visualize your growth",
      color: "from-green-500 to-emerald-500",
      delay: 0.3,
    },
    {
      id: 4,
      icon: FaTrophy,
      title: "Earn Rewards",
      description:
        "Unlock badges, climb leaderboards, and celebrate your consistency wins",
      color: "from-yellow-500 to-orange-500",
      delay: 0.4,
    },
  ];

  return (
    <section className="w-full py-20 bg-[var(--color-bg-secondary)] transition-colors duration-300">
      <div className="w-11/12 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-[var(--color-text-primary)] mb-4">
            How Habit Building Works
          </h2>
          <p className="text-xl text-[var(--color-text-secondary)] max-w-3xl mx-auto">
            Transform your daily routine into lasting habits with our proven
            4-step process
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: step.delay }}
                className="relative group"
              >
                {/* Connection Line (except last) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-[var(--color-border)] to-transparent -z-10"></div>
                )}

                {/* Card */}
                <div className="bg-[var(--color-bg-primary)] border-2 border-[var(--color-border)] rounded-2xl p-6 hover:shadow-xl transition-all duration-300 h-full relative overflow-hidden group-hover:scale-105">
                  {/* Background Gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  ></div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Number Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`w-12 h-12 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-bold text-xl shadow-lg`}
                      >
                        {step.id}
                      </div>
                      <div
                        className={`w-14 h-14 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
                      >
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-3">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[var(--color-text-secondary)] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-[var(--color-primary-medium)] to-[var(--color-primary-dark)] text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            Start Building Habits Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HabitProcess;
