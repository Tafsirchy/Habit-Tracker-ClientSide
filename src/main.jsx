import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import router from "./Routes/Router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthProvider from "./Provider/AuthProvider";
import ThemeProvider from "./Provider/ThemeProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <AuthProvider>
        {/* All your pages/components */}
        <RouterProvider router={router} />

        {/* ToastContainer must be inside the app tree */}
        <ToastContainer theme="colored" position="top-right" autoClose={3000} />
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>
);
