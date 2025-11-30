// import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
// import { Mail } from 'lucide-react';
// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router';
// import app from '../firebase/firebase.config';

// const ForgetPass = () => {
//     const { email } = useParams();
//     const auth = getAuth(app);

//     const [formEmail, setFormEmail] = useState("");

//     useEffect(() => {
//       if (email) {
//         setFormEmail(email);
//       }
//     }, [email]);

//     const handleSubmit = (e) => {
//       e.preventDefault();

//       sendPasswordResetEmail(auth, formEmail)
//         .then(() => {
//           window.open("https://mail.google.com/mail/u/0/#inbox");
//         })
//         .catch(() => alert("Error sending email"));
//     };

//     return (
//       <div className="flex justify-center items-center min-h-screen bg-[#f3faef]">
//         <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
//           <h2 className="text-2xl font-bold text-center text-[#043915] mb-6">
//             Forgot Password
//           </h2>

//           <form onSubmit={handleSubmit}>
//             <div className="flex flex-col py-2">
//               <label className="font-semibold text-gray-700 flex items-center gap-2">
//                 <Mail size={18} /> Email
//               </label>

//               <input
//                 value={formEmail}
//                 onChange={(e) => setFormEmail(e.target.value)}
//                 type="email"
//                 required
//                 className="input input-bordered w-full h-12 rounded-lg mt-2"
//               />
//             </div>

//             <button
//               type="submit"
//               className="btn w-full bg-[#043915] hover:bg-[#046b21] text-white font-semibold mt-6 h-12"
//             >
//               Send Reset Link
//             </button>
//           </form>
//         </div>
//       </div>
//     );
// };

// export default ForgetPass;