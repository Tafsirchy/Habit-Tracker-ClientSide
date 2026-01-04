import React from "react";
import { motion } from "framer-motion";
import { Target, Users, Award, Heart, TrendingUp, Shield } from "lucide-react";
import { Link } from "react-router";

const About = () => {
  const features = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "Empowering individuals to build lasting habits through science-backed methods and intuitive technology.",
      gradient: "from-[var(--color-primary-medium)] to-[var(--color-primary-light)]",
    },
    {
      icon: Users,
      title: "Community First",
      description:
        "Join 50,000+ habit builders worldwide who are transforming their lives one day at a time.",
      gradient: "from-[var(--color-secondary)] to-[var(--color-secondary-dark)]",
    },
    {
      icon: Award,
      title: "Proven Results",
      description:
        "95% success rate with our habit tracking methodology backed by behavioral psychology research.",
      gradient: "from-orange-500 to-amber-500",
    },
  ];

  const values = [
    {
      icon: Heart,
      title: "User-Centric",
      description: "Every feature is designed with your success in mind",
      color: "text-red-500",
      bg: "bg-red-500/10",
    },
    {
      icon: TrendingUp,
      title: "Continuous Growth",
      description: "We evolve with your needs and feedback",
      color: "text-green-500",
      bg: "bg-green-500/10",
    },
    {
      icon: Shield,
      title: "Privacy First",
      description: "Your data is encrypted and never shared",
      color: "text-blue-500",
      bg: "bg-blue-500/10",
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)] transition-colors duration-500 overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        {/* Animated Background Gradients */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--color-primary-medium)]/10 rounded-full blur-[120px] -mr-64 -mt-64"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[var(--color-secondary)]/10 rounded-full blur-[100px] -ml-48 -mb-48"></div>
        </div>

        <div className="relative z-10 w-11/12 max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-[var(--color-primary-medium)]/10 border border-[var(--color-primary-medium)]/20 text-[var(--color-primary-medium)] dark:text-[var(--color-primary-light)] text-xs font-black uppercase tracking-[0.2em]"
          >
            <span className="w-2 h-2 bg-[var(--color-primary-medium)] rounded-full animate-pulse"></span>
            Meet Our Mission
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl lg:text-6xl font-black text-[var(--color-text-primary)] mb-6 tracking-tighter leading-[0.9]"
          >
            Building Better <br />
            <span className="bg-gradient-to-r from-[var(--color-primary-medium)] to-[var(--color-secondary)] bg-clip-text text-transparent">
              Habits Together
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-[var(--color-text-secondary)] max-w-3xl mx-auto leading-relaxed font-medium"
          >
            We're on a mission to help you achieve your goals through consistent, 
            meaningful action. One day at a time, one habit at a time.
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 relative">
        <div className="w-11/12 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative order-2 lg:order-1"
            >
              <div className="absolute -inset-4 bg-gradient-to-tr from-[var(--color-primary-medium)] to-[var(--color-secondary)] opacity-20 blur-2xl rounded-[3rem]"></div>
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80"
                alt="Team collaboration"
                className="relative rounded-[2.5rem] shadow-2xl w-full object-cover aspect-[4/3]"
              />
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-[var(--color-bg-primary)] dark:bg-[var(--color-bg-secondary)] rounded-3xl p-6 shadow-2xl hidden md:flex flex-col justify-center border border-[var(--color-border)] dark:border-white/5">
                <span className="text-4xl font-black text-[var(--color-primary-medium)] mb-1">50K+</span>
                <span className="text-xs font-bold text-[var(--color-text-secondary)] uppercase tracking-wider leading-tight">Active Habit Builders Worldwide</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[var(--color-text-primary)] mb-8 tracking-tight">
                Our <span className="text-[var(--color-primary-medium)]">Story</span>
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed font-medium">
                  Habit Tracker was born from a simple observation: most people
                  know what they should do, but struggle with consistency. We set
                  out to create a platform that makes habit building not just
                  easy, but enjoyable.
                </p>
                <div className="h-0.5 w-20 bg-[var(--color-primary-medium)]/20 rounded-full"></div>
                <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed font-medium">
                  Since 2020, we've helped over 50,000 users build lasting habits,
                  from fitness routines to meditation practices, from learning new
                  skills to breaking old patterns. Our methodology is rooted in 
                  behavioral science and refined by real human experiences.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-[var(--color-bg-secondary)] dark:bg-[#1a1f2e]/50 border-y border-[var(--color-border)] dark:border-white/5 relative">
        <div className="w-11/12 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-black text-[var(--color-text-primary)] mb-6 tracking-tight">
              What <span className="text-[var(--color-secondary)]">Drives Us</span>
            </h2>
            <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto font-medium">
              Our core principles guide everything we do, from the features we 
              build to the way we support our community.
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
                  whileHover={{ y: -10 }}
                  className="bg-[var(--color-bg-primary)] dark:bg-[var(--color-bg-secondary)] p-10 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all duration-300 border border-[var(--color-border)] dark:border-white/5 relative overflow-hidden group"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-black text-[var(--color-text-primary)] mb-4 tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-[var(--color-text-secondary)] font-medium leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 relative">
        <div className="w-11/12 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-black text-[var(--color-text-primary)] mb-4 tracking-tight">
              Our <span className="text-[var(--color-primary-medium)]">Values</span>
            </h2>
            <div className="h-1.5 w-24 bg-[var(--color-primary-medium)]/20 mx-auto rounded-full mt-4"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center flex flex-col items-center group"
                >
                  <div className={`w-24 h-24 ${value.bg} rounded-[2rem] flex items-center justify-center mb-8 rotate-3 group-hover:rotate-6 transition-transform duration-300`}>
                    <Icon className={`w-10 h-10 ${value.color}`} />
                  </div>
                  <h3 className="text-2xl font-black text-[var(--color-text-primary)] mb-3 tracking-tight">
                    {value.title}
                  </h3>
                  <p className="text-lg text-[var(--color-text-secondary)] font-medium max-w-[250px]">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative px-4 text-white">
        <div className="w-full max-w-5xl mx-auto overflow-hidden rounded-[3rem] relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary-dark)] via-[var(--color-primary-medium)] to-[var(--color-secondary)]"></div>
          
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mt-32 -mr-32 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full blur-2xl -mb-24 -ml-24"></div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10 p-12 lg:p-20 text-center"
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-8 leading-[1.1] tracking-tighter">
              Ready to Start <br /> Your Journey?
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-xl mx-auto font-medium">
              Join 50,000+ habit builders who are transforming their lives every single day.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link to="/auth/register">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-[var(--color-primary-dark)] font-black px-10 py-5 rounded-2xl text-lg shadow-2xl hover:shadow-white/20 transition-all"
                >
                  Get Started Free
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
