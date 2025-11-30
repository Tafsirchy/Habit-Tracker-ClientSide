import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { Eye, EyeOff } from "lucide-react";
import { toast } from "react-toastify";
import Loading from "../Components/Loading";

const Login = () => {
  const { signIn, handleGoogleSignIn, setUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    setError("");

    signIn(email, password)
      .then((result) => {
        setLoading(true);

        toast.success("Login successfully");
        form.reset();

        setTimeout(() => {
          navigate(location.state ? location.state : "/");
          setLoading(false);
        }, 500);
      })
      .catch((error) => {
        if (error.code === "auth/wrong-password") {
          setError("Incorrect password. Please try again.");
        } else if (error.code === "auth/user-not-found") {
          setError("No account found with this email.");
        } else if (error.code === "auth/invalid-email") {
          setError("Invalid email format.");
        } else {
          setError("Something went wrong. Please try again.");
        }
      });
  };

  const googleSignIn = () => {
    setLoading(true);

    handleGoogleSignIn()
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate(location.state ? location.state : "/");
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <Loading></Loading>
      </div>
    );
  }

  const handleForgetPass = () => {
    navigate(`/forgetPass/${email}`);
  };

  return (
    <div className="hero bg-base-200 min-h-screen bg-gradient-to-br from-[#FAF5EF] to-[#E6E2D3] flex items-center justify-center">
      <div className="card max-w-sm shrink-0 border w-full backdrop-blur-lg bg-white/10 border-white/20 shadow-2xl rounded-2xl">
        <div className="card-body">
          <h1 className="text-2xl font-bold text-center text-black border-b border-white/30">
            Login Your Account
          </h1>

          <form onSubmit={handleLogin} className="flex flex-col mt-3">
            <div className="flex flex-col py-2">
              <label className="label text-black font-semibold text-lg mb-1">
                Email
              </label>
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError("");
                }}
                name="email"
                type="email"
                className="input input-bordered w-full"
                placeholder="Email"
                required
              />
            </div>

            <div className="flex flex-col py-2">
              <label className="label text-black font-semibold text-lg mb-1">
                Password
              </label>

              {/* Wrapper for input + icon */}
              <div className="relative w-full">
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  className="input input-bordered w-full pr-12"
                  placeholder="Password"
                  onChange={() => setError("")}
                  required
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600"
                >
                  {showPassword ? <Eye /> : <EyeOff />}
                </button>
              </div>
            </div>

            <div className="text-left">
              <button
                type="button"
                onClick={handleForgetPass}
                className="link link-hover text-red-500 text-sm"
              >
                Forgot password?
              </button>
            </div>

            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

            <button
              type="submit"
              className="btn btn-neutral mt-4 bg-[#043915] hover:bg-[#046b21] text-white font-semibold"
            >
              Login
            </button>

            <button
              onClick={googleSignIn}
              className="mt-3 btn bg-white text-black border-[#e5e5e5]"
            >
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Continue with Google
            </button>
          </form>

          <div className="text-center pt-3 text-black">
            <p>
              Don't Have an Account?{" "}
              <Link
                to="/auth/register"
                className="text-[#043915] hover:underline font-bold"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
