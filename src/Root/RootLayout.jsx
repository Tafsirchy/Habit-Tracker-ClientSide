import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router"; 
import Footer from "../Components/Footer";

const RootLayout = () => {
  return (
    <div className="">
      <div>
        <Navbar></Navbar>
      </div>

      {/* Where all child routes render */}
      <div className=" ">
        <Outlet></Outlet>
      </div>

      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default RootLayout;
