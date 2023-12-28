import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { NavbarItems } from '../NavbarData';
import '../../Components/Styles/navbar.scss';

function Navbar() {
  const [state, setState] = useState(false);
  const handleClick = () => {
    setState(!state);
  };

  return (
    <div className={state ? 'navbar active' : 'navbar'}>
      {/* For Mobile Devices */}
      <div
        className={state ? 'menu-open active' : 'menu-open'}
        onClick={handleClick}
      >
        <div className="menu-line menu-line-1"></div>
        <div className="menu-line menu-line-2"></div>
        <div className="menu-line menu-line-3"></div>
      </div>

      <h1>Corestudio</h1>
      <ul>
        {NavbarItems.map((item, index) => {
          return (
            <li key={index}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? item.cName + ' active' : item.cName
                }
                to={item.url}
              >
                <i className={item.icon}></i>
                {item.title}
              </NavLink>
            </li>
          );
        })}
      </ul>
      <div className="bottom">
        <div className="socials">
          <a href="#/">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="#/">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="#/">
            <i className="fa-brands fa-youtube"></i>
          </a>
          <a href="#/">
            <i className="fa-brands fa-twitter"></i>
          </a>
        </div>
        <h2>Subscribe for newsletter</h2>
        <input type="text" placeholder="Enter Email Address" />
        <p>
          Copyright &#169;2022 All rights reserved | This template is made by
          Secenory
        </p>
      </div>
    </div>
  );
}

export default Navbar;
