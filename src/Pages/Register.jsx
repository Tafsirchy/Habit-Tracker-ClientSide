import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";
import { Eye, EyeOff } from "lucide-react";
import Loading from "../Components/Loading";

const Register = () => {
  const { createUser, setUser, handleGoogleSignIn, updateUser } =
    useContext(AuthContext);

  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    const uppercase = /[A-Z]/;
    const lowercase = /[a-z]/;

    if (password.length < 6) {
      setError("Password must be 6 characters long");
      return;
    }
    if (!uppercase.test(password)) {
      setError("Password must contain at least one uppercase letter");
      return;
    }
    if (!lowercase.test(password)) {
      setError("Password must contain at least one lowercase letter");
      return;
    }

    setLoading(true);

    createUser(email, password)
      .then((result) => {
        const user = result.user;

        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
          })
          .catch((error) => {
            console.log(error);
            setUser(user);
          });

        setUser(user);
        toast.success("Sign Up Successful");
        form.reset();
        navigate("/");
      })
      .catch(() => {
        toast.error("Email already exists");
      })
      .finally(() => setLoading(false));
  };

  const googleSignUp = () => {
    setLoading(true);
    handleGoogleSignIn()
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate("/");
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

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen bg-gradient-to-br from-[#f3faef] to-[#d3e6dd] p-10">
        <div className="card max-w-sm shrink-0 border w-full backdrop-blur-lg bg-white/10 border-white/20 shadow-2xl rounded-2xl">
          <div className="card-body">
            <div>
              <h1 className="text-2xl font-bold text-center border-b-1 border-base-300">
                Sign Up
              </h1>
            </div>
            <form onSubmit={handleRegister}>
              <fieldset className="fieldset">
                <label className="label text-black font-semibold text-sm">
                  Name
                </label>
                <input
                  name="name"
                  type="text"
                  className="input w-full"
                  placeholder="Name"
                  required
                />
                <label className="label text-black font-semibold mt-1 text-sm">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  className="input w-full"
                  placeholder="Email"
                  required
                />
                <label className="label text-black font-semibold mt-1 text-sm">
                  Photo URL
                </label>
                <input
                  name="photo"
                  type="text"
                  className="input w-full"
                  placeholder="Photo URL"
                  required
                />
                <div className="flex flex-col pt-2 relative pt-0">
                  <label className="label text-black font-semibold mb-1 text-sm">
                    Password
                  </label>
                  <input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    className="input input-bordered w-full"
                    placeholder="Password"
                    onChange={() => setError("")}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-10 text-sm text-gray-600"
                  >
                    {showPassword ? <Eye /> : <EyeOff />}
                  </button>
                </div>

                {error && <p className="text-red-500 text-sm">{error}</p>}

                <button
                  type="submit"
                  className="btn mt-4 bg-[#043915] hover:bg-[#046b21] text-white"
                >
                  Sign Up
                </button>
                <button
                  onClick={googleSignUp}
                  className="my-1 btn bg-white text-black border-[#e5e5e5]"
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
                <div className="text-center text-sm pt-2">
                  <p className="text-black">
                    Already Have an Account?{" "}
                    <Link
                      to="/auth/login"
                      className="text-[#043915] font-bold hover:underline"
                    >
                      Login
                    </Link>
                  </p>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
