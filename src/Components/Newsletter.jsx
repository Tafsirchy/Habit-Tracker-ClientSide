import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, CheckCircle, ArrowRight, Sparkles, Gift, Bell, Users } from "lucide-react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail("");
      }, 3000);
    }
  };

  return (
    <section className="relative w-full py-20 overflow-hidden bg-[var(--color-bg-primary)] dark:bg-[var(--color-bg-primary)] transition-colors duration-500">
      {/* Premium Background Graphics - Enhanced */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07] pointer-events-none">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1.5px 1.5px, var(--color-primary-medium) 1.5px, transparent 0)`,
            backgroundSize: "60px 60px"
          }}
        />
      </div>

      {/* Floating Dynamic Particles/Orbs */}
      <motion.div
        animate={{
          y: [0, -40, 0],
          x: [0, 30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 15, repeat: Infinity }}
        className="absolute -top-24 -right-24 w-96 h-96 bg-[var(--color-primary-medium)] opacity-10 blur-[120px] rounded-full"
      />
      <motion.div
        animate={{
          y: [0, 40, 0],
          x: [0, -30, 0],
          scale: [1.2, 1, 1.2],
        }}
        transition={{ duration: 18, repeat: Infinity }}
        className="absolute -bottom-24 -left-24 w-80 h-80 bg-[var(--color-secondary)] opacity-10 blur-[100px] rounded-full"
      />

      <div className="relative z-10 w-11/12 max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          {/* Main Subscription Card with Premium Glassmorphism */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-3/5"
          >
            <div className={`relative p-10 lg:p-16 rounded-[3rem] bg-[var(--color-bg-secondary)] dark:bg-[var(--color-bg-secondary)]/50 backdrop-blur-3xl border-2 border-[var(--color-border)] shadow-2xl transition-all duration-700 overflow-hidden group`}>
              {/* Internal Gradient Glow */}
              <div className="absolute -top-[20%] -right-[20%] w-[400px] h-[400px] bg-gradient-to-br from-[var(--color-primary-medium)]/10 to-transparent rounded-full blur-[80px]"></div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-[var(--color-primary-medium)]/10 dark:bg-[var(--color-primary-medium)]/20 border border-[var(--color-primary-medium)]/20 rounded-full mb-8">
                  <span className="w-2 h-2 bg-[var(--color-primary-medium)] rounded-full animate-pulse"></span>
                  <span className="text-[10px] font-black text-[var(--color-primary-medium)] uppercase tracking-[0.3em]">Insights Terminal active</span>
                </div>

                <h2 className="text-4xl md:text-5xl font-black text-[var(--color-text-primary)] mb-6 tracking-tighter leading-[0.9]">
                  Level Up Your <br />
                  <span className="bg-gradient-to-r from-[var(--color-primary-medium)] to-secondary bg-clip-text text-transparent italic">Biological Code</span>
                </h2>
                
                <p className="text-lg text-[var(--color-text-secondary)] font-medium max-w-xl mb-10 leading-relaxed">
                  Join 50,000+ elite performers receiving weekly behavioral science 
                  debriefs and exclusive habit-hacking protocols.
                </p>

                {/* Modern Floating Input Group */}
                <form onSubmit={handleSubmit} className="relative max-w-xl">
                  {!isSubmitted ? (
                    <motion.div
                      animate={{
                        boxShadow: isFocused
                          ? "0 20px 40px -15px rgba(var(--color-primary-medium-rgb), 0.2)"
                          : "0 10px 20px -10px rgba(0, 0, 0, 0.1)",
                      }}
                      className="flex flex-col sm:flex-row gap-3 p-3 bg-[var(--color-bg-primary)] dark:bg-[var(--color-bg-tertiary)] backdrop-blur-xl rounded-[2.5rem] border-2 border-[var(--color-border)] shadow-2xl transition-all duration-500 group/input"
                    >
                      <div className="flex-1 flex items-center px-6 gap-4 border-r-0 sm:border-r border-[var(--color-border)] mb-2 sm:mb-0">
                        <Mail className="w-6 h-6 text-[var(--color-primary-medium)] group-focus-within/input:scale-110 transition-transform" />
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          onFocus={() => setIsFocused(true)}
                          onBlur={() => setIsFocused(false)}
                          placeholder="Your professional email"
                          className="w-full bg-transparent border-none focus:outline-none focus:ring-0 text-[var(--color-text-primary)] font-black text-lg placeholder:text-[var(--color-text-tertiary)]"
                          required
                        />
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="group relative px-10 py-5 bg-[var(--color-primary-dark)] text-white font-black rounded-[2rem] shadow-xl overflow-hidden transition-all text-lg"
                      >
                        <span className="relative z-10 flex items-center justify-center gap-3">
                            Initialize Sync
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary-medium)] to-[var(--color-primary-dark)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </motion.button>
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="p-8 bg-green-500/10 border-2 border-green-500/30 rounded-[2.5rem] flex items-center gap-6"
                    >
                      <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center shadow-xl">
                        <CheckCircle className="w-10 h-10 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-black text-green-600 dark:text-green-400 mb-1 leading-none">Sync Initialized</h3>
                        <p className="text-lg text-green-700/70 dark:text-green-400/60 font-medium">Verify your uplink to begin protocols.</p>
                      </div>
                    </motion.div>
                  )}
                </form>

                {/* Social Proof with Avatars */}
                <div className="mt-16 pt-10 border-t border-[var(--color-border)] flex items-center gap-6">
                  <div className="flex -space-x-4">
                    {[1, 5, 12, 18, 22].map(i => (
                      <div key={i} className="w-12 h-12 rounded-full border-4 border-[var(--color-bg-secondary)] bg-gray-200 overflow-hidden shadow-xl hover:z-10 hover:scale-110 transition-transform cursor-pointer">
                        <img src={`https://i.pravatar.cc/150?img=${i+30}`} alt="User" />
                      </div>
                    ))}
                    <div className="w-12 h-12 rounded-full border-4 border-[var(--color-bg-secondary)] bg-[var(--color-primary-medium)] flex items-center justify-center text-white text-[10px] font-black shadow-xl">
                      +50K
                    </div>
                  </div>
                  <p className="text-sm font-black text-[var(--color-text-tertiary)] uppercase tracking-widest leading-none">
                    Verified Global Agents <br />
                    <span className="text-[var(--color-success)] text-[10px]">99.8% Protocol Saturation</span>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Improved Benefit Cards Grid */}
          <div className="w-full lg:w-2/5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            {[
              {
                icon: Gift,
                title: "Exclusive Content",
                desc: "Access premium templates and guides",
                bgGradient: "from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20",
              },
              {
                icon: Bell,
                title: "Weekly Updates",
                desc: "Fresh tips delivered every Monday",
                bgGradient: "from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20",
              },
              {
                icon: Sparkles,
                title: "Early Access",
                desc: "Be first to try new features",
                bgGradient: "from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20",
              },
            ].map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  whileHover={{ scale: 1.05, x: 10 }}
                  className={`group relative p-6 rounded-[2rem] bg-gradient-to-br ${benefit.bgGradient} border-2 border-[var(--color-border)] shadow-xl transition-all duration-500 overflow-hidden`}
                >
                  {/* Glass Card Background Overlay */}
                  <div className="absolute inset-0 bg-white/5 dark:bg-black/5 backdrop-blur-md opacity-20 group-hover:opacity-40 transition-opacity"></div>
                  
                  <div className="relative z-10 flex items-center gap-6">
                    <div className="w-14 h-14 bg-white dark:bg-[var(--color-bg-tertiary)] rounded-2xl flex items-center justify-center shadow-2xl group-hover:rotate-6 transition-transform group-hover:scale-110 shrink-0">
                      <Icon className="w-7 h-7 text-[var(--color-primary-medium)]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-[var(--color-text-primary)] mb-1 tracking-tighter leading-none">{benefit.title}</h3>
                      <p className="text-sm text-[var(--color-text-secondary)] font-medium leading-tight">{benefit.desc}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;