import React from 'react';
import Socials from "./Socials"
import Logo from "../img/header/mkLogo.jpeg"
import MobileNav from "./MobileNav"
import { Link } from 'react-scroll';

const Header = () => {
  return <header className='fixed w-full px-[30px] lg:px=[250px] z-30 h-[100px] flex items-center bg-white shadow-lg'>
    <div className='flex flex-col lg:flex-row lg:items-center w-full justify-between'>
      <Link to={'home'} smooth={true} duration={1000} className='max-w-[200px] transition-all cursor-pointer hover:scale-105'>
        <img className='h-20' src={Logo} alt='logo' />
      </Link>
      <nav className='hidden lg:flex gap-x-12 font-semibold'>
        {/* <Link to={'home'} smooth={true} duration={1000} className='text-[#696c6d] hover:text-primary transition cursor-pointer hover:scale-105'>Home</Link> */}
        <Link to={'about'} smooth={true} duration={1000} className='text-[#696c6d] hover:text-primary transition cursor-pointer hover:scale-105'>About</Link>
        <Link to={'gallery'} smooth={true} duration={1000} className='text-[#696c6d] hover:text-primary transition cursor-pointer hover:scale-105'>Gallery</Link>
        <Link to={'contact'} smooth={true} duration={1000} className='text-[#696c6d] hover:text-primary transition cursor-pointer hover:scale-105'>Contact</Link>
      </nav>
    </div>
    <Socials />
    <MobileNav />
  </header>;
};

export default Header;
