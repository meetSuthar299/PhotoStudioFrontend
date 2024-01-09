import React from 'react';
import { FaInstagram, FaTiktok } from 'react-icons/fa';

function SocialMediaLinks() {
    return (
            <ul className='flex gap-x-4'>
                <li className='text-2xl hover:scale-125 shadow-xl'>
                    <a href="https://www.instagram.com/arkticstudios/" >
                        <FaInstagram />
                    </a>
                </li>
                <li className='text-2xl hover:scale-125 shadow-xl'>
                    <a href="https://www.tiktok.com/@arkticstudios" >
                        <FaTiktok />
                    </a>
                </li>
            </ul>
    )
}

export default SocialMediaLinks;