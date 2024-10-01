import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink
import { IoMdClose } from 'react-icons/io';
import { CgMenuRight } from 'react-icons/cg';
import { motion } from 'framer-motion';
import Socials from "../SocialMediaLinks"
import HeaderDropdown from './HeaderDropdown';
import ShowOnLogin, { ShowOnLogout } from '../../helpers/hiddenLink';
import { UserName } from '../../Pages/Account/Account';
import { useLogoutUser } from '../../helpers/functions';

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
  exit: {
    x: '100%',
    transition: {
      type: 'spring',
    },
  },
};

const MobileNav = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = 200;

      if (scrollPosition > threshold) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

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
        exit="exit"
        className='bg-white text-black shadow-2xl w-full absolute top-0 right-0 max-w-xs h-screen z-20 text-primary'
      >
        <div className='text-4xl absolute z-30 left-4 top-14 cursor-pointer ' onClick={() => setOpenMenu(false)}>
          <IoMdClose />
        </div>

        <ul className='h-full flex flex-col justify-center items-center gap-y-8 font-primary text-3xl'>
          <li className='pl-5'>
            <HeaderDropdown
              dropdownTitle="About"
              dropdownLink="/#about"
              links={[
                { name: 'Our Story', link: '/aboutTeam/#ourStory' },
                { name: 'Our Values', link: '/aboutTeam/#values' },
                { name: 'Our Success', link: '/aboutTeam/#success' }
              ]}
            />
          </li>
          <li className='pl-5'>
            <HeaderDropdown
              dropdownTitle="Services"
              dropdownLink="/#services"
              links={[
                { name: 'Software', link: '/businessService/' },
                { name: 'Marketing', link: '/automotiveService/' },
                { name: 'Media', link: '/personalService/' },
              ]}
            />
          </li>
          <li>
            <NavLink to='/#contact'>Contact</NavLink>
          </li>
          <li>
            <NavLink to='/portfolio/'>Portfolio</NavLink>
          </li>
          <li>
            <NavLink to='/gallery/'>Gallery</NavLink>
          </li>
          <li>
            <ShowOnLogin>
              <HeaderDropdown
                dropdownTitle={<UserName />}
                dropdownLink="/account/"
                links={[
                  { name: 'Account', link: '/account/' },
                  { name: 'Cart', link: '/account/#cart' },
                  { name: 'Logout', clickAction: useLogoutUser },
                ]}
              />
            </ShowOnLogin>
            <ShowOnLogout>
              <NavLink to='/login/'>Login</NavLink>
            </ShowOnLogout>
          </li>
          <Socials />
        </ul>
      </motion.div>
    </nav>
  );
};

export default MobileNav;
