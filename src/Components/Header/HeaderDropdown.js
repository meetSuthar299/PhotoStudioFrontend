import React, { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { motion, AnimatePresence } from 'framer-motion';

const HeaderDropdown = ({ dropdownTitle, dropdownLink, links }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleToggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleMouseEnter = () => {
        setIsDropdownOpen(true);
    };

    const handleMouseLeave = () => {
        setIsDropdownOpen(false);
    };

    return (
        <div className="relative text-left" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className='flex'>
                <div className='hover:scale-110'>
                    <a href={dropdownLink} className="font-semibold focus:outline-none ">
                        {dropdownTitle}
                    </a>
                    <motion.span
                        onClick={handleToggleDropdown}
                        className={`transition-all duration-75 inline-block my-auto align-middle text-2xl`}
                        initial={{ rotate: 0 }}
                        animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                        style={{ zIndex: 100 }}
                    >
                        <IoIosArrowDown />
                    </motion.span>
                </div>
                <AnimatePresence>
                    {isDropdownOpen && (
                        <motion.div
                            key="dropdown"
                            className="absolute z-50 -left-[40px] top-9 w-44 rounded-lg p-1 shadow-xl bg-zinc-100 duration-75 border opacity-100"
                            initial={{ opacity: 0, y: -75, scale: 0 }}
                            animate={{ opacity: 1, y: 0, scale: 1, }}
                            exit={{ opacity: 0, y: -75, scale: 0, }}

                        >
                            {links.map(({ name, link }, index) => (
                                <React.Fragment key={link}>
                                    <a
                                        href={link}
                                        className="z-50 block px-4 py-2 hover:scale-[1.05] text-center text-xl rounded-md transition-all duration-200 bg-zinc-100 text-gray-500 hover:text-black"
                                    >
                                        {name}
                                    </a>
                                </React.Fragment>
                            ))}

                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default HeaderDropdown;