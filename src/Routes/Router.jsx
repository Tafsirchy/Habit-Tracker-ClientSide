import { createBrowserRouter } from "react-router";
import AddHabit from "../Pages/AddHabit";
import MyHabit from "../Pages/MyHabit";
import PublicHabit from "../Pages/PublicHabit";
import RootLayout from "../Root/RootLayout";
import Home from "../Pages/Home"; // <-- MISSING IMPORT FIXED
// import AuthLayout from "../Root/AuthLayout";
// import Login from "../Pages/Login";
// import Register from "../Pages/Register";


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

  // AUTH ROUTES (uncomment when needed)
  // {
  //   path: "/auth",
  //   element: <AuthLayout />,
  //   children: [
  //     { path: "login", element: <Login /> },
  //     { path: "register", element: <Register /> },
  //   ],
  // },
]);

export default router;
