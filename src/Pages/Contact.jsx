import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Clock, MessageCircle } from "lucide-react";
import { Link } from "react-router";
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
      gradient: "from-[var(--color-primary-medium)] to-[var(--color-primary-light)]",
      glow: "var(--color-primary-light)",
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "470-686-9003",
      description: "Mon-Fri, 9AM-6PM EST",
      gradient: "from-[var(--color-secondary)] to-[var(--color-secondary-light)]",
      glow: "var(--color-secondary)",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "Uttara, Dhaka",
      description: "House 99, Sector-11",
      gradient: "from-orange-500 to-amber-400",
      glow: "#f59e0b",
    },
  ];

  const floatingElements = [
    { size: "w-64 h-64", color: "bg-[var(--color-primary-medium)]/10", top: "10%", left: "5%", delay: 0 },
    { size: "w-96 h-96", color: "bg-[var(--color-secondary)]/10", top: "60%", right: "5%", delay: 2 },
    { size: "w-48 h-48", color: "bg-pink-400/10", bottom: "10%", left: "15%", delay: 1 },
    { size: "w-80 h-80", color: "bg-cyan-400/10", top: "20%", right: "15%", delay: 3 },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-[var(--color-bg-primary)] transition-colors duration-500">
      <ToastContainer position="top-right" theme="colored" />

      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {floatingElements.map((el, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full blur-3xl ${el.color} ${el.size}`}
            style={{
              top: el.top,
              left: el.left,
              right: el.right,
              bottom: el.bottom,
            }}
            animate={{
              y: [0, -30, 0],
              scale: [1, 1.1, 1],
              rotate: [0, 45, 0],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: el.delay,
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative pt-24 pb-12 overflow-hidden">
        <div className="w-11/12 max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-[var(--color-primary-medium)]/10 border border-[var(--color-primary-medium)]/20 text-[var(--color-primary-medium)] dark:text-[var(--color-primary-light)] text-xs font-black uppercase tracking-[0.2em]"
          >
            <span className="w-2 h-2 bg-[var(--color-primary-medium)] rounded-full animate-pulse"></span>
            Contact Support
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl lg:text-6xl font-black text-[var(--color-text-primary)] mb-4 tracking-tighter leading-[0.9]"
          >
            Let's Start a <br />
            <span className="bg-gradient-to-r from-[var(--color-primary-medium)] to-[var(--color-secondary)] bg-clip-text text-transparent">
              Conversation
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto leading-relaxed font-medium"
          >
            Have a question or just want to say hi? We'd love to hear from you.
            Our team is here to help you achieve your goals.
          </motion.p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 relative z-10">
        <div className="w-11/12 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group relative"
                >
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-2xl -z-10 rounded-3xl"
                    style={{ backgroundColor: info.glow }}
                  />
                  <div className="bg-[var(--color-bg-primary)] dark:bg-[var(--color-bg-secondary)] backdrop-blur-xl p-8 rounded-[2.5rem] border border-[var(--color-border)] dark:border-white/5 shadow-xl group-hover:shadow-2xl transition-all duration-300">
                    <div className={`w-14 h-14 bg-gradient-to-br ${info.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-black text-[var(--color-text-primary)] mb-3 tracking-tight">
                      {info.title}
                    </h3>
                    <p className="text-lg text-[var(--color-primary-medium)] dark:text-[var(--color-primary-light)] font-bold mb-2 break-words">
                      {info.content}
                    </p>
                    <p className="text-[var(--color-text-secondary)] font-medium leading-relaxed">
                      {info.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 lg:py-24 relative z-10">
        <div className="w-11/12 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-20 items-stretch">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3 bg-[var(--color-bg-primary)] dark:bg-[var(--color-bg-secondary)] backdrop-blur-2xl p-8 md:p-12 rounded-[3rem] border border-[var(--color-border)] dark:border-white/5 shadow-2xl relative overflow-hidden"
            >
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-black text-[var(--color-text-primary)] mb-4 tracking-tight">
                  Send us a Message
                </h2>
                <p className="text-[var(--color-text-secondary)] mb-10 text-lg font-medium leading-relaxed">
                  We'll get back to you within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-[var(--color-text-primary)] ml-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-4 bg-[var(--color-bg-secondary)] dark:bg-[var(--color-bg-tertiary)]/50 border border-[var(--color-border)] dark:border-white/10 rounded-2xl focus:ring-4 focus:ring-[var(--color-primary-medium)]/20 focus:border-[var(--color-primary-medium)] outline-none transition-all duration-300 text-[var(--color-text-primary)] placeholder:text-[var(--color-text-tertiary)] font-medium"
                        placeholder="John Doe"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-[var(--color-text-primary)] ml-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-4 bg-[var(--color-bg-secondary)] dark:bg-[var(--color-bg-tertiary)]/50 border border-[var(--color-border)] dark:border-white/10 rounded-2xl focus:ring-4 focus:ring-[var(--color-primary-medium)]/20 focus:border-[var(--color-primary-medium)] outline-none transition-all duration-300 text-[var(--color-text-primary)] placeholder:text-[var(--color-text-tertiary)] font-medium"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[var(--color-text-primary)] ml-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 bg-[var(--color-bg-secondary)] dark:bg-[var(--color-bg-tertiary)]/50 border border-[var(--color-border)] dark:border-white/10 rounded-2xl focus:ring-4 focus:ring-[var(--color-primary-medium)]/20 focus:border-[var(--color-primary-medium)] outline-none transition-all duration-300 text-[var(--color-text-primary)] placeholder:text-[var(--color-text-tertiary)] font-medium"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[var(--color-text-primary)] ml-1">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="4"
                      className="w-full px-6 py-4 bg-[var(--color-bg-secondary)] dark:bg-[var(--color-bg-tertiary)]/50 border border-[var(--color-border)] dark:border-white/10 rounded-2xl focus:ring-4 focus:ring-[var(--color-primary-medium)]/20 focus:border-[var(--color-primary-medium)] outline-none transition-all duration-300 text-[var(--color-text-primary)] placeholder:text-[var(--color-text-tertiary)] font-medium resize-none text-base"
                      placeholder="Write your message here..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-[var(--color-primary-dark)] to-[var(--color-primary-medium)] hover:from-[var(--color-primary-medium)] hover:to-[var(--color-primary-dark)] text-white font-black py-4 rounded-2xl shadow-xl shadow-[var(--color-primary-medium)]/20 transition-all flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed group text-lg"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Sidebar Info */}
            <div className="lg:col-span-2 flex flex-col gap-8">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-[var(--color-bg-primary)] dark:bg-[var(--color-bg-secondary)] p-8 rounded-[2.5rem] border border-[var(--color-border)] dark:border-white/5 shadow-xl group hover:shadow-2xl transition-all duration-300 flex-1"
              >
                <div className="w-12 h-12 bg-[var(--color-primary-medium)]/10 rounded-xl flex items-center justify-center mb-6 text-[var(--color-primary-medium)] group-hover:bg-[var(--color-primary-medium)] group-hover:text-white transition-colors duration-300">
                  <Clock className="w-6 h-6 outline-none" />
                </div>
                <h3 className="text-2xl font-black text-[var(--color-text-primary)] mb-6 tracking-tight">
                  Business Hours
                </h3>
                <div className="space-y-5">
                  {[
                    { day: "Monday - Friday", time: "9:00 AM - 6:00 PM" },
                    { day: "Saturday", time: "10:00 AM - 4:00 PM" },
                    { day: "Sunday", time: "Closed", closed: true },
                  ].map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center py-2 border-b border-[var(--color-border)] dark:border-white/5 last:border-0">
                      <span className="text-[var(--color-text-secondary)] font-bold">{item.day}</span>
                      <span className={`font-black ${item.closed ? "text-red-500" : "text-[var(--color-primary-medium)] dark:text-[var(--color-primary-light)]"}`}>
                        {item.time}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-[var(--color-primary-dark)] to-[var(--color-primary-medium)] p-8 rounded-[2.5rem] text-white shadow-xl relative overflow-hidden group h-full flex flex-col justify-center"
              >
                <div className="absolute top-0 right-0 -translate-y-4 translate-x-4 w-32 h-32 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
                <div className="relative z-10">
                  <MessageCircle className="w-12 h-12 mb-6 opacity-80" />
                  <h3 className="text-2xl font-black mb-3 tracking-tight">Quick Help?</h3>
                  <p className="text-white/80 mb-8 text-lg font-medium leading-relaxed">
                    Check out our frequently asked questions for instant answers.
                  </p>
                  <Link to="/help">
                    <motion.button
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-2 font-black text-white group text-lg"
                    >
                      Visit FAQ Center 
                      <Send className="w-5 h-5 rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
