import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HelpCircle,
  ChevronDown,
  ChevronUp,
  BookOpen,
  Video,
  MessageCircle,
  Search,
  PlusCircle,
  Layers,
  Zap,
  BellRing,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Mail,
  Trophy,
  Flame,
  Target
} from "lucide-react";

const Help = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [openFAQ, setOpenFAQ] = useState(0);

  const faqs = [
    {
      question: "How do I create a new habit?",
      category: "Onboarding",
      icon: PlusCircle,
      answer: "Creating a new habit is easy! Simply click on the 'Add Habit' button from your dashboard, fill in the habit details (name, category, reminder time), and click save. You can also add a custom image and description to make it more personal.",
    },
    {
      question: "Can I track multiple habits at once?",
      category: "Architecture",
      icon: Layers,
      answer: "Absolutely! You can track as many habits as you want simultaneously. Our dashboard provides a clear overview of all your habits, their streaks, and completion rates. We recommend starting with 2-3 habits and gradually adding more.",
    },
    {
      question: "What happens if I miss a day?",
      category: "Behavioral",
      icon: Zap,
      answer: "Missing a day resets your current streak, but your 'Best Streak' is preserved as a personal record. Building habits is about consistency over long periods, so don't be discouraged by occasional slips!",
    },
    {
      question: "How do reminders work?",
      category: "Operational",
      icon: BellRing,
      answer: "You can set specific notification times for each habit. The app will send you a gentle nudge at your preferred time. You can customize these individually or disable them globally in your settings.",
    },
    {
      question: "Is my data private and secure?",
      category: "Security",
      icon: ShieldCheck,
      answer: "Yes! Your privacy is our priority. All habit data is stored securely and never shared with third parties. You have complete control over your account and can export your history at any time.",
    },
    {
      question: "Can I share my habits with friends?",
      category: "Social",
      icon: Sparkles,
      answer: "Yes! Many habits are public by default in our 'Explore' section. You can share your personal habits with others by making them public, allowing friends to adopt your routines and follow your progress journey.",
    },
    {
      question: "How do I analyze my progress?",
      category: "Analytics",
      icon: Target,
      answer: "Your dashboard features advanced analytics under each habit. We track your completion rate, longest streak, and current momentum. Use the 'Statistics' section for a complete bird's-eye view of your growth over weeks and months.",
    },
    {
      question: "What categories of habits can I track?",
      category: "Customization",
      icon: Trophy,
      answer: "You can track anything! We offer built-on categories like Health, Productivity, and Mindfulness, but you're free to create your own. Each habit can be customized with unique icons and color themes.",
    },
    {
      question: "Does my data sync across devices?",
      category: "Connectivity",
      icon: Flame,
      answer: "Yes, seamlessly. By creating an account, all your habit data, streaks, and settings are securely synced in real-time across any device where you're logged in. Never miss a check-in, whether you're on mobile or desktop.",
    },
  ];

  const resources = [
    {
      icon: BookOpen,
      title: "System Guides",
      description: "Deep dive into habit formation architecture.",
      link: "#",
      color: "blue"
    },
    {
      icon: Video,
      title: "Tactical Tutorials",
      description: "Visual walkthroughs of the Habit Engine.",
      link: "#",
      color: "emerald"
    },
    {
      icon: Sparkles,
      title: "Success Vault",
      description: "Proven frameworks from high-performers.",
      link: "#",
      color: "orange"
    },
  ];

  const filteredFAQs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)] transition-colors duration-500">
      {/* High-Fidelity Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-[var(--color-primary-dark)]">
        {/* Animated Background Graphics */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[var(--color-secondary)] blur-[150px] rounded-full animate-pulse" />
          <div className="absolute -bottom-40 left-0 w-[600px] h-[600px] bg-[var(--color-primary-medium)] blur-[120px] rounded-full" />
        </div>

        <div className="relative z-10 w-11/12 max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-8"
            >
              <Sparkles className="w-4 h-4 text-[var(--color-secondary)]" />
              <span className="text-[10px] font-black text-white uppercase tracking-[0.3em]">Knowledge Terminal v2.0</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-none"
            >
              How Can We <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-secondary)] to-emerald-400">Support You?</span>
            </motion.h1>

            {/* Premium Search Hub */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-[var(--color-secondary)] to-emerald-400 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-white/40" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for answers, features, or tactical guides..."
                  className="w-full pl-16 pr-8 py-5 bg-white/5 backdrop-blur-2xl text-white rounded-2xl border border-white/10 focus:outline-none focus:border-[var(--color-secondary)]/50 focus:ring-4 focus:ring-[var(--color-secondary)]/10 transition-all text-lg placeholder:text-white/30"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Support Grid */}
      <section className="py-24 bg-[var(--color-bg-primary)] dark:bg-[var(--color-bg-primary)] border-t border-[var(--color-border)]">
        <div className="w-11/12 max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Left: Tactical Resources */}
            <div className="lg:col-span-4 space-y-8">
              <h2 className="text-xs font-black text-[var(--color-text-tertiary)] uppercase tracking-[0.4em] mb-12">Tactical Resources</h2>
              {resources.map((resource, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="p-8 bg-[var(--color-bg-secondary)] rounded-3xl border border-[var(--color-border)] hover:border-[var(--color-primary-medium)]/30 transition-all cursor-pointer group shadow-sm hover:shadow-xl"
                >
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors shadow-inner ${
                    resource.color === 'blue' ? 'bg-blue-500/10 text-blue-500' :
                    resource.color === 'emerald' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-orange-500/10 text-orange-500'
                  }`}>
                    <resource.icon size={28} />
                  </div>
                  <h3 className="text-xl font-black text-[var(--color-text-primary)] mb-2 tracking-tight group-hover:text-[var(--color-primary-medium)] transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-sm text-[var(--color-text-secondary)] font-medium leading-relaxed">
                    {resource.description}
                  </p>
                </motion.div>
              ))}
              
              {/* Specialized Support Card */}
              <div className="bg-gradient-to-br from-indigo-900 to-blue-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden group border-2 border-white/5 shadow-2xl">
                 <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-500/20 blur-[100px] rounded-full group-hover:scale-125 transition-transform duration-1000" />
                 <div className="relative z-10">
                    <div className="w-14 h-14 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center mb-10 border border-white/10">
                       <Mail className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-black mb-4 tracking-tighter">Elite Support</h3>
                    <p className="text-white/60 mb-8 text-sm font-medium leading-loose">
                       Need personal optimization for your custom habit architecture?
                    </p>
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full bg-white text-blue-900 font-bold py-4 rounded-xl shadow-xl transition-all flex items-center justify-center gap-2"
                    >
                       Connect with Unit
                       <ArrowRight size={18} />
                    </motion.button>
                 </div>
              </div>
            </div>

            {/* Right: Master Knowledge Base */}
            <div className="lg:col-span-8">
              <div className="flex items-center justify-between mb-12">
                <h2 className="text-xs font-black text-[var(--color-text-tertiary)] uppercase tracking-[0.4em]">Master Knowledge Base</h2>
                <span className="text-[10px] font-black text-[var(--color-text-tertiary)] uppercase bg-[var(--color-bg-secondary)] px-3 py-1 rounded-full border border-[var(--color-border)]">
                  {filteredFAQs.length} Items Indexed
                </span>
              </div>

              <div className="space-y-4">
                {filteredFAQs.length > 0 ? (
                  filteredFAQs.map((faq, index) => {
                    const isOpen = openFAQ === index;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className={`rounded-[2rem] border-2 transition-all duration-500 overflow-hidden ${
                          isOpen 
                          ? "bg-[var(--color-bg-primary)] dark:bg-[var(--color-bg-secondary)] border-[var(--color-secondary)] shadow-2xl" 
                          : "bg-[var(--color-bg-secondary)]/50 dark:bg-[var(--color-bg-secondary)]/30 border-transparent hover:border-[var(--color-border)] hover:bg-[var(--color-bg-secondary)] group"
                        }`}
                      >
                        <button
                          onClick={() => setOpenFAQ(isOpen ? null : index)}
                          className="w-full px-8 py-6 text-left flex items-center gap-6"
                        >
                          <div className={`shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                            isOpen 
                            ? "bg-[var(--color-secondary)] text-white shadow-lg" 
                            : "bg-[var(--color-bg-tertiary)] text-[var(--color-text-tertiary)] group-hover:bg-[var(--color-secondary)] group-hover:text-white"
                          }`}>
                            <faq.icon size={22} strokeWidth={2.5} />
                          </div>
                          
                          <div className="flex-grow min-w-0">
                            <span className={`text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded-md bg-[var(--color-bg-tertiary)] mb-2 inline-block ${
                              isOpen ? "text-[var(--color-secondary)]" : "text-[var(--color-text-tertiary)]"
                            }`}>
                              {faq.category}
                            </span>
                            <h3 className={`text-lg md:text-xl font-black tracking-tight leading-snug transition-colors ${
                              isOpen ? "text-[var(--color-secondary)]" : "text-[var(--color-text-primary)]"
                            }`}>
                              {faq.question}
                            </h3>
                          </div>

                          <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ${
                            isOpen 
                            ? "bg-[var(--color-secondary)]/10 text-[var(--color-secondary)] rotate-180" 
                            : "bg-[var(--color-bg-tertiary)] text-[var(--color-text-tertiary)]"
                          }`}>
                            <ChevronDown size={20} strokeWidth={3} />
                          </div>
                        </button>

                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
                            >
                              <div className="px-8 pb-8 pl-[6.5rem]">
                                <div className="pt-6 border-t border-[var(--color-border)]">
                                  <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed font-medium">
                                    {faq.answer}
                                  </p>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  })
                ) : (
                  <div className="text-center py-20 bg-[var(--color-bg-secondary)]/50 rounded-[3rem] border-2 border-dashed border-[var(--color-border)]">
                    <div className="w-16 h-16 bg-[var(--color-bg-tertiary)] rounded-full flex items-center justify-center mx-auto mb-6">
                      <Search className="w-8 h-8 text-[var(--color-text-tertiary)]" />
                    </div>
                    <p className="text-[var(--color-text-tertiary)] font-bold text-lg mb-2">No matching help results</p>
                    <p className="text-sm text-[var(--color-text-secondary)]">Try adjusting your search criteria or contact support.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Newsletter/Contact Hybrid */}
      <section className="py-24 bg-[var(--color-bg-secondary)]">
        <div className="w-11/12 max-w-5xl mx-auto px-4">
          <div className="bg-gradient-to-r from-[var(--color-primary-dark)] to-indigo-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent opacity-30" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-8 tracking-tighter">Stay Mastered.</h2>
              <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
                Receive weekly behavioral science updates and custom habit frameworks directly to your inbox.
              </p>
              <form className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="name@nexus.com" 
                  className="flex-grow px-8 py-5 rounded-2xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:ring-4 focus:ring-white/10 transition-all font-bold"
                />
                <button type="button" className="bg-[var(--color-secondary)] text-white font-black px-10 py-5 rounded-2xl hover:scale-105 transition-transform shadow-xl">
                  Subscribe
                </button>
              </form>
              <p className="mt-8 text-white/30 text-[10px] font-black uppercase tracking-widest">Zero Spam • Industry Standard Encryption</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Help;
