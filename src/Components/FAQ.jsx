import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router";
import { ChevronDown, HelpCircle, Sparkles, Mail, ArrowRight, PlusCircle, Layers, Zap, BellRing, ShieldCheck } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0); // Open first by default for consistent look

  const faqs = [
    {
      question: "How do I create a new habit?",
      category: "Onboarding",
      icon: PlusCircle,
      answer:
        "Creating a new habit is easy! Simply click on the 'Add Habit' button from your dashboard, fill in the habit details (name, category, reminder time), and click save. You can also add a custom image and description to make it more personal.",
    },
    {
      question: "Can I track multiple habits at once?",
      category: "Architecture",
      icon: Layers,
      answer:
        "Absolutely! You can track as many habits as you want simultaneously. Our dashboard provides a clear overview of all your habits, their streaks, and completion rates. We recommend starting with 2-3 habits and gradually adding more.",
    },
    {
      question: "What happens if I miss a day?",
      category: "Behavioral",
      icon: Zap,
      answer:
        "Missing a day resets your current streak, but your 'Best Streak' is preserved as a personal record. Building habits is about consistency over long periods, so don't be discouraged by occasional slips!",
    },
    {
      question: "How do reminders work?",
      category: "Operational",
      icon: BellRing,
      answer:
        "You can set specific notification times for each habit. The app will send you a gentle nudge at your preferred time. You can customize these individually or disable them globally in your settings.",
    },
    {
      question: "Is my data private and secure?",
      category: "Security",
      icon: ShieldCheck,
      answer:
        "Yes! Your privacy is our priority. All habit data is stored securely and never shared with third parties. You have complete control over your account and can export your history at any time.",
    },
    {
      question: "Can I share my habits with friends?",
      category: "Social",
      icon: Sparkles,
      answer:
        "Yes! Many habits are public by default in our 'Explore' section. You can share your personal habits with others by making them public, allowing friends to adopt your routines and follow your progress journey.",
    },
    {
      question: "How do I analyze my progress?",
      category: "Analytics",
      icon: HelpCircle,
      answer:
        "Your dashboard features advanced analytics under each habit. We track your completion rate, longest streak, and current momentum. Use the 'Statistics' section for a complete bird's-eye view of your growth over weeks and months.",
    },
    {
      question: "What categories of habits can I track?",
      category: "Customization",
      icon: Layers,
      answer:
        "You can track anything! We offer built-on categories like Health, Productivity, and Mindfulness, but you're free to create your own. Each habit can be customized with unique icons and color themes.",
    },
    {
      question: "Does my data sync across devices?",
      category: "Connectivity",
      icon: Zap,
      answer:
        "Yes, seamlessly. By creating an account, all your habit data, streaks, and settings are securely synced in real-time across any device where you're logged in. Never miss a check-in, whether you're on mobile or desktop.",
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-20 bg-[var(--color-bg-secondary)] dark:bg-[var(--color-bg-primary)] transition-colors duration-500 relative overflow-hidden">
      {/* Premium Background Graphics */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--color-primary-medium)] opacity-[0.03] blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[var(--color-secondary)] opacity-[0.03] blur-[100px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 w-11/12 max-w-7xl mx-auto px-4">
        {/* Modern Header Section */}
        <div className="flex flex-col lg:flex-row items-end justify-between gap-16 mb-16 px-4">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-2/3"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-primary-medium)]/10 dark:bg-[var(--color-primary-medium)]/20 border border-[var(--color-primary-medium)]/20 rounded-full mb-8">
              <span className="text-[10px] font-black text-[var(--color-primary-medium)] uppercase tracking-[0.3em]">Support Center</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[var(--color-text-primary)] mb-6 tracking-tighter leading-none">
              Frequently Asked <br />
              <span className="bg-gradient-to-r from-[var(--color-primary-medium)] to-[var(--color-secondary)] bg-clip-text text-transparent italic">Questions</span>
            </h2>
            <p className="text-lg text-[var(--color-text-secondary)] font-medium max-w-2xl leading-relaxed">
              Find answers to the most common questions about building and tracking your habits.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="hidden lg:block bg-[var(--color-bg-primary)] dark:bg-[var(--color-bg-secondary)]/50 backdrop-blur-xl p-10 rounded-[3rem] border-2 border-[var(--color-border)] shadow-2xl relative group"
          >
             <div className="absolute -top-8 -right-8 w-20 h-20 bg-gradient-to-br from-orange-400 to-red-500 rounded-3xl flex items-center justify-center text-white shadow-2xl animate-bounce duration-[3000ms]">
                <Sparkles size={32} />
             </div>
             <div className="space-y-6">
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 dark:bg-emerald-500/20 flex items-center justify-center border border-emerald-500/20">
                    <HelpCircle className="w-8 h-8 text-emerald-500" />
                  </div>
                  <div>
                    <p className="text-md font-black text-[var(--color-text-primary)] uppercase tracking-tight">Need Help?</p>
                    <p className="text-xs text-[var(--color-text-tertiary)] font-black uppercase tracking-widest">Online 24/7</p>
                  </div>
                </div>
                <div className="w-64 h-3 bg-[var(--color-bg-tertiary)] rounded-full overflow-hidden shadow-inner p-0.5">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '92%' }}
                    transition={{ duration: 1.5, ease: "circOut" }}
                    className="h-full bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full" 
                  />
                </div>
                <p className="text-[10px] text-[var(--color-text-tertiary)] text-center font-black uppercase tracking-[0.2em]">Resolution Rate: 98%</p>
             </div>
          </motion.div>
        </div>

        {/* Improved FAQ Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8 space-y-3">
            {faqs.slice(0, 5).map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className={`rounded-[2rem] border-2 transition-all duration-700 overflow-hidden ${
                    isOpen 
                    ? "bg-[var(--color-bg-primary)] dark:bg-[var(--color-bg-secondary)] border-[var(--color-primary-medium)] shadow-2xl scale-[1.01]" 
                    : "bg-[var(--color-bg-primary)]/50 dark:bg-[var(--color-bg-secondary)]/30 border-[var(--color-border)] hover:border-[var(--color-primary-medium)]/30 backdrop-blur-xl"
                  }`}>
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="w-full px-8 py-6 text-left flex items-center gap-6"
                    >
                      <div className={`shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                        isOpen 
                        ? "bg-[var(--color-primary-medium)] text-white shadow-lg" 
                        : "bg-[var(--color-bg-tertiary)] text-[var(--color-text-tertiary)] group-hover:bg-[var(--color-primary-medium)] group-hover:text-white"
                      }`}>
                         {React.createElement(faq.icon, { size: 24, strokeWidth: 2.5 })}
                      </div>
                      
                      <div className="flex-grow">
                        <div className="flex items-center gap-3 mb-1">
                          <span className={`text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded-md bg-[var(--color-bg-tertiary)] ${
                            isOpen ? "text-[var(--color-primary-medium)]" : "text-[var(--color-text-tertiary)]"
                          }`}>
                            {faq.category}
                          </span>
                          <span className="text-[10px] font-black text-[var(--color-text-tertiary)] opacity-30">#0{index + 1}</span>
                        </div>
                        <h3 className={`text-lg md:text-xl font-black tracking-tight transition-colors duration-300 ${
                          isOpen ? "text-[var(--color-primary-medium)]" : "text-[var(--color-text-primary)]"
                        }`}>
                          {faq.question}
                        </h3>
                      </div>

                      <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ${
                        isOpen 
                        ? "bg-[var(--color-primary-medium)]/10 text-[var(--color-primary-medium)] rotate-180" 
                        : "bg-[var(--color-bg-tertiary)] text-[var(--color-text-tertiary)]"
                      }`}>
                        <ChevronDown size={20} strokeWidth={3} />
                      </div>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
                        >
                          <div className="px-8 pb-8 pl-8 md:pl-[6.5rem]">
                            <div className="pt-6 border-t border-[var(--color-border)]">
                              <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed font-medium">
                                {faq.answer}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
            {/* View More Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-12 flex justify-center lg:justify-start lg:pl-[6.5rem]"
            >
              <Link to="/help">
                <motion.button
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 text-[var(--color-primary-medium)] font-black uppercase tracking-widest text-xs hover:gap-4 transition-all group"
                >
                  Explore Full Knowledge Base
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </motion.button>
              </Link>
            </motion.div>
          </div>

          {/* Enhanced CTA Sidebar */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4"
          >
            <div className="bg-gradient-to-br from-[var(--color-primary-dark)] via-[#1a1f2e] to-[#0f172a] rounded-[2.5rem] p-8 text-white shadow-2xl relative overflow-hidden group border-2 border-white/5">
              {/* Internal Graphics */}
              <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
              <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-[var(--color-primary-medium)] opacity-20 blur-[100px] rounded-full group-hover:scale-125 transition-transform duration-1000"></div>
              
              <div className="relative z-10">
                <div className="w-20 h-20 bg-white/5 backdrop-blur-2xl rounded-3xl flex items-center justify-center mb-10 border border-white/10 shadow-inner group-hover:scale-110 transition-transform duration-500">
                  <Mail className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl md:text-3xl font-black mb-4 leading-tight tracking-tighter">
                  Still Have <br />Questions?
                </h3>
                <p className="text-white/60 mb-12 text-base font-medium leading-relaxed">
                  Our support team is ready to assist you in 
                  getting the most out of your habit tracking journey.
                </p>
                
                <motion.button
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-white text-black font-black py-5 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.4)] transition-all flex items-center justify-center gap-3 text-base"
                >
                  Contact Support
                  <ArrowRight size={18} strokeWidth={3} />
                </motion.button>
                
                <div className="mt-12 flex items-center gap-5">
                  <div className="flex -space-x-3">
                    {[1, 5, 12].map(i => (
                      <div key={i} className="w-12 h-12 rounded-2xl border-4 border-white/5 bg-gray-800 overflow-hidden shadow-2xl hover:z-10 hover:scale-110 transition-transform cursor-pointer">
                        <img src={`https://i.pravatar.cc/150?img=${i+45}`} alt="Support" />
                      </div>
                    ))}
                  </div>
                  <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.3em] leading-tight flex-grow">Support <br />active now</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
