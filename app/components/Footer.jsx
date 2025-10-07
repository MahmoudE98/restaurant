import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-12">
      <div className="max-w-[1240px] mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-36">
        <div className="flex flex-col items-start">
          <a href="/"><img src='/images/restaurant-building.png' className='w-10 z-10 mb-2'/></a>
          <p className="text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            lacinia odio vitae vestibulum vestibulum.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Navigation</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-cyan-500 transition">Home</a></li>
            <li><a href="#menu" className="hover:text-cyan-500 transition">Menu</a></li>
            <li><a href="#about" className="hover:text-cyan-500 transition">About</a></li>
            <li><a href="#contact" className="hover:text-cyan-500 transition">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Business Hours</h3>
          <ul className="space-y-2">
            <li>Mon - Fri: 10:00 AM - 10:00 PM</li>
            <li>Saturday: 11:00 AM - 11:00 PM</li>
            <li>Sunday: Closed</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="/" className="hover:text-cyan-500 transition">
              <FaFacebookF size={20} />
            </a>
            <a href="/" className="hover:text-cyan-500 transition">
              <FaInstagram size={20} />
            </a>
            <a href="/" className="hover:text-cyan-500 transition">
              <FaTwitter size={20} />
            </a>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;