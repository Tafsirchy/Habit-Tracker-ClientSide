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
    element: <RootLayout></RootLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },

  // 🔥 Habit routes
  {
    path: "/addHabit",
    element: (
      <PrivateRoute>
        <AddHabit></AddHabit>
      </PrivateRoute>
    ),
  },
  {
    path: "/myHabit",
    element: (
      <PrivateRoute>
        <MyHabit></MyHabit>
      </PrivateRoute>
    ),
  },
  {
    path: "/publicHabit",
    element: <PublicHabit></PublicHabit>,
  },

  // 🔥 Authentication (login / register)
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "login", // FIXED
        element: <Login></Login>
      },
      {
        path: "register", // FIXED
        element: <Register></Register>
      },
    ],
  },

  // 🔥 Forget password should NOT be inside /auth
  {
    path: "/forgetPass/:email?",
    element: <ForgetPass></ForgetPass>
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
