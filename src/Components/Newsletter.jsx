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
    <section className="relative w-full py-20 overflow-hidden bg-[var(--color-bg-secondary)] transition-colors duration-300">
      {/* Subtle Background Gradients */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-slate-300 to-slate-400 dark:from-slate-700 dark:to-slate-800 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-slate-300 to-slate-400 dark:from-slate-700 dark:to-slate-800 rounded-full blur-3xl"
        />
      </div>

      {/* Floating Particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-slate-400 dark:bg-slate-600 rounded-full opacity-30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      <div className="relative z-10 w-11/12 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Main Card with Gradient Border */}
          <div className="relative group">
            {/* Gradient Border Effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 rounded-3xl opacity-75 dark:opacity-50 group-hover:opacity-100 blur transition duration-500"></div>
            
            {/* Main Content Card */}
            <div className="relative bg-[var(--color-bg-primary)] rounded-3xl shadow-2xl p-10 md:p-12 border border-[var(--color-border)]">
              
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-slate-200/30 to-slate-300/30 dark:from-slate-700/20 dark:to-slate-800/20 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-br from-slate-200/30 to-slate-300/30 dark:from-slate-700/20 dark:to-slate-800/20 rounded-full blur-2xl"></div>

              {/* Header Section */}
              <div className="text-center mb-10 relative z-10">
                {/* Icon with Pulse Animation */}
                <motion.div
                  animate={{ 
                    scale: [1, 1.05, 1],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 rounded-2xl mb-6 shadow-lg relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 rounded-2xl blur-md opacity-50"></div>
                  <Mail className="w-10 h-10 text-white relative z-10" />
                </motion.div>

                {/* Badge */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, type: "spring", bounce: 0.5 }}
                  className="inline-block mb-4"
                >
                  <div className="px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 rounded-full border border-purple-200 dark:border-purple-800/50">
                    <span className="text-purple-700 dark:text-purple-300 font-semibold text-sm flex items-center gap-2">
                      <Sparkles className="w-4 h-4" />
                      JOIN 50,000+ SUBSCRIBERS
                    </span>
                  </div>
                </motion.div>

                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                  Stay <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500">Connected</span>
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
                  Get exclusive tips, early access to new features, and join a community of habit builders leveling up their lives
                </p>
              </div>

              {/* Form or Success Message - Fixed Height */}
              <div className="min-h-[220px] flex items-center justify-center relative z-10">
                <AnimatePresence mode="wait">
                  {!isSubmitted ? (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="w-full max-w-2xl"
                    >
                      {/* Input Group with Glassmorphism */}
                      <motion.div
                        animate={{
                          boxShadow: isFocused
                            ? "0 0 0 3px rgba(168, 85, 247, 0.1)"
                            : "0 0 0 0px rgba(168, 85, 247, 0)",
                        }}
                        className="flex flex-col sm:flex-row gap-3 p-2 bg-gray-50/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-700 mb-6"
                      >
                        <div className="relative flex-1">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-500" />
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            onFocus={() => setIsFocused(true)}
                            onBlur={() => setIsFocused(false)}
                            placeholder="Enter your email address"
                            required
                            className="w-full pl-12 pr-4 py-4 bg-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 rounded-xl focus:outline-none"
                          />
                        </div>

                        <motion.button
                          type="submit"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="group px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all whitespace-nowrap flex items-center justify-center gap-2 relative overflow-hidden"
                        >
                          <span className="relative z-10">Subscribe</span>
                          <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                          <div className="absolute inset-0 bg-gradient-to-r from-purple-700 via-pink-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </motion.button>
                      </motion.div>

                      {/* Trust Badges */}
                      <div className="flex flex-wrap items-center justify-center gap-6 text-gray-600 dark:text-gray-400 text-sm">
                        <motion.div 
                          whileHover={{ scale: 1.05 }}
                          className="flex items-center gap-2"
                        >
                          <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                            <CheckCircle className="w-3.5 h-3.5 text-green-600 dark:text-green-400" />
                          </div>
                          <span>100% Free</span>
                        </motion.div>
                        <motion.div 
                          whileHover={{ scale: 1.05 }}
                          className="flex items-center gap-2"
                        >
                          <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                            <CheckCircle className="w-3.5 h-3.5 text-green-600 dark:text-green-400" />
                          </div>
                          <span>Unsubscribe anytime</span>
                        </motion.div>
                        <motion.div 
                          whileHover={{ scale: 1.05 }}
                          className="flex items-center gap-2"
                        >
                          <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                            <CheckCircle className="w-3.5 h-3.5 text-green-600 dark:text-green-400" />
                          </div>
                          <span>No spam</span>
                        </motion.div>
                      </div>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="text-center py-8"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", bounce: 0.6 }}
                        className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full mb-5 shadow-lg relative"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full blur-md opacity-50"></div>
                        <CheckCircle className="w-10 h-10 text-white relative z-10" />
                      </motion.div>
                      <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
                        Welcome Aboard! 🎉
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-lg">
                        Check your inbox for confirmation
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Benefits Grid - Equal Height Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12 relative z-10">
                {[
                  {
                    icon: Gift,
                    title: "Exclusive Content",
                    description: "Access premium templates and guides",
                    gradient: "from-purple-500 to-pink-500",
                    bgGradient: "from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20",
                  },
                  {
                    icon: Bell,
                    title: "Weekly Updates",
                    description: "Fresh tips delivered every Monday",
                    gradient: "from-blue-500 to-cyan-500",
                    bgGradient: "from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20",
                  },
                  {
                    icon: Sparkles,
                    title: "Early Access",
                    description: "Be first to try new features",
                    gradient: "from-orange-500 to-yellow-500",
                    bgGradient: "from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20",
                  },
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="flex"
                  >
                    <div className={`flex flex-col w-full bg-gradient-to-br ${benefit.bgGradient} rounded-2xl p-6 text-center border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm transition-all duration-300 hover:shadow-lg`}>
                      <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${benefit.gradient} rounded-xl mb-4 mx-auto shadow-md relative group-hover:scale-110 transition-transform`}>
                        <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} rounded-xl blur-md opacity-50`}></div>
                        <benefit.icon className="w-7 h-7 text-white relative z-10" />
                      </div>
                      <h4 className="text-base font-bold text-gray-900 dark:text-white mb-2">
                        {benefit.title}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center mt-8"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-full border border-gray-200 dark:border-gray-800 shadow-lg">
              <div className="flex -space-x-2">
                {[1, 5, 7, 10, 12].map((img) => (
                  <motion.img
                    key={img}
                    whileHover={{ scale: 1.2, zIndex: 10 }}
                    src={`https://i.pravatar.cc/100?img=${img}`}
                    alt="User"
                    className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-900 transition-transform"
                  />
                ))}
              </div>
              <div className="h-8 w-px bg-gray-300 dark:bg-gray-700"></div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">50,000+</span> subscribers
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;