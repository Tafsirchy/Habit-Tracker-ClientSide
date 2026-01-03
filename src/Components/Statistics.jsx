import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Users, TrendingUp, Award, Star } from "lucide-react";

const AnimatedCounter = ({ value, suffix, duration = 2 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);

      setCount(value % 1 === 0 ? Math.floor(value * progress) : (value * progress).toFixed(1));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [value, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

const Statistics = () => {
  const stats = [
    {
      icon: Users,
      value: 50,
      suffix: "K+",
      label: "Active Users",
      gradient: "from-blue-500 to-cyan-500",
      description: "Growing global community",
      delay: 0.1
    },
    {
      icon: TrendingUp,
      value: 95,
      suffix: "%",
      label: "Success Rate",
      gradient: "from-emerald-500 to-teal-500",
      description: "Transformation achieved",
      delay: 0.2
    },
    {
      icon: Award,
      value: 120,
      suffix: "M+",
      label: "Habits Tracked",
      gradient: "from-purple-500 to-indigo-500",
      description: "Milestones celebrated",
      delay: 0.3
    },
    {
      icon: Star,
      value: 4.9,
      suffix: "/5",
      label: "User Rating",
      gradient: "from-orange-500 to-yellow-500",
      description: "Consistently top rated",
      delay: 0.4
    },
  ];

  return (
    <section className="relative w-full pt-20 pb-8  overflow-hidden bg-[var(--color-bg-primary)] dark:bg-[var(--color-bg-primary)] transition-colors duration-500">
      {/* Enhanced Premium Background Elements */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(var(--color-primary-medium) 1.5px, transparent 1.5px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Optimized Dynamic Glow Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
          x: [0, 50, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-48 -left-48 w-[600px] h-[600px] bg-[var(--color-primary-medium)] rounded-full blur-[140px] pointer-events-none opacity-20"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.05, 0.15, 0.05],
          x: [0, -50, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-48 -right-48 w-[600px] h-[600px] bg-[var(--color-secondary)] rounded-full blur-[140px] pointer-events-none opacity-20"
      />

      <div className="relative z-10 w-11/12 max-w-7xl mx-auto px-4">
        {/* Modern Header Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-primary-medium)]/10 dark:bg-[var(--color-primary-medium)]/20 border border-[var(--color-primary-medium)]/20 rounded-full mb-8">
              <span className="w-2 h-2 bg-[var(--color-primary-medium)] rounded-full animate-pulse"></span>
              <span className="text-xs font-black text-[var(--color-primary-medium)] uppercase tracking-[0.2em]">Real-time Global Impact</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-[var(--color-text-primary)] mb-8 tracking-tighter leading-[0.9]">
              Empowering <span className="text-[var(--color-primary-medium)]">Results</span> <br />
              <span className="bg-gradient-to-r from-[var(--color-primary-medium)] to-[var(--color-secondary)] bg-clip-text text-transparent">Driven by Data</span>
            </h2>
            <p className="text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto leading-relaxed font-medium">
              Join the elite circle of habit builders using our data-driven insights 
              and scientific methodology to reshape their reality.
            </p>
          </motion.div>
        </div>

        {/* Improved Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: stat.delay }}
                className="group relative"
              >
                <div className="relative h-full bg-[var(--color-bg-secondary)] dark:bg-[var(--color-bg-secondary)]/50 backdrop-blur-xl rounded-[3rem] border-2 border-[var(--color-border)] hover:border-[var(--color-primary-medium)]/40 transition-all duration-700 p-8 shadow-sm hover:shadow-2xl overflow-hidden group-hover:-translate-y-4">
                  {/* Glass Card Background Accent */}
                  <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${stat.gradient} opacity-[0.03] group-hover:opacity-[0.1] transition-opacity duration-700 rounded-bl-[6rem]`}></div>

                  <div className="relative z-10 flex flex-col items-center">
                    {/* Floating Icon Container */}
                    <div className="relative mb-10">
                      <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} blur-2xl opacity-20 group-hover:opacity-60 transition-opacity duration-700 rounded-full`}></div>
                      <div className={`relative w-24 h-24 bg-[var(--color-bg-primary)] dark:bg-[var(--color-bg-tertiary)] rounded-[2rem] flex items-center justify-center border-2 border-[var(--color-border)] group-hover:scale-110 group-hover:rotate-3 transition-all duration-700 shadow-xl`}>
                        <IconComponent className="w-10 h-10 text-[var(--color-primary-medium)]" />
                      </div>
                    </div>

                    {/* Enhanced Counter */}
                    <div className="text-4xl md:text-5xl font-black text-[var(--color-text-primary)] mb-4 tracking-tighter">
                      <AnimatedCounter
                        value={stat.value}
                        suffix={stat.suffix}
                        duration={2.5}
                      />
                    </div>

                    {/* Stats Info */}
                    <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-3 uppercase tracking-widest text-center">
                      {stat.label}
                    </h3>
                    <p className="text-base text-[var(--color-text-tertiary)] font-semibold text-center leading-relaxed">
                      {stat.description}
                    </p>
                  </div>

                  {/* Animated Loading Bar */}
                  <div className="absolute bottom-0 left-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="h-1.5 w-full bg-[var(--color-bg-tertiary)] rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ x: '-100%' }}
                        whileInView={{ x: '0%' }}
                        transition={{ duration: 2, delay: stat.delay + 0.5, ease: "circOut" }}
                        className={`h-full bg-gradient-to-r ${stat.gradient}`}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Enhanced Trust Footer */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-20 pt-8 border-t border-[var(--color-border)] flex flex-col md:flex-row justify-between items-center gap-10"
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex -space-x-4">
              {[1, 5, 8, 12, 18].map(i => (
                <div key={i} className="w-14 h-14 rounded-full border-4 border-[var(--color-bg-primary)] dark:border-[var(--color-bg-secondary)] bg-gray-200 overflow-hidden shadow-2xl hover:scale-110 transition-transform cursor-pointer relative z-0 hover:z-10">
                  <img src={`https://i.pravatar.cc/150?img=${i+40}`} alt="User" />
                </div>
              ))}
              <div className="w-14 h-14 rounded-full border-4 border-[var(--color-bg-primary)] dark:border-[var(--color-bg-secondary)] bg-[var(--color-primary-medium)] flex items-center justify-center text-white text-xs font-black shadow-2xl relative z-0">
                +12K
              </div>
            </div>
            <div className="text-center md:text-left">
              <p className="text-lg font-black text-[var(--color-text-primary)] mb-1">
                Verified Global Community
              </p>
              <p className="text-sm font-bold text-[var(--color-text-tertiary)] flex items-center justify-center md:justify-start gap-2">
                <span className="w-2 h-2 bg-[var(--color-success)] rounded-full animate-pulse"></span>
                Growing by 500+ members daily
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 px-8 py-4 bg-[var(--color-success)]/5 dark:bg-[var(--color-success)]/10 rounded-2xl border border-[var(--color-success)]/20 border-dashed">
            <div className="w-10 h-10 bg-[var(--color-success)]/20 rounded-xl flex items-center justify-center">
              <Award className="w-6 h-6 text-[var(--color-success)]" />
            </div>
            <div>
              <span className="block text-xs font-black text-[var(--color-success)] uppercase tracking-widest mb-0.5">
                Enterprise Rated
              </span>
              <span className="text-sm font-bold text-[var(--color-text-primary)]">
                Highest Accuracy Index 2024
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Statistics;