import React from 'react';
import { Link } from 'react-router-dom';

const HeaderDropdown = ({ dropdownTitle, dropdownLink, links }) => {
  return (
    <div className="relative inline-block text-left">
      <div>
        <button className="hover:text-primary text-2xl font-semibold focus:outline-none">
          {dropdownTitle}
        </button>
      </div>
      <div className="hidden origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
        <div className="py-1">
          {links.map(({ name, link }) => (
            <Link
              key={link}
              to={link}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            >
              {name}
            </Link>
            // fhsd
          ))}
        </div>
      </div>
    </div>
  ); 
};

export default HeaderDropdown;