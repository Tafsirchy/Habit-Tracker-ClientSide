import React from "react";
import { motion } from "framer-motion";
import {
  Dumbbell,
  Sun,
  BookOpen,
  Moon,
  Briefcase,
  Heart,
} from "lucide-react";

const FeaturedCategories = () => {
  const categories = [
    {
      name: "Fitness",
      icon: Dumbbell,
      count: "1,234",
      color: "text-green-500",
      bg: "bg-green-500/10",
    },
    {
      name: "Morning",
      icon: Sun,
      count: "987",
      color: "text-yellow-500",
      bg: "bg-yellow-500/10",
    },
    {
      name: "Study",
      icon: BookOpen,
      count: "856",
      color: "text-purple-500",
      bg: "bg-purple-500/10",
    },
    {
      name: "Evening",
      icon: Moon,
      count: "743",
      color: "text-blue-500",
      bg: "bg-blue-500/10",
    },
    {
      name: "Work",
      icon: Briefcase,
      count: "1,102",
      color: "text-red-500",
      bg: "bg-red-500/10",
    },
    {
      name: "Health",
      icon: Heart,
      count: "621",
      color: "text-pink-500",
      bg: "bg-pink-500/10",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section className="w-full py-20">
      <div className="w-11/12 max-w-7xl mx-auto">
        {/* Header - Centered */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-text-primary)] mb-4">
            Featured Categories
          </h2>
          <p className="text-[var(--color-text-secondary)] text-lg max-w-2xl mx-auto">
            Explore popular habit categories and find the perfect fit for your
            goals
          </p>
        </motion.div>

        {/* Categories Grid - Symmetrical 3x2 */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={category.name}
                variants={cardVariants}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3 },
                }}
                className="group cursor-pointer"
              >
                <div
                  className={`relative overflow-hidden rounded-2xl ${category.bg} backdrop-blur-sm border border-[var(--color-border)] p-8 transition-all duration-300 hover:shadow-xl`}
                >
                  {/* Content - Left Aligned but Structured */}
                  <div className="flex items-start gap-6">
                    {/* Icon Container - Fixed Size */}
                    <div className={`w-16 h-16 rounded-2xl ${category.color.replace('text-', 'bg-')} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>

                    {/* Text Content */}
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-2">
                        {category.name}
                      </h3>
                      <div className="flex items-baseline gap-2">
                        <span className={`text-3xl font-bold ${category.color}`}>
                          {category.count}
                        </span>
                        <span className="text-[var(--color-text-secondary)] text-sm">
                          habits
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mt-6 h-2 bg-[var(--color-bg-tertiary)] rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "75%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className={`h-full ${category.color.replace('text-', 'bg-')}`}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
