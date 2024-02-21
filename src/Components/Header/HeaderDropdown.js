import React, { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from 'react-router-dom';

const HeaderDropdown = ({ dropdownTitle, dropdownLink, links}) => {
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

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            setIsDropdownOpen(!isDropdownOpen);
        }
    };

    return (
        <div className="relative text-left" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className='flex'>
                <div className='hover:scale-110'>
                    <NavLink to={dropdownLink} className="font-semibold focus:outline-none " tabIndex={0} onKeyDown={handleKeyDown}>
                        {dropdownTitle}
                    </NavLink>
                    <motion.span
                        onClick={handleToggleDropdown}
                        className={`transition-all duration-75 inline-block my-auto align-middle text-2xl`}
                        initial={{ rotate: 0 }}
                        animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                        style={{ zIndex: 100 }}
                        tabIndex={0}
                        onKeyDown={handleKeyDown}
                        role="button"
                        aria-label="Toggle Dropdown"
                    >
                        <IoIosArrowDown />
                    </motion.span>
                </div>
                <AnimatePresence>
                    {isDropdownOpen && (
                        <motion.div
                            key="dropdown"
                            className="absolute z-50 -left-[40px] top-8 w-44 rounded-lg p-1 shadow-xl bg-zinc-100 duration-75 border opacity-100"
                            initial={{ opacity: 0, y: -75, scale: 0 }}
                            animate={{ opacity: 1, y: 0, scale: 1, }}
                            exit={{ opacity: 0, y: -75, scale: 0, }}
                            role="menu"
                            aria-label="Dropdown Menu"
                        >
                            {links.map(({ name, link, clickAction}, index) => (
                                <React.Fragment key={link}>
                                    <NavLink
                                        to={link? link : ""}
                                        className="z-50 block px-4 py-2 hover:scale-[1.05] text-center text-xl rounded-md transition-all duration-200 bg-zinc-100 text-gray-500 hover:text-black"
                                        onClick={clickAction? clickAction : ""}
                                        role="menuitem"
                                        tabIndex={0}
                                        onKeyDown={handleKeyDown}
                                    >
                                        {name}
                                    </NavLink>
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