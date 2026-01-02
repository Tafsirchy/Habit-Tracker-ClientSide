import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";

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
    },
    {
      name: "Michael Chen",
      role: "Software Developer",
      image: "https://i.pravatar.cc/150?img=13",
      rating: 5,
      text: "The gamification features keep me motivated. Earning badges for consistency is addicting in the best way possible!",
    },
    {
      name: "Emma Williams",
      role: "Student",
      image: "https://i.pravatar.cc/150?img=5",
      rating: 5,
      text: "Simple, beautiful, and effective. Helped me build study habits that got me through finals. Highly recommend!",
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
            What Our Users Say
          </h2>
          <p className="text-[var(--color-text-secondary)] text-lg max-w-2xl mx-auto">
            Join thousands of happy users building better habits every day
          </p>
        </motion.div>

        {/* Testimonial Card - Centered */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-[var(--color-bg-secondary)] rounded-3xl shadow-2xl p-12 border border-[var(--color-border)]"
            >
              {/* Quote Icon - Centered */}
              <div className="flex justify-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-secondary-dark)] rounded-2xl flex items-center justify-center">
                  <Quote className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Stars - Centered */}
              <div className="flex justify-center gap-1 mb-8">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Testimonial Text - Centered */}
              <p className="text-[var(--color-text-primary)] text-xl leading-relaxed mb-8 italic text-center max-w-3xl mx-auto">
                "{testimonials[currentIndex].text}"
              </p>

              {/* User Info - Centered */}
              <div className="flex flex-col items-center gap-4">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full border-4 border-[var(--color-secondary)]/30"
                />
                <div className="text-center">
                  <h4 className="text-[var(--color-text-primary)] font-bold text-lg">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-[var(--color-text-secondary)] text-sm">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons - Symmetrical Positioning */}
          <button
            onClick={() => paginate(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-full bg-white dark:bg-[var(--color-bg-secondary)] shadow-lg border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-primary)] hover:bg-[var(--color-secondary)] hover:text-white transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => paginate(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 rounded-full bg-white dark:bg-[var(--color-bg-secondary)] shadow-lg border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-primary)] hover:bg-[var(--color-secondary)] hover:text-white transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Pagination Dots - Centered */}
        <div className="flex justify-center gap-2 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "w-8 bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-secondary-dark)]"
                  : "w-2 bg-[var(--color-border)]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
