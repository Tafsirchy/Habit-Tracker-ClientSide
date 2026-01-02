import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, CheckCircle, ArrowRight } from "lucide-react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

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
    <section className="relative w-full py-24 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-secondary-dark)]" />

      <div className="relative z-10 w-11/12 max-w-7xl mx-auto">
        {/* Content - Centered & Symmetrical */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Icon - Centered */}
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-md rounded-full mb-8">
            <Mail className="w-10 h-10 text-white" />
          </div>

          {/* Heading - Centered */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Join 50,000+ Habit Builders
          </h2>

          {/* Subheading - Centered */}
          <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto">
            Get weekly tips, exclusive habit templates, and motivation delivered
            to your inbox
          </p>

          {/* Form or Success Message */}
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                onSubmit={handleSubmit}
                className="max-w-xl mx-auto"
              >
                {/* Input Group - Centered */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  {/* Email Input */}
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="flex-1 px-6 py-4 bg-white text-[var(--color-text-primary)] rounded-xl shadow-lg focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                  />

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-[var(--color-primary-dark)] text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all whitespace-nowrap flex items-center justify-center gap-2"
                  >
                    Subscribe
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </div>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="max-w-xl mx-auto py-8"
              >
                {/* Success Icon */}
                <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500 rounded-full mb-4">
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>
                <p className="text-white text-2xl font-bold mb-2">
                  You're all set!
                </p>
                <p className="text-white/80">
                  Check your inbox for a confirmation email
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Benefits - Centered Grid */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 flex-shrink-0" />
              <span>Free forever</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 flex-shrink-0" />
              <span>Unsubscribe anytime</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 flex-shrink-0" />
              <span>No spam, ever</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
