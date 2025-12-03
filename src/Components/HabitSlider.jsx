import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Typewriter } from "react-simple-typewriter";
import p1 from "../assets/p1.jpeg";
import p2 from "../assets/p2.jpeg";
import p3 from "../assets/p3.jpg";
import p4 from "../assets/p4.jpg";
import p5 from "../assets/p5.jpeg";
import p6 from "../assets/p6.jpeg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HabitSlider = () => {
  return (
    <div className="w-full max-w-7xl mx-auto p-4">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 6000 }}
        loop={true}
        className="rounded-xl shadow-lg"
      >
        {/* SLIDE 1 */}
        <SwiperSlide>
          <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 rounded-3xl overflow-hidden shadow-2xl md:min-h-[550px] lg:min-h-[650px] min-h-fit">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 h-full">
              {/* LEFT CONTENT */}
              <div className="p-4 sm:p-8 md:p-10 lg:p-14 flex flex-col justify-center text-white order-2 md:order-1">
                <div className="inline-flex items-center gap-2 bg-white text-black bg-opacity-20 px-3 py-1.5 rounded-full mb-3 sm:mb-4 backdrop-blur-sm w-fit">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                  <span className="text-xs sm:text-sm font-semibold">
                    50,000+ Active Users
                  </span>
                </div>

                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight sm:mt-0 mb-3 sm:mb-2 min-h-[60px] sm:min-h-[80px] md:min-h-[100px]">
                  <Typewriter
                    words={[
                      "Transform Your Life",
                      "Build Better Habits",
                      "Achieve Your Goals",
                      "Master Your Routine",
                    ]}
                    loop={0}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={2000}
                  />
                </h1>

                <p className="text-sm sm:text-base md:text-lg opacity-90 mb-3 sm:mb-4 leading-relaxed">
                  Build powerful routines backed by science. Track, analyze, and
                  master your daily habits with our intuitive platform.
                </p>

                {/* Key Features List */}
                <div className="space-y-1 sm:space-y-3 mb-4 sm:mb-6">
                  {[
                    "📊 Real-time progress tracking & analytics",
                    "🔔 Smart reminders tailored to your schedule",
                    "🎯 Goal setting with milestone celebrations",
                  ].map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-xs sm:text-sm"
                    >
                      <span className="opacity-90">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-6">
                  <button className="bg-white text-purple-600 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold text-xs sm:text-sm hover:bg-opacity-90 transition transform hover:scale-105">
                    Start Free Trial
                  </button>
                  <button className="border-2 border-white text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold text-xs sm:text-sm hover:bg-white hover:text-purple-600 transition">
                    Watch Demo
                  </button>
                </div>

                <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-4 sm:pt-6 border-t border-white/20">
                  <div>
                    <div className="text-xl sm:text-3xl font-bold">95%</div>
                    <div className="text-xs sm:text-sm opacity-80">
                      Success Rate
                    </div>
                  </div>
                  <div>
                    <div className="text-xl sm:text-3xl font-bold">30+</div>
                    <div className="text-xs sm:text-sm opacity-80">
                      Habit Types
                    </div>
                  </div>
                  <div>
                    <div className="text-xl sm:text-3xl font-bold">4.9★</div>
                    <div className="text-xs sm:text-sm opacity-80">
                      User Rating
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT IMAGES */}
              <div className="relative h-[250px] sm:h-[300px] md:h-full p-4 sm:p-6 flex items-center justify-center order-1 md:order-2">
                {/* WRAPPER — center aligned on mobile, absolute only on md+ */}
                <div className="w-full h-full flex items-center justify-center md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
                  {/* IMAGE 1 */}
                  <div
                    className="
      w-[150px] sm:w-40 md:w-52 lg:w-80 
      h-[150px] sm:h-52 md:h-60 lg:h-96 
      rounded-2xl shadow-2xl rotate-15 hover:rotate-3 transition overflow-hidden

      /* centered for small screens */
      mx-auto

      /* positioned only for md+ */
      md:absolute md:top-[10%] md:right-[5%] lg:right-[10%]
    "
                  >
                    <img
                      src={p4}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* IMAGE 2 */}
                  <div
                    className="
      w-[140px] sm:w-48 md:w-56 lg:w-80 
      h-[140px] sm:h-48 md:h-56 lg:h-80 
      rounded-2xl shadow-2xl hover:rotate-15 transition overflow-hidden

      /* centered for small screens */
      mx-auto mt-4 sm:mt-6

      /* positioned only for md+ */
      md:absolute md:bottom-[10%] md:right-[15%] lg:right-[20%]
    "
                  >
                    <img
                      src={p3}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* SLIDE 2 */}
        <SwiperSlide>
          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl md:min-h-[550px] lg:min-h-[650px] min-h-fit">
            <div className="grid grid-cols-1 md:grid-cols-5 min-h-full">
              {/* IMAGES LEFT - Hidden on mobile, shown on md+ */}
              <div className="hidden md:block md:col-span-2 relative h-full">
                <div className="absolute inset-0 grid grid-cols-2 gap-4 p-6">
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src={p5}
                      className="w-full h-full object-cover"
                      alt=""
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-lg mt-8">
                    <img
                      src={p6}
                      className="w-full h-full object-cover"
                      alt=""
                    />
                  </div>
                </div>
              </div>

              {/* CONTENT RIGHT */}
              <div className="md:col-span-3 px-4 py-6 sm:py-8 sm:px-8 md:p-12 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-4 w-fit">
                  <span className="font-semibold text-xs sm:text-sm">
                    Featured by Apple
                  </span>
                </div>

                <h1
                  className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight 
  mb-2 sm:mb-2 min-h-0"
                >
                  <Typewriter
                    words={[
                      "Guided Self Improvement",
                      "Guide Inner Well-being",
                      "Unlock Your Full Potential",
                      "Achieve Daily Excellence",
                    ]}
                    loop={0}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={2000}
                  />
                </h1>

                <p
                  className="text-sm sm:text-base md:text-lg text-gray-600 
  mb-2 sm:mb-2 leading-relaxed"
                >
                  Track every aspect of your wellness journey with beautiful
                  insights and personalized guidance.
                </p>

                {/* Mobile Images - Only shown on mobile */}
                <div className="grid grid-cols-2 gap-3 mb-4 sm:mb-3 md:hidden">
                  <div className="rounded-2xl overflow-hidden shadow-lg h-24 sm:h-28">
                    <img
                      src={p5}
                      className="w-full h-full object-cover"
                      alt=""
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-lg h-24 sm:h-28">
                    <img
                      src={p6}
                      className="w-full h-full object-cover"
                      alt=""
                    />
                  </div>
                </div>

                {/* Key Features */}
                <div className="space-y-4 sm:space-y-2 mb-4 sm:mb-4">
                  {[
                    "📈 Advanced analytics with weekly insights",
                    "⚡ Instant sync across all your devices",
                    "🎨 Customizable themes and habit icons",
                    "🏆 Gamification with rewards & achievements",
                  ].map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-xs sm:text-sm text-gray-700"
                    >
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Bullet List */}
                <div className="space-y-3 sm:space-y-3 mb-5 sm:mb-5">
                  {[
                    ["Smart Reminders", "AI-powered notifications"],
                    ["Progress Analytics", "Visual growth tracking"],
                    ["Streak Protection", "Never lose momentum"],
                  ].map(([title, desc], i) => (
                    <div key={i} className="flex gap-2 sm:gap-3">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-green-600 font-bold text-xs sm:text-sm">
                          ✓
                        </span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 text-sm sm:text-base leading-relaxed">
                          {title}
                        </h3>
                        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                          {desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap gap-2 sm:gap-4 pb-0">
                  <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 sm:px-8 py-2 sm:py-3 rounded-xl font-semibold text-xs sm:text-sm hover:scale-105 transition">
                    Get Started Free
                  </button>
                  <button className="text-gray-700 px-4 sm:px-8 py-2 sm:py-3 rounded-xl font-semibold text-xs sm:text-sm hover:bg-gray-100 transition">
                    Learn More →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* SLIDE 3 */}
        <SwiperSlide>
          <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl overflow-hidden shadow-2xl md:min-h-[550px] lg:min-h-[650px] min-h-fit">
            <div className="grid grid-cols-1 md:grid-cols-2 h-full px-4 py-4 sm:p-8 md:p-12">
              {/* CONTENT */}
              <div className="flex flex-col justify-center text-white space-y-3 sm:space-y-6 order-2 md:order-1">
                <div className="inline-flex bg-emerald-500/20 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full w-fit">
                  <span className="text-emerald-400 font-semibold text-xs sm:text-sm">
                    Powered by AI
                  </span>
                </div>

                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent min-h-[60px] sm:min-h-[80px] md:min-h-[100px]">
                  <Typewriter
                    words={[
                      "Build Habits That Last Forever",
                      "Create Your Success Story",
                      "Transform Every Single Day",
                      "Become Your Best Self",
                    ]}
                    loop={0}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={2000}
                  />
                </h1>

                <p className="text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg">
                  Science-backed habit tracking with personalized insights.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4 py-3 sm:pt-4">
                  <div className="p-3 sm:p-4 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm">
                    <div className="text-xl sm:text-3xl font-bold text-blue-300">
                      21
                    </div>
                    <div className="text-xs sm:text-sm text-gray-400">
                      Days to form a habit
                    </div>
                  </div>
                  <div className="p-3 sm:p-4 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm">
                    <div className="text-xl sm:text-3xl font-bold text-purple-300">
                      10x
                    </div>
                    <div className="text-xs sm:text-sm text-gray-400">
                      More likely to succeed
                    </div>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap gap-2 sm:gap-4 pt-2 sm:pt-4">
                  <button className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white px-4 sm:px-8 py-2 sm:py-3 rounded-full font-semibold text-xs sm:text-sm hover:scale-105 transition">
                    Start Your Journey
                  </button>
                  <button className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 sm:px-8 py-2 sm:py-3 rounded-full font-semibold text-xs sm:text-sm hover:bg-white/20 transition">
                    View Pricing
                  </button>
                </div>

                {/* User Avatars */}
                <div className="flex items-center gap-4 pt-4">
                  <div className="flex -space-x-2">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 border-2 border-slate-900"></div>
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 border-2 border-slate-900"></div>
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-green-400 to-emerald-400 border-2 border-slate-900"></div>
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-orange-400 to-red-400 border-2 border-slate-900 flex items-center justify-center text-xs font-bold">
                      +5k
                    </div>
                  </div>
                  <div className="text-xs">
                    <div className="font-semibold text-white">
                      50,000+ Happy Users
                    </div>
                    <div className="text-gray-400">
                      Join the community today
                    </div>
                  </div>
                </div>
              </div>

              {/* IMAGES */}
              <div className="relative h-[250px] sm:h-[300px] md:h-full flex items-center justify-center order-1 md:order-2">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center">
                  <div className="absolute top-[5%] sm:top-[10%] right-[5%] sm:right-[10%] w-[120px] sm:w-40 md:w-48 lg:w-56 h-[150px] sm:h-48 md:h-56 lg:h-72 rounded-2xl shadow-2xl rotate-6 overflow-hidden border-2 border-white/10">
                    <img
                      src={p1}
                      className="w-full h-full object-cover"
                      alt=""
                    />
                  </div>
                  <div className="absolute bottom-[5%] sm:bottom-[10%] right-[15%] sm:right-[20%] w-[140px] sm:w-48 md:w-60 lg:w-72 h-[180px] sm:h-52 md:h-64 lg:h-80 rounded-2xl shadow-2xl -rotate-6 overflow-hidden border-2 border-white/10">
                    <img
                      src={p2}
                      className="w-full h-full object-cover"
                      alt=""
                    />
                  </div>
                </div>

                {/* Floating Achievement Card */}
                <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 md:bottom-8 md:left-8 bg-white/10 backdrop-blur-lg rounded-xl p-3 sm:p-4 border border-white/20 shadow-2xl max-w-[160px] sm:max-w-none">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 flex items-center justify-center">
                      <span className="text-white font-bold text-sm sm:text-base">
                        🏆
                      </span>
                    </div>
                    <div>
                      <div className="text-base sm:text-xl font-bold text-white">
                        Champion
                      </div>
                      <div className="text-xs text-gray-300">
                        Achievement Unlocked
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HabitSlider;
