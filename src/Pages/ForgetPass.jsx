import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { Mail, ArrowLeft } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import app from "../firebase/firebase.config";

const ForgetPass = () => {
  const { email } = useParams();
  const auth = getAuth(app);
  const navigate = useNavigate();

  const [formEmail, setFormEmail] = useState("");

  useEffect(() => {
    if (email) {
      setFormEmail(email);
    }
  }, [email]);

  const handleSubmit = (e) => {
    e.preventDefault();

    sendPasswordResetEmail(auth, formEmail)
      .then(() => {
        window.open("https://mail.google.com/mail/u/0/#inbox");
      })
      .catch(() => alert("Error sending email"));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      {/* Main Card */}
      <div className="bg-white px-10 py-5 rounded-2xl shadow-sm border border-gray-100 w-full max-w-md mx-4">
        {/* Illustration */}
        <div className="flex justify-center mb-2">
          <svg
            width="120"
            height="120"
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Mailbox illustration */}
            <rect
              x="30"
              y="50"
              width="60"
              height="40"
              rx="4"
              fill="#E5E7EB"
              stroke="#9CA3AF"
              strokeWidth="2"
            />
            <rect x="35" y="55" width="50" height="30" rx="2" fill="white" />
            <path
              d="M40 65 L60 75 L80 65"
              stroke="#9CA3AF"
              strokeWidth="2"
              fill="none"
            />
            <rect
              x="50"
              y="35"
              width="20"
              height="20"
              rx="2"
              fill="#F97316"
              stroke="#EA580C"
              strokeWidth="2"
            />
            <path
              d="M55 45 L60 50 L65 40"
              stroke="white"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Flag */}
            <rect x="85" y="40" width="3" height="30" fill="#6B7280" />
            <path d="M88 45 L100 48 L88 51 Z" fill="#EF4444" />
          </svg>
        </div>

        {/* Header */}
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
          Forgot your password?
        </h2>
        <p className="text-center text-sm text-gray-500 mb-5">
          Enter your email so that we can send you password reset link
        </p>

        {/* Form */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <Mail className="w-5 h-5" />
              </div>
              <input
                value={formEmail}
                onChange={(e) => setFormEmail(e.target.value)}
                type="email"
                required
                placeholder="e.g. username@kinetly.com"
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 focus:outline-none transition-all text-gray-700 placeholder-gray-400"
              />
            </div>
          </div>

          <button
            onClick={handleSubmit}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition-colors shadow-sm"
          >
            Send Email
          </button>

          {/* Back to Login */}
          <button
            type="button"
            onClick={() => navigate("/auth/login")}
            className="w-full flex items-center justify-center gap-2 text-gray-600 hover:text-gray-800 font-medium transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgetPass;
