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
    <section className="w-full min-h-screen flex items-center justify-center py-16 bg-[var(--color-bg-primary)] dark:bg-[var(--color-bg-primary)] transition-colors duration-500 relative overflow-hidden">
      {/* Cinematic Background - Enhanced */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-[var(--color-primary-medium)] rounded-full blur-[150px]"
        />
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 18, repeat: Infinity }}
          className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-secondary rounded-full blur-[120px]"
        />
        
        {/* Animated Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07]"
             style={{
               backgroundImage: `linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)`,
               backgroundSize: '100px 100px'
             }}
        />
      </div>

      <div className="w-11/12 max-w-7xl mx-auto relative z-10 px-4">
        {/* Modern Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6"
        >
          <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/5 dark:bg-white/5 backdrop-blur-xl border border-white/10 rounded-full mb-8 shadow-2xl">
            <span className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></span>
            <span className="text-[10px] font-black text-[var(--color-text-primary)] uppercase tracking-[0.4em]">Validation Matrix active</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-black text-[var(--color-text-primary)] mb-6 tracking-tighter leading-[0.85]">
            Verified <br />
            <span className="bg-gradient-to-r from-[var(--color-primary-medium)] via-white to-secondary bg-clip-text text-transparent italic drop-shadow-sm">Transformations</span>
          </h2>
          <p className="text-lg text-[var(--color-text-secondary)] font-medium max-w-2xl mx-auto leading-relaxed">
            Real-time synchronization logs from elite performers across the 
            global behavioral network.
          </p>
        </motion.div>

        {/* 3D Floating Carousel Structure */}
        <div className="relative perspective-2000 py-10">
          <div className="flex items-center justify-center gap-12 lg:gap-24 relative">
            
            {/* Nav Controls - Premium Floating Glass */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 z-30 hidden xl:block">
              <motion.button
                whileHover={{ scale: 1.1, x: -10 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => paginate(-1)}
                className="w-16 h-16 bg-white/5 dark:bg-white/5 backdrop-blur-3xl border-2 border-white/10 rounded-[1.5rem] flex items-center justify-center text-[var(--color-text-primary)] shadow-2xl hover:border-[var(--color-primary-medium)]/50 transition-colors"
                aria-label="Previous Log"
              >
                <ChevronLeft size={32} strokeWidth={3} />
              </motion.button>
            </div>

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 200 : -200, rotateY: direction > 0 ? 45 : -45, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, rotateY: 0, scale: 1 }}
                exit={{ opacity: 0, x: direction > 0 ? -200 : 200, rotateY: direction > 0 ? -45 : 45, scale: 0.8 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="w-full max-w-4xl relative group"
              >
                {/* Holographic Card Container */}
                <div className="relative p-10 md:p-14 rounded-[3rem] bg-[var(--color-bg-secondary)] dark:bg-[var(--color-bg-secondary)]/40 backdrop-blur-[40px] border-2 border-white/10 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.5)] overflow-hidden">
                  
                  {/* Adaptive Background Glow */}
                  <div className={`absolute -top-1/4 -right-1/4 w-96 h-96 bg-gradient-to-br ${testimonials[currentIndex].color} opacity-20 blur-[100px] group-hover:opacity-40 transition-opacity duration-700`}></div>
                  
                  <div className="relative z-10 flex flex-col md:flex-row gap-12 items-start">
                    {/* User Profile Crypt */}
                    <div className="relative shrink-0 mx-auto md:mx-0">
                      <div className="w-24 h-24 md:w-36 md:h-36 rounded-[2rem] overflow-hidden border-4 border-white/10 shadow-2xl group-hover:rotate-6 transition-transform duration-700">
                        <img 
                          src={testimonials[currentIndex].image} 
                          alt={testimonials[currentIndex].name}
                          className="w-full h-full object-cover scale-110 group-hover:scale-125 transition-transform duration-1000"
                        />
                      </div>
                      <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className={`absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-br ${testimonials[currentIndex].color} rounded-2xl flex items-center justify-center shadow-2xl border-2 border-white/20`}
                      >
                        <Quote size={28} className="text-white" />
                      </motion.div>
                    </div>

                    {/* Testimonial Content Data */}
                    <div className="flex-1 text-center md:text-left">
                      <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-8">
                        {/* Status Chip */}
                        <div className={`px-4 py-2 bg-gradient-to-r ${testimonials[currentIndex].color} rounded-full flex items-center gap-3 shadow-xl`}>
                          <CurrentIcon size={18} className="text-white" />
                          <span className="text-[10px] font-black text-white uppercase tracking-widest">{testimonials[currentIndex].achievement}</span>
                        </div>
                        {/* Time Metadata */}
                        <span className="text-[10px] font-black text-[var(--color-text-tertiary)] uppercase tracking-widest">Protocol Sync 0x4F2A</span>
                      </div>

                      <h3 className="text-2xl md:text-3xl font-black text-[var(--color-text-primary)] mb-3 tracking-tighter leading-tight">
                        {testimonials[currentIndex].name}
                      </h3>
                      <p className="text-base md:text-lg font-black text-[var(--color-primary-medium)] mb-6 uppercase tracking-[0.2em]">{testimonials[currentIndex].role}</p>
                      
                      {/* Premium Quote Block */}
                      <div className="relative">
                        <div className="absolute -left-6 -top-2 text-6xl text-white/5 font-serif">"</div>
                        <p className="text-lg md:text-xl text-[var(--color-text-secondary)] font-medium leading-relaxed italic pr-4">
                          {testimonials[currentIndex].text}
                        </p>
                      </div>

                      {/* Dynamic Rating */}
                      <div className="flex items-center justify-center md:justify-start gap-3 mt-12 bg-black/5 dark:bg-white/5 backdrop-blur-md w-fit px-6 py-2 rounded-2xl border border-white/5">
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={20} className={i < testimonials[currentIndex].rating ? "fill-yellow-500 text-yellow-500" : "text-white/20"} />
                          ))}
                        </div>
                        <span className="text-sm font-black text-[var(--color-text-primary)] uppercase tracking-widest">Efficiency 5.0</span>
                      </div>
                    </div>
                  </div>

                  {/* Internal Design Details */}
                  <div className="absolute bottom-6 right-10 flex gap-4 opacity-10">
                    <Sparkles size={40} className="text-[var(--color-primary-medium)]" />
                    <Trophy size={40} className="text-secondary" />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="absolute right-0 top-1/2 -translate-y-1/2 z-30 hidden xl:block">
              <motion.button
                whileHover={{ scale: 1.1, x: 10 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => paginate(1)}
                className="w-16 h-16 bg-white/5 dark:bg-white/5 backdrop-blur-3xl border-2 border-white/10 rounded-[1.5rem] flex items-center justify-center text-[var(--color-text-primary)] shadow-2xl hover:border-[var(--color-primary-medium)]/50 transition-colors"
                aria-label="Next Log"
              >
                <ChevronRight size={32} strokeWidth={3} />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Global Progress Indicators */}
        <div className="flex justify-center flex-wrap gap-6 mt-10">
          {testimonials.map((t, index) => (
            <button
              key={index}
              onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
              }}
              className="group relative"
            >
              <div className={`w-20 h-20 rounded-[2rem] p-1 transition-all duration-500 overflow-hidden ${
                index === currentIndex ? `bg-gradient-to-br ${t.color} scale-125 shadow-2xl rotate-12` : "bg-white/5 dark:bg-white/5 hover:scale-110"
              }`}>
                <img 
                  src={t.image} 
                  alt={t.name}
                  className={`w-full h-full object-cover rounded-[1.8rem] transition-all duration-500 ${
                    index === currentIndex ? "opacity-100" : "opacity-30 group-hover:opacity-60 grayscale"
                  }`}
                />
              </div>
              {index === currentIndex && (
                <motion.div
                  layoutId="activeLog"
                  className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-4 h-1 bg-[var(--color-primary-medium)] rounded-full"
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;