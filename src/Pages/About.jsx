import React from "react";
import { motion } from "framer-motion";
import { Target, Users, Award, Heart, TrendingUp, Shield } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "Empowering individuals to build lasting habits through science-backed methods and intuitive technology.",
    },
    {
      icon: Users,
      title: "Community First",
      description:
        "Join 50,000+ habit builders worldwide who are transforming their lives one day at a time.",
    },
    {
      icon: Award,
      title: "Proven Results",
      description:
        "95% success rate with our habit tracking methodology backed by behavioral psychology research.",
    },
  ];

  const values = [
    {
      icon: Heart,
      title: "User-Centric",
      description: "Every feature is designed with your success in mind",
    },
    {
      icon: TrendingUp,
      title: "Continuous Growth",
      description: "We evolve with your needs and feedback",
    },
    {
      icon: Shield,
      title: "Privacy First",
      description: "Your data is encrypted and never shared",
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--color-bg-secondary)]">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-pink-700 dark:from-[#1a1f2e] dark:via-[#234C6A] dark:to-[#2d3748] opacity-90" />

        <div className="relative z-10 w-11/12 max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            About Habit Tracker
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/90 max-w-3xl mx-auto"
          >
            Building better habits, one day at a time. We're on a mission to
            help you achieve your goals through consistent, meaningful action.
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="w-11/12 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-text-primary)] mb-6">
                Our Story
              </h2>
              <p className="text-lg text-[var(--color-text-secondary)] mb-4 leading-relaxed">
                Habit Tracker was born from a simple observation: most people
                know what they should do, but struggle with consistency. We set
                out to create a platform that makes habit building not just
                easy, but enjoyable.
              </p>
              <p className="text-lg text-[var(--color-text-secondary)] dark:text-[var(--color-text-secondary)] leading-relaxed">
                Since 2020, we've helped over 50,000 users build lasting habits,
                from fitness routines to meditation practices, from learning new
                skills to breaking old patterns.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80"
                alt="Team collaboration"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-[var(--color-bg-primary)] dark:bg-[var(--color-bg-secondary)]">
        <div className="w-11/12 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] mb-4">
              What Drives Us
            </h2>
            <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
              Our core principles guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="bg-[var(--color-bg-primary)] p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-[var(--color-border)]"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[var(--color-text-primary)] dark:text-[var(--color-text-primary)] mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-[var(--color-text-secondary)] dark:text-[var(--color-text-secondary)] leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-[var(--color-bg-secondary)] dark:bg-[var(--color-bg-secondary)]">
        <div className="w-11/12 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] dark:text-[var(--color-text-primary)] mb-4">
              Our Values
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-6"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--color-text-primary)] dark:text-[var(--color-text-primary)] mb-2">
                    {value.title}
                  </h3>
                  <p className="text-[var(--color-text-secondary)] dark:text-[var(--color-text-secondary)]">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="w-11/12 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join thousands of users who are building better habits every day
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 font-bold px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transition-all"
            >
              Get Started Free
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
