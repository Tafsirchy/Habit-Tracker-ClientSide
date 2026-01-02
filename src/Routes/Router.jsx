import { createBrowserRouter } from "react-router";
import AddHabit from "../Pages/AddHabit";
import MyHabit from "../Pages/MyHabit";
import PublicHabit from "../Pages/PublicHabit";
import RootLayout from "../Root/RootLayout";
import DashboardLayout from "../Root/DashboardLayout";
import Home from "../Pages/Home";
import AuthLayout from "../Root/AuthLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ForgetPass from "../Pages/ForgetPass";
import PrivateRoute from "../Provider/PrivateRoute";
import HabitDetails from "../Pages/HabitDetails";
import UpdateHabit from "../Pages/UpdateHabit";
import Page404 from "../Pages/Page404";
import DashboardHome from "../Pages/Dashboard/DashboardHome";
import Profile from "../Pages/Profile";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Help from "../Pages/Help";
import TermsOfUse from "../Pages/TermsOfUse";
import PrivacyPolicy from "../Pages/PrivacyPolicy";
import CookiePolicy from "../Pages/CookiePolicy";

const router = createBrowserRouter([
  // Public Routes with Main Layout
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/publicHabit",
        element: <PublicHabit />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/help",
        element: <Help />,
      },
      {
        path: "/terms-of-use",
        element: <TermsOfUse />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/cookie-policy",
        element: <CookiePolicy />,
      },
    ],
  },

  // Dashboard Routes (Protected)
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <DashboardHome />,
      },
      {
        path: "add-habit",
        element: <AddHabit />,
      },
      {
        path: "my-habits",
        element: <MyHabit />,
      },
      {
        path: "update-habit/:id",
        element: <UpdateHabit />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },

  // Authentication Routes
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },

  // Standalone Routes
  {
    path: "/forgetPass/:email?",
    element: <ForgetPass />,
  },
  {
    path: "/details/:id",
    element: <HabitDetails />, // Made public for viewing
  },

  // 404 Page
  {
    path: "*",
    element: <Page404 />,
  },
]);

export default router;
