import React, { useEffect, useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { CgMenuRight } from 'react-icons/cg';
import { motion } from 'framer-motion';
import Socials from "./SocialMediaLinks"
import HeaderDropdown from './Header/HeaderDropdown';

const menuVariants = {
  hidden: {
    x: '100%',
  },
  show: {
    x: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.9],
    },
  },
};

const MobileNav = () => {
  const [openMenu, setOpenMenu] = useState(false);
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
    <nav className='xl:hidden lg:hidden'>
      <div className={`text-3xl cursor-pointer ${isScrolled ? 'text-black' : 'text-white'} transition-all duration-700`} onClick={() => setOpenMenu(true)}>
        <CgMenuRight />
      </div>
      <motion.div
        variants={menuVariants}
        initial={'hidden'}
        animate={openMenu ? 'show' : 'hidden'}
        className='bg-white shadow-2xl w-full absolute top-0 right-0 max-w-xs h-screen z-20 text-primary'
      >
        <div className='text-4xl absolute z-30 left-4 top-14 cursor-pointer '
          onClick={() => {
            setOpenMenu(false)
          }}>
          <IoMdClose />
        </div>
        
          <ul className='h-full flex flex-col justify-center items-center gap-y-8 font-primary text-3xl'>
            <li>
              <a href='/#about' key='/#about'>About</a>
            </li>
            <li className='pl-5'>
              <HeaderDropdown
                dropdownTitle="Services"
                dropdownLink="/#services"
                links={[
                  { name: 'Corporate', link: '/corporateService' },
                  { name: 'Automotive', link: '/automotiveService' },
                  { name: 'Personal', link: '/personalService' },
                  // Add more services as needed
                ]}
              />
            </li>
            <li>
              <a href='/#contact' key='/#contact'>Contact</a>
            </li>
            <li>
              <a href='/portfolio' key='/portfolio'>Portfolio</a>
            </li>
            <li>
              <a href='/gallery' key='/gallery'>Gallery</a>
            </li>
            <Socials />
          </ul>

        
      </motion.div>
    </nav>
  );
};

export default MobileNav;
