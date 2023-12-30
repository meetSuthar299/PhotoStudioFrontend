import React from 'react';
import {
  ImInstagram,
  ImFacebook
} from 'react-icons/im'

const Socials = () => {
  return <div className='hidden xl:flex ml-24'>
    <ul className='flex gap-x-4 text-lg'>
      <li><a href="https://www.instagram.com/m.k.moments/?hl=en"><ImInstagram /></a></li>
      <li><a href="https://www.instagram.com/m.k.moments/?hl=en"><ImFacebook /></a></li>
    </ul>
  </div>;
};

export default Socials;
