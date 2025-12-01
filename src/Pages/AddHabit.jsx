// import React, { useContext, useState } from "react";
// import { AuthContext } from "../Provider/AuthProvider";
// import { toast } from "react-toastify";
// import axios from "axios";
import { Upload, Clock, FileText, Layers } from "lucide-react";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const AddHabit = () => {
  // const { user } = useContext(AuthContext);

  // const [imageFile, setImageFile] = useState(null);
  // const [loading, setLoading] = useState(false);

  // // 1. Upload to ImgBB
  // const uploadImageToImgBB = async () => {
  //   if (!imageFile) return "";

  //   const formData = new FormData();
  //   formData.append("image", imageFile);

  //   const url = `https://api.imgbb.com/1/upload?key=YOUR_IMGBB_API_KEY`;

  //   const res = await axios.post(url, formData);
  //   return res.data.data.display_url;
  // };

  // // 2. Submit Habit
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);

  //   const form = e.target;
  //   const title = form.title.value;
  //   const description = form.description.value;
  //   const category = form.category.value;
  //   const reminderTime = form.reminderTime.value;

  //   // Upload Image if exists
  //   let imageUrl = "";
  //   if (imageFile) {
  //     imageUrl = await uploadImageToImgBB();
  //   }

  //   const habitData = {
  //     title,
  //     description,
  //     category,
  //     reminderTime,
  //     image: imageUrl,
  //     userName: user.displayName,
  //     userEmail: user.email,
  //   };

  //   axios
  //     .post("http://localhost:5000/habits", habitData)
  //     .then(() => {
  //       toast.success("Habit Added Successfully!");
  //       form.reset();
  //       setImageFile(null);
  //     })
  //     .catch(() => toast.error("Failed to add habit"))
  //     .finally(() => setLoading(false));
  // };

  const { user } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setLoading(true);

    const form = e.target;

    const title = form.title.value;
    const description = form.description.value;
    const category = form.category.value;
    const reminderTime = form.reminderTime.value;
    const img = form.img.value;
    const email = form.email.value;
    const name = form.name.value;


    const habitData = {
      title,
      description,
      category,
      reminderTime,
      img,
      email,
      name,
    }

    console.log(habitData);

    axios.post("http://localhost:3000/addHabit", habitData)
    .then((res) => {
      console.log(res);
    })

  };

  return (
    <div>
      <header>
        <Navbar></Navbar>
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

              {/* Upload Image */}
              <div className="form-control">
                <label className="label font-semibold flex items-center gap-2">
                  <Upload size={18} /> Upload Image (optional)
                </label>
                <input
                  name="img"
                  type="file"
                  className="file-input file-input-bordered w-full rounded-lg"
                  // onChange={(e) => setImageFile(e.target.files[0])}
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
                // disabled={loading}
              >
                okkk
                {/* {loading ? "Adding Habit..." : "Add Habit"} */}
              </button>
            </form>
          </div>
        </div>
      </main>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default AddHabit;
