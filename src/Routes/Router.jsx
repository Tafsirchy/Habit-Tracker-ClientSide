import { createBrowserRouter } from "react-router"; // FIXED
import AddHabit from "../Pages/AddHabit";
import MyHabit from "../Pages/MyHabit";
import PublicHabit from "../Pages/PublicHabit";
import RootLayout from "../Root/RootLayout";
import Home from "../Pages/Home";
import AuthLayout from "../Root/AuthLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ForgetPass from "../Pages/ForgetPass";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },

  // 🔥 Habit routes
  {
    path: "/addHabit",
    element: <AddHabit />,
  },
  {
    path: "/myHabit",
    element: <MyHabit />,
  },
  {
    path: "/publicHabit",
    element: <PublicHabit />,
  },

  // 🔥 Authentication (login / register)
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login", // FIXED
        element: <Login />,
      },
      {
        path: "register", // FIXED
        element: <Register />,
      },
    ],
  },

  // 🔥 Forget password should NOT be inside /auth
  {
    path: "/forgetPass/:email?",
    element: <ForgetPass />,
  },
]);

export default router;
