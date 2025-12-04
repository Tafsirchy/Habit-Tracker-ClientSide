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
  TrendingUp,
  Award,
} from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AuthContext } from "../Provider/AuthProvider";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useNavigate, useParams } from "react-router";
import Loading from "../Components/Loading";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const UpdateHabit = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [habits, setHabits] = useState([]);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState("");
  const [time, setTime] = useState(habits?.reminderTime);
  const navigation = useNavigate();

  const categoryOptions = [
    { value: "Fitness", color: "from-green-400 to-emerald-500" },
    { value: "Morning", color: "from-blue-400 to-indigo-500" },
    { value: "Evening", color: "from-orange-400 to-pink-500" },
    { value: "Work", color: "from-yellow-400 to-amber-500" },
    { value: "Study", color: "from-purple-400 to-violet-500" },
  ];

  useEffect(() => {
    axios
      .get(`http://localhost:3000/habits/${id}`)
      .then((res) => {
        setHabits(res.data);
        setCategory(res.data.category);
        setTime(res.data.reminderTime);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const email = form.email.value;
    const name = form.name.value;
    const imageUrl = form.imgUrl.value;

    const habitData = {
      title,
      description,
      category,
      reminderTime: time,
      img: imageUrl,
      email,
      name,
      createdAt: habits?.createdAt,
    };

    // console.log(habitData);

    axios
      .put(`http://localhost:3000/habits/${id}`, habitData)
      .then((res) => {
        // console.log(res.data);
        form.reset();
        navigation("/myHabit");

        setTimeout(() => {
          toast.success("Habit Updated Successfully ✔");
        }, 200); // allow toast to show before navigating
      })
      .catch((err) => {
        toast.error("Update Failed!");
        console.log(err);
      })
      .finally(() => setLoading(false));
  };
  return (
    <div>
      <Navbar />
      <main>
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-stone-50 py-12 px-4">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-8"
            >
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-slate-700 to-gray-800 text-white px-6 py-2 rounded-full mb-4 shadow-md">
                <Target size={20} />
                <span className="font-semibold">Habit Management</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">
                Update Your Habit
              </h2>
              <p className="text-gray-600 text-lg">
                Refine your goals and stay on track with your progress
              </p>
            </motion.div>

            {/* Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
            >
              <div className="grid md:grid-cols-5">
                {/* Left Side - Enhanced Visual Section */}
                <div className="md:col-span-2 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 p-8 border-r border-gray-700 relative overflow-hidden">
                  {/* Animated Background Orbs */}
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.1, 0.2, 0.1],
                    }}
                    transition={{ duration: 8, repeat: Infinity }}
                    className="absolute top-0 right-0 w-96 h-96 bg-emerald-500 rounded-full blur-3xl"
                  />
                  <motion.div
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.1, 0.15, 0.1],
                    }}
                    transition={{ duration: 10, repeat: Infinity, delay: 1 }}
                    className="absolute bottom-0 left-0 w-80 h-80 bg-violet-500 rounded-full blur-3xl"
                  />

                  <div className="relative z-10 h-full flex flex-col">
                    {/* Animated Icon Grid */}
                    <div className="mb-8">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 backdrop-blur-sm border border-emerald-500/30 rounded-2xl p-6 mb-6"
                      >
                        <div className="grid grid-cols-3 gap-4 mb-4">
                          {[
                            {
                              icon: Target,
                              delay: 0,
                              color: "text-emerald-400",
                            },
                            {
                              icon: TrendingUp,
                              delay: 0.1,
                              color: "text-cyan-400",
                            },
                            {
                              icon: Sparkles,
                              delay: 0.2,
                              color: "text-teal-400",
                            },
                            {
                              icon: CheckCircle,
                              delay: 0.3,
                              color: "text-green-400",
                            },
                            {
                              icon: Award,
                              delay: 0.4,
                              color: "text-yellow-400",
                            },
                            {
                              icon: Highlighter,
                              delay: 0.5,
                              color: "text-orange-400",
                            },
                          ].map((item, i) => (
                            <motion.div
                              key={i}
                              initial={{ scale: 0, rotate: -180 }}
                              animate={{ scale: 1, rotate: 0 }}
                              transition={{ delay: item.delay, type: "spring" }}
                              whileHover={{ scale: 1.1, rotate: 5 }}
                              className="aspect-square bg-white/5 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/10 hover:border-white/30 transition-all cursor-pointer"
                            >
                              <motion.div
                                animate={{ y: [0, -4, 0] }}
                                transition={{
                                  duration: 2 + i * 0.3,
                                  repeat: Infinity,
                                }}
                              >
                                <item.icon
                                  className={`${item.color}`}
                                  size={24}
                                />
                              </motion.div>
                            </motion.div>
                          ))}
                        </div>
                        <h3 className="text-white font-bold text-lg text-center">
                          Build Better Habits
                        </h3>
                      </motion.div>
                    </div>

                    {/* Flowing Text Cards */}
                    <div className="space-y-4 flex-1">
                      <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.7 }}
                        className="group"
                      >
                        <motion.div
                          whileHover={{ x: 4 }}
                          className="bg-gradient-to-r from-emerald-500/90 to-teal-500/90 backdrop-blur-sm p-5 rounded-xl shadow-2xl border border-emerald-400/30 relative overflow-hidden"
                        >
                          <motion.div
                            animate={{
                              x: ["-100%", "100%"],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                          />
                          <div className="relative z-10 flex items-start gap-3">
                            <motion.div
                              animate={{ rotate: [0, 10, 0] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            >
                              <Sparkles
                                className="text-white flex-shrink-0"
                                size={22}
                              />
                            </motion.div>
                            <div>
                              <h4 className="text-white font-bold text-sm mb-1">
                                Stay Consistent
                              </h4>
                              <p className="text-white/90 text-xs leading-relaxed">
                                Every update reinforces your commitment to
                                personal growth and success.
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      </motion.div>

                      <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.9 }}
                        className="group"
                      >
                        <motion.div
                          whileHover={{ x: 4 }}
                          className="bg-gradient-to-r from-violet-500/90 to-purple-500/90 backdrop-blur-sm p-5 rounded-xl shadow-2xl border border-violet-400/30 relative overflow-hidden"
                        >
                          <motion.div
                            animate={{
                              x: ["100%", "-100%"],
                            }}
                            transition={{
                              duration: 4,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                          />
                          <div className="relative z-10 flex items-start gap-3">
                            <motion.div
                              animate={{ scale: [1, 1.1, 1] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            >
                              <TrendingUp
                                className="text-white flex-shrink-0"
                                size={22}
                              />
                            </motion.div>
                            <div>
                              <h4 className="text-white font-bold text-sm mb-1">
                                Track Progress
                              </h4>
                              <p className="text-white/90 text-xs leading-relaxed">
                                Small daily improvements compound into
                                remarkable long-term results.
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      </motion.div>

                      <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 1.1 }}
                        className="group"
                      >
                        <motion.div
                          whileHover={{ x: 4 }}
                          className="bg-gradient-to-r from-amber-500/90 to-orange-500/90 backdrop-blur-sm p-5 rounded-xl shadow-2xl border border-amber-400/30 relative overflow-hidden"
                        >
                          <motion.div
                            animate={{
                              x: ["-100%", "100%"],
                            }}
                            transition={{
                              duration: 3.5,
                              repeat: Infinity,
                              ease: "linear",
                              delay: 1,
                            }}
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                          />
                          <div className="relative z-10 flex items-start gap-3">
                            <motion.div
                              animate={{ rotate: [0, 360] }}
                              transition={{ duration: 4, repeat: Infinity }}
                            >
                              <Award
                                className="text-white flex-shrink-0"
                                size={22}
                              />
                            </motion.div>
                            <div>
                              <h4 className="text-white font-bold text-sm mb-1">
                                Achieve Goals
                              </h4>
                              <p className="text-white/90 text-xs leading-relaxed">
                                Your dedication today shapes the person you
                                become tomorrow.
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      </motion.div>
                    </div>

                    {/* Bottom Accent */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.3 }}
                      className="mt-6 pt-6 border-t border-white/10"
                    >
                      <div className="flex items-center justify-center gap-2">
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="w-2 h-2 bg-emerald-400 rounded-full"
                        />
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: 0.3,
                          }}
                          className="w-2 h-2 bg-violet-400 rounded-full"
                        />
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: 0.6,
                          }}
                          className="w-2 h-2 bg-amber-400 rounded-full"
                        />
                      </div>
                      <p className="text-center text-white/60 text-xs mt-3 font-medium">
                        Refine • Update • Succeed
                      </p>
                    </motion.div>
                  </div>
                </div>

                {/* Right Side - FORM */}
                <div className="md:col-span-3 p-8 md:p-10">
                  <form onSubmit={handleUpdate} className="space-y-6">
                    {/* Title */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        <span className="flex items-center gap-2">
                          <Highlighter size={18} className="text-emerald-600" />
                          Habit Title
                        </span>
                      </label>
                      <input
                        defaultValue={habits?.title}
                        type="text"
                        name="title"
                        required
                        placeholder="e.g., Morning Meditation"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition"
                      />
                    </div>

                    {/* Description */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        <span className="flex items-center gap-2">
                          <FileText size={18} className="text-emerald-600" />
                          Description
                        </span>
                      </label>
                      <textarea
                        defaultValue={habits?.description}
                        name="description"
                        rows="3"
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition resize-none"
                        placeholder="Why is this habit important?"
                      ></textarea>
                    </div>

                    {/* Category */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        <span className="flex items-center gap-2">
                          <Layers size={18} className="text-emerald-600" />
                          Category
                        </span>
                      </label>
                      <select
                        value={category || ""}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition"
                      >
                        <option value="">Select a category</option>
                        <option value="Morning">Morning</option>
                        <option value="Fitness">Fitness</option>
                        <option value="Study">Study</option>
                        <option value="Work">Work</option>
                        <option value="Evening">Evening</option>
                      </select>
                    </div>

                    {/* Reminder Time */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        <span className="flex items-center gap-2">
                          <Clock size={18} className="text-emerald-600" />
                          Reminder Time
                        </span>
                      </label>
                      <input
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        type="time"
                        name="reminderTime"
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition"
                      />
                    </div>

                    {/* Image URL */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        <span className="flex items-center gap-2">
                          <Upload size={18} className="text-emerald-600" />
                          Image URL (optional)
                        </span>
                      </label>
                      <input
                        defaultValue={habits?.img}
                        type="text"
                        name="imgUrl"
                        placeholder="Paste image URL"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition"
                      />
                    </div>

                    {/* Email + Name (Read Only) */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          <span className="flex items-center gap-2">
                            <Mail size={16} className="text-gray-500" /> Email
                          </span>
                        </label>
                        <input
                          name="email"
                          value={user?.email}
                          readOnly
                          className="w-full px-4 py-3 border-2 bg-gray-50 border-gray-100 rounded-lg text-gray-600"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          <span className="flex items-center gap-2">
                            <User size={16} className="text-gray-500" /> Name
                          </span>
                        </label>
                        <input
                          name="name"
                          value={user?.displayName}
                          readOnly
                          className="w-full px-4 py-3 border-2 bg-gray-50 border-gray-100 rounded-lg text-gray-600"
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      disabled={loading}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition disabled:opacity-50 flex items-center justify-center gap-2"
                    >
                      {loading ? (
                        <div>
                          <Loading />
                        </div>
                      ) : (
                        <>
                          <CheckCircle size={20} /> Update Habit
                        </>
                      )}
                    </motion.button>
                  </form>
                </div>
              </div>
            </motion.div>

            {/* Bottom Tip */}
            <p className="mt-8 text-center text-gray-500 text-sm">
              💡 Consistency leads to long-term success — keep improving!
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default UpdateHabit;
