import React from 'react'
import Logo from "../img/header/Logo.png"
import SocialMediaLinks from './SocialMediaLinks'

function Footer() {
  return (
    <footer className="text-center mx-auto sm:max-w-2xl md:max-w-full lg:max-w-screen md:px-8 lg:px-8 relative z-10 border-slate-800 border-x border-b bg-gray-900 text-white py-8">

      <div className="flex flex-col lg:flex-row items-center justify-center space-y-4 lg:space-y-0 lg:space-x-8">
        <img className='h-20' src={Logo} alt='logo' />
      </div>
      <div className="flex justify-center">
        <SocialMediaLinks />
      </div>
      <div className="text-sm mt-6">
        <div className="flex space-x-4 justify-center">
          <a href="/about" className="hover:text-gray-400">About</a>
          <a href="/contact" className="hover:text-gray-400">Contact</a>
          <a href="/privacy" className="hover:text-gray-400">Privacy Policy</a>
          <a href="/legal" className="hover:text-gray-400">Legal</a>
        </div>

        <p className="mt-4">
          © {new Date().getFullYear()} Arktic Studios. All rights reserved.
        </p>
      </div>

    </footer>
  )
}

export default Footer
