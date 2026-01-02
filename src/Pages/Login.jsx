import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { Eye, EyeOff, Mail, Lock, CheckCircle, AlertCircle } from "lucide-react";
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
    <div className="min-h-screen flex">
      {/* Left Panel - Hero Section */}
      <div className="hidden lg:flex lg:w-1/2 h-screen relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={login}
            alt="Productivity and Habits"
            className="w-full h-screen object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#1B3C53]/80 via-[#234C6A]/70 to-[#1B3C53]/80"></div>
        </div>

        <div className="relative z-10 flex flex-col justify-center items-center text-white p-12 w-full">
          <div className="text-center max-w-md">
            <div className="flex items-center justify-center mb-6 animate-bounce">
              <CheckCircle className="w-20 h-20 mb-2" strokeWidth={2.5} />
            </div>
            <h1
              className="font-bold text-6xl mb-6 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent"
              style={{ fontFamily: "cursive" }}
            >
              Habit Tracker
            </h1>
            <p className="text-xl leading-relaxed opacity-90">
              Build better habits, one day at a time. Track your progress and
              achieve your goals with consistency.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <div className="w-2 h-2 rounded-full bg-white/60 animate-pulse"></div>
              <div className="w-2 h-2 rounded-full bg-white/60 animate-pulse delay-75"></div>
              <div className="w-2 h-2 rounded-full bg-white/60 animate-pulse delay-150"></div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 opacity-20 flex items-end justify-around px-8 pb-4">
          <CheckCircle className="w-12 h-12 animate-pulse" />
          <CheckCircle className="w-16 h-16 animate-pulse delay-100" />
          <CheckCircle className="w-10 h-10 animate-pulse delay-200" />
          <CheckCircle className="w-14 h-14 animate-pulse delay-300" />
          <CheckCircle className="w-12 h-12 animate-pulse delay-75" />
        </div>
      </div>

      {/* Right Panel - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-gradient-to-br from-gray-50 to-white p-8">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 mb-4">
              <CheckCircle className="w-8 h-8 text-[#1B3C53]" />
              <div className="w-16 h-0.5 border-t-2 border-dotted border-[#1B3C53]"></div>
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-[#A3B18A] to-[#588157] bg-clip-text text-transparent mb-2">
              Welcome Back
            </h1>
            <p className="text-gray-500 text-sm">Login to continue your journey</p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-5">
            {/* Email Input */}
            <div>
              <label className="block text-xs font-semibold text-[#1B3C53] mb-2 uppercase tracking-wider">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <Mail className="w-5 h-5" />
                </div>
                <input
                  value={email}
                  onChange={handleEmailChange}
                  onBlur={() => validateEmail(email)}
                  type="email"
                  className={`w-full pl-12 pr-4 py-3 rounded-lg border-2 transition-all ${
                    emailError
                      ? "border-red-400 focus:border-red-500"
                      : email && !emailError
                      ? "border-green-400 focus:border-green-500"
                      : "border-gray-200 focus:border-[#1B3C53]"
                  } focus:outline-none`}
                  placeholder="john@example.com"
                  required
                />
                {email && !emailError && (
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 text-green-500">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                )}
              </div>
              {emailError && (
                <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {emailError}
                </p>
              )}
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-xs font-semibold text-[#1B3C53] mb-2 uppercase tracking-wider">
                Password
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <Lock className="w-5 h-5" />
                </div>
                <input
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError("");
                  }}
                  type={showPassword ? "text" : "password"}
                  className="w-full pl-12 pr-12 py-3 rounded-lg border-2 border-gray-200 focus:border-[#1B3C53] focus:outline-none transition-all"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? (
                    <Eye className="w-5 h-5" />
                  ) : (
                    <EyeOff className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Forgot Password */}
            <div className="text-right">
              <button
                type="button"
                onClick={handleForgetPass}
                className="text-sm text-[#588157] hover:text-[#A3B18A] transition-colors font-medium hover:underline"
              >
                Forgot your password?
              </button>
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-red-50 border-l-4 border-red-500 text-red-700 px-4 py-3 rounded-lg text-sm flex items-start gap-2 animate-shake">
                <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>{error}</span>
              </div>
            )}

            {/* Login Button */}
            <button
              type="submit"
              disabled={loading || !!emailError}
              className="w-full bg-gradient-to-r from-[#234C6A] to-[#1B3C53] text-white font-semibold py-3.5 rounded-lg transition-all shadow-md hover:shadow-xl hover:from-[#1B3C53] hover:to-[#234C6A] transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  <span>LOGGING IN...</span>
                </>
              ) : (
                "LOGIN"
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="relative py-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-gradient-to-br from-gray-50 to-white px-4 text-sm text-gray-500 font-medium">
                OR CONTINUE WITH
              </span>
            </div>
          </div>

          {/* Social Login Buttons */}
          <div className="space-y-3">
            <SocialLoginButton
              provider="google"
              onClick={() => handleSocialLogin("google", handleGoogleSignIn)}
              loading={socialLoading.google}
              disabled={loading || socialLoading.google}
            />
          </div>

          {/* Demo User Button */}
          <div className="mt-6">
            <button
              type="button"
              onClick={handleDemoLogin}
              disabled={loading}
              className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-[#A3B18A] to-[#588157] text-white border-2 border-transparent rounded-lg py-3 transition-all hover:shadow-lg font-semibold transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {loading ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  <span>Logging in...</span>
                </>
              ) : (
                <>
                  <CheckCircle className="w-5 h-5" />
                  <span>Try Demo Account</span>
                </>
              )}
            </button>
            <p className="text-xs text-center text-gray-500 mt-2">
              Quick access with pre-filled credentials
            </p>
          </div>

          {/* Register Link */}
          <div className="text-center mt-8">
            <p className="text-gray-600">
              Don't have an account?{" "}
              <Link
                to="/auth/register"
                className="text-[#1B3C53] hover:text-[#588157] font-semibold hover:underline transition-colors"
              >
                Register Now
              </Link>
            </p>
          </div>

          {/* Mobile Decorative Icons */}
          <div className="lg:hidden mt-8 flex justify-center gap-4 opacity-10">
            <CheckCircle className="w-8 h-8 text-[#1B3C53]" />
            <CheckCircle className="w-10 h-10 text-[#1B3C53]" />
            <CheckCircle className="w-8 h-8 text-[#1B3C53]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
