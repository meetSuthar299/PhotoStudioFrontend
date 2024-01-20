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
        <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="relative inline-block text-left hover:scale-110"
        >
            <div className='flex'>
                {/* Title of the dropdown */}
                <a href={dropdownLink} className="font-semibold focus:outline-none">
                    {dropdownTitle}
                </a>
                {/* Down arrow with rotation animation */}
                <motion.span
                    // Click event listener to toggle dropdown state
                    onClick={handleToggleDropdown}
                    // Initial CSS classes
                    className={`transition-all duration-75`}
                    // Initial state of the animation
                    initial={{ rotate: 0, marginBottom: 0 }}
                    // Target state of the animation based on isDropdownOpen
                    animate={{ rotate: isDropdownOpen ? 180 : 0, marginBottom: isDropdownOpen ? 2 : 0 }}
                >
                    {/* Icon (down arrow) inside the motion span */}
                    <IoIosArrowDown />
                </motion.span>
            </div>
            {/* AnimatePresence to handle enter and exit animations */}
            <AnimatePresence>
                {isDropdownOpen && (
                    <motion.div
                        key="dropdown"
                        className="absolute -left-16 w-60 rounded-md shadow-lg bg-[rgba(255,255,255,0.8)] backdrop-blur-sm border"
                        initial={{ opacity: 0, y: -65, scale:0}}
                        animate={{ opacity: 1, y: 0, scale:1}}
                        exit={{ opacity: 0, y: -65,  scale:0}}
                    >
                        {/* Dropdown content */}
                        {links.map(({ name, link }) => (
                            <a
                                key={link}
                                href={link}
                                className="block px-4 py-2 text-gray-700 hover:bg-[rgba(255,255,255,0.82)] hover:text-gray-900 text-center text-2xl hover:rounded-md"
                            >
                                {name}
                            </a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default HeaderDropdown;
