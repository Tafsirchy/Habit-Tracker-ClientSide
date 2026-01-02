import React from "react";
import { Loader2 } from "lucide-react";

const SocialLoginButton = ({ provider, onClick, loading, disabled }) => {
  const configs = {
    google: {
      name: "Google",
      bgColor: "bg-white hover:bg-gray-50",
      textColor: "text-gray-700",
      borderColor: "border-gray-200",
      icon: (
        <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path fill="#fff" d="M0 0h512v512H0" />
          <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341" />
          <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57" />
          <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73" />
          <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55" />
        </svg>
      ),
    },
  };

  const config = configs[provider];

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled || loading}
      className={`w-full flex items-center justify-center gap-3 ${config.bgColor} ${config.textColor} border-2 ${config.borderColor} rounded-lg py-3 transition-all font-medium disabled:opacity-50 disabled:cursor-not-allowed shadow-sm hover:shadow-md`}
    >
      {loading ? (
        <Loader2 className="w-5 h-5 animate-spin" />
      ) : (
        config.icon
      )}
      <span>Continue with {config.name}</span>
    </button>
  );
};

export default SocialLoginButton;
