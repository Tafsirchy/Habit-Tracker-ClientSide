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
    <section className="w-full py-24 bg-[var(--color-bg-primary)] relative overflow-hidden transition-colors duration-300">
      {/* Premium Background Graphics */}
      <div className="absolute inset-0 opacity-[0.05] dark:opacity-[0.1] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, var(--color-primary-medium) 1px, transparent 0)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Floating Gradient Orbs */}
      <motion.div
        animate={{
          y: [0, -40, 0],
          x: [0, 20, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-[-10%] w-[500px] h-[500px] bg-[var(--color-primary-medium)] opacity-[0.03] blur-[100px] rounded-full pointer-events-none"
      />
      <motion.div
        animate={{
          y: [0, 30, 0],
          x: [0, -30, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 left-[-10%] w-[400px] h-[400px] bg-[var(--color-secondary)] opacity-[0.03] blur-[100px] rounded-full pointer-events-none"
      />

      <div className="w-11/12 max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 mb-20 px-4">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left lg:w-1/2"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-primary-medium)]/10 border border-[var(--color-primary-medium)]/20 rounded-full mb-6">
              <span className="w-2 h-2 bg-[var(--color-primary-medium)] rounded-full animate-pulse"></span>
              <span className="text-xs font-black text-[var(--color-primary-medium)] uppercase tracking-[0.2em]">Curated Tracks</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[var(--color-text-primary)] mb-6 tracking-tighter">
              Discover Your <br />
              <span className="bg-gradient-to-r from-[var(--color-primary-medium)] to-[var(--color-secondary)] bg-clip-text text-transparent">Perfect Habit track</span>
            </h2>
            <p className="text-lg text-[var(--color-text-secondary)] font-medium leading-relaxed">
              Choose from our most effective categories designed by habit-building 
              scientists to help you reach your full potential faster.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="hidden lg:flex items-center gap-4 bg-[var(--color-bg-secondary)] p-2 rounded-2xl border border-[var(--color-border)]"
          >
            <div className="px-6 py-4 text-center">
              <p className="text-2xl font-black text-[var(--color-text-primary)]">50+</p>
              <p className="text-[10px] font-bold text-[var(--color-text-tertiary)] uppercase tracking-widest">Categories</p>
            </div>
            <div className="w-px h-10 bg-[var(--color-border)]"></div>
            <div className="px-6 py-4 text-center">
              <p className="text-2xl font-black text-[var(--color-text-primary)]">1M+</p>
              <p className="text-[10px] font-bold text-[var(--color-text-tertiary)] uppercase tracking-widest">Global Users</p>
            </div>
          </motion.div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: category.delay }}
                className="group h-full"
              >
                <div className="relative h-full overflow-hidden rounded-[2.5rem] bg-[var(--color-bg-secondary)] border-2 border-[var(--color-border)] hover:border-[var(--color-primary-medium)]/30 transition-all duration-500 p-8 shadow-sm hover:shadow-2xl hover:-translate-y-3 flex flex-col">
                  {/* Card Background Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`}></div>
                  
                  {/* Decorative Icon Watermark */}
                  <div className="absolute -right-6 -top-6 w-32 h-32 opacity-[0.02] dark:opacity-[0.05] rotate-12 transition-transform duration-700 group-hover:scale-125 group-hover:rotate-45">
                    <IconComponent className="w-full h-full text-[var(--color-text-primary)]" />
                  </div>

                  <div className="relative z-10 flex-grow">
                    {/* Icon Container */}
                    <div className="relative mb-8 w-16 h-16">
                      <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 rounded-2xl`}></div>
                      <div className={`relative w-full h-full bg-[var(--color-bg-primary)] rounded-2xl flex items-center justify-center border border-[var(--color-border)] group-hover:scale-110 transition-transform duration-500 shadow-sm`}>
                        <IconComponent className={`w-8 h-8 text-[var(--color-primary-medium)]`} />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-black text-[var(--color-text-primary)] mb-3 tracking-tight group-hover:text-[var(--color-primary-medium)] transition-colors duration-300">
                      {category.name}
                    </h3>
                    <p className="text-[var(--color-text-secondary)] text-base font-medium mb-8 leading-relaxed">
                      {category.description}
                    </p>

                    <div className="flex items-center gap-3 mb-8">
                      <div className="flex -space-x-2">
                        {[1, 2, 3].map(i => (
                          <div key={i} className="w-8 h-8 rounded-full border-2 border-[var(--color-bg-secondary)] bg-gray-400 overflow-hidden shadow-sm">
                            <img src={`https://i.pravatar.cc/100?img=${index * 5 + i}`} alt="Learner" />
                          </div>
                        ))}
                      </div>
                      <p className="text-sm font-bold text-[var(--color-text-primary)]">
                        <span className={`bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}>{category.count}</span>
                        <span className="text-[var(--color-text-tertiary)] ml-1">active tracks</span>
                      </p>
                    </div>
                  </div>

                  {/* Progress Section */}
                  <div className="relative z-10 mt-auto pt-6 border-t border-[var(--color-border)]">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-[10px] font-black text-[var(--color-text-tertiary)] uppercase tracking-widest">Track Popularity</span>
                      <span className={`text-sm font-black bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}>{75 + index * 4}%</span>
                    </div>
                    <div className="h-2 bg-[var(--color-bg-tertiary)] rounded-full overflow-hidden">
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

        {/* Explore More CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-20 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 bg-[var(--color-bg-secondary)] border-2 border-[var(--color-primary-medium)]/30 text-[var(--color-text-primary)] font-black rounded-2xl shadow-xl hover:shadow-[var(--color-primary-medium)]/10 transition-all flex items-center justify-center gap-3 mx-auto group"
          >
            Explore All Categories
            <motion.div 
              animate={{ x: [0, 5, 0] }} 
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <TrendingUp className="w-5 h-5 text-[var(--color-primary-medium)]" />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedCategories;