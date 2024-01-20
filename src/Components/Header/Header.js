import React, { useEffect, useState } from 'react';
import Socials from "../SocialMediaLinks"
import Logo from '../Logo';
import MobileNav from "../MobileNav"
import HeaderDropdown from "./HeaderDropdown.js"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // Adjust the threshold value as needed
      const threshold = 300;

      if (scrollPosition > threshold) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed w-full px-10 z-30 h-20 flex items-center shadow-lg ${isScrolled ? 'bg-white text-black' : 'bg-[rgba(0,0,0,0.1)] text-white'} backdrop-blur-sm transition-all duration-700 border-b border-gray-500`}>
      <div className='font-primary flex flex-col lg:flex-row lg:items-center w-full justify-between'>
        <nav className='hidden lg:flex gap-x-12 px-10 text-2xl'>
          <a href='/#about' key='/#about' className='hover:text-primary cursor-pointer hover:scale-110'>About</a>
          <a href='/#services' key='/#services' className='hover:text-primary cursor-pointer hover:scale-110'>Services</a>
          <a href='/#contact' key='/#contact' className='hover:text-primary cursor-pointer hover:scale-110'>Contact</a>
        </nav>
        <nav className='flex items-center justify-center'> {/* Centered logo container */}
          <a href='/' className='cursor-pointer hover:scale-105 text-5xl hover:text-primary relative'>
            <Logo />
          </a>
        </nav>
        <nav className='hidden lg:flex gap-x-12 font-semibold px-10 text-2xl'>
          <a href='/portfolio' key='/portfolio' className='hover:text-primary cursor-pointer hover:scale-110'>Portfolio</a>
          <a href='/gallery' key='/gallery' className='hover:text-primary cursor-pointer hover:scale-110'>Gallery</a>
          {/* <a href='/login' key='/login' className='hover:text-primary cursor-pointer hover:scale-110'>Login</a> */}
          <Socials />
        </nav>
      </div>
      <MobileNav />
    </header>
  );
};

export default Header;
