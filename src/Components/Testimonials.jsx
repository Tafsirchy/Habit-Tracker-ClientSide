import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight, Sparkles, Trophy, Zap } from "lucide-react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Fitness Enthusiast",
      image: "https://i.pravatar.cc/150?img=1",
      rating: 5,
      text: "This app completely transformed my morning routine! I've maintained a 60-day streak and feel more energized than ever.",
      achievement: "60-day streak",
      color: "from-pink-500 to-rose-500",
      icon: Trophy
    },
    {
      name: "Michael Chen",
      role: "Software Developer",
      image: "https://i.pravatar.cc/150?img=13",
      rating: 5,
      text: "The gamification features keep me motivated. Earning badges for consistency is addicting in the best way possible!",
      achievement: "15 badges earned",
      color: "from-blue-500 to-cyan-500",
      icon: Sparkles
    },
    {
      name: "Emma Williams",
      role: "Student",
      image: "https://i.pravatar.cc/150?img=5",
      rating: 5,
      text: "Simple, beautiful, and effective. Helped me build study habits that got me through finals. Highly recommend!",
      achievement: "90-day streak",
      color: "from-purple-500 to-indigo-500",
      icon: Zap
    },
  ];

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let newIndex = prevIndex + newDirection;
      if (newIndex < 0) newIndex = testimonials.length - 1;
      if (newIndex >= testimonials.length) newIndex = 0;
      return newIndex;
    });
  };

  const CurrentIcon = testimonials[currentIndex].icon;

  return (
    <section className="w-full flex items-center justify-center py-20 bg-[var(--color-bg-secondary)] transition-colors duration-300 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-purple-400/30 to-pink-400/30 dark:from-purple-500/20 dark:to-pink-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-blue-400/30 to-cyan-400/30 dark:from-blue-500/20 dark:to-cyan-500/20 rounded-full blur-3xl"
        />
      </div>

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-purple-400/50 dark:bg-white/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      <div className="w-11/12 max-w-7xl mx-auto relative z-10">
        {/* Header with Animation */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="inline-block mb-6"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-2xl">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-purple-600 to-gray-900 dark:from-white dark:via-purple-200 dark:to-white mb-4">
            Success Stories
          </h2>
          <p className="text-[var(--color-text-secondary)] dark:text-purple-200 text-xl max-w-3xl mx-auto leading-relaxed">
            Join thousands transforming their lives, one habit at a time
          </p>
        </motion.div>

        {/* 3D Card Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Side Cards (Hidden on Mobile) */}
          <div className="hidden lg:block">
            <AnimatePresence mode="wait">
              <motion.div
                key={`prev-${currentIndex}`}
                initial={{ opacity: 0, x: -100, rotateY: -45 }}
                animate={{ opacity: 0.4, x: 0, rotateY: -15 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="transform perspective-1000 hover:opacity-60 transition-opacity cursor-pointer"
                onClick={() => paginate(-1)}
              >
                <div className="bg-gradient-to-br from-white/90 to-white/70 dark:from-white/10 dark:to-white/5 backdrop-blur-xl rounded-3xl p-6 border border-gray-200 dark:border-white/10 shadow-2xl h-64">
                  <div className="flex items-center gap-3 mb-4">
                    <img
                      src={testimonials[(currentIndex - 1 + testimonials.length) % testimonials.length].image}
                      alt="Previous"
                      className="w-12 h-12 rounded-xl object-cover"
                    />
                    <div>
                      <h4 className="text-[var(--color-text-primary)] font-bold text-sm">
                        {testimonials[(currentIndex - 1 + testimonials.length) % testimonials.length].name}
                      </h4>
                      <p className="text-purple-600 dark:text-purple-300 text-xs">
                        {testimonials[(currentIndex - 1 + testimonials.length) % testimonials.length].role}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-white/60 text-sm line-clamp-4">
                    "{testimonials[(currentIndex - 1 + testimonials.length) % testimonials.length].text}"
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Main Card */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
                className="relative"
              >
                {/* Glowing Border Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${testimonials[currentIndex].color} rounded-3xl blur-xl opacity-50`} />
                
                <div className="relative bg-[var(--color-bg-primary)] backdrop-blur-2xl rounded-3xl p-10 border-2 border-[var(--color-border)] shadow-2xl">
                  {/* Decorative Corner Elements */}
                  <div className={`absolute top-4 right-4 w-18 h-18 bg-gradient-to-br ${testimonials[currentIndex].color} rounded-full blur-2xl opacity-50`} />
                  <div className={`absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-br ${testimonials[currentIndex].color} rounded-full blur-2xl opacity-50`} />
                  
                  <div className="relative z-10">
                    {/* Achievement Badge */}
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.3, type: "spring", bounce: 0.6 }}
                      className="absolute -top-6 -right-6"
                    >
                      <div className={`w-20 h-20 bg-gradient-to-br ${testimonials[currentIndex].color} rounded-2xl flex items-center justify-center shadow-2xl transform rotate-12`}>
                        <CurrentIcon className="w-10 h-10 text-white" />
                      </div>
                    </motion.div>

                    {/* User Section */}
                    <div className="flex items-start gap-6 mb-8">
                      <div className="relative">
                        <motion.img
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.2, type: "spring", bounce: 0.5 }}
                          src={testimonials[currentIndex].image}
                          alt={testimonials[currentIndex].name}
                          className="w-24 h-24 rounded-2xl object-cover shadow-2xl border-4 border-white/40 dark:border-white/20"
                        />
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className={`absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-br ${testimonials[currentIndex].color} rounded-xl flex items-center justify-center shadow-xl`}
                        >
                          <Quote className="w-5 h-5 text-white" />
                        </motion.div>
                      </div>
                      
                      <div className="flex-1">
                        <h4 className="text-2xl font-black text-[var(--color-text-primary)] mb-2">
                          {testimonials[currentIndex].name}
                        </h4>
                        <p className="text-purple-600 dark:text-purple-300 mb-3">
                          {testimonials[currentIndex].role}
                        </p>
                        <div className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${testimonials[currentIndex].color} rounded-full shadow-lg`}>
                          <CurrentIcon className="w-4 h-4 text-white" />
                          <span className="text-white font-bold text-sm">
                            {testimonials[currentIndex].achievement}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Star Rating */}
                    <div className="flex gap-1 mb-6">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ delay: 0.4 + i * 0.1, type: "spring" }}
                        >
                          <Star className="w-6 h-6 fill-yellow-400 text-yellow-400 drop-shadow-lg" />
                        </motion.div>
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-[var(--color-text-primary)] text-lg leading-relaxed">
                      "{testimonials[currentIndex].text}"
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <motion.button
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => paginate(-1)}
              className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 w-14 h-14 bg-gradient-to-br ${testimonials[currentIndex].color} rounded-2xl shadow-2xl flex items-center justify-center text-white border-2 border-white/20`}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-7 h-7" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => paginate(1)}
              className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 w-14 h-14 bg-gradient-to-br ${testimonials[currentIndex].color} rounded-2xl shadow-2xl flex items-center justify-center text-white border-2 border-white/20`}
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-7 h-7" />
            </motion.button>
          </div>

          {/* Right Side Card (Hidden on Mobile) */}
          <div className="hidden lg:block">
            <AnimatePresence mode="wait">
              <motion.div
                key={`next-${currentIndex}`}
                initial={{ opacity: 0, x: 100, rotateY: 45 }}
                animate={{ opacity: 0.4, x: 0, rotateY: 15 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.5 }}
                className="transform perspective-1000 hover:opacity-60 transition-opacity cursor-pointer"
                onClick={() => paginate(1)}
              >
                <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/10 shadow-2xl h-64">
                  <div className="flex items-center gap-3 mb-4">
                    <img
                      src={testimonials[(currentIndex + 1) % testimonials.length].image}
                      alt="Next"
                      className="w-12 h-12 rounded-xl object-cover"
                    />
                    <div>
                      <h4 className="text-white font-bold text-sm">
                        {testimonials[(currentIndex + 1) % testimonials.length].name}
                      </h4>
                      <p className="text-purple-300 text-xs">
                        {testimonials[(currentIndex + 1) % testimonials.length].role}
                      </p>
                    </div>
                  </div>
                  <p className="text-white/60 text-sm line-clamp-4">
                    "{testimonials[(currentIndex + 1) % testimonials.length].text}"
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Creative Pagination */}
        <div className="flex justify-center gap-4 mt-16">
          {testimonials.map((testimonial, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className="relative group"
              aria-label={`Go to testimonial ${index + 1}`}
            >
              <div className={`w-14 h-14 rounded-2xl transition-all duration-300 ${
                index === currentIndex
                  ? `bg-gradient-to-br ${testimonial.color} shadow-2xl scale-110`
                  : "bg-white/10 backdrop-blur-sm border border-white/20"
              }`}>
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className={`w-full h-full rounded-2xl object-cover transition-all duration-300 ${
                    index === currentIndex ? "opacity-100" : "opacity-40 group-hover:opacity-70"
                  }`}
                />
              </div>
              {index === currentIndex && (
                <motion.div
                  layoutId="activeIndicator"
                  className={`absolute -bottom-3 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-gradient-to-r ${testimonial.color}`}
                />
              )}
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;