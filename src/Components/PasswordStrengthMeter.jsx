import React from "react";
import { Check, X } from "lucide-react";

const PasswordStrengthMeter = ({ password }) => {
  const requirements = [
    { label: "At least 6 characters", test: (pwd) => pwd.length >= 6 },
    { label: "One uppercase letter", test: (pwd) => /[A-Z]/.test(pwd) },
    { label: "One lowercase letter", test: (pwd) => /[a-z]/.test(pwd) },
    { label: "One number", test: (pwd) => /[0-9]/.test(pwd) },
  ];

  const getStrength = () => {
    if (!password) return { level: 0, text: "", color: "" };
    
    const passed = requirements.filter((req) => req.test(password)).length;
    
    if (passed <= 1) return { level: 25, text: "Weak", color: "bg-red-500" };
    if (passed === 2) return { level: 50, text: "Fair", color: "bg-orange-500" };
    if (passed === 3) return { level: 75, text: "Good", color: "bg-yellow-500" };
    return { level: 100, text: "Strong", color: "bg-green-500" };
  };

  const strength = getStrength();

  if (!password) return null;

  return (
    <div className="mt-3 space-y-2">
      {/* Strength Bar */}
      <div className="flex items-center gap-3">
        <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className={`h-full ${strength.color} transition-all duration-300 ease-out`}
            style={{ width: `${strength.level}%` }}
          />
        </div>
        {strength.text && (
          <span className={`text-sm font-semibold ${
            strength.level === 100 ? "text-green-600" :
            strength.level === 75 ? "text-yellow-600" :
            strength.level === 50 ? "text-orange-600" :
            "text-red-600"
          }`}>
            {strength.text}
          </span>
        )}
      </div>

      {/* Requirements Checklist */}
      <div className="grid grid-cols-2 gap-2 text-xs">
        {requirements.map((req, index) => {
          const passed = req.test(password);
          return (
            <div
              key={index}
              className={`flex items-center gap-1 transition-colors ${
                passed ? "text-green-600" : "text-gray-400"
              }`}
            >
              {passed ? (
                <Check className="w-3 h-3" />
              ) : (
                <X className="w-3 h-3" />
              )}
              <span>{req.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PasswordStrengthMeter;
