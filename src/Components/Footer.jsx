import React from "react";
import logo from "../assets/habits (1).png";
import {
  FaFacebook,
  FaInstagram,
  FaPhone,
  FaPinterest,
} from "react-icons/fa";
import { Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0e2d43] text-white ">
      <div className="footer sm:footer-horizontal p-10 w-11/12 mx-auto ">
        <aside>
          <img className="w-20 h-20" src={logo} alt="" />
          <p>
            ACME Industries Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
        </aside>
        <nav className="gap-3 ">
          <h6 className="footer-title">Contact details,</h6>
          <a className="link link-hover flex gap-3">
            <FaPhone></FaPhone> 470-686-9003
          </a>
          <a className="link link-hover flex gap-3">
            <Mail size={16} /> habittracker@gmail.com
          </a>
          <a className="link link-hover flex gap-3">
            {" "}
            <MapPin size={16} />
            House 99, Sonargaon Janapath Road <br /> Sector-11, Uttara, Dhaka
          </a>
        </nav>
        <nav className="gap-3">
          <h6 className="footer-title">Terms & Conditions</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <nav className="gap-3">
          <h6 className="footer-title">Social Media Icons</h6>
          <a className="link link-hover flex justify-center items-center gap-2">
            <FaInstagram></FaInstagram> Instagram
          </a>
          <a className="link link-hover flex justify-center items-center gap-2">
            <FaFacebook></FaFacebook> Facebook
          </a>
          <a className="link link-hover flex justify-center items-center gap-2">
            <FaPinterest></FaPinterest> Pinterest
          </a>
        </nav>
      </div>
      <div className="text-center text-gray-400 border-1 p-4">
        <p>© 2025 GreenNest. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
