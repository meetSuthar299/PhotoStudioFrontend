import React from 'react';
import Socials from "./Socials"
import Logo from "../img/header/logo.svg"
import MobileNav from "./MobileNav"
import { Link } from 'react-scroll';

const Header = () => {
  return <header className='fixed w-full px-[30px] lg:px=[250px] z-30 h-[100px] lg:h-[140px] flex items-center'>
    <div className='flex flex-col lg:flex-row lg:items-center w-full justify-between'>
      <Link to={'home'} className='max-w-[200px]'>
        {/* <img src={Logo} alt='logo' /> */}
      </Link>
      <nav className='hidden lg:flex gap-x-12 font-semibold'>
        <Link to={'home'} smooth={true} duration={1000} className='text-[#696c6d] hover:text-primary transition cursor-pointer'>Home</Link>
        <Link to={'about'} smooth={true} duration={1000} className='text-[#696c6d] hover:text-primary transition cursor-pointer'>About</Link>
        <Link to={'portfolio'} smooth={true} duration={1000} className='text-[#696c6d] hover:text-primary transition cursor-pointer'>Portfolio</Link>
        <Link to={'contact'} smooth={true} duration={1000} className='text-[#696c6d] hover:text-primary transition cursor-pointer'>Contact</Link>
      </nav>

    </div>
    <Socials />
    <MobileNav />
  </header>;
};

export default Header;
