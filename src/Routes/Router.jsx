import { createBrowserRouter } from "react-router"; 
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
import UpdateHabit from "../Pages/UpdateHabit";
import Page404 from "../Pages/Page404";

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

  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "login", 
        element: <Login></Login>,
      },
      {
        path: "register", 
        element: <Register></Register>,
      },
    ],
  },

  {
    path: "/forgetPass/:email?",
    element: <ForgetPass></ForgetPass>,
  },
  {
    path: "/details/:id",
    element: (
      <PrivateRoute>
        <HabitDetails></HabitDetails>
      </PrivateRoute>
    ),
  },
  {
    path: "/updateHabit/:id",
    element: <UpdateHabit></UpdateHabit>
  },
  {
    path: "*",
    element: <Page404></Page404>
  }
  
]);

export default router;
