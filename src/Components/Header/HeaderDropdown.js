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
        <div className="relative inline-block text-left hover:scale-110">
            <div className='flex'>
                <a href={dropdownLink} className="font-semibold focus:outline-none">
                    {dropdownTitle}
                </a>
                <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <motion.span
                        onClick={handleToggleDropdown}
                        className={`transition-all duration-75 pt-1 inline-block text-2xl`}
                        initial={{ rotate: 0 }}
                        animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                        style={{ zIndex: 1 }}
                    >
                        <IoIosArrowDown />
                    </motion.span>
                    <AnimatePresence>
                        {isDropdownOpen && (
                            <motion.div
                                key="dropdown"
                                className="absolute -left-9 w-40 rounded-lg p-1 shadow-xl bg-[rgba(251,252,255,0.84)] backdrop-blur-sm backdrop-grayscale z-50 duration-75 border"
                                initial={{ opacity: 0, y: -75, scale: 0 }}
                                animate={{ opacity: 1, y: 0, scale: 1, }}
                                exit={{ opacity: 0, y: -75, scale: 0, }}

                            >
                                {links.map(({ name, link }, index) => (
                                    <React.Fragment key={link}>
                                        <a
                                            href={link}
                                            className="block px-4 py-2 hover:scale-[1.2] text-center text-xl rounded-md transition-all duration-200  text-gray-600 hover:text-black"
                                        >
                                            {name}
                                        </a>
                                        {index !== links.length - 1 && (
                                            <div className="w-[90%] mx-auto h-[1px] bg-gradient-to-r from-[rgb(255,255,255,0)] via-[rgb(0,0,0)] to-[rgb(255,255,255,0)] rounded-full"></div>
                                        )}
                                    </React.Fragment>
                                ))}

                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default HeaderDropdown;