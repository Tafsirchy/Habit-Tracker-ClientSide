import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, CheckCircle, Trophy, Flame, BarChart3 } from "lucide-react";

const HabitStats = () => {
  const cards = [
    {
      title: "Streaks",
      description: "Build unstoppable momentum with daily tracking. Every day counts toward your legacy.",
      icon: Flame,
      gradient: "from-orange-500 to-red-600",
      accent: "var(--color-secondary)",
      delay: 0.1,
      size: "lg" // Large card
    },
    {
      title: "Time Saved",
      description: "Reclaim your life. Track every hour gained through discipline.",
      icon: Clock,
      gradient: "from-blue-500 to-cyan-600",
      accent: "var(--color-primary-medium)",
      delay: 0.2,
      size: "sm"
    },
    {
      title: "Success Rate",
      description: "Visualize your consistency through beautiful, data-driven analytics.",
      icon: CheckCircle,
      gradient: "from-emerald-500 to-teal-600",
      accent: "var(--color-success)",
      delay: 0.3,
      size: "sm"
    },
    {
      title: "Progress Insights",
      description: "Deep dive into your journey with advanced behavioral metrics.",
      icon: BarChart3,
      gradient: "from-purple-500 to-indigo-600",
      accent: "var(--color-primary-dark)",
      delay: 0.4,
      size: "sm"
    },
    {
      title: "Achievements",
      description: "Unlock premium rewards and celebrate your transformation milestones.",
      icon: Trophy,
      gradient: "from-yellow-400 to-amber-600",
      accent: "var(--color-warning)",
      delay: 0.5,
      size: "sm"
    },
    {
      title: "Planning",
      description: "Experience total control over your schedule with our intuitive habit engine.",
      icon: Calendar,
      gradient: "from-pink-500 to-rose-600",
      accent: "var(--color-secondary-dark)",
      delay: 0.6,
      size: "lg"
    },
  ];

  return (
    <section className="w-full relative py-32 overflow-hidden bg-[var(--color-bg-primary)] transition-colors duration-500">
      {/* Dynamic Background Noise/Texture */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

      {/* Floating Accent Orbs - Enhanced */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.05, 0.1, 0.05],
          rotate: [0, 90, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] bg-[var(--color-primary-medium)] blur-[150px] rounded-full pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1.3, 1, 1.3],
          opacity: [0.03, 0.08, 0.03],
          rotate: [0, -90, 0]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-[20%] -left-[10%] w-[700px] h-[700px] bg-[var(--color-secondary)] blur-[150px] rounded-full pointer-events-none"
      />

      <div className="relative z-10 w-11/12 max-w-7xl mx-auto px-4">
        {/* Modern Header Section */}
        <div className="flex flex-col lg:flex-row items-end justify-between gap-12 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-2/3"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-gradient-to-r from-[var(--color-primary-medium)] to-transparent"></div>
              <span className="text-xs font-black text-[var(--color-primary-medium)] uppercase tracking-[0.4em]">Core Capabilities</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-[var(--color-text-primary)] leading-[0.95] tracking-tighter mb-8">
              Engineered for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary-medium)] via-[var(--color-secondary)] to-[var(--color-primary-dark)]">Peak Performance</span>
            </h2>
            <p className="text-xl text-[var(--color-text-secondary)] font-medium max-w-2xl leading-relaxed">
              We've combined behavioral science with cutting-edge design to create 
              the world's most sophisticated habit-building engine.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-6 pb-4"
          >
            <div className="text-right">
              <p className="text-sm font-black text-[var(--color-text-tertiary)] uppercase tracking-widest mb-1">Efficiency Rating</p>
              <div className="flex items-center gap-2">
                <span className="text-3xl font-black text-[var(--color-text-primary)]">99.8%</span>
                <div className="w-2 h-2 bg-[var(--color-success)] rounded-full animate-pulse"></div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Asymmetric Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          {cards.map((card, index) => {
            const IconComponent = card.icon;
            const isLarge = card.size === "lg";
            
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: card.delay }}
                className={`${isLarge ? 'lg:col-span-6' : 'lg:col-span-4'} flex flex-col group`}
              >
                <div className="relative flex-grow h-full bg-[var(--color-bg-secondary)] rounded-[3rem] border-2 border-[var(--color-border)] hover:border-[var(--color-primary-medium)]/40 transition-all duration-700 p-10 overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-4">
                  {/* Premium Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700`}></div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-white/10 to-transparent dark:from-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-full translate-x-1/2 -translate-y-1/2 blur-2xl"></div>

                  <div className="relative z-10 h-full flex flex-col">
                    <div className="flex items-start justify-between mb-10">
                      {/* Icon with Glassmorphism */}
                      <div className="relative">
                        <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} blur-xl opacity-20 group-hover:opacity-50 transition-all duration-500 rounded-2xl`}></div>
                        <div className="relative w-20 h-20 bg-[var(--color-bg-primary)] rounded-2xl flex items-center justify-center border border-[var(--color-border)] shadow-xl group-hover:scale-110 transition-transform duration-500">
                          <IconComponent className="w-10 h-10 text-[var(--color-primary-medium)]" />
                        </div>
                      </div>
                      
                      {/* Status indicator */}
                      <div className="flex gap-1.5 opacity-30 group-hover:opacity-100 transition-all duration-500">
                        <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-text-tertiary)] group-hover:bg-[var(--color-primary-medium)]"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-text-tertiary)] group-hover:bg-[var(--color-secondary)]"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-text-tertiary)] group-hover:bg-[var(--color-primary-dark)]"></div>
                      </div>
                    </div>

                    <h3 className={`font-black tracking-tight text-[var(--color-text-primary)] transition-all duration-500 group-hover:text-[var(--color-primary-medium)] ${isLarge ? 'text-4xl' : 'text-3xl'} mb-5`}>
                      {card.title}
                    </h3>
                    
                    <p className={`text-[var(--color-text-secondary)] font-medium leading-relaxed mb-10 ${isLarge ? 'text-lg' : 'text-base'}`}>
                      {card.description}
                    </p>

                    <div className="mt-auto pt-8 border-t border-[var(--color-border)] flex items-center justify-between">
                      <div className="flex items-center gap-2">
                         <div className="w-2 h-2 rounded-full bg-[var(--color-success)]"></div>
                         <span className="text-[10px] font-black text-[var(--color-text-tertiary)] uppercase tracking-widest">Active System</span>
                      </div>
                      <motion.div
                        whileHover={{ x: 5 }}
                        className="text-[var(--color-primary-medium)] font-black text-sm cursor-pointer flex items-center gap-2 group/btn"
                      >
                        Learn More
                        <div className="w-5 h-5 rounded-full bg-[var(--color-primary-medium)] text-white flex items-center justify-center scale-0 group-hover/btn:scale-100 transition-transform duration-300">
                           <CheckCircle size={12} />
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Dynamic Conclusion Section */}
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, delay: 0.5 }}
           className="mt-32 p-12 lg:p-20 bg-gradient-to-br from-[var(--color-primary-dark)] to-[var(--color-secondary-dark)] rounded-[4rem] text-white flex flex-col lg:flex-row items-center justify-between gap-12 relative overflow-hidden group shadow-[0_40px_100px_-15px_rgba(0,0,0,0.3)] dark:shadow-[0_40px_100px_-15px_rgba(0,0,0,0.6)]"
        >
          {/* Internal graphics */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/20 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2"></div>

          <div className="relative z-10 lg:w-1/2 text-center lg:text-left">
            <h3 className="text-4xl lg:text-5xl font-black mb-8 leading-[1.1]">
              Ready to redefine your <br />
              <span className="text-blue-300">biological code?</span>
            </h3>
            <p className="text-xl text-blue-100/70 font-medium max-w-xl leading-relaxed">
              Don't just track your habits. Architect your existence with the 
              world's most advanced behavioral operating system.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row items-center gap-6">
            <motion.button
              whileHover={{ scale: 1.05, bg: "white", color: "var(--color-primary-dark)" }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-6 bg-white text-[var(--color-primary-dark)] font-black rounded-3xl shadow-2xl transition-all text-lg"
            >
              Get Started Now
            </motion.button>
            <motion.button
              className="px-12 py-6 border-2 border-white/20 text-white font-black rounded-3xl hover:bg-white/10 transition-all text-lg"
            >
              View Pricing
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HabitStats;