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
                        className={`transition-all duration-75 pt-1 inline-block`}
                        initial={{ rotate: 0 }}
                        animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                        style={{ zIndex: 1}}
                    >
                        <IoIosArrowDown />
                    </motion.span>
                    <AnimatePresence>
                        {isDropdownOpen && (
                            <motion.div
                                key="dropdown"
                                className="absolute -left-16 w-60 rounded-lg p-1 shadow-xl bg-[rgba(251,252,255,0.8)] backdrop-blur-sm z-50 duration-150"
                                initial={{ opacity: 0, y: -75, scale: 0 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -75, scale: 0 }}

                            >
                                {links.map(({ name, link }) => (
                                    <a
                                        key={link}
                                        href={link}
                                        className="block px-4 py-2 text-gray-700 hover:bg-slate-900 hover:text-gray-100 text-center text-xl rounded-md transition-colors duration-200"
                                    >
                                        {name}
                                    </a>
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