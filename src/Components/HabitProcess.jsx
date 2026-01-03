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
    <section className="w-full py-18 bg-[var(--color-bg-secondary)] dark:bg-[var(--color-bg-primary)] transition-colors duration-500 relative overflow-hidden">
      {/* Premium Background Graphics */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] dark:opacity-[0.05] pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--color-primary-medium)] blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[var(--color-secondary)] blur-[100px] rounded-full"></div>
      </div>

      <div className="w-11/12 max-w-7xl mx-auto relative z-10">
        {/* Modern Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-primary-medium)]/10 dark:bg-[var(--color-primary-medium)]/20 border border-[var(--color-primary-medium)]/20 rounded-full mb-8">
            <span className="text-[10px] font-black text-[var(--color-primary-medium)] uppercase tracking-[0.3em]">Operational Framework</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-[var(--color-text-primary)] mb-8 tracking-tighter leading-tight">
            How Habit Building <br />
            <span className="bg-gradient-to-r from-[var(--color-primary-medium)] via-[var(--color-secondary)] to-[var(--color-primary-dark)] bg-clip-text text-transparent">Really Works</span>
          </h2>
          <p className="text-xl text-[var(--color-text-secondary)] font-medium max-w-3xl mx-auto leading-relaxed">
            Transform your daily routine into lasting habits with our proven
            scientific 4-step behavioral architecture.
          </p>
        </motion.div>

        {/* Improved Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: step.delay }}
                className="relative group"
              >
                {/* Enhanced Animated Connection Line (except last) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-[80%] w-full h-[3px] z-0">
                    <div className="w-full h-full bg-[var(--color-border)] dark:bg-[var(--color-border)]/50 rounded-full relative overflow-hidden">
                      <motion.div
                        animate={{ x: ['-100%', '100%'] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: index * 0.5 }}
                        className={`absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-[var(--color-primary-medium)] to-transparent`}
                      />
                    </div>
                  </div>
                )}

                {/* Step Card with Premium Glassmorphism */}
                <div className="h-full bg-[var(--color-bg-primary)] dark:bg-[var(--color-bg-secondary)]/50 backdrop-blur-xl border-2 border-[var(--color-border)] rounded-[2.5rem] p-8 hover:shadow-2xl transition-all duration-700 relative overflow-hidden group-hover:-translate-y-3 group-hover:border-[var(--color-primary-medium)]/40">
                  {/* Background Accents */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-700`}></div>
                  <div className="absolute -right-6 -top-6 w-24 h-24 bg-white/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

                  {/* Content */}
                  <div className="relative z-10 flex flex-col h-full">
                    {/* Header: Number and Icon */}
                    <div className="flex items-center justify-between mb-8">
                      <div
                        className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-black text-2xl shadow-xl group-hover:scale-110 transition-transform duration-500`}
                      >
                        0{step.id}
                      </div>
                      <div
                        className={`w-16 h-16 rounded-2xl bg-[var(--color-bg-secondary)] dark:bg-[var(--color-bg-tertiary)] border border-[var(--color-border)] flex items-center justify-center group-hover:bg-[var(--color-bg-primary)] transition-colors duration-500`}
                      >
                        <Icon className="w-8 h-8 text-[var(--color-primary-medium)] group-hover:scale-110 transition-transform duration-500" />
                      </div>
                    </div>

                    {/* Step Content */}
                    <h3 className="text-xl font-black text-[var(--color-text-primary)] mb-4 tracking-tight leading-tight group-hover:text-[var(--color-primary-medium)] transition-colors">
                      {step.title}
                    </h3>

                    <p className="text-[var(--color-text-secondary)] text-sm font-medium leading-relaxed mb-6 flex-grow">
                      {step.description}
                    </p>

                    {/* Footer Status */}
                    <div className="pt-6 border-t border-[var(--color-border)] flex items-center gap-2">
                       <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-success)]"></span>
                       <span className="text-[10px] font-black text-[var(--color-text-tertiary)] uppercase tracking-widest">Process Active</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* High-Impact CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="relative inline-block group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[var(--color-primary-medium)] to-[var(--color-secondary)] rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
            <motion.button
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="relative bg-[var(--color-primary-dark)] text-white font-black px-12 py-6 rounded-2xl shadow-2xl transition-all text-lg"
            >
              Start Building Habits Now
            </motion.button>
          </div>
          <p className="mt-8 text-sm font-bold text-[var(--color-text-tertiary)] uppercase tracking-[0.2em]">
            Join 1M+ active builders reshaping their future
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HabitProcess;
