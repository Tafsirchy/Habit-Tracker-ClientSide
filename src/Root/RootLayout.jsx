import React from "react";
import Navbar from "../Component/Navbar";
import { Outlet } from "react-router"; 
import Footer from "../Component/Footer";

const RootLayout = () => {
  return (
    <div className="min-h-screen">
      <div>
        <Navbar></Navbar>
      </div>

      {/* Where all child routes render */}
      <div className="min-h-screen ">
        <Outlet></Outlet>
      </div>

      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default RootLayout;
