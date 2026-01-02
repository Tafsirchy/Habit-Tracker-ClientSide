import React, { useContext, useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  User,
  Mail,
  Camera,
  Save,
  Sparkles,
  Shield,
  Award,
  Target,
} from "lucide-react";
import { AuthContext } from "../Provider/AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Profile = () => {
  const { user, updateUser, setUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [displayName, setDisplayName] = useState("");
  const [photoURL, setPhotoURL] = useState("");

  // Initialize form with user data
  useEffect(() => {
    if (user) {
      setDisplayName(user.displayName || "");
      setPhotoURL(user.photoURL || "");
    }
  }, [user]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    
    if (!displayName.trim()) {
      toast.error("Display name is required!");
      return;
    }

    setLoading(true);

    try {
      // Update Firebase Auth profile
      await updateUser({ displayName, photoURL });

      // Update local user state
      setUser({ ...user, displayName, photoURL });

      toast.success("Profile updated successfully! ✔");
    } catch (error) {
      console.error("Update error:", error);
      toast.error("Failed to update profile. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <ToastContainer />
      <main className="min-h-screen bg-[var(--color-bg-secondary)] transition-colors duration-300 relative overflow-hidden">
        {/* Animated Background Elements */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 left-20 w-96 h-96 bg-purple-400 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-pink-400 rounded-full blur-3xl"
        />

        {/* Content Container */}
        <div className="relative z-10 py-12 px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header Section */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-8"
            >
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#1B3C53] to-[#234C6A] text-white px-6 py-2 rounded-full mb-4">
                <Shield size={20} />
                <span className="font-semibold">Account Settings</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-text-primary)] mb-3">
                My Profile
              </h1>
              <p className="text-[var(--color-text-secondary)] text-lg">
                Manage your account information and preferences
              </p>
            </motion.div>

            {/* Profile Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-[var(--color-bg-primary)] rounded-3xl shadow-2xl overflow-hidden border border-[var(--color-border)]"
            >
              <div className="grid md:grid-cols-5">
                {/* Left Side - Profile Image Preview */}
                <div className="md:col-span-2 bg-gradient-to-br from-[#1B3C53] to-[#234C6A] p-8 flex flex-col justify-center items-center relative overflow-hidden">
                  {/* Animated Background */}
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.1, 0.2, 0.1],
                    }}
                    transition={{ duration: 8, repeat: Infinity }}
                    className="absolute top-0 left-0 w-full h-full bg-white/10 rounded-full blur-3xl"
                  />

                  <div className="relative z-10 w-full">
                    {/* Profile Image */}
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="mb-6"
                    >
                      <div className="relative w-48 h-48 mx-auto">
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          className="w-full h-full rounded-full overflow-hidden border-4 border-white/30 shadow-2xl"
                        >
                          <img
                            src={
                              photoURL ||
                              user?.photoURL ||
                              "https://via.placeholder.com/200"
                            }
                            alt="Profile"
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.target.src = "https://via.placeholder.com/200";
                            }}
                          />
                        </motion.div>
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className="absolute bottom-2 right-2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg cursor-pointer"
                        >
                          <Camera className="text-[#1B3C53]" size={20} />
                        </motion.div>
                      </div>
                    </motion.div>

                    {/* User Info Display */}
                    <div className="text-center text-white mb-6">
                      <h3 className="text-2xl font-bold mb-1">
                        {displayName || user?.displayName || "User"}
                      </h3>
                      <p className="text-blue-100 text-sm">{user?.email}</p>
                    </div>

                    {/* Stats Cards */}
                    <div className="space-y-3">
                      <motion.div
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                            <Target className="text-white" size={20} />
                          </div>
                          <div>
                            <p className="text-white/80 text-xs">Member Since</p>
                            <p className="text-white font-semibold">
                              {new Date(
                                user?.metadata?.creationTime
                              ).toLocaleDateString("en-US", {
                                month: "short",
                                year: "numeric",
                              })}
                            </p>
                          </div>
                        </div>
                      </motion.div>

                      <motion.div
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                            <Award className="text-white" size={20} />
                          </div>
                          <div>
                            <p className="text-white/80 text-xs">Account Status</p>
                            <p className="text-white font-semibold">Active</p>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Right Side - Edit Form */}
                <div className="md:col-span-3 p-8 md:p-10">
                  <form onSubmit={handleUpdate} className="space-y-6">
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <label className="block text-sm font-semibold text-[var(--color-text-primary)] mb-2">
                        <span className="flex items-center gap-2">
                          <User size={18} className="text-[#234C6A]" />
                          Display Name
                        </span>
                      </label>
                      <input
                        type="text"
                        value={displayName}
                        onChange={(e) => setDisplayName(e.target.value)}
                        placeholder="Enter your name"
                        required
                        className="w-full px-4 py-3 border-2 border-[var(--color-border)] bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] rounded-xl focus:border-[#456882] focus:ring-4 focus:ring-[#456882]/20 outline-none transition-all"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.25 }}
                    >
                      <label className="block text-sm font-semibold text-[var(--color-text-primary)] mb-2">
                        <span className="flex items-center gap-2">
                          <Mail size={18} className="text-[#234C6A]" />
                          Email Address
                          <span className="text-xs text-[var(--color-text-tertiary)] font-normal">
                            (Read-only)
                          </span>
                        </span>
                      </label>
                      <input
                        type="email"
                        value={user?.email || ""}
                        readOnly
                        className="w-full px-4 py-3 border-2 bg-[var(--color-bg-secondary)] border-[var(--color-border)] rounded-xl text-[var(--color-text-secondary)] cursor-not-allowed"
                      />
                      <p className="text-xs text-[var(--color-text-tertiary)] mt-1">
                        Email cannot be changed for security reasons
                      </p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <label className="block text-sm font-semibold text-[var(--color-text-primary)] mb-2">
                        <span className="flex items-center gap-2">
                          <Camera size={18} className="text-[#234C6A]" />
                          Profile Photo URL
                        </span>
                      </label>
                      <input
                        type="url"
                        value={photoURL}
                        onChange={(e) => setPhotoURL(e.target.value)}
                        placeholder="https://example.com/photo.jpg"
                        className="w-full px-4 py-3 border-2 border-[var(--color-border)] bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] rounded-xl focus:border-[#456882] focus:ring-4 focus:ring-[#456882]/20 outline-none transition-all"
                      />
                      <p className="text-xs text-[var(--color-text-tertiary)] mt-1">
                        Enter a valid image URL to update your profile picture
                      </p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.35 }}
                      className="pt-4"
                    >
                      <motion.button
                        type="submit"
                        disabled={loading}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-gradient-to-r from-[#1B3C53] to-[#234C6A] text-white py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 hover:from-[#A3B18A] hover:to-[#234C6A]"
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
                            Updating Profile...
                          </>
                        ) : (
                          <>
                            <Save size={20} />
                            Update Profile
                          </>
                        )}
                      </motion.button>
                    </motion.div>
                  </form>

                  {/* Additional Info */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="mt-8 pt-6 border-t border-[var(--color-border)]"
                  >
                    <div className="flex items-start gap-3 text-sm text-[var(--color-text-secondary)]">
                      <Sparkles size={18} className="text-[#456882] flex-shrink-0 mt-0.5" />
                      <p>
                        Your profile information is securely stored and can be
                        updated anytime. Changes will be reflected across all
                        your habits and activities.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Footer Note */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-8 text-center"
            >
              <p className="text-[var(--color-text-secondary)] text-sm">
                🔒 Your data is protected and encrypted for your security
              </p>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
