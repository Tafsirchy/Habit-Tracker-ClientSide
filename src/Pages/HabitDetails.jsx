import { Award, Calendar, Flame, User, CheckCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Loading from "../Components/Loading";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

// Small spinner for the button (not full screen)
const SmallSpinner = () => (
  <span className="loading loading-spinner loading-sm text-white"></span>
);

const HabitDetails = () => {
  const { id } = useParams();
  const [habit, setHabit] = useState(null);
  const [loading, setLoading] = useState(true);
  const [buttonLoading, setButtonLoading] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);


   const categoryColors = {
     Fitness: "bg-green-100 text-green-700",
     Morning: "bg-blue-100 text-blue-700",
     Study: "bg-purple-100 text-purple-700",
     Evening: "bg-orange-100 text-orange-700",
     Work: "bg-yellow-100 text-yellow-700",

     // fallback
     Default: "bg-gray-100 text-gray-700",
   };


  // -------------------------------
  // Fetch Habit
  // -------------------------------
  useEffect(() => {
    fetch(`http://localhost:3000/habits/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setHabit(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <Loading />;

  if (!habit)
    return (
      <div className="h-screen flex items-center justify-center">
        Habit Not Found
      </div>
    );

  const last30Days = habit.completionHistory?.slice(-30) || [];
  const progressPercentage = Math.round((last30Days.length / 30) * 100);

  const today = new Date().toISOString().split("T")[0];
  const alreadyCompletedToday = habit.completionHistory?.includes(today);

  // ---------------------------------------------------------
  // HANDLE MARK COMPLETE (Instant UI Update)
  // ---------------------------------------------------------
  const handleMarkComplete = async () => {
    // Don't run twice
    if (alreadyCompletedToday) return;

    try {
      setButtonLoading(true);

      // Optimistic UI update BEFORE hitting server
      const updatedHistory = [...(habit.completionHistory || []), today];

      // Sort newest → oldest
      updatedHistory.sort((a, b) => new Date(b) - new Date(a));

      // Recalculate streak
      let streak = 1;
      for (let i = 1; i < updatedHistory.length; i++) {
        const prev = new Date(updatedHistory[i - 1]);
        const curr = new Date(updatedHistory[i]);
        const diff = (prev - curr) / (1000 * 60 * 60 * 24);
        if (diff === 1) streak++;
        else break;
      }

      // Apply instantly
      setHabit({
        ...habit,
        completionHistory: updatedHistory,
        daysCompleted: updatedHistory.length,
        currentStreak: streak,
      });
     

      // Hit server (sync)
      const res = await fetch(`http://localhost:3000/habits/${id}/complete`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
      });

      const freshHabit = await res.json();

      // Replace with server response to keep DB sync
      setHabit(freshHabit);

      // Celebration popup
      setShowCelebration(true);
      setTimeout(() => setShowCelebration(false), 2000);
    } catch (err) {
      console.error("Error:", err);
    } finally {
      setButtonLoading(false);
    }
  };

  return (
    <div>
      <Navbar />

      <main>
        <div className="min-h-screen bg-green-50 py-10 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              {/* Image */}
              <div className="h-72">
                <img
                  src={habit.img}
                  className="w-full h-full object-cover"
                  alt={habit.title}
                />
              </div>

              <div className="p-8">
                <span
                  className={`inline-block mb-2 px-3 py-1 text-sm rounded-full ${
                    categoryColors[habit.category] || categoryColors.Default
                  }`}
                >
                  {habit.category}
                </span>

                <h1 className="text-4xl font-bold text-green-900">
                  {habit.title}
                </h1>

                <p className="text-gray-700 mt-4">{habit.description}</p>

                {/* Progress & Streak */}
                <div className="grid md:grid-cols-2 gap-6 mt-10">
                  {/* Progress */}
                  <div className="bg-green-100 rounded-2xl p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar size={24} className="text-green-700" />
                      <h2 className="font-semibold text-lg">Progress</h2>
                    </div>

                    <p className="text-sm text-gray-700 mb-2">
                      {last30Days.length} / 30 days
                    </p>

                    <progress
                      max="30"
                      value={last30Days.length}
                      className="progress progress-success w-full"
                    ></progress>

                    <p className="text-green-900 font-bold mt-2">
                      {progressPercentage}%
                    </p>
                  </div>

                  {/* Streak */}
                  <div className="bg-orange-100 rounded-2xl p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Flame size={24} className="text-orange-600" />
                      <h2 className="font-semibold text-lg">Current Streak</h2>
                    </div>

                    <p className="text-5xl font-bold text-orange-600">
                      {habit.currentStreak || 0}
                    </p>

                    <p className="text-sm text-gray-700">days in a row 🔥</p>
                  </div>
                </div>

                {/* Creator */}
                <div className="bg-gray-50 mt-10 p-6 rounded-xl">
                  <div className="flex items-center gap-2 mb-1">
                    <User size={20} className="text-green-900" />
                    <h3 className="font-semibold">Created by</h3>
                  </div>
                  <p className="font-medium">{habit.name}</p>
                  <p className="text-sm text-gray-600">{habit.email}</p>
                </div>

                {/* Mark Complete */}
                <button
                  disabled={alreadyCompletedToday || buttonLoading}
                  onClick={handleMarkComplete}
                  className={`btn w-full mt-8 h-14 text-lg text-white flex justify-center items-center gap-2
                    ${
                      alreadyCompletedToday
                        ? "bg-gray-400"
                        : "bg-green-800 hover:bg-green-900"
                    }
                  `}
                >
                  {buttonLoading ? <SmallSpinner /> : <CheckCircle size={22} />}

                  {alreadyCompletedToday ? "Completed Today" : "Mark Complete"}
                </button>
              </div>
            </div>

            {/* Celebration Popup */}
            {showCelebration && (
              <div className="fixed inset-0 flex items-center justify-center bg-black/30">
                <div className="bg-white p-10 rounded-3xl text-center shadow-xl">
                  <div className="text-6xl animate-bounce">🎉</div>
                  <h2 className="text-3xl font-bold text-green-800 mt-2">
                    Habit Completed!
                  </h2>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HabitDetails;
