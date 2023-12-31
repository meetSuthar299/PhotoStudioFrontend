import React, { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { CgMenuRight } from 'react-icons/cg';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

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

  return (
    <nav className='text-primary xl:hidden lg:hidden'>
      <div className='text-3xl cursor-pointer' onClick={() => setOpenMenu(true)}>
        <CgMenuRight />
      </div>
      <motion.div
        variants={menuVariants}
        initial={'hidden'}
        animate={openMenu ? 'show' : 'hidden'}
        className='bg-white shadow-2xl w-full absolute top-0 right-0 max-w-xs h-screen z-20'
      >
        <div className='text-4xl absolute z-30 left-4 top-14 text-primary cursor-pointer'
          onClick={() => {
            setOpenMenu(false)
          }}>
          <IoMdClose />
        </div>
        <ul className='cursor-pointer h-full flex flex-col justify-center items-center gap-y-8 text-primary font-primary font-bold text-3xl'>
          <li>
            <Link to='home' smooth={true} duration={1000}>Home</Link>
          </li>
          <li>
            <Link to='about' smooth={true} duration={1000}>About</Link>
          </li>
          <li>
            <Link to='gallery' smooth={true} duration={1000}>Portfolio</Link>
          </li>
          <li>
            <Link to='contact' smooth={true} duration={1000}>Contact</Link>
          </li>
        </ul>
      </motion.div>
    </nav>
  );
};

export default MobileNav;
