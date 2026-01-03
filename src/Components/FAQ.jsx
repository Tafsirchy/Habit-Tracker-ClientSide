import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, Sparkles, Mail } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0); // Open first by default for consistent look

  const faqs = [
    {
      question: "How do I create a new habit?",
      answer:
        "Creating a new habit is easy! Simply click on the 'Add Habit' button from your dashboard, fill in the habit details (name, category, reminder time), and click save. You can also add a custom image and description to make it more personal.",
    },
    {
      question: "Can I track multiple habits at once?",
      answer:
        "Absolutely! You can track as many habits as you want simultaneously. Our dashboard provides a clear overview of all your habits, their streaks, and completion rates. We recommend starting with 2-3 habits and gradually adding more.",
    },
    {
      question: "What happens if I miss a day?",
      answer:
        "Missing a day resets your current streak, but your 'Best Streak' is preserved as a personal record. Building habits is about consistency over long periods, so don't be discouraged by occasional slips!",
    },
    {
      question: "How do reminders work?",
      answer:
        "You can set specific notification times for each habit. The app will send you a gentle nudge at your preferred time. You can customize these individually or disable them globally in your settings.",
    },
    {
      question: "Is my data private and secure?",
      answer:
        "Yes! Your privacy is our priority. All habit data is stored securely and never shared with third parties. You have complete control over your account and can export your history at any time.",
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-24 bg-[var(--color-bg-secondary)] transition-colors duration-300 relative overflow-hidden">
      {/* Background Decorative Blurs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--color-primary-medium)] opacity-[0.03] blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[var(--color-secondary)] opacity-[0.03] blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2 -z-10"></div>

      <div className="w-11/12 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row items-end justify-between gap-8 mb-16 px-4">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-2/3"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-primary-medium)]/10 border border-[var(--color-primary-medium)]/20 rounded-full mb-6">
              <HelpCircle className="w-4 h-4 text-[var(--color-primary-medium)]" />
              <span className="text-sm font-semibold text-[var(--color-primary-medium)] uppercase tracking-widest">
                Support Center
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[var(--color-text-primary)] mb-6 leading-tight">
              Got Questions? <br />
              <span className="bg-gradient-to-r from-[var(--color-primary-medium)] to-[var(--color-secondary)] bg-clip-text text-transparent">
                We've Got Answers.
              </span>
            </h2>
            <p className="text-xl text-[var(--color-text-secondary)] max-w-2xl leading-relaxed">
              Everything you need to know about building better habits and 
              maximizing your productivity with our platform.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="hidden lg:block bg-[var(--color-bg-primary)] p-6 rounded-3xl border-2 border-[var(--color-border)] shadow-xl relative group"
          >
             <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl flex items-center justify-center text-white shadow-lg animate-bounce duration-[3000ms]">
                <Sparkles size={28} />
             </div>
             <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center">
                    <HelpCircle className="text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[var(--color-text-primary)]">Help Center</p>
                    <p className="text-xs text-[var(--color-text-tertiary)]">Online 24/7</p>
                  </div>
                </div>
                <div className="w-full h-2 bg-[var(--color-bg-tertiary)] rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '85%' }}
                    className="h-full bg-emerald-500" 
                  />
                </div>
                <p className="text-[10px] text-[var(--color-text-tertiary)] text-center font-medium">Satisfaction Rate: 98%</p>
             </div>
          </motion.div>
        </div>

        {/* FAQ Accordion Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8 flex flex-col gap-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`group relative rounded-3xl transition-all duration-500 border-2 ${
                    isOpen 
                    ? "bg-[var(--color-bg-primary)] border-[var(--color-primary-medium)] shadow-2xl scale-[1.02]" 
                    : "bg-[var(--color-bg-primary)] border-[var(--color-border)] hover:border-[var(--color-primary-medium)]/30 shadow-md hover:shadow-xl"
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full px-8 py-7 flex items-center justify-between gap-6 text-left"
                  >
                    <span className={`text-lg sm:text-xl font-bold transition-colors duration-300 ${
                      isOpen ? "text-[var(--color-primary-medium)]" : "text-[var(--color-text-primary)]"
                    }`}>
                      {faq.question}
                    </span>
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                      isOpen 
                      ? "bg-[var(--color-primary-medium)] text-white rotate-180" 
                      : "bg-[var(--color-bg-secondary)] text-[var(--color-text-tertiary)] group-hover:bg-[var(--color-primary-medium)] group-hover:text-white"
                    }`}>
                      <ChevronDown className="w-6 h-6" />
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "circOut" }}
                      >
                        <div className="px-8 pb-8">
                          <div className="h-px w-full bg-gradient-to-r from-[var(--color-primary-medium)]/30 to-transparent mb-6"></div>
                          <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed font-medium">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4"
          >
            <div className="bg-gradient-to-br from-[var(--color-primary-dark)] to-[var(--color-primary-medium)] rounded-[2.5rem] p-10 text-white shadow-2xl relative overflow-hidden group">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-[var(--color-secondary)]/20 rounded-full translate-y-1/2 -translate-x-1/2"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-8 shadow-inner">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-black mb-4 leading-tight">
                  Still Have <br />Questions?
                </h3>
                <p className="text-blue-100/80 mb-8 text-lg font-medium leading-relaxed">
                  Our expert support team is ready to help you unleash your full potential.
                </p>
                
                <motion.button
                  whileHover={{ scale: 1.05, bg: '#fff', color: '#1B3C53' }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-white text-[var(--color-primary-dark)] font-black py-5 rounded-2xl shadow-xl transition-all flex items-center justify-center gap-3 text-lg"
                >
                  Contact Support
                </motion.button>
                
                <div className="mt-8 flex items-center gap-4 text-xs font-bold text-blue-100/60 uppercase tracking-widest">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-[var(--color-primary-dark)] bg-gray-400 overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Support" />
                      </div>
                    ))}
                  </div>
                  <span>Expert team ready</span>
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
