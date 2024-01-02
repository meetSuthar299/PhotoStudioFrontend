import React from 'react';
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

function SocualMediaLinks() {
    return (
        <div className="hidden xl:flex">
            <ul className='flex gap-x-4'>
                <li className='text-2xl  transition-all hover:scale-125 shadow-xl'>
                    <a href="https://www.instagram.com/meetsuthar/" >
                        <FaInstagram />
                    </a>
                </li>
            </ul>
        </div>

    )
}

export default SocualMediaLinks;