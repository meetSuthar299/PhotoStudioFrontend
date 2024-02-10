import React from 'react';
import Logo from './Logo';
import SocialMediaLinks from './SocialMediaLinks';
import { FiMapPin, FiMail, FiPhone } from 'react-icons/fi';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white text-center sm:text-left transition-all">
      <div className="mx-auto px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 px-10">
          <div className="flex flex-col space-y-6">
            <a href="/" className="cursor-pointer text-5xl">
              <Logo />
            </a>
            <div className="flex justify-center sm:justify-start" >
            <SocialMediaLinks />
            </div>
          </div>
          <div className="space-y-4">
            <h1 className="text-xl font-semibold">Quick Links</h1>
            <ul className="text-gray-400">
              <li><a href="/#about" className="hover:text-white hover:font-bold">About Us</a></li>
              <li><a href="/#services" className="hover:text-white hover:font-bold">Our Services</a></li>
              <li><a href="/#contact"className="hover:text-white hover:font-bold">Contact Us</a></li>
              <li><a href="/gallery"className="hover:text-white hover:font-bold">Gallery</a></li>
              <li><a href="/portfolio"className="hover:text-white hover:font-bold">Portfolio</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h1 className="text-xl font-semibold">Legal</h1>
            <ul className="text-gray-400">
              <li><a href="/termsOfService"className="hover:text-white hover:font-bold">Terms of Service</a></li>
              <li><a href="/privacyPolicy"className="hover:text-white hover:font-bold">Privacy Policy</a></li>
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
          <p className='p-2'>Website developed and managed by Arktic Studios.</p>
          <p>&copy; {new Date().getFullYear()} Arktic Studios. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
