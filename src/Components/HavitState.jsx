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
      span: "lg:col-span-7",
      metric: "Avg. 15 Days"
    },
    {
      title: "Time Saved",
      description: "Reclaim your life. Track every hour gained through discipline.",
      icon: Clock,
      gradient: "from-blue-500 to-cyan-600",
      accent: "var(--color-primary-medium)",
      delay: 0.2,
      span: "lg:col-span-5",
      metric: "+12h / Week"
    },
    {
      title: "Success Rate",
      description: "Visualize your consistency through beautiful, data-driven analytics.",
      icon: CheckCircle,
      gradient: "from-emerald-500 to-teal-600",
      accent: "var(--color-success)",
      delay: 0.3,
      span: "lg:col-span-4",
      metric: "94% Global"
    },
    {
      title: "Progress Insights",
      description: "Deep dive into your journey with advanced behavioral metrics and deep analysis.",
      icon: BarChart3,
      gradient: "from-purple-500 to-indigo-600",
      accent: "var(--color-primary-dark)",
      delay: 0.4,
      span: "lg:col-span-4",
      metric: "AI Enhanced"
    },
    {
      title: "Achievements",
      description: "Unlock premium rewards and celebrate your transformation milestones.",
      icon: Trophy,
      gradient: "from-yellow-400 to-amber-600",
      accent: "var(--color-warning)",
      delay: 0.5,
      span: "lg:col-span-4",
      metric: "2.4k Unlocked"
    },
    {
      title: "Planning Engine",
      description: "Experience total control over your schedule with our intuitive habit engine. Synchronize your life across all devices in real-time.",
      icon: Calendar,
      gradient: "from-pink-500 to-rose-600",
      accent: "var(--color-secondary-dark)",
      delay: 0.6,
      span: "lg:col-span-12",
      metric: "Sync Active"
    },
  ];

  return (
    <section className="w-full relative py-20 overflow-hidden bg-[var(--color-bg-primary)] dark:bg-[var(--color-bg-primary)] transition-colors duration-500">
      {/* Premium Dynamic Background Texture */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] scale-110"></div>

      {/* Enhanced Floating Accent Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.08, 0.15, 0.08],
          rotate: [0, 90, 0],
          x: [0, 100, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -top-[20%] -right-[10%] w-[900px] h-[900px] bg-[var(--color-primary-medium)] blur-[160px] rounded-full pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1.4, 1, 1.4],
          opacity: [0.05, 0.12, 0.05],
          rotate: [0, -90, 0],
          x: [0, -100, 0]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-[20%] -left-[10%] w-[800px] h-[800px] bg-[var(--color-secondary)] blur-[160px] rounded-full pointer-events-none"
      />

      <div className="relative z-10 w-11/12 max-w-7xl mx-auto px-4">
        {/* Modern Header Section - Re-engineered for Balance */}
        <div className="flex flex-col xl:flex-row items-start xl:items-end justify-between gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="xl:w-1/2"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[2px] bg-gradient-to-r from-[var(--color-primary-medium)] to-transparent"></div>
              <span className="text-[10px] font-black text-[var(--color-primary-medium)] uppercase tracking-[0.6em]">Future of Performance</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-black text-[var(--color-text-primary)] leading-[0.9] tracking-tighter mb-8 group">
              Engineered for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary-medium)] via-[var(--color-secondary)] to-[var(--color-primary-dark)] relative inline-block">
                Peak Performance
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1.2, delay: 0.5 }}
                  className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-[var(--color-primary-medium)] to-transparent opacity-30"
                />
              </span>
            </h2>

            <div className="relative">
               <div className="absolute -left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[var(--color-primary-medium)] via-[var(--color-primary-medium)]/50 to-transparent rounded-full opacity-40"></div>
               <p className="text-lg text-[var(--color-text-secondary)] font-medium max-w-xl leading-relaxed">
                We've combined behavioral science with cutting-edge design to create 
                the world's most sophisticated habit-building engine. Experience total control.
              </p>
            </div>
          </motion.div>

          {/* New Multi-Metric Status Panel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap sm:flex-nowrap gap-4 w-full xl:w-auto"
          >
            {/* Precision Metric Card */}
            <div className="flex-1 sm:flex-none flex flex-col justify-between bg-[var(--color-bg-secondary)] dark:bg-[var(--color-bg-secondary)]/50 backdrop-blur-2xl p-6 rounded-[2rem] border border-[var(--color-border)] shadow-xl min-w-[180px] group hover:border-[var(--color-primary-medium)]/50 transition-all duration-500">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[9px] font-black text-[var(--color-text-tertiary)] uppercase tracking-widest">Precision Rating</span>
                <div className="w-2 h-2 bg-[var(--color-success)] rounded-full animate-pulse shadow-[0_0_10px_var(--color-success)]"></div>
              </div>
              <div className="flex items-end gap-1">
                <span className="text-3xl font-black text-[var(--color-text-primary)] group-hover:text-[var(--color-primary-medium)] transition-colors">99.8</span>
                <span className="text-lg font-bold text-[var(--color-text-tertiary)] mb-1">%</span>
              </div>
            </div>

            {/* Integrity Metric Card */}
            <div className="flex-1 sm:flex-none flex flex-col justify-between bg-[var(--color-bg-secondary)] dark:bg-[var(--color-bg-secondary)]/50 backdrop-blur-2xl p-6 rounded-[2rem] border border-[var(--color-border)] shadow-xl min-w-[180px] group hover:border-[var(--color-secondary)]/50 transition-all duration-500">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[9px] font-black text-[var(--color-text-tertiary)] uppercase tracking-widest">System Integrity</span>
                <BarChart3 className="w-3 h-3 text-[var(--color-secondary)]" />
              </div>
              <div className="flex items-end gap-1">
                <span className="text-3xl font-black text-[var(--color-text-primary)] group-hover:text-[var(--color-secondary)] transition-colors">High</span>
                <span className="w-2 h-2 bg-[var(--color-secondary)] rounded-full mb-2"></span>
              </div>
            </div>

            {/* Latency Metric Card */}
            <div className="hidden md:flex flex-1 sm:flex-none flex flex-col justify-between bg-[var(--color-bg-secondary)] dark:bg-[var(--color-bg-secondary)]/50 backdrop-blur-2xl p-6 rounded-[2rem] border border-[var(--color-border)] shadow-xl min-w-[180px] group hover:border-[var(--color-primary-dark)]/50 transition-all duration-500">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[9px] font-black text-[var(--color-text-tertiary)] uppercase tracking-widest">Latency</span>
                <Clock className="w-3 h-3 text-[var(--color-primary-dark)]" />
              </div>
              <div className="flex items-end gap-1">
                <span className="text-3xl font-black text-[var(--color-text-primary)] group-hover:text-[var(--color-primary-dark)] transition-colors">12</span>
                <span className="text-lg font-bold text-[var(--color-text-tertiary)] mb-1">ms</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Improved Asymmetric Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8">
          {cards.map((card, index) => {
            const IconComponent = card.icon;
            const isFullWidth = card.span === "lg:col-span-12";
            
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: card.delay }}
                className={`${card.span} flex flex-col group`}
              >
                <div className="relative flex-grow h-full bg-[var(--color-bg-secondary)] dark:bg-[var(--color-bg-secondary)]/40 backdrop-blur-xl rounded-[3rem] border-2 border-[var(--color-border)] hover:border-[var(--color-primary-medium)]/40 transition-all duration-700 p-8 overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-3">
                  {/* Glass Card Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-700`}></div>
                  
                  {/* Floating Radial Graphics */}
                  <div className={`absolute -top-12 -right-12 w-64 h-64 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-20 transition-all duration-700 rounded-full blur-3xl`}></div>

                  <div className="relative z-10 h-full flex flex-col">
                    <div className="flex items-start justify-between mb-8">
                      {/* Premium Icon Container */}
                      <div className="relative">
                        <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} blur-xl opacity-20 group-hover:opacity-70 transition-all duration-700 rounded-2xl`}></div>
                        <div className="relative w-16 h-16 bg-[var(--color-bg-primary)] dark:bg-[var(--color-bg-tertiary)] rounded-2xl flex items-center justify-center border border-[var(--color-border)] shadow-xl group-hover:scale-110 group-hover:-rotate-3 transition-all duration-700">
                          <IconComponent className="w-8 h-8 text-[var(--color-primary-medium)]" />
                        </div>
                      </div>
                      
                      {/* Animated System Status */}
                      <div className="flex gap-2">
                        {[1, 2, 3].map(i => (
                          <motion.div 
                            key={i}
                            animate={{ opacity: [0.3, 1, 0.3] }}
                            transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                            className={`w-2 h-2 rounded-full ${i === 1 ? 'bg-[var(--color-primary-medium)]' : i === 2 ? 'bg-[var(--color-secondary)]' : 'bg-[var(--color-primary-dark)]'}`}
                          />
                        ))}
                      </div>
                    </div>

                    <h3 className={`font-black tracking-tighter text-[var(--color-text-primary)] transition-all duration-500 group-hover:text-[var(--color-primary-medium)] ${isFullWidth ? 'text-2xl md:text-4xl' : 'text-2xl'} mb-4 leading-none`}>
                      {card.title}
                    </h3>
                    
                    <p className={`text-[var(--color-text-secondary)] font-medium leading-relaxed mb-8 ${isFullWidth ? 'text-lg md:text-xl max-w-3xl' : 'text-base'}`}>
                      {card.description}
                    </p>

                    <div className="mt-auto pt-8 border-t border-[var(--color-border)] flex items-center justify-between">
                      <div className="flex items-center gap-4">
                         <div className={`px-4 py-1.5 rounded-full bg-gradient-to-r ${card.gradient} text-white text-[10px] font-black uppercase tracking-widest shadow-lg`}>
                            {card.metric}
                         </div>
                         <span className="text-xs font-black text-[var(--color-text-tertiary)] uppercase tracking-[0.2em] hidden sm:inline-block border-l border-[var(--color-border)] pl-4">Live Matrix</span>
                      </div>
                      <motion.div
                        whileHover={{ x: 8 }}
                        className="text-[var(--color-primary-medium)] font-black text-sm cursor-pointer flex items-center gap-3 group/btn hover:underline decoration-2 underline-offset-8"
                      >
                        {isFullWidth ? 'Initialize Engine' : 'Explore'}
                        <div className="w-6 h-6 rounded-full bg-[var(--color-primary-medium)] text-white flex items-center justify-center scale-0 group-hover/btn:scale-110 transition-all duration-500">
                           <CheckCircle size={14} strokeWidth={3} />
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Enhanced High-Impact CTA */}
        <motion.div
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1, type: "spring", bounce: 0.3 }}
           className="mt-24 p-12 lg:p-16 bg-gradient-to-br from-[#1a1f2e] via-[#2d3748] to-[#1a1f2e] rounded-[3.5rem] text-white flex flex-col lg:flex-row items-center justify-between gap-12 relative overflow-hidden group shadow-[0_30px_60px_-15px_rgba(0,0,0,0.4)]"
        >
          {/* Internal Premium Graphics */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 group-hover:scale-125 transition-transform duration-1000"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[var(--color-secondary)]/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.05]"></div>

          <div className="relative z-10 lg:w-3/5 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-8">
              <span className="text-[10px] font-black uppercase tracking-[0.3em]">Limited Access Beta</span>
            </div>
            <h3 className="text-3xl lg:text-4xl font-black mb-6 leading-[0.9] tracking-tighter">
              Ready to redefine your <br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">biological code?</span>
            </h3>
            <p className="text-xl text-blue-100/60 font-medium max-w-2xl leading-relaxed">
              Don't just track your habits. Architect your existence with the 
              world's most advanced behavioral operating system.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row items-center gap-8 w-full lg:w-auto">
            <motion.button
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-12 py-6 bg-white text-[var(--color-primary-dark)] font-black rounded-2xl shadow-[0_15px_40px_-5px_rgba(255,255,255,0.3)] transition-all text-lg"
            >
              Initialize Build
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, bg: "rgba(255,255,255,0.1)" }}
              className="w-full sm:w-auto px-12 py-6 border-2 border-white/20 text-white font-black rounded-2xl transition-all text-lg backdrop-blur-sm"
            >
              Consult Docs
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HabitStats;