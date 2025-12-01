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
import PrivateRoute from "../Provider/PrivateRoute";
import HabitDetails from "../Pages/HabitDetails";

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
    element: (
      <PrivateRoute>
        <AddHabit />
      </PrivateRoute>
    ),
  },
  {
    path: "/myHabit",
    element: (
      <PrivateRoute>
        <MyHabit />
      </PrivateRoute>
    ),
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
  {
    path: "/details/:id",
    element: (
      <PrivateRoute>
        <HabitDetails></HabitDetails>
      </PrivateRoute>
    ),
  },
  // {
  //   path: "*",
  //   element: <NotFound />,
  // }
]);

export default router;
