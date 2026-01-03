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
    <section className="w-full py-20 bg-[var(--color-bg-primary)] dark:bg-[var(--color-bg-primary)] transition-colors duration-500 relative overflow-hidden">
      {/* Premium Background Graphics */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[var(--color-primary-medium)] blur-[140px] rounded-full"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[var(--color-secondary)] blur-[120px] rounded-full"></div>
      </div>

      <div className="w-11/12 max-w-7xl mx-auto relative z-10 px-4">
        {/* Modern Header Section with Digital Countdown */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 mb-18">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left lg:w-3/5"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-[var(--color-primary-medium)]/10 dark:bg-[var(--color-primary-medium)]/20 border border-[var(--color-primary-medium)]/20 rounded-full mb-8">
              <span className="w-2.5 h-2.5 bg-[var(--color-primary-medium)] rounded-full animate-pulse"></span>
              <span className="text-[10px] font-black text-[var(--color-primary-medium)] uppercase tracking-[0.3em]">Live Challenge Session</span>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-[var(--color-text-primary)] mb-8 tracking-tighter leading-[0.85]">
              Elite Daily <br />
              <span className="bg-gradient-to-r from-[var(--color-primary-medium)] via-[var(--color-secondary)] to-[var(--color-primary-dark)] bg-clip-text text-transparent">Habit Quests</span>
            </h2>
            <p className="text-xl text-[var(--color-text-secondary)] font-medium max-w-xl leading-relaxed">
              Accept today's challenges designed to maximize your neuroplasticity 
              and accelerate your mastery. Time is running out.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-[var(--color-bg-secondary)] dark:bg-[var(--color-bg-secondary)]/50 backdrop-blur-2xl p-10 rounded-[3.5rem] border-2 border-[var(--color-border)] shadow-2xl relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary-medium)]/5 via-transparent to-transparent rounded-[3.5rem]"></div>
            
            <div className="relative z-10 text-center">
              <p className="text-sm font-black text-[var(--color-text-tertiary)] uppercase tracking-[0.5em] mb-8 group-hover:text-[var(--color-primary-medium)] transition-colors">Time Remaining</p>
              <div className="flex gap-6">
                {[
                  { label: 'Hours', value: timeRemaining.hours },
                  { label: 'Mins', value: timeRemaining.minutes },
                  { label: 'Secs', value: timeRemaining.seconds }
                ].map((item, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className="relative">
                      <div className="absolute inset-0 bg-[var(--color-primary-medium)] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                      <div className="relative bg-gradient-to-br from-[var(--color-primary-medium)] to-[var(--color-primary-dark)] text-white font-black text-3xl md:text-4xl px-6 py-4 rounded-[1.5rem] min-w-[80px] md:min-w-[100px] shadow-2xl tracking-tighter transform group-hover:scale-105 transition-transform">
                        {String(item.value).padStart(2, '0')}
                      </div>
                    </div>
                    <span className="text-[10px] font-black text-[var(--color-text-tertiary)] uppercase tracking-[0.2em] mt-4">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Improved Challenges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {challenges.map((challenge, index) => {
            const Icon = challenge.icon;
            return (
              <motion.div
                key={challenge.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group h-full"
              >
                <div className="relative h-full bg-[var(--color-bg-secondary)] dark:bg-[var(--color-bg-secondary)]/40 backdrop-blur-xl border-2 border-[var(--color-border)] rounded-[2.5rem] p-8 transition-all duration-700 hover:shadow-2xl overflow-hidden group-hover:-translate-y-3 group-hover:border-[var(--color-primary-medium)]/40 flex flex-col">
                  {/* Premium Background Graphics */}
                  <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-[var(--color-primary-medium)]/10 to-transparent rotate-45 translate-x-12 -translate-y-12 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                  
                  <div className="relative z-10 flex-grow">
                    <div className="flex items-start justify-between mb-8">
                      {/* Icon Container */}
                      <div className="relative">
                        <div className="absolute inset-0 bg-[var(--color-primary-medium)] blur-xl opacity-10 group-hover:opacity-50 transition-all duration-500 rounded-2xl"></div>
                        <div className="relative w-16 h-16 bg-[var(--color-bg-primary)] dark:bg-[var(--color-bg-tertiary)] rounded-2xl flex items-center justify-center border-2 border-[var(--color-border)] group-hover:scale-110 group-hover:-rotate-3 transition-all duration-700 shadow-xl">
                          <Icon className="w-8 h-8 text-[var(--color-primary-medium)]" />
                        </div>
                      </div>
                      
                      {/* Level Badge */}
                      <div className="px-5 py-2.5 bg-yellow-500/10 dark:bg-yellow-500/20 border border-yellow-500/20 rounded-2xl">
                        <span className="text-[10px] font-black text-yellow-600 dark:text-yellow-400 uppercase tracking-widest">Master Level</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-black text-[var(--color-text-primary)] mb-3 tracking-tighter leading-none group-hover:text-[var(--color-primary-medium)] transition-colors">
                      {challenge.title}
                    </h3>
                    <p className="text-[var(--color-text-secondary)] text-base font-medium mb-8 leading-relaxed">
                      {challenge.goal}
                    </p>

                    {/* Refined Progress Bar */}
                    <div className="mb-8 pt-6 border-t border-[var(--color-border)]">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-[10px] font-black text-[var(--color-text-tertiary)] uppercase tracking-widest">Execution Progress</span>
                        <span className="text-sm font-black text-[var(--color-text-primary)]">{challenge.progress}%</span>
                      </div>
                      <div className="h-3 bg-[var(--color-bg-tertiary)] rounded-full overflow-hidden shadow-inner p-0.5">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${challenge.progress}%` }}
                          transition={{ duration: 1.5, delay: index * 0.2, ease: "circOut" }}
                          className="h-full bg-gradient-to-r from-[var(--color-primary-medium)] via-[var(--color-secondary)] to-[var(--color-primary-dark)] rounded-full shadow-[0_0_15px_rgba(var(--color-primary-medium-rgb),0.5)]"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Participation Indicators */}
                  <div className="relative z-10 mt-auto flex items-center justify-between">
                    <div className="flex -space-x-3">
                      {[1, 2, 3, 4].map(i => (
                        <div key={i} className="w-8 h-8 rounded-full border-2 border-[var(--color-bg-secondary)] bg-gray-200 overflow-hidden shadow-lg hover:z-10 hover:scale-110 transition-all cursor-pointer">
                          <img src={`https://i.pravatar.cc/150?img=${index * 15 + i + 10}`} alt="User" />
                        </div>
                      ))}
                      <div className="w-8 h-8 rounded-full border-2 border-[var(--color-bg-secondary)] bg-[var(--color-primary-medium)] flex items-center justify-center text-[10px] font-black text-white shadow-lg">
                        +{challenge.participants}
                      </div>
                    </div>
                    
                    <motion.button
                       whileHover={{ scale: 1.1, x: 5 }}
                       className="text-[var(--color-primary-medium)]"
                    >
                       <FaFire size={28} />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* High-Performance Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-14"
        >
          <div className="inline-flex flex-col items-center">
            <motion.button
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-6 bg-[var(--color-primary-dark)] text-white font-black rounded-2xl shadow-[0_20px_50px_-10px_rgba(0,0,0,0.3)] transition-all text-lg group flex items-center gap-4 border-b-4 border-black/20"
            >
              Initialize Mega Quest
              <FaFire className="w-6 h-6 group-hover:rotate-12 transition-transform" />
            </motion.button>
            <p className="mt-10 text-xs font-black text-[var(--color-text-tertiary)] uppercase tracking-[0.5em] flex items-center gap-4">
               <span className="w-2 h-2 bg-[var(--color-success)] rounded-full animate-pulse"></span>
               System Sync: 124,502 Active Challengers
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DailyHabitChallenge;
