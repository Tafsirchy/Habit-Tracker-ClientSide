import { motion } from "framer-motion";
import {
  Dumbbell,
  Sun,
  BookOpen,
  Moon,
  Briefcase,
  Heart,
  TrendingUp,
} from "lucide-react";

const FeaturedCategories = () => {
  const categories = [
    {
      name: "Fitness",
      icon: Dumbbell,
      count: "1,234",
      gradient: "from-emerald-400 to-cyan-500",
      description: "Build peak performance",
      delay: 0.1
    },
    {
      name: "Morning",
      icon: Sun,
      count: "987",
      gradient: "from-orange-400 to-yellow-500",
      description: "Master your early hours",
      delay: 0.2
    },
    {
      name: "Study",
      icon: BookOpen,
      count: "856",
      gradient: "from-purple-400 to-indigo-500",
      description: "Expand your knowledge",
      delay: 0.3
    },
    {
      name: "Evening",
      icon: Moon,
      count: "743",
      gradient: "from-blue-400 to-violet-500",
      description: "Reflect and recover",
      delay: 0.4
    },
    {
      name: "Productivity",
      icon: Briefcase,
      count: "1,102",
      gradient: "from-red-400 to-rose-500",
      description: "Optimize your workflow",
      delay: 0.5
    },
    {
      name: "Mindfulness",
      icon: Heart,
      count: "621",
      gradient: "from-pink-400 to-rose-400",
      description: "Cultivate inner peace",
      delay: 0.6
    },
  ];

  return (
    <section className="w-full py-20 bg-[var(--color-bg-primary)] dark:bg-[var(--color-bg-primary)] relative overflow-hidden transition-colors duration-500">
      {/* Premium Background Graphics - Enhanced */}
      <div className="absolute inset-0 opacity-[0.05] dark:opacity-[0.15] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1.5px 1.5px, var(--color-primary-medium) 1.5px, transparent 0)`,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Floating Dynamic Gradient Orbs */}
      <motion.div
        animate={{
          y: [0, -60, 0],
          x: [0, 40, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-[-15%] w-[700px] h-[700px] bg-[var(--color-primary-medium)] opacity-[0.05] dark:opacity-[0.1] blur-[140px] rounded-full pointer-events-none"
      />
      <motion.div
        animate={{
          y: [0, 50, 0],
          x: [0, -40, 0],
          scale: [1.15, 1, 1.15],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 left-[-15%] w-[600px] h-[600px] bg-[var(--color-secondary)] opacity-[0.05] dark:opacity-[0.1] blur-[140px] rounded-full pointer-events-none"
      />

      <div className="w-11/12 max-w-7xl mx-auto relative z-10">
        {/* Modern Header Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-16 px-4">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left lg:w-3/5"
          >
            <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-[var(--color-primary-medium)]/10 dark:bg-[var(--color-primary-medium)]/20 border border-[var(--color-primary-medium)]/20 rounded-full mb-8">
              <span className="w-2.5 h-2.5 bg-[var(--color-primary-medium)] rounded-full animate-pulse"></span>
              <span className="text-xs font-black text-[var(--color-primary-medium)] uppercase tracking-[0.3em]">Curation Matrix active</span>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-[var(--color-text-primary)] mb-8 tracking-tighter leading-[0.85]">
              Discover Your <br />
              <span className="bg-gradient-to-r from-[var(--color-primary-medium)] via-[var(--color-secondary)] to-[var(--color-primary-dark)] bg-clip-text text-transparent">Perfect track</span>
            </h2>
            <p className="text-xl text-[var(--color-text-secondary)] font-medium leading-relaxed max-w-2xl">
              Choose from our most effective categories designed by habit-building 
              scientists to help you reach your full potential faster.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="hidden lg:flex items-center gap-6 bg-[var(--color-bg-secondary)] dark:bg-[var(--color-bg-secondary)]/50 backdrop-blur-xl p-4 rounded-[2rem] border-2 border-[var(--color-border)] shadow-2xl"
          >
            <div className="px-8 py-5 text-center group">
              <p className="text-2xl font-black text-[var(--color-text-primary)] group-hover:scale-110 transition-transform">50+</p>
              <p className="text-[10px] font-bold text-[var(--color-text-tertiary)] uppercase tracking-[0.2em] mt-1">Modules</p>
            </div>
            <div className="w-px h-12 bg-[var(--color-border)]"></div>
            <div className="px-8 py-5 text-center group">
              <p className="text-2xl font-black text-[var(--color-text-primary)] group-hover:scale-110 transition-transform">1M+</p>
              <p className="text-[10px] font-bold text-[var(--color-text-tertiary)] uppercase tracking-[0.2em] mt-1">Archived Success</p>
            </div>
          </motion.div>
        </div>

        {/* Improved Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: category.delay }}
                className="group h-full"
              >
                <div className="relative h-full overflow-hidden rounded-[2.5rem] bg-[var(--color-bg-secondary)] dark:bg-[var(--color-bg-secondary)]/40 backdrop-blur-xl border-2 border-[var(--color-border)] hover:border-[var(--color-primary-medium)]/40 transition-all duration-700 p-8 shadow-sm hover:shadow-2xl hover:-translate-y-3 flex flex-col">
                  {/* Premium Card Background Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-[0.05] transition-opacity duration-700`}></div>
                  
                  {/* Enhanced Decorative Icon Watermark */}
                  <div className="absolute -right-10 -top-10 w-48 h-48 opacity-[0.02] dark:opacity-[0.08] rotate-[25deg] transition-all duration-1000 group-hover:scale-150 group-hover:rotate-[45deg] group-hover:opacity-[0.1]">
                    <IconComponent className="w-full h-full text-[var(--color-text-primary)]" />
                  </div>

                  <div className="relative z-10 flex-grow">
                    {/* Floating Icon Container */}
                    <div className="relative mb-8 w-16 h-16">
                      <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} blur-xl opacity-20 group-hover:opacity-60 transition-all duration-700 rounded-2xl`}></div>
                      <div className={`relative w-full h-full bg-[var(--color-bg-primary)] dark:bg-[var(--color-bg-tertiary)] rounded-2xl flex items-center justify-center border-2 border-[var(--color-border)] group-hover:scale-110 group-hover:-rotate-3 transition-all duration-700 shadow-xl`}>
                        <IconComponent className={`w-8 h-8 text-[var(--color-primary-medium)]`} />
                      </div>
                    </div>

                    {/* Content Section */}
                    <h3 className="text-2xl font-black text-[var(--color-text-primary)] mb-3 tracking-tighter group-hover:text-[var(--color-primary-medium)] transition-colors duration-500 leading-none">
                      {category.name}
                    </h3>
                    <p className="text-[var(--color-text-secondary)] text-base font-medium mb-8 leading-relaxed pr-4">
                      {category.description}
                    </p>

                    <div className="flex items-center gap-4 mb-8">
                      <div className="flex -space-x-3">
                        {[1, 2, 3].map(i => (
                          <div key={i} className="w-8 h-8 rounded-full border-2 border-[var(--color-bg-secondary)] bg-gray-200 overflow-hidden shadow-xl hover:scale-125 transition-transform cursor-pointer">
                            <img src={`https://i.pravatar.cc/150?img=${index * 10 + i + 20}`} alt="Learner" />
                          </div>
                        ))}
                      </div>
                      <p className="text-sm font-black text-[var(--color-text-primary)]">
                        <span className={`bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent text-lg`}>{category.count}</span>
                        <span className="text-[var(--color-text-tertiary)] ml-2 uppercase tracking-widest text-[10px]">active profiles</span>
                      </p>
                    </div>
                  </div>

                  {/* Refined Progress Section */}
                  <div className="relative z-10 mt-auto pt-8 border-t border-[var(--color-border)]">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-[10px] font-black text-[var(--color-text-tertiary)] uppercase tracking-widest">Growth Index</span>
                      <span className={`text-sm font-black bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}>{75 + index * 4}%</span>
                    </div>
                    <div className="h-2.5 bg-[var(--color-bg-tertiary)] rounded-full overflow-hidden shadow-inner">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${75 + index * 4}%` }}
                        transition={{ duration: 1.5, delay: category.delay + 0.5, ease: "circOut" }}
                        className={`h-full bg-gradient-to-r ${category.gradient} rounded-full`}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Modern High-Performance CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-7 bg-[var(--color-bg-primary)] dark:bg-[var(--color-bg-secondary)] border-2 border-[var(--color-primary-medium)]/30 text-[var(--color-text-primary)] font-black rounded-3xl shadow-2xl hover:shadow-[var(--color-primary-medium)]/20 transition-all flex items-center justify-center gap-4 mx-auto group ring-4 ring-transparent hover:ring-[var(--color-primary-medium)]/10"
          >
            Explore All Matrices
            <motion.div 
              animate={{ x: [0, 8, 0] }} 
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <TrendingUp className="w-6 h-6 text-[var(--color-primary-medium)]" />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedCategories;