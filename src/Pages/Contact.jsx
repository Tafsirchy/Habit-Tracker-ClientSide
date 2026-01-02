import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Clock, MessageCircle } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      toast.success("Message sent successfully! We'll get back to you soon.");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "habittracker@gmail.com",
      description: "We'll respond within 24 hours",
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "470-686-9003",
      description: "Mon-Fri, 9AM-6PM EST",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "House 99, Sonargaon Janapath Road",
      description: "Sector-11, Uttara, Dhaka",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-[#1a1f2e] dark:to-[#242938]">
      <ToastContainer />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 dark:from-[#234C6A] dark:to-[#2d3748]" />

        <div className="relative z-10 w-11/12 max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Get In Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/90 max-w-2xl mx-auto"
          >
            Have questions? We'd love to hear from you. Send us a message and
            we'll respond as soon as possible.
          </motion.p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 relative z-10 bg-[var(--color-bg-secondary)] dark:bg-[var(--color-bg-secondary)]">
        <div className="w-11/12 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="bg-[var(--color-bg-primary)] p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all border border-[var(--color-border)]"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-2">
                    {info.title}
                  </h3>
                  <p className="text-lg text-[var(--color-text-primary)] font-semibold mb-1">
                    {info.content}
                  </p>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    {info.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-[var(--color-bg-secondary)] dark:bg-[var(--color-bg-secondary)]">
        <div className="w-11/12 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] mb-6">
                Send Us a Message
              </h2>
              <p className="text-lg text-[var(--color-text-secondary)] mb-8">
                Fill out the form below and we'll get back to you within 24
                hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-[var(--color-text-primary)] mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-[var(--color-border)] bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] rounded-xl focus:border-[var(--color-primary-dark)] focus:ring-4 focus:ring-[var(--color-primary-dark)]/20 outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[var(--color-text-primary)] dark:text-[var(--color-text-primary)] mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-[var(--color-border)] bg-[var(--color-bg-primary)] dark:border-[var(--color-border)] dark:bg-[var(--color-bg-secondary)] dark:text-[var(--color-text-primary)] rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[var(--color-text-primary)] dark:text-[var(--color-text-primary)] mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-[var(--color-border)] bg-[var(--color-bg-primary)] dark:border-[var(--color-border)] dark:bg-[var(--color-bg-secondary)] dark:text-[var(--color-text-primary)] rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 outline-none transition-all"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[var(--color-text-primary)] dark:text-[var(--color-text-primary)] mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 border-2 border-[var(--color-border)] bg-[var(--color-bg-primary)] dark:border-[var(--color-border)] dark:bg-[var(--color-bg-secondary)] dark:text-[var(--color-text-primary)] rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 outline-none transition-all resize-none"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-3"
            >
              <div className="bg-[var(--color-bg-primary)] p-8 rounded-2xl border border-[var(--color-border)]">
                <Clock className="w-12 h-12 text-[var(--color-primary-dark)] mb-3" />
                <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-3">
                  Business Hours
                </h3>
                <div className="space-y-2 text-[var(--color-text-secondary)]">
                  <p>
                    <strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM
                  </p>
                  <p>
                    <strong>Saturday:</strong> 10:00 AM - 4:00 PM
                  </p>
                  <p>
                    <strong>Sunday:</strong> Closed
                  </p>
                </div>
              </div>

              <div className="bg-[var(--color-bg-primary)] p-8 rounded-2xl border border-[var(--color-border)]">
                <MessageCircle className="w-12 h-12 text-[var(--color-primary-dark)] dark:text-[var(--color-secondary)] mb-3" />
                <h3 className="text-2xl font-bold text-[var(--color-text-primary)] dark:text-[var(--color-text-primary)] mb-3">
                  Quick Response
                </h3>
                <p className="text-[var(--color-text-secondary)] dark:text-[var(--color-text-secondary)] mb-3">
                  We typically respond to all inquiries within 24 hours during
                  business days.
                </p>
                <p className="text-sm text-[var(--color-text-tertiary)] dark:text-[var(--color-text-tertiary)]">
                  For urgent matters, please call us directly.
                </p>
              </div>

              <div className="bg-[var(--color-bg-primary)] p-8 rounded-2xl shadow-lg border border-[var(--color-border)]">
                <h3 className="text-2xl font-bold text-[var(--color-text-primary)] dark:text-[var(--color-text-primary)] mb-4">
                  FAQ
                </h3>
                <p className="text-[var(--color-text-secondary)] dark:text-[var(--color-text-secondary)] mb-3">
                  Before reaching out, check our FAQ section for quick answers
                  to common questions.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-[var(--color-primary-dark)] dark:text-[var(--color-secondary)] font-semibold hover:underline"
                >
                  Visit FAQ →
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
