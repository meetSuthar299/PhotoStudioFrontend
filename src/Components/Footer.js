import React from 'react';
import Logo from './Logo';
import SocialMediaLinks from './SocialMediaLinks';
import { FiMapPin, FiMail, FiPhone } from 'react-icons/fi';
import { NavLink } from 'react-router-dom'; // Import NavLink

function Footer() {
  return (
    <footer className="bg-gray-900 text-white text-center sm:text-left transition-all">
      <div className="mx-auto px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-12 px-10">
          <div className="flex flex-col space-y-6">
            <NavLink to="/" className="cursor-pointer text-5xl">
              <Logo />
            </NavLink>
            <div className="flex justify-center sm:justify-start">
              <SocialMediaLinks />
            </div>
          </div>
          <div className="space-y-4">
            <h1 className="text-xl font-semibold">Quick Links</h1>
            <ul className="text-gray-400">
              <li><NavLink to="/#services" className="hover:text-white hover:font-bold">Our Services</NavLink></li>
              <li><NavLink to="/#contact" className="hover:text-white hover:font-bold">Contact Us</NavLink></li>
              <li><NavLink to="/gallery/" className="hover:text-white hover:font-bold">Gallery</NavLink></li>
              <li><NavLink to="/portfolio/" className="hover:text-white hover:font-bold">Portfolio</NavLink></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h1 className="text-xl font-semibold">About Us</h1>
            <ul className="text-gray-400">
              <li><NavLink to="/#about" className="hover:text-white hover:font-bold">About Us</NavLink></li>
              <li><NavLink to="/aboutTeam/" className="hover:text-white hover:font-bold">Our Story</NavLink></li>
              <li><NavLink to="/aboutTeam/#ourTeam" className="hover:text-white hover:font-bold">Our Team</NavLink></li>
              <li><NavLink to="/aboutTeam/#values" className="hover:text-white hover:font-bold">Our Values</NavLink></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h1 className="text-xl font-semibold">Account</h1>
            <ul className="text-gray-400">
              <li><NavLink to="/login/" className="hover:text-white hover:font-bold">Login</NavLink></li>
              <li><NavLink to="/requestAccount/" className="hover:text-white hover:font-bold">Request Account</NavLink></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h1 className="text-xl font-semibold">Legal</h1>
            <ul className="text-gray-400">
              <li><NavLink to="/termsOfService" className="hover:text-white hover:font-bold">Terms of Service</NavLink></li>
              <li><NavLink to="/privacyPolicy" className="hover:text-white hover:font-bold">Privacy Policy</NavLink></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h1 className="text-xl font-semibold">Contact Info</h1>
            <div className="flex items-center justify-center sm:justify-start text-gray-400">
              <FiMapPin className="mr-2" />
              <p>Calgary Alberta, Canada</p>
            </div>
            <div className="flex items-center justify-center sm:justify-start text-gray-400">
              <FiMail className="mr-2" />
              <p>contact@arkticstudios.com</p>
            </div>
            <div className="flex items-center justify-center sm:justify-start text-gray-400">
              <FiPhone className="mr-2" />
              <p>587-434-2178</p>
            </div>
          </div>
        </div>
        <hr className="my-4 border-t border-gray-600" />
        <div className="text-center text-gray-400 text-sm">
          <p className='p-2'>Website Developed and Managed by <strong>Meet Suthar</strong>.</p>
          <p>&copy; {new Date().getFullYear()} Arktic Studios. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
