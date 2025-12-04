import React from "react";
import { motion } from "framer-motion";
import { Home, Search, Frown } from "lucide-react";
import { Link } from "react-router";

const Page404 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center px-4 relative overflow-hidden">
      {/* Animated Background Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-20 left-20 w-96 h-96 bg-blue-400 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400 rounded-full blur-3xl"
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Animated 404 Number */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
          className="mb-8"
        >
          <div className="flex items-center justify-center gap-6 mb-6">
            {/* First 4 */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0 }}
              className="text-9xl md:text-[200px] font-black text-transparent bg-clip-text bg-gradient-to-br from-emerald-400 to-teal-500 drop-shadow-2xl"
            >
              4
            </motion.div>

            {/* Donut 0 */}
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="relative"
            >
              <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-pink-300 to-rose-400 shadow-2xl relative overflow-hidden">
                {/* Donut hole */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 md:w-20 md:h-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 rounded-full shadow-inner" />

                {/* Chocolate icing */}
                <div className="absolute top-0 left-0 right-0 h-16 md:h-24 bg-gradient-to-b from-amber-800 to-amber-700 rounded-t-full opacity-90" />

                {/* Sprinkles */}
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ rotate: [0, 360] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.1,
                    }}
                    className="absolute w-1.5 md:w-2 h-4 md:h-6 rounded-full"
                    style={{
                      backgroundColor: [
                        "#fff",
                        "#ffc0cb",
                        "#87ceeb",
                        "#98fb98",
                        "#ffe4b5",
                      ][i % 5],
                      top: `${20 + Math.random() * 30}%`,
                      left: `${15 + Math.random() * 70}%`,
                      transform: `rotate(${Math.random() * 360}deg)`,
                    }}
                  />
                ))}

                {/* Cute Face */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
                  <div className="w-2 h-2 bg-gray-800 rounded-full" />
                  <div className="w-2 h-2 bg-gray-800 rounded-full" />
                </div>
                <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 w-4 h-2 border-b-2 border-gray-800 rounded-full" />
              </div>

              {/* Floating sparkles around donut */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                  className="absolute w-2 h-2 bg-yellow-400 rounded-full"
                  style={{
                    top: `${-10 + Math.sin(i) * 40}%`,
                    right: `${-10 + Math.cos(i) * 40}%`,
                  }}
                />
              ))}
            </motion.div>

            {/* Second 4 */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              className="text-9xl md:text-[200px] font-black text-transparent bg-clip-text bg-gradient-to-br from-violet-400 to-purple-500 drop-shadow-2xl"
            >
              4
            </motion.div>
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-3">
            <Frown className="text-gray-600" size={40} />
            Oopsie! Something's Missing...
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            It seems like we donut find what you searched. The page you were
            looking for doesn't exist, isn't available, or was loading
            incorrectly.
          </p>
        </motion.div>

        {/* Action Button */}
        <Link to="/">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => (window.location.href = "/")}
              className="px-10 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold rounded-full shadow-xl hover:shadow-2xl transition-all flex items-center gap-3 text-lg"
            >
              <Home size={22} />
              Back To Home
            </motion.button>
          </motion.div>
        </Link>
      </div>
    </div>
  );
};

export default Page404;
