import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import router from "./Routes/Router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // ✅ Important
import AuthProvider from "./Provider/AuthProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      {/* All your pages/components */}
      <RouterProvider router={router} />

      {/* ToastContainer must be inside the app tree */}
      <ToastContainer />
    </AuthProvider>
  </StrictMode>
);
