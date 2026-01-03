import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { Eye, EyeOff, Mail, Lock, CheckCircle, AlertCircle, Trophy, Flame } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import Loading from "../Components/Loading";
import SocialLoginButton from "../Components/SocialLoginButton";
import login from "../assets/login.jpeg";

const Login = () => {
  const { signIn, handleGoogleSignIn } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [socialLoading, setSocialLoading] = useState({ google: false });

  const location = useLocation();
  const navigate = useNavigate();

  // Email validation
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setEmailError("");
      return false;
    }
    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address");
      return false;
    }
    setEmailError("");
    return true;
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setError("");
    if (value) validateEmail(value);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setError("");
    
    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    if (!password) {
      setError("Please enter your password");
      return;
    }

    setLoading(true);

    signIn(email, password)
      .then(() => {
        toast.success("Login successful! Welcome back! 🎉", {
          position: "top-right",
          autoClose: 3000,
        });
        setEmail("");
        setPassword("");
        navigate(location.state || "/");
      })
      .catch((error) => {
        if (error.code === "auth/wrong-password" || error.code === "auth/invalid-credential") {
          setError("Incorrect email or password. Please try again.");
        } else if (error.code === "auth/user-not-found") {
          setError("No account found with this email. Please register first.");
        } else if (error.code === "auth/invalid-email") {
          setError("Invalid email format.");
        } else if (error.code === "auth/too-many-requests") {
          setError("Too many failed attempts. Please try again later.");
        } else {
          setError("Login failed. Please check your credentials and try again.");
        }
      })
      .finally(() => setLoading(false));
  };

  const handleDemoLogin = () => {
    const demoEmail = "demo@habittracker.com";
    const demoPassword = "Demo@123";

    setEmail(demoEmail);
    setPassword(demoPassword);
    setError("");
    setEmailError("");
    
    // Add a small delay for visual feedback
    setTimeout(() => {
      setLoading(true);

      signIn(demoEmail, demoPassword)
        .then(() => {
          toast.success("Demo login successful! Explore the app! 🚀", {
            position: "top-right",
            autoClose: 3000,
          });
          navigate(location.state || "/");
        })
        .catch((error) => {
          setError(
            "Demo user not available. Please use Google sign-in or create an account."
          );
        })
        .finally(() => setLoading(false));
    }, 300);
  };

  const handleSocialLogin = (provider, signInMethod) => {
    setSocialLoading({ ...socialLoading, [provider]: true });
    setError("");

    signInMethod()
      .then(() => {
        toast.success(`Signed in with ${provider.charAt(0).toUpperCase() + provider.slice(1)} successfully! 🎉`, {
          position: "top-right",
          autoClose: 3000,
        });
        navigate(location.state || "/");
      })
      .catch((err) => {
        console.log(err);
        if (err.code === "auth/popup-closed-by-user") {
          setError("Sign-in cancelled. Please try again.");
        } else if (err.code === "auth/account-exists-with-different-credential") {
          setError("An account already exists with the same email. Try a different sign-in method.");
        } else {
          setError(`Failed to sign in with ${provider}. Please try again.`);
        }
      })
      .finally(() => setSocialLoading({ ...socialLoading, [provider]: false }));
  };

  const handleForgetPass = () => {
    navigate(`/forgetPass/${email}`);
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-[var(--color-bg-primary)] selection:bg-[var(--color-primary-medium)]/30">
      {/* Left Panel - Immersive Hero Section */}
      <div className="hidden lg:block sticky top-0 h-screen overflow-hidden bg-[#0a0f18]">
        {/* Dynamic Background Elements */}
        <div className="absolute inset-0 z-0">
          <img
            src={login}
            alt="Productivity"
            className="w-full h-full object-cover opacity-10 filter grayscale contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f18] via-[#1B3C53]/40 to-[#0a0f18]/90"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(35,76,106,0.3),transparent_70%)]"></div>
        </div>

        {/* Animated Background Orbs */}
        <motion.div
           animate={{
             scale: [1, 1.2, 1],
             opacity: [0.1, 0.2, 0.1],
           }}
           transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
           className="absolute top-1/4 -right-20 w-[400px] h-[400px] bg-blue-500/20 blur-[100px] rounded-full"
        />
        <motion.div
           animate={{
             scale: [1.2, 1, 1.2],
             opacity: [0.05, 0.15, 0.05],
           }}
           transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
           className="absolute -bottom-1/4 -left-20 w-[400px] h-[400px] bg-purple-500/10 blur-[80px] rounded-full"
        />

        {/* Content Centering Wrapper */}
        <div className="relative h-full z-30 flex flex-col items-center justify-center p-12 text-center">
            {/* Logo Mark */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="w-20 h-20 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-3xl shadow-[0_20px_50px_rgba(35,76,106,0.5)] flex items-center justify-center mb-10 group"
            >
              <CheckCircle className="w-10 h-10 text-white group-hover:rotate-12 transition-transform duration-500" strokeWidth={2.5} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="max-w-md"
            >
              <h1 className="text-4xl lg:text-5xl font-black text-white mb-6 leading-[1.1] tracking-tighter">
                Master Your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400">Daily Habits</span>
              </h1>
              <p className="text-lg text-white/50 font-medium leading-relaxed mb-12">
                Join thousands of users building better routines and tracking their progress every single day.
              </p>

              {/* Floating Performance Indicator */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="inline-flex items-center gap-6 p-1 pr-6 bg-white/5 backdrop-blur-xl rounded-full border border-white/10"
              >
                <div className="flex -space-x-3 ml-1">
                   {[1,2,3].map(i => (
                     <div key={i} className="w-10 h-10 rounded-full border-2 border-[#0a0f18] bg-gray-600 overflow-hidden ring-2 ring-blue-500/20">
                        <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="user" className="w-full h-full object-cover" />
                     </div>
                   ))}
                </div>
                <div className="text-left">
                  <p className="text-xs font-black text-white tracking-widest uppercase">Success Rate</p>
                  <p className="text-[10px] text-white/40 font-bold">98% Habit Consistency</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Bottom Branding */}
            <div className="absolute bottom-12 left-12 flex items-center gap-2">
               <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
               <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">Advanced Habit Engine v2.0</span>
            </div>
        </div>
      </div>

      {/* Right Panel - Premium Login Form */}
      <div className="w-full min-h-screen flex flex-col justify-center bg-[var(--color-bg-primary)] p-6 sm:p-12 lg:p-24 relative overflow-y-auto">
        {/* Subtle Decorative Gradient */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none"></div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full max-w-sm mx-auto relative z-10"
        >
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-5xl font-black text-[var(--color-text-primary)] tracking-tight mb-4">
              Sign In
            </h1>
            <p className="text-[var(--color-text-secondary)] font-medium text-base leading-relaxed opacity-70">
              Welcome back! Please enter your credentials.
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-10">
            <div className="grid grid-cols-1 gap-8">
              {/* Email Input */}
              <div className="group">
                <label className="block text-[12px] font-bold text-[var(--color-text-tertiary)] mb-3 uppercase tracking-widest group-focus-within:text-[var(--color-primary-medium)] transition-colors">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[var(--color-primary-medium)] transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <input
                    value={email}
                    onChange={handleEmailChange}
                    onBlur={() => validateEmail(email)}
                    type="email"
                    className={`w-full bg-transparent border-b-2 py-4 pl-9 transition-all duration-500 outline-none ${
                      emailError
                        ? "border-red-500/50"
                        : email && !emailError
                        ? "border-green-500/50"
                        : "border-[var(--color-border)] focus:border-[var(--color-primary-medium)]"
                    } text-[var(--color-text-primary)] font-semibold text-xl placeholder:text-[var(--color-text-tertiary)]/40`}
                    placeholder="e.g. name@example.com"
                    required
                  />
                  {email && !emailError && (
                    <CheckCircle className="absolute right-0 top-1/2 -translate-y-1/2 w-5 h-5 text-green-500/50" />
                  )}
                </div>
                {emailError && (
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-red-500 text-[10px] font-black mt-3 flex items-center gap-1.5 uppercase tracking-wider"
                  >
                    <AlertCircle className="w-3.5 h-3.5" />
                    {emailError}
                  </motion.p>
                )}
              </div>

              {/* Password Input */}
              <div className="group">
                <div className="flex items-center justify-between mb-3">
                    <label className="text-[12px] font-bold text-[var(--color-text-tertiary)] uppercase tracking-widest group-focus-within:text-[var(--color-primary-medium)] transition-colors">
                      Password
                    </label>
                    <button
                        type="button"
                        onClick={handleForgetPass}
                        className="text-[11px] font-bold text-[var(--color-primary-medium)] hover:text-[var(--color-primary-dark)] transition-colors"
                    >
                        Forgot password?
                    </button>
                </div>
                <div className="relative">
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[var(--color-primary-medium)] transition-colors">
                    <Lock className="w-5 h-5" />
                  </div>
                  <input
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setError("");
                    }}
                    type={showPassword ? "text" : "password"}
                    className={`w-full bg-transparent border-b-2 py-4 pl-9 transition-all duration-500 outline-none ${
                        password && password.length >= 6
                          ? "border-green-500/50"
                          : password && password.length < 6
                          ? "border-red-500/50"
                          : "border-[var(--color-border)] focus:border-[var(--color-primary-medium)]"
                      } text-[var(--color-text-primary)] font-semibold text-xl placeholder:text-[var(--color-text-tertiary)]/40`}
                    placeholder="••••••••"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[var(--color-primary-medium)] transition-colors"
                  >
                    {showPassword ? <Eye className="w-5 h-5" /> : <EyeOff className="w-5 h-5" />}
                  </button>
                </div>
              </div>
            </div>

            {error && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-500/5 border border-red-500/10 text-red-500 p-4 rounded-xl text-[11px] font-black uppercase tracking-widest flex items-center gap-3"
              >
                <div className="p-1 rounded-full bg-red-500/20">
                    <AlertCircle className="w-4 h-4" />
                </div>
                <span>{error}</span>
              </motion.div>
            )}

            {/* Login Button */}
            <motion.button
              whileHover={{ scale: 1.01, y: -2 }}
              whileTap={{ scale: 0.99 }}
              type="submit"
              disabled={loading || !!emailError}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-500 hover:to-indigo-600 text-white font-black py-5 rounded-2xl transition-all shadow-[0_20px_50px_rgba(37,99,235,0.25)] hover:shadow-[0_25px_60px_rgba(37,99,235,0.35)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 tracking-[0.1em] text-sm"
            >
              {loading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span className="text-white/90">Authorizing...</span>
                </>
              ) : (
                <>
                  <span className="text-white">Sign In</span>
                  <CheckCircle className="w-4 h-4 text-white/50" />
                </>
              )}
            </motion.button>
          </form>

          {/* Alternative Methods */}
          <div className="mt-16">
            <div className="relative mb-10 text-center">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[var(--color-border)] opacity-30"></div>
              </div>
              <span className="relative px-6 bg-[var(--color-bg-primary)] text-[10px] font-black text-[var(--color-text-tertiary)] uppercase tracking-[0.4em]">
                Or continue with
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <SocialLoginButton
                provider="google"
                onClick={() => handleSocialLogin("google", handleGoogleSignIn)}
                loading={socialLoading.google}
                disabled={loading || socialLoading.google}
                />
                <button
                type="button"
                onClick={handleDemoLogin}
                disabled={loading}
                className="w-full flex items-center justify-center gap-2.5 bg-[var(--color-bg-secondary)] text-[var(--color-primary-medium)] border-2 border-[var(--color-border)] rounded-2xl py-3.5 transition-all hover:bg-[var(--color-bg-tertiary)] hover:border-[var(--color-primary-medium)]/30 font-bold text-xs shadow-sm hover:shadow-xl group"
                >
                <div className="p-1 rounded-lg bg-green-500/10 group-hover:bg-green-500/20 transition-colors">
                    <CheckCircle className="w-3.5 h-3.5 text-green-500" />
                </div>
                <span>Demo Account</span>
                </button>
            </div>
          </div>

          {/* Register Link */}
          <div className="text-center mt-12 pt-8 border-t border-[var(--color-border)]">
            <p className="text-[var(--color-text-secondary)] font-bold text-sm leading-loose">
              Don't have an account?{" "}
              <Link
                to="/auth/register"
                className="text-[var(--color-text-primary)] hover:text-[var(--color-primary-medium)] font-black ml-1 transition-colors border-b-2 border-current"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
