import {
  Upload,
  Clock,
  FileText,
  Layers,
  User,
  Mail,
  Target,
  Sparkles,
  CheckCircle,
  Highlighter,
} from "lucide-react";
import { useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const AddHabit = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const categoryOptions = [
    { value: "Fitness", color: "from-green-400 to-emerald-500" },
    { value: "Morning", color: "from-blue-400 to-indigo-500" },
    { value: "Evening", color: "from-orange-400 to-pink-500" },
    { value: "Work", color: "from-yellow-400 to-amber-500" },
    { value: "Study", color: "from-purple-400 to-violet-500" },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const category = form.category.value;
    const reminderTime = form.reminderTime.value;
    const email = form.email.value;
    const name = form.name.value;
    const imageUrl = form.imgUrl.value;

    const habitData = {
      title,
      description,
      category,
      reminderTime,
      img: imageUrl,
      email,
      name,
    };

    axios
      .post("http://localhost:3000/habits", habitData)
      .then((res) => {
        setShowSuccess(true);
        form.reset();
        setTimeout(() => setShowSuccess(false), 3000);
      })
      .catch((error) => {
        console.error("Failed to add habit:", error);
        alert("Failed to add habit");
      })
      .finally(() => setLoading(false));
  };

  return (
    <div>
      <header>
        <Navbar />
      </header>

      <main>
        <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-12 px-4">
          {/* Success Message */}
          <AnimatePresence>
            {showSuccess && (
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50"
              >
                <div className="bg-green-500 text-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3">
                  <CheckCircle size={24} />
                  <span className="font-semibold text-lg">
                    Habit Added Successfully! 🎉
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="max-w-5xl mx-auto">
            {/* Header Section */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-8"
            >
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-2 rounded-full mb-4">
                <Sparkles size={20} />
                <span className="font-semibold">Build Better Habits</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">
                Add New Habit
              </h2>
              <p className="text-gray-600 text-lg">
                Start your journey to a better you, one habit at a time
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden"
            >
              <div className="grid md:grid-cols-5 gap-0">
                {/* Left Sidebar - Animated Illustration */}
                <div className="md:col-span-2 bg-gradient-to-br from-green-600 to-emerald-700 p-8 flex flex-col justify-center items-center relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-full opacity-10">
                    <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
                    <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
                  </div>

                  <div className="relative z-10 w-full">
                    <div className="text-white text-center mb-6">
                      <motion.div
                        animate={{
                          scale: [1, 1.1, 1],
                          rotate: [0, 5, -5, 0],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <Target size={48} className="mx-auto mb-3 opacity-90" />
                      </motion.div>
                      <h3 className="text-2xl font-bold mb-2">
                        Start Your Journey
                      </h3>
                      <p className="text-green-100 text-sm">
                        Build lasting habits, achieve your goals
                      </p>
                    </div>

                    {/* Animated Illustration */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/20 mb-6">
                      <div className="relative h-64 flex items-center justify-center">
                        {/* Central Circle */}
                        <motion.div
                          animate={{
                            scale: [1, 1.05, 1],
                            rotate: 360,
                          }}
                          transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="absolute w-32 h-32 bg-white/20 rounded-full"
                        />

                        {/* Orbiting Icons */}
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 15,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="absolute w-48 h-48"
                        >
                          <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-white/30 p-3 rounded-full">
                            <Clock size={24} className="text-white" />
                          </div>
                        </motion.div>

                        <motion.div
                          animate={{ rotate: -360 }}
                          transition={{
                            duration: 12,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="absolute w-56 h-56"
                        >
                          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-white/30 p-3 rounded-full">
                            <Sparkles size={24} className="text-white" />
                          </div>
                        </motion.div>

                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 18,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="absolute w-52 h-52"
                        >
                          <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/30 p-3 rounded-full">
                            <Target size={24} className="text-white" />
                          </div>
                          <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/30 p-3 rounded-full">
                            <CheckCircle size={24} className="text-white" />
                          </div>
                        </motion.div>

                        {/* Center Text */}
                        <motion.div
                          animate={{
                            scale: [1, 1.1, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className="text-white text-5xl font-bold z-10"
                        >
                          🎯
                        </motion.div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex items-center gap-3 text-white/90 text-sm"
                      >
                        <div className="w-2 h-2 bg-green-300 rounded-full"></div>
                        <span>Track your daily progress</span>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="flex items-center gap-3 text-white/90 text-sm"
                      >
                        <div className="w-2 h-2 bg-green-300 rounded-full"></div>
                        <span>Get timely reminders</span>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                        className="flex items-center gap-3 text-white/90 text-sm"
                      >
                        <div className="w-2 h-2 bg-green-300 rounded-full"></div>
                        <span>Build consistency</span>
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Right Side - Form */}
                <div className="md:col-span-3 p-8 md:p-10">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Habit Title */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        <span className="flex items-center gap-2">
                          <Highlighter size={18} className="text-green-600" />
                          Habit Title
                        </span>
                      </label>
                      <input
                        type="text"
                        name="title"
                        placeholder="e.g., Morning Meditation"
                        required
                        onFocus={() => setFocusedField("title")}
                        onBlur={() => setFocusedField(null)}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-4 focus:ring-green-100 outline-none transition-all"
                      />
                    </motion.div>

                    {/* Description */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.25 }}
                    >
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        <span className="flex items-center gap-2">
                          <FileText size={18} className="text-green-600" />
                          Description{" "}
                        </span>
                      </label>
                      <textarea
                        name="description"
                        rows="3"
                        placeholder="Why is this habit important to you?"
                        required
                        onFocus={() => setFocusedField("description")}
                        onBlur={() => setFocusedField(null)}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-4 focus:ring-green-100 outline-none transition-all resize-none"
                      ></textarea>
                    </motion.div>

                    {/* Category */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        <span className="flex items-center gap-2">
                          <Layers size={18} className="text-green-600" />
                          Category
                        </span>
                      </label>
                      <select
                        name="category"
                        required
                        onFocus={() => setFocusedField("category")}
                        onBlur={() => setFocusedField(null)}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-4 focus:ring-green-100 outline-none transition-all appearance-none bg-white cursor-pointer"
                      >
                        <option value="">Select a category</option>
                        {categoryOptions.map((cat) => (
                          <option key={cat.value} value={cat.value}>
                            {cat.value}
                          </option>
                        ))}
                      </select>
                    </motion.div>

                    {/* Reminder Time */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.35 }}
                    >
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        <span className="flex items-center gap-2">
                          <Clock size={18} className="text-green-600" />
                          Reminder Time
                        </span>
                      </label>
                      <input
                        type="time"
                        name="reminderTime"
                        required
                        onFocus={() => setFocusedField("time")}
                        onBlur={() => setFocusedField(null)}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-4 focus:ring-green-100 outline-none transition-all"
                      />
                    </motion.div>

                    {/* Image URL */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        <span className="flex items-center gap-2">
                          <Upload size={18} className="text-green-600" />
                          Image URL{" "}
                          <span className="text-gray-400 font-normal">
                            (optional)
                          </span>
                        </span>
                      </label>
                      <input
                        type="text"
                        name="imgUrl"
                        placeholder="Paste a valid image URL"
                        onFocus={() => setFocusedField("image")}
                        onBlur={() => setFocusedField(null)}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-4 focus:ring-green-100 outline-none transition-all"
                      />
                    </motion.div>

                    {/* User Info */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.45 }}
                      className="grid sm:grid-cols-2 gap-4 pt-2"
                    >
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          <span className="flex items-center gap-2">
                            <Mail size={16} className="text-gray-500" />
                            Email
                          </span>
                        </label>
                        <input
                          name="email"
                          type="email"
                          value={user?.email}
                          readOnly
                          className="w-full px-4 py-3 border-2 border-gray-100 rounded-xl bg-gray-50 text-gray-600"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          <span className="flex items-center gap-2">
                            <User size={16} className="text-gray-500" />
                            Name
                          </span>
                        </label>
                        <input
                          name="name"
                          type="text"
                          value={user?.displayName}
                          readOnly
                          className="w-full px-4 py-3 border-2 border-gray-100 rounded-xl bg-gray-50 text-gray-600"
                        />
                      </div>
                    </motion.div>

                    {/* Submit Button */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="pt-4"
                    >
                      <motion.button
                        type="submit"
                        disabled={loading}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                      >
                        {loading ? (
                          <>
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{
                                duration: 1,
                                repeat: Infinity,
                                ease: "linear",
                              }}
                              className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                            />
                            Adding Habit...
                          </>
                        ) : (
                          <>
                            <Sparkles size={20} />
                            Add Habit
                          </>
                        )}
                      </motion.button>
                    </motion.div>
                  </form>
                </div>
              </div>
            </motion.div>

            {/* Bottom Tips */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-8 text-center"
            >
              <p className="text-gray-500 text-sm">
                💡 Tip: Start with small, achievable habits and gradually build
                momentum
              </p>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AddHabit;
