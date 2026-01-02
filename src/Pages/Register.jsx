import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";
import { Eye, EyeOff, User, Mail, Image as ImageIcon, Lock, CheckCircle, AlertCircle } from "lucide-react";
import Loading from "../Components/Loading";
import PasswordStrengthMeter from "../Components/PasswordStrengthMeter";
import SocialLoginButton from "../Components/SocialLoginButton";
import register from "../assets/register.jpg";

const Register = () => {
  const { createUser, setUser, handleGoogleSignIn, updateUser } =
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
        navigate("/");
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
        navigate("/");
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

  return (
    <div className="min-h-screen flex">
      {/* Left Panel - Hero Section */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1B3C53] via-[#234C6A] to-[#588157]">
          <img
            src={register}
            className="w-full h-full object-cover opacity-30 mix-blend-overlay"
            alt="Build Better Habits"
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center p-12">
          <div className="text-white text-center max-w-md">
            <div className="mb-6 animate-bounce">
              <CheckCircle className="w-20 h-20 mx-auto" strokeWidth={2.5} />
            </div>
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
              Start Your Journey
            </h1>
            <p className="text-xl opacity-90 leading-relaxed">
              Join thousands of users building better habits and achieving their goals every day.
            </p>
            <div className="mt-8 flex justify-center gap-3">
              <div className="w-3 h-3 rounded-full bg-white/60 animate-pulse"></div>
              <div className="w-3 h-3 rounded-full bg-white/60 animate-pulse delay-75"></div>
              <div className="w-3 h-3 rounded-full bg-white/60 animate-pulse delay-150"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel - Registration Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gradient-to-br from-gray-50 to-white overflow-y-auto">
        <div className="w-full max-w-md">
          <div className="mb-8 text-center">
            <div className="inline-flex items-center gap-2 mb-4">
              <CheckCircle className="w-8 h-8 text-[#1B3C53]" />
              <div className="w-16 h-0.5 border-t-2 border-dotted border-[#1B3C53]"></div>
            </div>
            <h2 className="text-5xl font-bold bg-gradient-to-r from-[#A3B18A] to-[#588157] bg-clip-text text-transparent mb-2">
              Create Account
            </h2>
            <p className="text-gray-500 text-sm">Join us and start tracking your habits</p>
          </div>

          <form onSubmit={handleRegister} className="space-y-4">
            {/* Name Input */}
            <div>
              <label className="block text-xs font-semibold text-[#1B3C53] mb-2 uppercase tracking-wider">
                Full Name
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <User className="w-5 h-5" />
                </div>
                <input
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className={`w-full pl-12 pr-4 py-3 rounded-lg border-2 transition-all ${
                    validationErrors.name
                      ? "border-red-400 focus:border-red-500"
                      : formData.name && !validationErrors.name
                      ? "border-green-400 focus:border-green-500"
                      : "border-gray-200 focus:border-[#1B3C53]"
                  } focus:outline-none`}
                  placeholder="John Doe"
                  required
                />
                {formData.name && !validationErrors.name && (
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 text-green-500">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                )}
              </div>
              {validationErrors.name && (
                <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {validationErrors.name}
                </p>
              )}
            </div>

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
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className={`w-full pl-12 pr-4 py-3 rounded-lg border-2 transition-all ${
                    validationErrors.email
                      ? "border-red-400 focus:border-red-500"
                      : formData.email && !validationErrors.email
                      ? "border-green-400 focus:border-green-500"
                      : "border-gray-200 focus:border-[#1B3C53]"
                  } focus:outline-none`}
                  placeholder="john@example.com"
                  required
                />
                {formData.email && !validationErrors.email && (
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 text-green-500">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                )}
              </div>
              {validationErrors.email && (
                <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {validationErrors.email}
                </p>
              )}
            </div>

            {/* Photo URL Input */}
            <div>
              <label className="block text-xs font-semibold text-[#1B3C53] mb-2 uppercase tracking-wider">
                Photo URL
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <ImageIcon className="w-5 h-5" />
                </div>
                <input
                  name="photo"
                  type="text"
                  value={formData.photo}
                  onChange={(e) => handleInputChange("photo", e.target.value)}
                  className={`w-full pl-12 pr-4 py-3 rounded-lg border-2 transition-all ${
                    validationErrors.photo
                      ? "border-red-400 focus:border-red-500"
                      : formData.photo && !validationErrors.photo
                      ? "border-green-400 focus:border-green-500"
                      : "border-gray-200 focus:border-[#1B3C53]"
                  } focus:outline-none`}
                  placeholder="https://example.com/photo.jpg"
                  required
                />
                {formData.photo && !validationErrors.photo && (
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 text-green-500">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                )}
              </div>
              {validationErrors.photo && (
                <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {validationErrors.photo}
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
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={(e) => handleInputChange("password", e.target.value)}
                  className={`w-full pl-12 pr-12 py-3 rounded-lg border-2 transition-all ${
                    validationErrors.password
                      ? "border-red-400 focus:border-red-500"
                      : formData.password && !validationErrors.password
                      ? "border-green-400 focus:border-green-500"
                      : "border-gray-200 focus:border-[#1B3C53]"
                  } focus:outline-none`}
                  placeholder="Create a strong password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? <Eye className="w-5 h-5" /> : <EyeOff className="w-5 h-5" />}
                </button>
              </div>
              {validationErrors.password && (
                <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {validationErrors.password}
                </p>
              )}
              <PasswordStrengthMeter password={formData.password} />
            </div>

            {/* Confirm Password Input */}
            <div>
              <label className="block text-xs font-semibold text-[#1B3C53] mb-2 uppercase tracking-wider">
                Confirm Password
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <Lock className="w-5 h-5" />
                </div>
                <input
                  name="confirmPassword"
                  type={showPassword ? "text" : "password"}
                  value={formData.confirmPassword}
                  onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                  className={`w-full pl-12 pr-4 py-3 rounded-lg border-2 transition-all ${
                    validationErrors.confirmPassword
                      ? "border-red-400 focus:border-red-500"
                      : formData.confirmPassword && !validationErrors.confirmPassword
                      ? "border-green-400 focus:border-green-500"
                      : "border-gray-200 focus:border-[#1B3C53]"
                  } focus:outline-none`}
                  placeholder="Confirm your password"
                  required
                />
                {formData.confirmPassword && !validationErrors.confirmPassword && (
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 text-green-500">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                )}
              </div>
              {validationErrors.confirmPassword && (
                <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {validationErrors.confirmPassword}
                </p>
              )}
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-red-50 border-l-4 border-red-500 text-red-700 px-4 py-3 rounded-lg text-sm flex items-start gap-2">
                <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>{error}</span>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading || Object.values(validationErrors).some((err) => err !== "")}
              className="w-full py-3.5 px-6 rounded-lg bg-gradient-to-r from-[#234C6A] to-[#1B3C53] text-white font-semibold hover:from-[#1B3C53] hover:to-[#234C6A] transition-all shadow-md hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
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
                  <span>CREATING ACCOUNT...</span>
                </>
              ) : (
                "Create Account"
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
                OR SIGN UP WITH
              </span>
            </div>
          </div>

          {/* Social Sign Up Buttons */}
          <div className="space-y-3">
            <SocialLoginButton
              provider="google"
              onClick={() => handleSocialSignUp("google", handleGoogleSignIn)}
              loading={socialLoading.google}
              disabled={loading || socialLoading.google}
            />
          </div>

          {/* Login Link */}
          <div className="text-center mt-6">
            <p className="text-gray-600 text-sm">
              Already have an account?{" "}
              <Link
                to="/auth/login"
                className="text-[#1B3C53] hover:text-[#588157] font-semibold hover:underline transition-colors"
              >
                Sign In →
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
