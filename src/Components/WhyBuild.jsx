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
    <section className="w-11/12 mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-[var(--color-bg-tertiary)] hover:bg-[var(--color-bg-primary)] transition-colors duration-1000">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-primary-medium)]/10 dark:bg-[var(--color-primary-medium)]/20 border border-[var(--color-primary-medium)]/20 rounded-full mb-8">
              <span className="w-2 h-2 bg-[var(--color-primary-medium)] rounded-full animate-pulse"></span>
              <span className="text-xs font-black text-[var(--color-primary-medium)] uppercase tracking-[0.2em]">Foundation of Success</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-[var(--color-text-primary)] mb-8 tracking-tighter leading-[0.9]">
              Why Build <span className="text-[var(--color-primary-medium)]">Habits</span>? <br />
              <span className="bg-gradient-to-r from-[var(--color-primary-medium)] to-[var(--color-secondary)] bg-clip-text text-transparent">Transform Your Life</span>
            </h2>
            <p className="text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto leading-relaxed font-medium">
              Habits are the foundation of success. Developing powerful habits can
              enhance focus, save time, and accelerate your personal growth.
            </p>
          </motion.div>
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
              className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-[var(--color-bg-primary)] border border-[var(--color-border)]"
            >
              <div className="flex flex-col sm:flex-row h-full items-stretch">
                <div className="relative w-full sm:w-2/5 self-stretch overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    src={card.img}
                    alt={card.title}
                    className="w-full h-full min-h-full object-cover group-hover:scale-110 transition-transform duration-500"
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

                    <h3 className="text-lg sm:text-xl font-bold mb-3 text-[var(--color-text-primary)]">
                      {card.title}
                    </h3>

                    <p className="text-sm sm:text-base leading-relaxed mb-4 text-[var(--color-text-secondary)]">
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
