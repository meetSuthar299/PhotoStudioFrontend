import React, { useEffect, useState } from 'react';
import Socials from "../SocialMediaLinks"
import Logo from '../Logo';
import MobileNav from "../MobileNav"
import HeaderDropdown from './HeaderDropdown';

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

  return <header className={`fixed w-full px-10 z-30 h-20 flex items-center shadow-lg ${isScrolled ? 'bg-white text-black' : 'bg-[rgba(0,0,0,0.1)] text-white'} backdrop-blur-sm transition-all duration-700 border-b border-gray-500`}>
    <div className='font-primary flex flex-col lg:flex-row lg:items-center w-full justify-between'>
      <nav className='hidden lg:flex gap-x-10 px-10 text-2xl'>
        <a href='/#about' key='/#about' className='cursor-pointer hover:scale-110'>About</a>
        <HeaderDropdown
          dropdownTitle="Services"
          dropdownLink="/#services"
          links={[
            {name: 'Business', link: '/businessService/'},
            {name: 'Automotive', link: '/automotiveService/'},
            {name: 'Personal', link: '/personalService/'},
          ]}
        />
        <a href='/#contact' key='/#contact' className=' cursor-pointer hover:scale-110'>Contact</a>
      </nav>
      <nav>
        <a href='/' className='max-w-[200px] cursor-pointer hover:scale-105 text-5xl '>
          <Logo />
        </a>
      </nav>
      <nav className='hidden lg:flex gap-x-12 font-semibold px-10 text-2xl'>
        <a href='/portfolio' key='/portfolio' className='cursor-pointer hover:scale-110'>Portfolio</a>
        <a href='/gallery' key='/gallery' className=' cursor-pointer hover:scale-110'>Gallery</a>
        {/* <a href='/login' key='/login' className=' cursor-pointer hover:scale-110'>Member Login</a> */}
        <Socials />
      </nav>
    </div>
    <MobileNav />
  </header>;
};

export default Header;
