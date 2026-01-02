import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  HelpCircle,
  ChevronDown,
  ChevronUp,
  BookOpen,
  Video,
  MessageCircle,
  Search,
} from "lucide-react";

const Help = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      question: "How do I create my first habit?",
      answer:
        "Click on 'Add Habit' in your dashboard, fill in the habit details including name, category, frequency, and start date. You can also add a custom icon and description to personalize your habit.",
    },
    {
      question: "Can I track multiple habits at once?",
      answer:
        "Yes! You can track unlimited habits simultaneously. Organize them by categories like Fitness, Study, Health, etc. for better management.",
    },
    {
      question: "How does the streak system work?",
      answer:
        "A streak is maintained by completing your habit consistently. Each day you complete your habit, your streak increases by 1. Missing a day will reset your streak to 0.",
    },
    {
      question: "Can I edit or delete a habit?",
      answer:
        "Absolutely! Go to 'My Habits', find the habit you want to modify, and click the edit or delete button. You can update any details or remove the habit entirely.",
    },
    {
      question: "Is my data secure and private?",
      answer:
        "Yes, we take security seriously. All your data is encrypted and stored securely. We never share your personal information with third parties.",
    },
    {
      question: "How do I earn badges and rewards?",
      answer:
        "Badges are earned automatically when you hit milestones like 7-day streaks, 30-day streaks, or completing specific challenges. Check your profile to see all your achievements.",
    },
    {
      question: "Can I use Habit Tracker offline?",
      answer:
        "Currently, Habit Tracker requires an internet connection to sync your data across devices. We're working on offline mode for future updates.",
    },
    {
      question: "How do I reset my password?",
      answer:
        "Click on 'Forgot Password' on the login page, enter your email, and we'll send you a password reset link. Follow the instructions in the email to create a new password.",
    },
  ];

  const resources = [
    {
      icon: BookOpen,
      title: "Documentation",
      description: "Comprehensive guides and tutorials",
      link: "#",
    },
    {
      icon: Video,
      title: "Video Tutorials",
      description: "Step-by-step video guides",
      link: "#",
    },
    {
      icon: MessageCircle,
      title: "Community Forum",
      description: "Connect with other users",
      link: "#",
    },
  ];

  const filteredFAQs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-[#1a1f2e] dark:to-[#242938]">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-600 to-blue-600 dark:from-[#234C6A] dark:to-[#2d3748]" />

        <div className="relative z-10 w-11/12 max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <HelpCircle className="w-10 h-10 text-white" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            How Can We Help?
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/90 max-w-2xl mx-auto mb-8"
          >
            Find answers to common questions or reach out to our support team
          </motion.p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="max-w-2xl mx-auto"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for help..."
                className="w-full pl-14 pr-6 py-4 bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] rounded-2xl shadow-xl border border-[var(--color-border)] focus:outline-none focus:ring-4 focus:ring-[var(--color-primary-dark)]/30 transition-all text-lg"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-12 relative z-10 bg-[var(--color-bg-secondary)] dark:bg-[var(--color-bg-secondary)]">
        <div className="w-11/12 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {resources.map((resource, index) => {
              const Icon = resource.icon;
              return (
                <motion.a
                  key={index}
                  href={resource.link}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="bg-[var(--color-bg-primary)] p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all border border-[var(--color-border)] group cursor-pointer"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--color-text-primary)] dark:text-[var(--color-text-primary)] mb-2">
                    {resource.title}
                  </h3>
                  <p className="text-[var(--color-text-secondary)] dark:text-[var(--color-text-secondary)]">
                    {resource.description}
                  </p>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[var(--color-bg-secondary)] dark:bg-[var(--color-bg-secondary)]">
        <div className="w-11/12 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] dark:text-[var(--color-text-primary)] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-[var(--color-text-secondary)] dark:text-[var(--color-text-secondary)]">
              Quick answers to questions you may have
            </p>
          </motion.div>

          <div className="space-y-4">
            {filteredFAQs.length > 0 ? (
              filteredFAQs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-[var(--color-bg-primary)] dark:bg-[var(--color-bg-tertiary)] rounded-2xl shadow-lg border border-[var(--color-border)] dark:border-[var(--color-border)] overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 dark:hover:bg-[var(--color-bg-tertiary)] transition-colors"
                  >
                    <span className="text-lg font-semibold text-[var(--color-text-primary)] dark:text-[var(--color-text-primary)] pr-4">
                      {faq.question}
                    </span>
                    {openFAQ === index ? (
                      <ChevronUp className="w-6 h-6 text-[var(--color-primary-dark)] dark:text-[var(--color-secondary)] flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-[var(--color-text-tertiary)] flex-shrink-0" />
                    )}
                  </button>

                  {openFAQ === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-5"
                    >
                      <p className="text-[var(--color-text-secondary)] dark:text-[var(--color-text-secondary)] leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </motion.div>
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-[var(--color-text-tertiary)] dark:text-[var(--color-text-tertiary)] text-lg">
                  No results found for "{searchQuery}"
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact Support Section */}
      <section className="py-20 bg-gradient-to-r from-[var(--color-primary-dark)] to-[var(--color-primary-medium)] dark:from-[#234C6A] dark:to-[#2d3748]">
        <div className="w-11/12 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Still Need Help?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Our support team is here to assist you
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 font-bold px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transition-all"
              >
                Contact Support
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[var(--color-secondary)]/20 backdrop-blur-md text-white font-bold px-8 py-4 rounded-full text-lg border-2 border-[var(--color-secondary)] hover:bg-[var(--color-secondary)]/30 transition-all"
              >
                Live Chat
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Help;
