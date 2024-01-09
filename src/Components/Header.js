import React, { useEffect, useState } from 'react';
import Socials from "./SocialMediaLinks"
import Logo from './Logo';
import MobileNav from "./MobileNav"


const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // Adjust the threshold value as needed
      const threshold = 200;

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

  return <header className={`fixed w-full px-10 z-30 h-20 flex items-center shadow-lg ${isScrolled ? 'bg-white text-black' : 'bg-[rgba(14,16,36,0.23)] text-white'} transition-all duration-700 border-b border-gray-400`}>
      <div className='font-primary flex flex-col lg:flex-row lg:items-center w-full justify-between'>
      <nav className='hidden lg:flex gap-x-12 px-10 text-2xl'>
        <a href='/#about' key='/#about' className='hover:text-primary cursor-pointer hover:scale-110'>About</a>
        <a href='/#services' key='/#services' className='hover:text-primary cursor-pointer hover:scale-110'>Services</a>
        <a href='/#contact' key='/#contact' className='hover:text-primary cursor-pointer hover:scale-110'>Contact</a>
      </nav>
      <a href='/' className='max-w-[200px] cursor-pointer hover:scale-105 text-5xl hover:text-primary'>
        <Logo />
      </a>
      <nav className='hidden lg:flex gap-x-12 font-semibold px-10 text-2xl'>
        <a href='/portfolio' key='/portfolio' className='hover:text-primary cursor-pointer hover:scale-110'>Portfolio</a>
        <a href='/gallery' key='/gallery' className=' hover:text-primary cursor-pointer hover:scale-110'>Gallery</a>
        <a className=''><Socials/></a>
      </nav>
    </div>
    <MobileNav />
  </header>;
};

export default Header;
