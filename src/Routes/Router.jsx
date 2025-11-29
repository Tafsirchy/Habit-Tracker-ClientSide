import { createBrowserRouter } from "react-router";
import RootLayout from "../Root/RootLayout";
import Home from "../Pages/Home";
import AuthLayout from "../Root/AuthLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PlantDetails from "../Pages/PlantDetails";
import Plants from "../Pages/Plants";
import MyProfile from "../Pages/MyProfile";
import ConsultationForm from "../Pages/ConsultationForm";
import PrivateRoute from "../Provider/PrivateRoute";
import ForgetPass from "../Pages/ForgetPass";

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
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/plants",
    element: <Plants></Plants>,
  },
  {
    path: "/profile",
    element: <MyProfile></MyProfile>,
  },
  {
    path: "/plantDetails/:id",
    element: (
      <PrivateRoute>
        <PlantDetails></PlantDetails>
      </PrivateRoute>
    ),
  },
  {
    path: "/consultation",
    element: <ConsultationForm></ConsultationForm>,
  },
  {
    path: "/forgetPass/:email?",
    element: <ForgetPass></ForgetPass>,
  },
]);

export default router;
