import React from 'react';
import { FaInstagram, FaTiktok } from 'react-icons/fa';

function SocialMediaLinks() {
    return (
            <ul className='flex gap-x-4 text-3xl transition-all'>
                <li className='hover:scale-125'>
                    <a href="https://www.instagram.com/arkticstudios/" >
                        <FaInstagram />
                    </a>
                </li>
                <li className=' hover:scale-125'>
                    <a href="https://www.tiktok.com/@arkticstudios" >
                        <FaTiktok />
                    </a>
                </li>
            </ul>
    )
}

export default SocialMediaLinks;