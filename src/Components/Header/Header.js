import React, { useEffect, useState } from 'react';
import Socials from "../SocialMediaLinks";
import Logo from '../Logo';
import MobileNav from "./MobileNav";
import HeaderDropdown from './HeaderDropdown';
import { NavLink } from 'react-router-dom';

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

  return (
    <header className={`fixed w-full px-10 z-30 h-20 flex items-center shadow-lg ${isScrolled ? 'bg-white text-black' : 'bg-[rgba(8,10,19,0.27)] text-white'} backdrop-blur-sm transition-all duration-700 border-b border-gray-500`}>
      <div className='font-primary flex lg:items-center w-full lg:justify-center'>

        <nav className='hidden lg:flex absolute left-16 gap-x-8 text-2xl'>
          <HeaderDropdown
            dropdownTitle="About"
            dropdownLink="/#about"
            links={[
              { name: 'Our Story', link: '/aboutTeam/#ourStory' },
              { name: 'Our Team', link: '/aboutTeam/#ourTeam' },
              { name: 'Our Values', link: '/aboutTeam/#values' }
            ]}
          />
          <HeaderDropdown
            dropdownTitle="Services"
            dropdownLink="/#services"
            links={[
              { name: 'Business', link: '/businessService/' },
              { name: 'Automotive', link: '/automotiveService/' },
              { name: 'Personal', link: '/personalService/' },
            ]}
          />
          <NavLink
            to='/#contact'
            key='/#contact'
            className='cursor-pointer hover:scale-110'>
            Contact
          </NavLink>
        </nav>

        <nav className=''>
          <NavLink to='/' className='max-w-[200px] cursor-pointer hover:scale-105 text-5xl '>
            <Logo />
          </NavLink>
        </nav>

        <nav className='hidden lg:flex absolute right-16 gap-x-12 font-semibold text-2xl'>
          <NavLink
            to='/portfolio'
            key='/portfolio'
            className='cursor-pointer hover:scale-110'>
            Portfolio
          </NavLink>
          <NavLink
            to='/gallery/'
            key='/gallery'
            className='cursor-pointer hover:scale-110'>
            Gallery
          </NavLink>
          <NavLink
            to='/login'
            key='/login'
            className='cursor-pointer hover:scale-110'>
            Login
          </NavLink>
        </nav>
      </div>
      <MobileNav />
    </header>
  );
};

export default Header;