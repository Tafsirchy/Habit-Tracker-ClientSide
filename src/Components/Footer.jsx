import React from "react";
import { Link } from "react-router";
import logo from "../assets/habits (1).png";
import { FaFacebook, FaInstagram, FaPhone, FaPinterest } from "react-icons/fa";
import { Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[var(--color-primary-dark)] text-white ">
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
          <Link to="/terms-of-use" className="link link-hover">
            Terms of use
          </Link>
          <Link to="/privacy-policy" className="link link-hover">
            Privacy policy
          </Link>
          <Link to="/cookie-policy" className="link link-hover">
            Cookie policy
          </Link>
        </nav>
        <nav className="gap-3">
          <h6 className="footer-title">Social Media Icons</h6>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="link link-hover flex justify-center items-center gap-2"
          >
            <FaInstagram></FaInstagram> Instagram
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="link link-hover flex justify-center items-center gap-2"
          >
            <FaFacebook></FaFacebook> Facebook
          </a>
          <a
            href="https://www.pinterest.com"
            target="_blank"
            rel="noopener noreferrer"
            className="link link-hover flex justify-center items-center gap-2"
          >
            <FaPinterest></FaPinterest> Pinterest
          </a>
        </nav>
      </div>
      <div className="text-center text-gray-400 dark:text-gray-500 border-1 p-4">
        <p>© 2025 Habit Tracker. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
