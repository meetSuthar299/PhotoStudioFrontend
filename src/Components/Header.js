import React from 'react';
import Socials from "./SocialMediaLinks"
import Logo from './Logo';
import MobileNav from "./MobileNav"

const Header = () => {
  return <header className='fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] flex items-center bg-white shadow-lg'>
    <div className='flex flex-col lg:flex-row lg:items-center w-full justify-between'>
      <a href='/' className='max-w-[200px] transition-all cursor-pointer hover:scale-105 text-5xl'>
        <Logo/>
      </a>
      <nav className='hidden lg:flex gap-x-12 font-semibold px-10 text-xl'>
        <a href='/#about' key='/#about' className='text-[#696c6d] hover:text-primary transition cursor-pointer hover:scale-110'>About</a>
        <a href='/#services' key='/#services' className='text-[#696c6d] hover:text-primary transition cursor-pointer hover:scale-110'>Services</a>
        <a href='/#contact' key='/#contact' className='text-[#696c6d] hover:text-primary transition cursor-pointer hover:scale-110'>Contact</a>
        <a href='/portfolio' key='/portfolio' className='text-[#696c6d] hover:text-primary transition cursor-pointer hover:scale-110'>Portfolio</a>
        <a href='/gallery' key='/gallery' className='text-[#696c6d] hover:text-primary transition cursor-pointer hover:scale-110'>Gallery</a>
      </nav>
    </div>
    <div className="hidden xl:flex text-primary">
      <Socials />
    </div>

    <MobileNav />
  </header>;
};

export default Header;
