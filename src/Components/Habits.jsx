import React from "react";
import { motion } from "framer-motion";
import { Clock, User, Mail, ChevronRight } from "lucide-react";
import {
  FaDumbbell,
  FaBook,
  FaWater,
  FaBed,
  FaAppleAlt,
  FaRunning,
} from "react-icons/fa";

const Habits = () => {
  const habits = [
    {
      id: 1,
      title: "Morning Workout",
      image:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&q=80",
      userName: "Sarah Johnson",
      userEmail: "sarah.j@example.com",
      reminderTime: "06:00 AM",
      icon: FaDumbbell,
      bgGradient: "from-orange-400 to-red-500",
    },
    {
      id: 2,
      title: "Daily Reading",
      image:
        "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600&q=80",
      userName: "Michael Chen",
      userEmail: "m.chen@example.com",
      reminderTime: "08:30 PM",
      icon: FaBook,
      bgGradient: "from-blue-400 to-indigo-500",
    },
    {
      id: 3,
      title: "Drink Water",
      image:
        "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=600&q=80",
      userName: "Emma Williams",
      userEmail: "emma.w@example.com",
      reminderTime: "10:00 AM",
      icon: FaWater,
      bgGradient: "from-cyan-400 to-blue-500",
    },
    {
      id: 4,
      title: "Sleep Early",
      image:
        "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=600&q=80",
      userName: "David Martinez",
      userEmail: "david.m@example.com",
      reminderTime: "10:30 PM",
      icon: FaBed,
      bgGradient: "from-purple-400 to-pink-500",
    },
    {
      id: 5,
      title: "Healthy Eating",
      image:
        "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&q=80",
      userName: "Olivia Brown",
      userEmail: "olivia.b@example.com",
      reminderTime: "12:00 PM",
      icon: FaAppleAlt,
      bgGradient: "from-green-400 to-emerald-500",
    },
    {
      id: 6,
      title: "Evening Run",
      image:
        "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=600&q=80",
      userName: "James Wilson",
      userEmail: "james.w@example.com",
      reminderTime: "06:00 PM",
      icon: FaRunning,
      bgGradient: "from-yellow-400 to-orange-500",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        type: "spring",
        stiffness: 60,
      },
    }),
  };

  return (
    <section className="w-full bg-gradient-to-br from-gray-50 to-gray-100 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Popular Habits
          </h2>
          <p className="text-gray-600 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto">
            Explore and track these amazing habits created by our community
            members
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {habits.map((habit, index) => {
            const IconComponent = habit.icon;
            return (
              <motion.div
                key={habit.id}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={habit.image}
                    alt={habit.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${habit.bgGradient} opacity-60`}
                  ></div>

                  {/* Icon Badge */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg"
                  >
                    <IconComponent className="w-6 h-6 text-gray-700" />
                  </motion.div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  {/* Habit Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                    {habit.title}
                  </h3>

                  {/* Creator Info */}
                  <div className="space-y-3 mb-5">
                    {/* User Name */}
                    <div className="flex items-center gap-3 text-gray-600">
                      <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center flex-shrink-0">
                        <User className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-sm font-medium truncate">
                        {habit.userName}
                      </span>
                    </div>

                    {/* User Email */}
                    <div className="flex items-center gap-3 text-gray-600">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-sm truncate">
                        {habit.userEmail}
                      </span>
                    </div>

                    {/* Reminder Time */}
                    <div className="flex items-center gap-3 text-gray-600">
                      <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-red-400 rounded-full flex items-center justify-center flex-shrink-0">
                        <Clock className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-sm font-medium">
                        {habit.reminderTime}
                      </span>
                    </div>
                  </div>

                  {/* View Details Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full bg-gradient-to-r ${habit.bgGradient} text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group/btn shadow-md hover:shadow-lg`}
                  >
                    View Details
                    <ChevronRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Habits;
