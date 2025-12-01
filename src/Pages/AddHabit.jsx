import { Upload, Clock, FileText, Layers } from "lucide-react";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const AddHabit = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const category = form.category.value;
    const reminderTime = form.reminderTime.value;
    const email = form.email.value;
    const name = form.name.value;
    const imageUrl = form.imgUrl.value; // <-- NEW (text input)

    const habitData = {
      title,
      description,
      category,
      reminderTime,
      img: imageUrl, // <-- save URL directly
      email,
      name,
    };

    axios
      .post("http://localhost:3000/habits", habitData)
      .then((res) => {
        alert("Habit Added Successfully!");
        form.reset();
      })
      .catch((error) => {
        console.error("Failed to add habit:", error);
        alert("Failed to add habit");
      })
      .finally(() => setLoading(false));
  };

  return (
    <div>
      <header>
        <Navbar />
      </header>

      <main>
        <div className="min-h-screen bg-[#f3faef] py-10">
          <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-[#043915] mb-8">
              Add New Habit
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Habit Title */}
              <div className="form-control">
                <label className="label font-semibold">
                  <span className="flex items-center gap-2">
                    <FileText size={18} /> Habit Title
                  </span>
                </label>
                <input
                  type="text"
                  name="title"
                  placeholder="Enter habit title"
                  required
                  className="input input-bordered rounded-lg"
                />
              </div>

              {/* Description */}
              <div className="form-control">
                <label className="label font-semibold">Description</label>
                <textarea
                  name="description"
                  className="textarea textarea-bordered rounded-lg"
                  placeholder="Write something about this habit"
                  required
                ></textarea>
              </div>

              {/* Category */}
              <div className="form-control">
                <label className="label font-semibold flex items-center gap-2">
                  <Layers size={18} /> Category
                </label>
                <select
                  name="category"
                  className="select select-bordered rounded-lg"
                  required
                >
                  <option>Morning</option>
                  <option>Work</option>
                  <option>Fitness</option>
                  <option>Evening</option>
                  <option>Study</option>
                </select>
              </div>

              {/* Reminder Time */}
              <div className="form-control">
                <label className="label font-semibold flex items-center gap-2">
                  <Clock size={18} /> Reminder Time
                </label>
                <input
                  type="time"
                  name="reminderTime"
                  className="input input-bordered rounded-lg"
                  required
                />
              </div>

              {/* Image URL INPUT */}
              <div className="form-control">
                <label className="label font-semibold flex items-center gap-2">
                  <Upload size={18} /> Image URL (optional)
                </label>
                <input
                  type="text"
                  name="imgUrl"
                  placeholder="Paste a valid image URL"
                  className="input input-bordered rounded-lg"
                />
              </div>

              {/* User Email */}
              <div className="form-control">
                <label className="label font-semibold">User Email</label>
                <input
                  name="email"
                  type="email"
                  value={user?.email}
                  readOnly
                  className="input input-bordered rounded-lg bg-gray-100"
                />
              </div>

              {/* User Name */}
              <div className="form-control">
                <label className="label font-semibold">User Name</label>
                <input
                  name="name"
                  type="text"
                  value={user?.displayName}
                  readOnly
                  className="input input-bordered rounded-lg bg-gray-100"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="btn bg-[#043915] text-white w-full rounded-lg hover:bg-[#046b21]"
                disabled={loading}
              >
                {loading ? "Adding Habit..." : "Add Habit"}
              </button>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AddHabit;
