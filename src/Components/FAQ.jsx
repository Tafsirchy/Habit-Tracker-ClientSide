import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, Sparkles } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How do I create a new habit?",
      answer:
        "Creating a new habit is easy! Simply click on the 'Add Habit' button from your dashboard, fill in the habit details (name, category, reminder time), and click save. You can also add a custom image and description to make it more personal.",
    },
    {
      question: "Can I track multiple habits at once?",
      answer:
        "Absolutely! You can track as many habits as you want simultaneously. Our dashboard provides a clear overview of all your habits, their streaks, and completion rates. We recommend starting with 2-3 habits and gradually adding more as you build consistency.",
    },
    {
      question: "What happens if I miss a day?",
      answer:
        "Missing a day breaks your current streak, but don't worry! The app will save your longest streak as a personal record. You can restart immediately and work towards beating your previous record. Remember, building habits is about progress, not perfection.",
    },
    {
      question: "How do reminders work?",
      answer:
        "When you create a habit, you can set a specific reminder time. The app will send you a notification at that time each day. You can customize reminder times for each habit individually, and you can enable or disable reminders anytime from your settings.",
    },
    {
      question: "Is my data private and secure?",
      answer:
        "Yes! We take your privacy seriously. All your data is encrypted and stored securely. We never share your personal information with third parties. You have full control over your data and can export or delete it anytime from your account settings.",
    },
    {
      question: "Can I use the app offline?",
      answer:
        "The app requires an internet connection for syncing your data across devices. However, you can mark habits as complete offline, and the app will sync your progress automatically when you reconnect to the internet.",
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-20">
      <div className="w-11/12 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16 relative"
        >
          {/* Floating Question Marks */}
          <motion.div
            animate={{
              y: [0, -10, 0],
              rotate: [0, 10, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -top-4 left-1/4 text-[var(--color-secondary)]"
          >
            <HelpCircle className="w-8 h-8" />
          </motion.div>
          <motion.div
            animate={{
              y: [0, -15, 0],
              rotate: [0, -10, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute -top-2 right-1/4 text-[var(--color-secondary)]"
          >
            <HelpCircle className="w-6 h-6" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-text-primary)] mb-4"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-[var(--color-text-secondary)] text-lg"
          >
            Everything you need to know about building better habits
          </motion.p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-4"
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{
                  scale: 1.01,
                  transition: { duration: 0.2 },
                }}
                className="bg-white dark:bg-[var(--color-bg-secondary)] rounded-xl overflow-hidden border border-[var(--color-border)] shadow-sm hover:shadow-lg transition-shadow"
              >
                {/* Question Button */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left group"
                >
                  <div className="flex items-center gap-4 flex-1">
                    {/* Number Badge */}
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${
                        isOpen
                          ? "bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-secondary-dark)] text-white"
                          : "bg-[var(--color-bg-tertiary)] text-[var(--color-text-secondary)]"
                      }`}
                    >
                      {index + 1}
                    </motion.div>

                    {/* Question Text */}
                    <h3
                      className={`font-semibold text-base sm:text-lg transition-colors ${
                        isOpen
                          ? "text-[var(--color-secondary)]"
                          : "text-[var(--color-text-primary)] group-hover:text-[var(--color-secondary)]"
                      }`}
                    >
                      {faq.question}
                    </h3>
                  </div>

                  {/* Chevron Icon */}
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className={`flex-shrink-0 ${
                      isOpen
                        ? "text-[var(--color-secondary)]"
                        : "text-[var(--color-text-tertiary)]"
                    }`}
                  >
                    <ChevronDown className="w-6 h-6" />
                  </motion.div>
                </button>

                {/* Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                        transition: {
                          height: {
                            duration: 0.4,
                            ease: "easeInOut",
                          },
                          opacity: {
                            duration: 0.3,
                            delay: 0.1,
                          },
                        },
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                        transition: {
                          height: {
                            duration: 0.4,
                            ease: "easeInOut",
                          },
                          opacity: {
                            duration: 0.2,
                          },
                        },
                      }}
                      className="overflow-hidden"
                    >
                      <motion.div
                        initial={{ y: -10 }}
                        animate={{ y: 0 }}
                        exit={{ y: -10 }}
                        className="px-6 pb-6 pl-20"
                      >
                        <p className="text-[var(--color-text-secondary)] leading-relaxed">
                          {faq.answer}
                        </p>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Bottom Border Animation */}
                {isOpen && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    exit={{ scaleX: 0 }}
                    transition={{ duration: 0.4 }}
                    className="h-1 bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-secondary-dark)] origin-left"
                  />
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Still Have Questions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-12 p-8 bg-gradient-to-br from-[var(--color-secondary)]/10 to-[var(--color-secondary)]/5 rounded-2xl border border-[var(--color-secondary)]/20"
        >
          <Sparkles className="w-8 h-8 text-[var(--color-secondary)] mx-auto mb-4" />
          <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-2">
            Still have questions?
          </h3>
          <p className="text-[var(--color-text-secondary)] mb-4">
            We're here to help! Reach out to our support team anytime.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-secondary-dark)] text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            Contact Support
            <HelpCircle className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
