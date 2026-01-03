import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaFire, FaWater, FaBook, FaRunning, FaClock, FaUsers } from "react-icons/fa";

const DailyHabitChallenge = () => {
  const [timeRemaining, setTimeRemaining] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const challenges = [
    {
      id: 1,
      icon: FaWater,
      title: "Hydration Hero",
      goal: "Drink 2L of water",
      progress: 65,
      participants: "2.3K",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10"
    },
    {
      id: 2,
      icon: FaBook,
      title: "Reading Sprint",
      goal: "Read 10 minutes",
      progress: 80,
      participants: "1.8K",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10"
    },
    {
      id: 3,
      icon: FaRunning,
      title: "Step Master",
      goal: "Walk 5,000 steps",
      progress: 45,
      participants: "3.1K",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/10"
    }
  ];

  return (
    <section className="w-full py-20 bg-gradient-to-b from-[var(--color-bg-primary)] to-[var(--color-bg-secondary)] transition-colors duration-300">
      <div className="w-11/12 max-w-7xl mx-auto">
        {/* Header with Countdown */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-full mb-6">
            <FaFire className="w-4 h-4 text-orange-500 animate-pulse" />
            <span className="text-sm font-semibold text-[var(--color-text-secondary)] uppercase tracking-wider">
              Today's Challenge
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-[var(--color-text-primary)] mb-4">
            Daily Habit Challenge
          </h2>
          <p className="text-xl text-[var(--color-text-secondary)] max-w-3xl mx-auto mb-8">
            Join thousands of motivated individuals. Complete today's challenge and earn exclusive rewards!
          </p>

          {/* Countdown Timer */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="flex items-center gap-2">
              <FaClock className="w-5 h-5 text-[var(--color-primary-medium)]" />
              <span className="text-[var(--color-text-secondary)] font-medium">Time Remaining:</span>
            </div>
            <div className="flex gap-2">
              {[
                { label: 'Hours', value: timeRemaining.hours },
                { label: 'Mins', value: timeRemaining.minutes },
                { label: 'Secs', value: timeRemaining.seconds }
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="bg-gradient-to-br from-[var(--color-primary-medium)] to-[var(--color-primary-dark)] text-white font-bold text-2xl px-4 py-2 rounded-xl min-w-[70px] shadow-lg">
                    {String(item.value).padStart(2, '0')}
                  </div>
                  <span className="text-xs text-[var(--color-text-tertiary)] mt-1">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Challenge Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {challenges.map((challenge, index) => {
            const Icon = challenge.icon;
            return (
              <motion.div
                key={challenge.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-[var(--color-bg-primary)] border-2 border-[var(--color-border)] rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105 relative overflow-hidden">
                  {/* Background Glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${challenge.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${challenge.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Title & Goal */}
                    <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-2">
                      {challenge.title}
                    </h3>
                    <p className="text-[var(--color-text-secondary)] mb-4">
                      {challenge.goal}
                    </p>

                    {/* Progress Bar */}
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-[var(--color-text-tertiary)]">Completion</span>
                        <span className={`font-semibold bg-gradient-to-r ${challenge.color} bg-clip-text text-transparent`}>
                          {challenge.progress}%
                        </span>
                      </div>
                      <div className="h-2 bg-[var(--color-bg-tertiary)] rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${challenge.progress}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.2 }}
                          className={`h-full bg-gradient-to-r ${challenge.color} rounded-full`}
                        ></motion.div>
                      </div>
                    </div>

                    {/* Participants */}
                    <div className="flex items-center gap-2 text-sm text-[var(--color-text-tertiary)]">
                      <FaUsers className="w-4 h-4" />
                      <span>{challenge.participants} joined today</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold px-10 py-4 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center gap-3 mx-auto"
          >
            <FaFire className="w-5 h-5" />
            Join Today's Challenge
          </motion.button>
          <p className="text-sm text-[var(--color-text-tertiary)] mt-4">
            🎉 Complete all 3 challenges and earn a <strong>Triple Crown Badge</strong>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default DailyHabitChallenge;
