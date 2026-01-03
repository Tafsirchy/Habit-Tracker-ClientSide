import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";
import { Eye, EyeOff, User, Mail, Image as ImageIcon, Lock, CheckCircle, AlertCircle, Trophy, Flame } from "lucide-react";
import { motion } from "framer-motion";
import Loading from "../Components/Loading";
import PasswordStrengthMeter from "../Components/PasswordStrengthMeter";
import SocialLoginButton from "../Components/SocialLoginButton";
import register from "../assets/register.jpg";

const Register = () => {
  const { createUser, setUser, handleGoogleSignIn, updateUser, signIn } =
    useContext(AuthContext);

  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    photo: "",
    password: "",
    confirmPassword: "",
  });
  const [validationErrors, setValidationErrors] = useState({});
  const [socialLoading, setSocialLoading] = useState({ google: false });

  const location = useLocation();
  const navigate = useNavigate();

  // Validation functions
  const validateName = (name) => {
    if (!name) return "";
    if (name.length < 2) return "Name must be at least 2 characters";
    if (name.length > 50) return "Name must be less than 50 characters";
    return "";
  };

  const validateEmail = (email) => {
    if (!email) return "";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return "Please enter a valid email address";
    return "";
  };

  const validatePhotoURL = (url) => {
    if (!url) return "";
    try {
      new URL(url);
      return "";
    } catch {
      return "Please enter a valid URL";
    }
  };

  const validatePassword = (password) => {
    if (!password) return "";
    if (password.length < 6) return "Password must be at least 6 characters";
    if (!/[A-Z]/.test(password)) return "Password must contain at least one uppercase letter";
    if (!/[a-z]/.test(password)) return "Password must contain at least one lowercase letter";
    return "";
  };

  const validateConfirmPassword = (password, confirmPassword) => {
    if (!confirmPassword) return "";
    if (password !== confirmPassword) return "Passwords do not match";
    return "";
  };

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
    setError("");

    // Real-time validation
    let error = "";
    switch (field) {
      case "name":
        error = validateName(value);
        break;
      case "email":
        error = validateEmail(value);
        break;
      case "photo":
        error = validatePhotoURL(value);
        break;
      case "password":
        error = validatePassword(value);
        // Also revalidate confirm password if it exists
        if (formData.confirmPassword) {
          setValidationErrors({
            ...validationErrors,
            confirmPassword: validateConfirmPassword(value, formData.confirmPassword),
          });
        }
        break;
      case "confirmPassword":
        error = validateConfirmPassword(formData.password, value);
        break;
    }

    setValidationErrors({ ...validationErrors, [field]: error });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    // Validate all fields
    const errors = {
      name: validateName(formData.name),
      email: validateEmail(formData.email),
      photo: validatePhotoURL(formData.photo),
      password: validatePassword(formData.password),
      confirmPassword: validateConfirmPassword(formData.password, formData.confirmPassword),
    };

    setValidationErrors(errors);

    // Check if there are any errors
    if (Object.values(errors).some((err) => err !== "")) {
      setError("Please fix all validation errors before submitting");
      return;
    }

    setLoading(true);

    createUser(formData.email, formData.password)
      .then(() => {
        return updateUser({
          displayName: formData.name,
          photoURL: formData.photo,
        });
      })
      .then(() => {
        toast.success("Registration successful! Welcome aboard! 🎉", {
          position: "top-right",
          autoClose: 3000,
        });
        navigate(location.state || "/");
      })
      .catch((err) => {
        setLoading(false);

        if (err.code === "auth/email-already-in-use") {
          setError("This email is already registered. Please login instead.");
          setValidationErrors({ ...validationErrors, email: "Email already in use" });
        } else if (err.code === "auth/weak-password") {
          setError("Password is too weak. Please use a stronger password.");
        } else {
          setError("Registration failed. Please try again.");
        }
      });
  };

  const handleSocialSignUp = (provider, signInMethod) => {
    setSocialLoading({ ...socialLoading, [provider]: true });
    setError("");

    signInMethod()
      .then(() => {
        toast.success(`Signed up with ${provider.charAt(0).toUpperCase() + provider.slice(1)} successfully! 🎉`, {
          position: "top-right",
          autoClose: 3000,
        });
        navigate(location.state || "/");
      })
      .catch((err) => {
        console.log(err);
        if (err.code === "auth/popup-closed-by-user") {
          setError("Sign-up cancelled. Please try again.");
        } else if (err.code === "auth/account-exists-with-different-credential") {
          setError("An account already exists with this email. Try signing in instead.");
        } else {
          setError(`Failed to sign up with ${provider}. Please try again.`);
        }
      })
      .finally(() => setSocialLoading({ ...socialLoading, [provider]: false }));
  };

  const handleDemoLogin = () => {
    const demoEmail = "demo@habittracker.com";
    const demoPassword = "Demo@123";

    setFormData({ ...formData, email: demoEmail, password: demoPassword });
    setError("");
    setValidationErrors({});
    
    setTimeout(() => {
      setLoading(true);

      createUser(demoEmail, demoPassword)
        .then(() => {
          toast.success("Demo session initialized! Enjoy the experience! 🚀", {
            position: "top-right",
            autoClose: 3000,
          });
          navigate(location.state || "/");
        })
        .catch((error) => {
          // If already exists, just sign in
          signIn(demoEmail, demoPassword)
            .then(() => {
              toast.success("Welcome back to Demo mode! 🚀", {
                position: "top-right",
                autoClose: 3000,
              });
              navigate(location.state || "/");
            })
            .catch(() => {
              setError("Demo system offline. Please use standard registration.");
            });
        })
        .finally(() => setLoading(false));
    }, 300);
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-[var(--color-bg-primary)] selection:bg-[var(--color-primary-medium)]/30">
      {/* Left Panel - Immersive Hero Section */}
      <div className="hidden lg:block sticky top-0 h-screen overflow-hidden bg-[#0a0f18]">
        {/* Dynamic Background Elements */}
        <div className="absolute inset-0 z-0">
          <img
            src={register}
            alt="Growth"
            className="w-full h-full object-cover opacity-10 filter grayscale contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f18] via-[#588157]/40 to-[#0a0f18]/90"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(88,129,87,0.3),transparent_70%)]"></div>
        </div>

        {/* Animated Background Orbs */}
        <motion.div
           animate={{
             scale: [1, 1.2, 1],
             opacity: [0.1, 0.2, 0.1],
           }}
           transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
           className="absolute top-1/4 -right-20 w-[400px] h-[400px] bg-emerald-500/20 blur-[100px] rounded-full"
        />
        <motion.div
           animate={{
             scale: [1.2, 1, 1.2],
             opacity: [0.05, 0.15, 0.05],
           }}
           transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
           className="absolute -bottom-1/4 -left-20 w-[400px] h-[400px] bg-green-500/10 blur-[80px] rounded-full"
        />

        {/* Content Centering Wrapper */}
        <div className="relative h-full z-30 flex flex-col items-center justify-center p-12 text-center">
            {/* Logo Mark */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-green-600 rounded-3xl shadow-[0_20px_50px_rgba(88,129,87,0.4)] flex items-center justify-center mb-8 mt-2 group"
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
                Begin Your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-green-300 to-teal-400">Growth Journey</span>
              </h1>
              <p className="text-lg text-white/50 font-medium leading-relaxed mb-12">
                Join a community of high-performers tracking their habits and reaching their full potential together.
              </p>

              {/* Achievement Widget */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="inline-flex items-center gap-4 p-4 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10"
              >
                <div className="w-10 h-10 bg-yellow-500/20 rounded-xl flex items-center justify-center">
                   <Trophy className="text-yellow-400 w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] font-black text-white/40 uppercase tracking-widest">Active Community</p>
                  <p className="text-sm font-black text-white">50k+ Habit Achievers</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Bottom Branding */}
            <div className="absolute bottom-12 left-12 flex items-center gap-2">
               <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
               <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">Habit Tracker Pro v4.1</span>
            </div>
        </div>
      </div>

      {/* Right Panel - Premium Registration Form */}
      <div className="w-full min-h-screen flex flex-col bg-[var(--color-bg-primary)] p-6 sm:p-12 lg:p-24 relative overflow-y-auto">
         {/* Subtle Decorative Gradient */}
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-500/5 blur-[120px] rounded-full pointer-events-none"></div>
         <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none"></div>

         <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full max-w-sm mx-auto relative z-10 py-12"
        >
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-5xl font-black text-[var(--color-text-primary)] tracking-tight mb-4">
              Create Account
            </h1>
            <p className="text-[var(--color-text-secondary)] font-medium text-base leading-relaxed opacity-70">
              Start your journey to peak performance.
            </p>
          </div>

          <form onSubmit={handleRegister} className="space-y-10">
            <div className="grid grid-cols-1 gap-8">
              {/* Name Input */}
              <div className="group">
                <label className="block text-[12px] font-bold text-[var(--color-text-tertiary)] mb-3 uppercase tracking-widest group-focus-within:text-[var(--color-primary-medium)] transition-colors">
                  Full Name
                </label>
                <div className="relative">
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[var(--color-primary-medium)] transition-colors">
                    <User className="w-5 h-5" />
                  </div>
                  <input
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className={`w-full bg-transparent border-b-2 py-4 pl-9 transition-all duration-500 outline-none ${
                        validationErrors.name
                          ? "border-red-500/50"
                          : formData.name && !validationErrors.name
                          ? "border-green-500/50"
                          : "border-[var(--color-border)] focus:border-[var(--color-primary-medium)]"
                      } text-[var(--color-text-primary)] font-semibold text-xl placeholder:text-[var(--color-text-tertiary)]/40`}
                    placeholder="e.g. John Doe"
                    required
                  />
                  {formData.name && !validationErrors.name && (
                    <CheckCircle className="absolute right-0 top-1/2 -translate-y-1/2 w-5 h-5 text-green-500/50" />
                  )}
                </div>
                {validationErrors.name && (
                   <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-500 text-[10px] font-black mt-3 flex items-center gap-1.5 uppercase tracking-wider">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {validationErrors.name}
                   </motion.p>
                )}
              </div>

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
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className={`w-full bg-transparent border-b-2 py-4 pl-9 transition-all duration-500 outline-none ${
                        validationErrors.email
                          ? "border-red-500/50"
                          : formData.email && !validationErrors.email
                          ? "border-green-500/50"
                          : "border-[var(--color-border)] focus:border-[var(--color-primary-medium)]"
                      } text-[var(--color-text-primary)] font-semibold text-xl placeholder:text-[var(--color-text-tertiary)]/40`}
                    placeholder="name@example.com"
                    required
                  />
                  {formData.email && !validationErrors.email && (
                    <CheckCircle className="absolute right-0 top-1/2 -translate-y-1/2 w-5 h-5 text-green-500/50" />
                  )}
                </div>
                {validationErrors.email && (
                   <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-500 text-[10px] font-black mt-3 flex items-center gap-1.5 uppercase tracking-wider">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {validationErrors.email}
                   </motion.p>
                )}
              </div>

              {/* Photo Input */}
              <div className="group">
                <label className="block text-[12px] font-bold text-[var(--color-text-tertiary)] mb-3 uppercase tracking-widest group-focus-within:text-[var(--color-primary-medium)] transition-colors">
                   Profile Photo URL
                </label>
                <div className="relative">
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[var(--color-primary-medium)] transition-colors">
                    <ImageIcon className="w-5 h-5" />
                  </div>
                  <input
                    name="photo"
                    type="text"
                    value={formData.photo}
                    onChange={(e) => handleInputChange("photo", e.target.value)}
                    className={`w-full bg-transparent border-b-2 py-4 pl-9 transition-all duration-500 outline-none ${
                        validationErrors.photo
                          ? "border-red-500/50"
                          : formData.photo && !validationErrors.photo
                          ? "border-green-500/50"
                          : "border-[var(--color-border)] focus:border-[var(--color-primary-medium)]"
                      } text-[var(--color-text-primary)] font-semibold text-xl placeholder:text-[var(--color-text-tertiary)]/40`}
                    placeholder="https://example.com/photo.jpg"
                    required
                  />
                  {formData.photo && !validationErrors.photo && (
                    <CheckCircle className="absolute right-0 top-1/2 -translate-y-1/2 w-5 h-5 text-green-500/50" />
                  )}
                </div>
              </div>

              {/* Password Input */}
              <div className="group">
                 <label className="block text-[12px] font-bold text-[var(--color-text-tertiary)] mb-3 uppercase tracking-widest group-focus-within:text-[var(--color-primary-medium)] transition-colors">
                   Password
                </label>
                <div className="relative">
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[var(--color-primary-medium)] transition-colors">
                    <Lock className="w-5 h-5" />
                  </div>
                  <input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={(e) => handleInputChange("password", e.target.value)}
                    className={`w-full bg-transparent border-b-2 py-4 pl-9 transition-all duration-500 outline-none ${
                        validationErrors.password
                          ? "border-red-500/50"
                          : formData.password && !validationErrors.password
                          ? "border-green-500/50"
                          : "border-[var(--color-border)] focus:border-[var(--color-primary-medium)]"
                      } text-[var(--color-text-primary)] font-semibold text-xl placeholder:text-[var(--color-text-tertiary)]/40`}
                    placeholder="Enter a strong password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[var(--color-primary-medium)] transition-colors"
                  >
                    {showPassword ? <Eye className="w-5 h-5" /> : <EyeOff className="w-5 h-5" />}
                  </button>
                  {formData.password && !validationErrors.password && (
                    <CheckCircle className="absolute right-8 top-1/2 -translate-y-1/2 w-5 h-5 text-green-500/50" />
                  )}
                </div>
                <PasswordStrengthMeter password={formData.password} />
              </div>

              {/* Confirm Password */}
              <div className="group">
                 <label className="block text-[12px] font-bold text-[var(--color-text-tertiary)] mb-3 uppercase tracking-widest group-focus-within:text-[var(--color-primary-medium)] transition-colors">
                   Confirm Password
                </label>
                <div className="relative">
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[var(--color-primary-medium)] transition-colors">
                    <Lock className="w-5 h-5" />
                  </div>
                  <input
                    name="confirmPassword"
                    type={showPassword ? "text" : "password"}
                    value={formData.confirmPassword}
                    onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                    className={`w-full bg-transparent border-b-2 py-4 pl-9 transition-all duration-500 outline-none ${
                        validationErrors.confirmPassword
                          ? "border-red-500/50"
                          : formData.confirmPassword && !validationErrors.confirmPassword
                          ? "border-green-500/50"
                          : "border-[var(--color-border)] focus:border-[var(--color-primary-medium)]"
                      } text-[var(--color-text-primary)] font-semibold text-xl placeholder:text-[var(--color-text-tertiary)]/40`}
                    placeholder="Repeat your password"
                    required
                  />
                  {formData.confirmPassword && !validationErrors.confirmPassword && (
                    <CheckCircle className="absolute right-0 top-1/2 -translate-y-1/2 w-5 h-5 text-green-500/50" />
                  )}
                </div>
              </div>
            </div>

            {error && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1 }} className="bg-red-500/5 border border-red-500/10 text-red-500 p-4 rounded-xl text-[11px] font-black uppercase tracking-widest flex items-center gap-3">
                 <div className="p-1 rounded-full bg-red-500/20">
                    <AlertCircle className="w-4 h-4" />
                 </div>
                 <span>{error}</span>
              </motion.div>
            )}

            <motion.button
              whileHover={{ scale: 1.01, y: -2 }}
              whileTap={{ scale: 0.99 }}
              type="submit"
              disabled={loading || Object.values(validationErrors).some((err) => err !== "")}
              className="w-full bg-gradient-to-r from-emerald-600 to-green-700 hover:from-emerald-500 hover:to-green-600 text-white font-black py-5 rounded-2xl transition-all shadow-[0_20px_50px_rgba(16,185,129,0.25)] hover:shadow-[0_25px_60px_rgba(16,185,129,0.35)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 tracking-[0.1em] text-sm"
            >
              {loading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span className="text-white/90">Processing...</span>
                </>
              ) : (
                <>
                  <span className="text-white">Create Account</span>
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
                onClick={() => handleSocialSignUp("google", handleGoogleSignIn)}
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

          {/* Login Link */}
          <div className="text-center mt-12 pt-8 border-t border-[var(--color-border)]">
            <p className="text-[var(--color-text-secondary)] font-bold text-sm leading-loose">
              Already have an account?{" "}
              <Link
                to="/auth/login"
                className="text-[var(--color-text-primary)] hover:text-[var(--color-primary-medium)] font-black ml-1 transition-colors border-b-2 border-current"
              >
                Sign In
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Register;
