import React from "react";
import { motion } from "framer-motion";
import { Users, TrendingUp, Award, Star } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";

const Statistics = () => {
  const stats = [
    {
      icon: Users,
      value: 50000,
      suffix: "+",
      label: "Active Users",
      color: "text-blue-500",
    },
    {
      icon: TrendingUp,
      value: 95,
      suffix: "%",
      label: "Success Rate",
      color: "text-green-500",
    },
    {
      icon: Award,
      value: 10,
      suffix: "M+",
      label: "Habits Completed",
      color: "text-purple-500",
    },
    {
      icon: Star,
      value: 4.9,
      suffix: "★",
      label: "User Rating",
      color: "text-yellow-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <section className="relative w-full py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.15) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative z-10 w-11/12 max-w-7xl mx-auto">
        {/* Header - Centered & Symmetrical */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Trusted by Thousands
            <br />
            <span className="text-blue-400">Worldwide</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Join our growing community of habit builders achieving their goals
          </p>
        </motion.div>

        {/* Stats Grid - Perfect 4-Column Symmetry */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3 },
                }}
                className="relative group"
              >
                {/* Card */}
                <div className="relative overflow-hidden rounded-2xl border border-white/10 backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all duration-300 p-8">
                  {/* Content - Centered Alignment */}
                  <div className="relative z-10 text-center">
                    {/* Icon - Centered */}
                    <div className="w-16 h-16 mx-auto mb-6 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center">
                      <IconComponent className={`w-8 h-8 ${stat.color}`} />
                    </div>

                    {/* Number - Large & Centered */}
                    <div className={`text-5xl font-bold ${stat.color} mb-2`}>
                      <AnimatedCounter
                        value={stat.value}
                        suffix={stat.suffix}
                        duration={2}
                      />
                    </div>

                    {/* Label - Centered */}
                    <p className="text-gray-300 text-sm font-medium">
                      {stat.label}
                    </p>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className={`absolute inset-0 ${stat.color} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-300`} />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Footer Note - Centered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 text-sm">
            Updated in real-time • Data from the last 30 days
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Statistics;
