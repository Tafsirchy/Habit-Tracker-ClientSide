import React from "react";
import { Outlet, useNavigation } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Loading from "../Components/Loading";

const RootLayout = () => {
  const navigation = useNavigation();

  const isLoading = navigation.state === "loading";

  return (
    <div>
      <div className="">
        <Navbar></Navbar>
      </div>
      {isLoading ? (
        <div className="min-h-screen flex justify-center items-center">
          <Loading></Loading>
        </div>
      ) : (
        <div className="">
          <Outlet></Outlet>
        </div>
      )}
      <div className="">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default RootLayout;
