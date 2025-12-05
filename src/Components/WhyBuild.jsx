import React from "react";
import { motion } from "framer-motion";
import { FaBrain, FaClock, FaRocket, FaHandsHelping } from "react-icons/fa";

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.92,
    filter: "blur(4px)",
  },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      delay: i * 0.18,
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1], 
    },
  }),
};

const WhyBuild = () => {
  return (
    <section className="w-11/12 mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-[#E3E3E3] hover:bg-white transition-color duration-1000">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl pb-6 sm:text-4xl lg:text-5xl font-bold"
            style={{ color: "#1B3C53" }}
          >
            Why Build Habits?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-base sm:text-lg lg:text-xl max-w-3xl mx-auto"
            style={{ color: "#234C6A" }}
          >
            Habits are the foundation of success. Developing powerful habits can
            enhance focus, save time, and accelerate your personal growth.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {[
            {
              title: "Improve Focus",
              icon: <FaBrain className="w-7 h-7 text-indigo-600" />,
              img: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80",
              overlay: "from-indigo-600/30",
              btn: "text-indigo-600 hover:text-indigo-700",
              bgIcon: "from-indigo-50 to-indigo-100",
              desc: "Daily habits sharpen your mind and boost your productivity.",
            },
            {
              title: "Save Time",
              icon: <FaClock className="w-7 h-7 text-green-600" />,
              img: "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=800&q=80",
              overlay: "from-green-600/30",
              btn: "text-green-600 hover:text-green-700",
              bgIcon: "from-green-50 to-green-100",
              desc: "Automate routines and free up mental energy for important tasks.",
            },
            {
              title: "Accelerate Growth",
              icon: <FaRocket className="w-7 h-7 text-pink-600" />,
              img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
              overlay: "from-pink-600/30",
              btn: "text-pink-600 hover:text-pink-700",
              bgIcon: "from-pink-50 to-pink-100",
              desc: "Consistency compounds into massive personal and professional growth.",
            },
            {
              title: "Build Discipline",
              icon: <FaHandsHelping className="w-7 h-7 text-amber-600" />,
              img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
              overlay: "from-amber-600/30",
              btn: "text-amber-600 hover:text-amber-700",
              bgIcon: "from-amber-50 to-amber-100",
              desc: "Strengthen your self-control and stay consistent with your goals.",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              style={{
                backgroundColor: "#1B3C53",
                border: "1px solid #234C6A",
              }}
            >
              <div className="flex flex-col sm:flex-row">
                <div className="relative w-full sm:w-2/5 h-64 sm:h-auto overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    src={card.img}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  <div
                    className={`absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r ${card.overlay} to-transparent`}
                    style={{ backgroundColor: "#45688230" }}
                  ></div>
                </div>

                <div className="flex-1 p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className={`inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br ${card.bgIcon} mb-4`}
                    >
                      {card.icon}
                    </motion.div>

                    <h3
                      className="text-xl sm:text-2xl font-bold mb-3"
                      style={{ color: "white" }}
                    >
                      {card.title}
                    </h3>

                    <p
                      className="text-sm sm:text-base leading-relaxed mb-4"
                      style={{ color: "#E3E3E3" }}
                    >
                      {card.desc}
                    </p>
                  </div>

                  <motion.button
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                    className={`inline-flex items-center font-semibold transition-colors group/btn ${card.btn}`}
                  >
                    Learn more
                    <motion.svg
                      className="ml-2 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      animate={{ x: [0, 4, 0] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatDelay: 1,
                      }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </motion.svg>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyBuild;
