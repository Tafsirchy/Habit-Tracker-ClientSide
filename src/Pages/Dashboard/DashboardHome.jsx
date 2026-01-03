import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { 
  BarChart, Bar, LineChart, Line, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer 
} from "recharts";
import { 
  TrendingUp, Target, Calendar, Award, Activity, CheckCircle
} from "lucide-react";
import { motion } from "framer-motion";
import SkeletonLoader from "../../Components/SkeletonLoader";

const DashboardHome = () => {
  const { user } = useContext(AuthContext);
  const [habits, setHabits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    totalHabits: 0,
    completedToday: 0,
    currentStreak: 0,
    totalCompleted: 0,
  });

  useEffect(() => {
    if (user?.email) {
      fetch(`https://habittracker-weld.vercel.app/my-habits?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setHabits(data);
          calculateStats(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setLoading(false);
        });
    }
  }, [user]);

  const calculateStats = (habitsData) => {
    const today = new Date().toISOString().split("T")[0];
    
    const totalHabits = habitsData.length;
    const completedToday = habitsData.filter(h => 
      h.completionHistory?.includes(today)
    ).length;
    
    const maxStreak = Math.max(...habitsData.map(h => h.currentStreak || 0), 0);
    const totalCompleted = habitsData.reduce((sum, h) => sum + (h.daysCompleted || 0), 0);

    setStats({
      totalHabits,
      completedToday,
      currentStreak: maxStreak,
      totalCompleted,
    });
  };

  // Prepare chart data
  const categoryData = habits.reduce((acc, habit) => {
    const cat = habit.category || "Other";
    const existing = acc.find(item => item.name === cat);
    if (existing) {
      existing.value += 1;
    } else {
      acc.push({ name: cat, value: 1 });
    }
    return acc;
  }, []);

  const completionData = habits.slice(0, 7).map(habit => ({
    name: habit.title.substring(0, 15),
    completed: habit.daysCompleted || 0,
    streak: habit.currentStreak || 0,
  }));

  const COLORS = ["#1B3C53", "#A3B18A", "#234C6A", "#7D8A6A", "#456882", "#C8D5B9"];

  const overviewCards = [
    {
      title: "Total Habits",
      value: stats.totalHabits,
      icon: Target,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-100 dark:bg-blue-900",
    },
    {
      title: "Completed Today",
      value: stats.completedToday,
      icon: CheckCircle,
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-100 dark:bg-green-900",
    },
    {
      title: "Current Streak",
      value: `${stats.currentStreak} days`,
      icon: Award,
      color: "from-yellow-500 to-yellow-600",
      bgColor: "bg-yellow-100 dark:bg-yellow-900",
    },
    {
      title: "Total Completed",
      value: stats.totalCompleted,
      icon: Activity,
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-100 dark:bg-purple-900",
    },
  ];

  if (loading) {
    return (
      <div className="space-y-6">
        <SkeletonLoader type="rectangle" count={1} className="h-32" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <SkeletonLoader type="card" count={4} />
        </div>
      </div>
    );
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      {/* Welcome Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-[var(--color-primary-dark)] to-[var(--color-primary-medium)] rounded-2xl p-6 text-white shadow-lg"
      >
        <h1 className="text-3xl font-bold mb-2">
          Welcome back, {user?.displayName || "User"}! 👋
        </h1>
        <p className="text-gray-200">
          Here's your habit tracking overview for today
        </p>
      </motion.div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {overviewCards.map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-[var(--color-bg-primary)] rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-[var(--color-border)]"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-lg ${card.bgColor}`}>
                <card.icon className={`w-6 h-6 text-${card.color.split('-')[1]}-600`} />
              </div>
            </div>
            <h3 className="text-[var(--color-text-secondary)] text-sm font-medium mb-1">
              {card.title}
            </h3>
            <p className="text-[var(--color-text-primary)] text-2xl font-bold">
              {card.value}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Completion Chart */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-[var(--color-bg-primary)] rounded-xl p-6 shadow-md border border-[var(--color-border)]"
        >
          <h2 className="text-xl font-bold text-[var(--color-text-primary)] mb-4">
            Habit Completion Progress
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={completionData}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
              <XAxis dataKey="name" stroke="var(--color-text-secondary)" />
              <YAxis stroke="var(--color-text-secondary)" />
              <Tooltip 
                contentStyle={{
                  backgroundColor: "var(--color-bg-primary)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "8px",
                }}
              />
              <Legend />
              <Bar dataKey="completed" fill="#1B3C53" name="Days Completed" />
              <Bar dataKey="streak" fill="#A3B18A" name="Current Streak" />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Category Distribution */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-[var(--color-bg-primary)] rounded-xl p-6 shadow-md border border-[var(--color-border)]"
        >
          <h2 className="text-xl font-bold text-[var(--color-text-primary)] mb-4">
            Habits by Category
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={(entry) => entry.name}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{
                  backgroundColor: "var(--color-bg-primary)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "8px",
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      {/* Recent Habits Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-[var(--color-bg-primary)] rounded-xl p-6 shadow-md border border-[var(--color-border)]"
      >
        <h2 className="text-xl font-bold text-[var(--color-text-primary)] mb-4">
          Recent Habits Activity
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[var(--color-border)]">
                <th className="text-left py-3 px-4 text-[var(--color-text-primary)] font-semibold">
                  Habit Name
                </th>
                <th className="text-left py-3 px-4 text-[var(--color-text-primary)] font-semibold">
                  Category
                </th>
                <th className="text-left py-3 px-4 text-[var(--color-text-primary)] font-semibold">
                  Days Completed
                </th>
                <th className="text-left py-3 px-4 text-[var(--color-text-primary)] font-semibold">
                  Streak
                </th>
              </tr>
            </thead>
            <tbody>
              {habits.slice(0, 5).map((habit, index) => (
                <tr
                  key={habit._id}
                  className="border-b border-[var(--color-border)] hover:bg-[var(--color-bg-secondary)] transition-colors"
                >
                  <td className="py-3 px-4 text-[var(--color-text-primary)]">
                    {habit.title}
                  </td>
                  <td className="py-3 px-4 text-[var(--color-text-secondary)]">
                    <span className="px-3 py-1 rounded-full bg-[var(--color-bg-tertiary)] text-sm">
                      {habit.category || "N/A"}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-[var(--color-text-primary)] font-semibold">
                    {habit.daysCompleted || 0}
                  </td>
                  <td className="py-3 px-4">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-200 font-semibold text-sm whitespace-nowrap">
                      {habit.currentStreak || 0}<span className="hidden sm:inline"> days</span><span className="sm:hidden">d</span>
                    </span>
                  </td>
                </tr>
              ))}
              {habits.length === 0 && (
                <tr>
                  <td colSpan="4" className="text-center py-8 text-[var(--color-text-secondary)]">
                    No habits found. Start by adding your first habit!
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
};

export default DashboardHome;
