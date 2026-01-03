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
    <section className="relative w-full py-24 overflow-hidden bg-[var(--color-bg-secondary)] transition-colors duration-300">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(var(--color-text-tertiary) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Dynamic Glow Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-24 -left-24 w-96 h-96 bg-[var(--color-primary-medium)] rounded-full blur-[100px] pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-24 -right-24 w-96 h-96 bg-[var(--color-secondary)] rounded-full blur-[100px] pointer-events-none"
      />

      <div className="relative z-10 w-11/12 max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[var(--color-text-primary)] mb-6 tracking-tight">
              Empowering <span className="text-[var(--color-primary-medium)]">Results</span> <br />
              <span className="text-[var(--color-secondary-dark)]">Driven by Data</span>
            </h2>
            <div className="h-1.5 w-24 bg-gradient-to-r from-[var(--color-primary-medium)] to-[var(--color-secondary)] mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto leading-relaxed font-medium">
              Join the elite circle of habit builders using our data-driven insights 
              and scientific methodology to reshape their reality.
            </p>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: stat.delay }}
                className="group relative"
              >
                <div className="relative h-full bg-[var(--color-bg-primary)] rounded-[2.5rem] border-2 border-[var(--color-border)] hover:border-[var(--color-primary-medium)]/30 transition-all duration-500 p-8 shadow-sm hover:shadow-2xl overflow-hidden group-hover:-translate-y-2">
                  {/* Card Background Accent */}
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${stat.gradient} opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500 rounded-bl-[5rem]`}></div>

                  <div className="relative z-10 flex flex-col items-center">
                    {/* Icon Container */}
                    <div className="relative mb-8">
                      <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 rounded-full`}></div>
                      <div className={`relative w-20 h-20 bg-[var(--color-bg-secondary)] rounded-[1.5rem] flex items-center justify-center border border-[var(--color-border)] group-hover:scale-110 transition-transform duration-500 shadow-inner`}>
                        <IconComponent className="w-9 h-9 text-[var(--color-primary-medium)]" />
                      </div>
                    </div>

                    {/* Counter */}
                    <div className="text-5xl font-black text-[var(--color-text-primary)] mb-3 tracking-tighter">
                      <AnimatedCounter
                        value={stat.value}
                        suffix={stat.suffix}
                        duration={2.5}
                      />
                    </div>

                    {/* Info */}
                    <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-2 uppercase tracking-wide">
                      {stat.label}
                    </h3>
                    <p className="text-sm text-[var(--color-text-tertiary)] font-medium text-center">
                      {stat.description}
                    </p>
                  </div>

                  {/* Progressive Loading Line */}
                  <div className="absolute bottom-0 left-0 right-0 p-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="h-1.5 w-full bg-[var(--color-bg-tertiary)] rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ x: '-100%' }}
                        whileInView={{ x: '0%' }}
                        transition={{ duration: 1.5, delay: stat.delay + 0.5 }}
                        className={`h-full bg-gradient-to-r ${stat.gradient}`}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Dynamic Trust Footer */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="mt-20 pt-10 border-t border-[var(--color-border)] flex flex-wrap justify-between items-center gap-6"
        >
          <div className="flex items-center gap-3">
            <div className="flex -space-x-3">
              {[1, 2, 4, 7, 9].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border-4 border-[var(--color-bg-primary)] bg-gray-200 overflow-hidden shadow-sm">
                  <img src={`https://i.pravatar.cc/100?img=${i+20}`} alt="User" />
                </div>
              ))}
            </div>
            <p className="text-sm font-bold text-[var(--color-text-secondary)]">
              +12K Verified Users this week
            </p>
          </div>

          <div className="flex items-center gap-2 px-4 py-2 bg-[var(--color-success)]/10 rounded-full">
            <div className="w-2 h-2 bg-[var(--color-success)] rounded-full animate-pulse"></div>
            <span className="text-xs font-black text-[var(--color-success)] uppercase tracking-widest">
              Live System Status: Secured
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Statistics;