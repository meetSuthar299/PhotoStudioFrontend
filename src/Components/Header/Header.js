import React, { useEffect, useState } from 'react';
import Logo from '../Logo';
import MobileNav from "./MobileNav";
import HeaderDropdown from './HeaderDropdown';
import { NavLink, useNavigate } from 'react-router-dom';
import ShowOnLogin, { ShowOnLogout } from "../../helpers/hiddenLink";
import { useDispatch, useSelector } from "react-redux";
import { RESET_AUTH, logout, getUser, selectUser } from "../../redux/Auth/AuthSlice";
import { shortenText, useLogoutUser } from '../../helpers/functions';
import { UserName } from '../../Pages/Account/Account';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isLoading, user } = useSelector((state) => state.auth);
  const [profile, setProfile] = useState({
    name: user?.name || "",
    email: user?.email || "",
    role: user?.role || "",
  });

  // get user from redux store
  useEffect(() => {
    if (!user) {
      dispatch(getUser());
    }
  }, [dispatch, user]);
  // get user from redux store and set profile state
  useEffect(() => {
    if (user) {
      setProfile({
        name: user.name || "",
        email: user.email || "",
        phone: user.phone || "",
        role: user.role || "",
        address: user.address || {},
      });
    }
  }, [user]);


  // scroll event listener to change header background color
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
    <header className={`fixed w-full px-10 z-30 h-20 flex items-center shadow-lg ${isScrolled ? 'bg-white text-black' : 'bg-[rgba(8,10,19,0.27)] text-white'} backdrop-blur-sm transition-all duration-700 border-b border-gray-500`}>
      <div className='font-primary flex lg:items-center w-full lg:justify-center'>

        <nav className='hidden lg:flex absolute left-16 gap-x-8 text-2xl'>
          <HeaderDropdown
            dropdownTitle="About"
            dropdownLink="/#about"
            links={[
              { name: 'Our Story', link: '/aboutTeam/#ourStory' },
              { name: 'Our Values', link: '/aboutTeam/#values' },
              { name: 'Our Success', link: '/aboutTeam/#success' }
            ]}
          />
          <HeaderDropdown
            dropdownTitle="Services"
            dropdownLink="/#services"
            links={[
              { name: 'Software', link: '/software/' },
              { name: 'Marketing', link: '/marketing/' },
              { name: 'Media', link: '/media/' },
            ]}
          />
          <NavLink
            to='/#contact'
            key='/#contact'
          >
            Contact
          </NavLink>
        </nav>

        <nav className=''>
          <NavLink to='/' className='max-w-[200px] cursor-pointer hover:scale-105 text-5xl '>
            <Logo />
          </NavLink>
        </nav>

        <nav className='hidden lg:flex absolute right-16 gap-x-8 text-2xl'>
          <NavLink
            to='/portfolio'
            key='/portfolio'
          >
            Portfolio
          </NavLink>
          <NavLink
            to='/gallery/'
            key='/gallery'
          >
            Gallery
          </NavLink>
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
            <NavLink
              to='/login'
              key='/login'
              className='cursor-pointer hover:scale-110'>
              Login
            </NavLink>
          </ShowOnLogout>
        </nav>
      </div>
      <MobileNav />
    </header>
  );
};

export default Header;