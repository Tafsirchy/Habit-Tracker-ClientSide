import React, { useContext, useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Loading from "../Components/Loading";
import { AuthContext } from "../Provider/AuthProvider";

import { motion, AnimatePresence } from "framer-motion";
import {
  Trash2,
  Edit2,
  CheckCircle,
  Plus,
  TrendingUp,
  Calendar,
  Tag,
} from "lucide-react";
import { Link } from "react-router";

const MyHabit = () => {
  const [myHabits, setMyHabits] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);

  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({});
  const [showAddForm, setShowAddForm] = useState(false);
  const [newHabit, setNewHabit] = useState({
    title: "",
    category: "",
    currentStreak: 0,
    createdDate: new Date().toISOString().split("T")[0],
  });

  const categoryColors = {
    Fitness: "bg-green-100 text-green-700",
    Morning: "bg-blue-100 text-blue-700",
    Study: "bg-purple-100 text-purple-700",
    Evening: "bg-orange-100 text-orange-700",
    Work: "bg-yellow-100 text-yellow-700",
    Default: "bg-gray-100 text-gray-700",
  };

  // Fetch habits from backend
  useEffect(() => {
    fetch(`http://localhost:3000/my-habits?email=${user?.email}`)
      .then((res) => res.json())
      .then((habits) => {
        setMyHabits(habits);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [user?.email]);

  if (loading) {
    return <Loading />;
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 p-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-2">My Habits</h1>
          <p className="text-gray-600">
            Track your daily habits and build consistency
          </p>
        </motion.div>

        {/* ADD NEW BUTTON */}
        <Link to="/addHabit">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setShowAddForm(!showAddForm)}
            className="mb-6 px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium shadow-lg hover:bg-indigo-700 transition-colors flex items-center gap-2"
          >
            <Plus size={20} />
            Add New Habit
          </motion.button>
        </Link>
        {/* ADD FORM */}
        <AnimatePresence>
          {showAddForm && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-6 bg-white rounded-xl shadow-lg p-6 overflow-hidden"
            >
              <h3 className="text-lg font-semibold mb-4 text-gray-800">
                Create New Habit
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Habit Title"
                  value={newHabit.title}
                  onChange={(e) =>
                    setNewHabit({ ...newHabit, title: e.target.value })
                  }
                  className="px-4 py-2 border border-gray-300 rounded-lg"
                />

                <select
                  value={newHabit.category}
                  onChange={(e) =>
                    setNewHabit({ ...newHabit, category: e.target.value })
                  }
                  className="px-4 py-2 border border-gray-300 rounded-lg"
                >
                  <option value="">Select Category</option>
                  <option value="Wellness">Wellness</option>
                  <option value="Learning">Learning</option>
                  <option value="Fitness">Fitness</option>
                  <option value="Productivity">Productivity</option>
                  <option value="Social">Social</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="flex gap-3 mt-4">
                <button
                  onClick={handleAddHabit}
                  className="px-6 py-2 bg-indigo-600 text-white rounded-lg"
                >
                  Add Habit
                </button>

                <button
                  onClick={() => setShowAddForm(false)}
                  className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg"
                >
                  Cancel
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* TABLE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-xl overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                <tr>
                  <th className="px-6 py-4">Title</th>
                  <th className="px-6 py-4">Category</th>
                  <th className="px-6 py-4">Current Streak</th>
                  <th className="px-6 py-4">Created Date</th>
                  <th className="px-6 py-4 text-center">Actions</th>
                </tr>
              </thead>

              <tbody>
                <AnimatePresence>
                  {myHabits.map((habit, index) => (
                    <motion.tr
                      key={habit.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ delay: index * 0.05 }}
                      className="border-b hover:bg-indigo-50"
                    >
                      {/* TITLE */}
                      <td className="px-6 py-4">
                        {editingId === habit.id ? (
                          <input
                            type="text"
                            value={editForm.title}
                            onChange={(e) =>
                              setEditForm({
                                ...editForm,
                                title: e.target.value,
                              })
                            }
                            className="px-3 py-1 border rounded-lg w-full"
                          />
                        ) : (
                          <span className="font-medium text-gray-800">
                            {habit.title}
                          </span>
                        )}
                      </td>

                      {/* CATEGORY */}
                      <td className="px-6 py-4">
                        {editingId === habit.id ? (
                          <select
                            value={editForm.category}
                            onChange={(e) =>
                              setEditForm({
                                ...editForm,
                                category: e.target.value,
                              })
                            }
                            className="px-3 py-1 border rounded-lg"
                          >
                            <option value="Wellness">Wellness</option>
                            <option value="Learning">Learning</option>
                            <option value="Fitness">Fitness</option>
                            <option value="Productivity">Productivity</option>
                            <option value="Social">Social</option>
                            <option value="Other">Other</option>
                          </select>
                        ) : (
                          <span
                            className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${
                              categoryColors[habit.category] ||
                              categoryColors.Default
                            }`}
                          >
                            <Tag size={12} />
                            {habit.category}
                          </span>
                        )}
                      </td>

                      {/* STREAK */}
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <TrendingUp size={16} className="text-indigo-600" />
                          <span className="font-bold text-indigo-600 text-lg">
                            {habit.currentStreak}
                          </span>
                          <span className="text-gray-500 text-sm">days</span>
                        </div>
                      </td>

                      {/* DATE */}
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2 text-gray-600">
                          <Calendar size={14} />
                          <span className="text-sm">
                           Date
                          </span>
                        </div>
                      </td>

                      {/* ACTIONS */}
                      <td className="px-6 py-4 text-center">
                        {editingId === habit.id ? (
                          <div className="flex justify-center gap-2">
                            <button
                              className="px-4 py-1 bg-green-500 text-white rounded-lg"
                            >
                              Save
                            </button>
                            <button
                              className="px-4 py-1 bg-gray-400 text-white rounded-lg"
                            >
                              Cancel
                            </button>
                          </div>
                        ) : (
                          <div className="flex justify-center gap-2">
                            <button
                              className="p-2 bg-green-100 text-green-600 rounded-lg"
                            >
                              <CheckCircle size={18} />
                            </button>

                            <button
                              className="p-2 bg-blue-100 text-blue-600 rounded-lg"
                            >
                              <Edit2 size={18} />
                            </button>

                            <button
                              className="p-2 bg-red-100 text-red-600 rounded-lg"
                            >
                              <Trash2 size={18} />
                            </button>
                          </div>
                        )}
                      </td>
                    </motion.tr>
                  ))}
                </AnimatePresence>
              </tbody>
            </table>
          </div>

          {/* Empty State */}
          {myHabits.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <div className="text-gray-400 mb-4">
                <TrendingUp size={48} className="mx-auto" />
              </div>
              <p className="text-gray-500 text-lg">
                No habits yet. Start building your routine!
              </p>
            </motion.div>
          )}
        </motion.div>

        {/* Total */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-6 text-center text-sm text-gray-500"
        >
          Total Habits: {myHabits.length} | Keep building your consistency! 🎯
        </motion.div>
      </div>
    </div>
  );
};

export default MyHabit;
