import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

        <div>
          <Link to="/" className="flex items-center mb-4">
            <img src={logo} alt="TeqTronics Logo" className="h-10 w-auto" />
            <span className="ml-2 text-white font-bold text-xl">TeqTronics</span>
          </Link>
          <p className="text-gray-400">
            Empowering Businesses & Students with industry-level training and professional web solutions.
          </p>
        </div>

        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-blue-500 transition">Home</Link></li>
            <li><Link to="/services" className="hover:text-blue-500 transition">Services</Link></li>
            <li><Link to="/trainings" className="hover:text-blue-500 transition">Trainings</Link></li>
            <li><Link to="/about" className="hover:text-blue-500 transition">About</Link></li>
            <li><Link to="/contact" className="hover:text-blue-500 transition">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Contact</h3>
          <ul className="space-y-2">
            <li>Phone: +92 300 1234567</li>
            <li>Email: info@teqtronics.com</li>
            <li>Location: Faisalabad, Pakistan</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <a href="#" className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full text-white transition"><FaFacebookF /></a>
            <a href="#" className="bg-blue-400 hover:bg-blue-500 p-3 rounded-full text-white transition"><FaTwitter /></a>
            <a href="#" className="bg-pink-500 hover:bg-pink-600 p-3 rounded-full text-white transition"><FaInstagram /></a>
            <a href="#" className="bg-blue-700 hover:bg-blue-800 p-3 rounded-full text-white transition"><FaLinkedinIn /></a>
          </div>
        </div>

      </div>

      <div className="border-t border-gray-700 mt-10"></div>

      <div className="max-w-7xl mx-auto px-6 mt-6 text-center text-gray-500">
        &copy; {new Date().getFullYear()} TeqTronics. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
