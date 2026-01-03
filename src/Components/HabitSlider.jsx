import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCreative,
} from "swiper/modules";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Using placeholder images - replace with your actual imports
const p1 =
  "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=600&fit=crop";
const p2 =
  "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=600&fit=crop";
const p3 =
  "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=600&fit=crop";
const p4 =
  "https://images.unsplash.com/photo-1522844990619-4951c40f7eda?w=400&h=600&fit=crop";
const p5 =
  "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=400&h=600&fit=crop";
const p6 =
  "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=600&fit=crop";

const HabitSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  return (
    <section className="-mt-16 md:mt-0 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-950 dark:to-gray-900 w-full relative overflow-hidden">
      {/* Ambient background animation */}
      <div className="absolute inset-0 opacity-40 dark:opacity-20 pointer-events-none">
        <motion.div
          className="absolute -top-20 -left-20 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-40 -right-20 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, 50, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectCreative]}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
          renderBullet: (index, className) => {
            return `<span class="${className} !bg-white dark:!bg-gray-300 !w-2 !h-2"></span>`;
          },
        }}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        loop
        effect="creative"
        creativeEffect={{
          prev: {
            opacity: 0,
            translate: ["-20%", 0, 0],
          },
          next: {
            opacity: 0,
            translate: ["100%", 0, 0],
          },
        }}
        onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
        className="w-full shadow-2xl"
      >
        {/* SLIDE 1 - Premium Gradient Hero */}
        <SwiperSlide className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 overflow-hidden relative">
          {/* Decorative elements */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                backgroundSize: "40px 40px",
              }}
            />
          </div>

          <div className="min-h-[600px] md:min-h-[420px] lg:min-h-[480px] h-[600px] md:h-[420px] lg:h-[480px] relative z-10">
            <div className="w-11/12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
              {/* LEFT CONTENT */}
              <div className="py-2 md:py-2 lg:py-8 flex flex-col justify-center text-white order-2 md:order-1 h-full">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full mb-3 border border-white/30 w-fit shadow-lg">
                    <motion.span
                      className="w-1.5 h-1.5 bg-emerald-400 rounded-full"
                      animate={{ scale: [1, 1.3, 1], opacity: [1, 0.6, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <span className="text-xs font-semibold tracking-wide">
                      50,000+ Active Users
                    </span>
                  </div>
                </motion.div>

                <motion.h1
                  className="text-xl sm:text-2xl lg:text-3xl font-bold min-h-[50px] drop-shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  <Typewriter
                    words={[
                      "Transform Your Life",
                      "Build Better Habits",
                      "Achieve Your Goals",
                    ]}
                    loop={0}
                    cursor
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={2000}
                  />
                </motion.h1>

                <motion.p
                  className="text-sm sm:text-base opacity-95 mb-2 leading-relaxed"
                  custom={1}
                  initial="hidden"
                  animate="visible"
                  variants={fadeUpVariants}
                >
                  Build powerful routines backed by science. Track, analyze, and
                  master your daily habits.
                </motion.p>

                <motion.div
                  className="space-y-2 mb-4 text-xs sm:text-sm"
                  custom={2}
                  initial="hidden"
                  animate="visible"
                  variants={fadeUpVariants}
                >
                  {[
                    { icon: "📊", text: "Real-time progress tracking" },
                    { icon: "🔔", text: "Smart reminders" },
                    { icon: "🎯", text: "Goal milestones" },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-lg w-fit"
                      whileHover={{
                        x: 5,
                        backgroundColor: "rgba(255,255,255,0.15)",
                      }}
                    >
                      <span className="text-base">{item.icon}</span>
                      <span>{item.text}</span>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div
                  className="flex gap-3 mb-4"
                  custom={3}
                  initial="hidden"
                  animate="visible"
                  variants={fadeUpVariants}
                >
                  <motion.button
                    className="bg-white text-indigo-600 px-5 py-2.5 rounded-full text-xs font-bold shadow-xl shadow-black/20"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 20px 30px rgba(0,0,0,0.3)",
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Start Free Trial
                  </motion.button>
                  <motion.button
                    className="border-2 border-white/80 backdrop-blur-sm bg-white/10 px-5 py-2.5 rounded-full text-xs font-semibold"
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "rgba(255,255,255,0.2)",
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Watch Demo
                  </motion.button>
                </motion.div>

                <motion.div
                  className="grid grid-cols-3 gap-4 pt-4 border-t border-white/30 text-xs"
                  custom={4}
                  initial="hidden"
                  animate="visible"
                  variants={fadeUpVariants}
                >
                  {[
                    { value: "95%", label: "Success" },
                    { value: "30+", label: "Habits" },
                    { value: "4.9★", label: "Rating" },
                  ].map((stat, i) => (
                    <motion.div
                      key={i}
                      className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-2"
                      whileHover={{
                        y: -3,
                        backgroundColor: "rgba(255,255,255,0.15)",
                      }}
                    >
                      <div className="text-xl font-bold mb-0.5">
                        {stat.value}
                      </div>
                      <div className="opacity-90">{stat.label}</div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* RIGHT IMAGES */}
              <div className="hidden md:relative md:flex h-full items-center justify-center order-1 md:order-2">
                <div className="relative w-full h-full max-h-[200px] md:max-h-full">
                  <motion.div
                    className="absolute top-[8%] right-[6%] w-[140px] md:w-[45%] h-[45%] md:h-[75%] rounded-2xl overflow-hidden shadow-2xl"
                    initial={{ opacity: 0, rotate: 0, scale: 0.8 }}
                    animate={{ opacity: 1, rotate: 6, scale: 1 }}
                    transition={{
                      delay: 0.4,
                      duration: 0.8,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    whileHover={{ scale: 1.05, rotate: 8, zIndex: 20 }}
                  >
                    <img
                      src={p4}
                      className="w-full h-full object-cover"
                      alt="Feature preview"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 to-transparent" />
                  </motion.div>

                  <motion.div
                    className="absolute bottom-[12%] right-[22%] w-[150px] md:w-[48%] h-[50%] md:h-[80%] rounded-2xl overflow-hidden shadow-2xl"
                    initial={{ opacity: 0, rotate: 0, scale: 0.8 }}
                    animate={{ opacity: 1, rotate: -6, scale: 1 }}
                    transition={{
                      delay: 0.6,
                      duration: 0.8,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    whileHover={{ scale: 1.05, rotate: -8, zIndex: 20 }}
                  >
                    <img
                      src={p3}
                      className="w-full h-full object-cover"
                      alt="Dashboard view"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent" />
                  </motion.div>

                  {/* Floating badge */}
                  <motion.div
                    className="absolute top-[65%] left-[1%] bg-white/20 backdrop-blur-lg rounded-2xl px-3 py-2 border border-white/30 shadow-xl"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.6 }}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-400 to-emerald-400 flex items-center justify-center text-lg">
                        ✓
                      </div>
                      <span className="text-sm font-semibold text-white">
                        7 Day Streak
                      </span>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* SLIDE 2 - Clean Modern */}
        <SwiperSlide className="bg-white dark:bg-gray-900 overflow-hidden relative">
          {/* Subtle pattern */}
          <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 0, transparent 50%)",
                backgroundSize: "10px 10px",
              }}
            />
          </div>

          <div className="min-h-[600px] md:min-h-[420px] lg:min-h-[480px] h-[600px] md:h-[420px] lg:h-[480px] relative z-10">
            <div className="w-11/12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-6 h-full">
              <div className="hidden md:flex md:col-span-2 h-full py-6">
                <motion.div
                  className="grid grid-cols-2 grid-rows-1 auto-rows-fr gap-3 w-full h-full pt-1 pb-1"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    visible: { transition: { staggerChildren: 0.15 } },
                  }}
                >
                  {[p5, p6].map((img, i) => (
                    <motion.div
                      key={i}
                      className="relative rounded-2xl overflow-hidden shadow-xl group h-full min-h-full"
                      variants={{
                        hidden: { opacity: 0, scale: 0.9, y: 20 },
                        visible: { opacity: 1, scale: 1, y: 0 },
                      }}
                      whileHover={{ scale: 1.03, y: -5 }}
                    >
                      <img
                        src={img}
                        className="w-full h-full min-h-full object-cover"
                        alt={`Feature ${i + 1}`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              <div className="md:col-span-3 py-2 md:py-2 lg:py-8 px-4 flex flex-col justify-center h-full">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 px-4 py-2 rounded-full mb-3 border border-blue-100 dark:border-blue-800">
                    <span className="text-xs font-semibold">
                      Featured by Apple
                    </span>
                  </div>
                </motion.div>

                <motion.h1
                  className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 text-gray-900 dark:text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  <div className="min-h-[40px] sm:min-h-[50px]">
                    <Typewriter
                      words={[
                        "Smart Habit Coach",
                        "Proper Well-being",
                        "Unlock Potential",
                      ]}
                      loop={0}
                      cursor
                    />
                  </div>
                </motion.h1>

                <motion.p
                  className="text-sm sm:text-base mb-5 text-gray-600 dark:text-gray-300"
                  custom={1}
                  initial="hidden"
                  animate="visible"
                  variants={fadeUpVariants}
                >
                  Track your wellness journey with intelligent insights and
                  personalized guidance.
                </motion.p>

                <motion.div
                  className="space-y-4 md:space-y-3 text-xs sm:text-sm mb-3"
                  custom={2}
                  initial="hidden"
                  animate="visible"
                  variants={fadeUpVariants}
                >
                  {[
                    {
                      icon: "📈",
                      title: "Advanced analytics",
                      desc: "Visual tracking",
                    },
                    {
                      icon: "⚡",
                      title: "Device sync",
                      desc: "Cross-platform",
                    },
                    {
                      icon: "🏆",
                      title: "Rewards system",
                      desc: "Stay motivated",
                    },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      className="flex items-start gap-3 p-2.5 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800"
                      whileHover={{
                        x: 5,
                        backgroundColor: "rgba(59, 130, 246, 0.05)",
                      }}
                    >
                      <span className="text-2xl">{item.icon}</span>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900 dark:text-white">
                          {item.title}
                        </div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">
                          {item.desc}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div
                  className="flex gap-3"
                  custom={3}
                  initial="hidden"
                  animate="visible"
                  variants={fadeUpVariants}
                >
                  <motion.button
                    className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-6 py-3 rounded-xl text-xs font-semibold shadow-lg shadow-indigo-500/30"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Get Started
                  </motion.button>
                  <motion.button
                    className="text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800 px-6 py-3 rounded-xl text-xs font-semibold border border-gray-200 dark:border-gray-700"
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "rgba(59, 130, 246, 0.1)",
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Learn More →
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* SLIDE 3 - Dark Premium */}
        <SwiperSlide className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
          {/* Animated grid */}
          <div className="absolute inset-0 opacity-20">
            <motion.div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)",
                backgroundSize: "60px 60px",
              }}
              animate={{ backgroundPosition: ["0px 0px", "60px 60px"] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
          </div>

          <div className="min-h-[600px] md:min-h-[420px] lg:min-h-[480px] h-[600px] md:h-[420px] lg:h-[480px] relative z-10">
            <div className="w-11/12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 py-6 gap-8 md:gap-12 lg:gap-16 h-full">
              <div className="flex flex-col justify-center text-white space-y-5 md:space-y-4 h-full">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="inline-flex bg-gradient-to-r from-emerald-500/20 to-teal-500/20 backdrop-blur-md px-4 py-2 rounded-full border border-emerald-400/30">
                    <span className="text-emerald-400 font-semibold text-xs">
                      Powered by AI
                    </span>
                  </div>
                </motion.div>

                <motion.h1
                  className="text-xl sm:text-2xl lg:text-3xl font-bold min-h-[50px]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  <div className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    <Typewriter
                      words={[
                        "Build Better Habits",
                        "Create Success",
                        "Unlock Your Best",
                      ]}
                      loop={0}
                      cursor
                    />
                  </div>
                </motion.h1>

                <motion.p
                  className="text-sm sm:text-base text-gray-300 leading-relaxed"
                  custom={1}
                  initial="hidden"
                  animate="visible"
                  variants={fadeUpVariants}
                >
                  Science-backed habit tracking with personalized insights and
                  real results.
                </motion.p>

                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 text-xs"
                  custom={2}
                  initial="hidden"
                  animate="visible"
                  variants={fadeUpVariants}
                >
                  {[
                    {
                      value: "21",
                      label: "Days to Habit",
                      color: "from-blue-400 to-cyan-400",
                    },
                    {
                      value: "10x",
                      label: "Success Rate",
                      color: "from-purple-400 to-pink-400",
                    },
                  ].map((stat, i) => (
                    <motion.div
                      key={i}
                      className="bg-white/5 backdrop-blur-sm p-4 rounded-2xl border border-white/10"
                      whileHover={{
                        scale: 1.05,
                        backgroundColor: "rgba(255,255,255,0.1)",
                      }}
                    >
                      <div
                        className={`text-2xl font-bold mb-1 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                      >
                        {stat.value}
                      </div>
                      <div className="text-gray-400">{stat.label}</div>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div
                  className="flex gap-3 pt-2"
                  custom={3}
                  initial="hidden"
                  animate="visible"
                  variants={fadeUpVariants}
                >
                  <motion.button
                    className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 px-6 py-2.5 rounded-full text-xs font-semibold shadow-xl shadow-purple-500/30"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 20px 40px rgba(168, 85, 247, 0.4)",
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Start Journey
                  </motion.button>
                  <motion.button
                    className="border-2 border-white/30 backdrop-blur-sm bg-white/5 px-6 py-2.5 rounded-full text-xs font-semibold"
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "rgba(255,255,255,0.1)",
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Pricing
                  </motion.button>
                </motion.div>
              </div>

              <div className="hidden md:relative md:flex h-full justify-center items-center order-2 md:order-2">
                <div className="relative w-full h-full max-h-[220px] md:max-h-full">
                  <motion.img
                    src={p1}
                    className="absolute top-[10%] right-[8%] w-[140px] md:w-[45%] h-[45%] md:h-[55%] rounded-2xl object-cover shadow-2xl border-2 border-white/10"
                    initial={{ opacity: 0, rotate: 0, scale: 0.8 }}
                    animate={{ opacity: 1, rotate: 6, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    whileHover={{ scale: 1.05, rotate: 8, zIndex: 20 }}
                  />
                  <motion.img
                    src={p2}
                    className="absolute bottom-[4%] right-[18%] w-[160px] md:w-[50%] h-[50%] md:h-[60%] rounded-2xl object-cover shadow-2xl border-2 border-white/10"
                    initial={{ opacity: 0, rotate: 0, scale: 0.8 }}
                    animate={{ opacity: 1, rotate: -6, scale: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    whileHover={{ scale: 1.05, rotate: -8, zIndex: 20 }}
                  />

                  {/* Achievement badge */}
                  <motion.div
                    className="absolute bottom-4 left-4 bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-white/20 shadow-2xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.6 }}
                  >
                    <div className="flex items-center gap-3">
                      <motion.div
                        className="w-10 h-10 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 flex items-center justify-center text-xl"
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatDelay: 3,
                        }}
                      >
                        🏆
                      </motion.div>
                      <div>
                        <div className="text-base font-bold text-white">
                          Champion
                        </div>
                        <div className="text-xs text-gray-300">
                          Achievement Unlocked
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Custom Navigation Buttons */}
      <div className="custom-prev absolute left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 bg-white/20 backdrop-blur-md hover:bg-white/30 rounded-full flex items-center justify-center cursor-pointer transition-all border border-white/30 shadow-lg">
        <svg
          className="w-5 h-5 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </div>
      <div className="custom-next absolute right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 bg-white/20 backdrop-blur-md hover:bg-white/30 rounded-full flex items-center justify-center cursor-pointer transition-all border border-white/30 shadow-lg">
        <svg
          className="w-5 h-5 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    </section>
  );
};

export default HabitSlider;
