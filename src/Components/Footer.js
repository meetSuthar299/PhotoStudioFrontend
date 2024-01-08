import React from 'react'
import Logo from './Logo'
import SocialMediaLinks from './SocialMediaLinks'

function Footer() {
  return (
    <footer className="text-center mx-auto sm:max-w-2xl md:max-w-full lg:max-w-screen md:px-8 lg:px-8 relative z-10 border-slate-800 border-x border-b bg-gray-900 text-white py-8">
      <a href='/' className='cursor-pointer text-5xl '>
        <Logo/>
      </a>
      <div className="flex justify-center pt-5">
        <SocialMediaLinks />
      </div>
      <div className="text-sm mt-6">
        <div className="flex space-x-4 justify-center">
          <a href="/#about" className="hover:text-gray-400">About</a>
          <a href="/#services" className="hover:text-gray-400">Services</a>
          <a href="/#contact" className="hover:text-gray-400">Contact</a>
          <a href="/gallery" className="hover:text-gray-400">Gallery</a>
          <a href="/portfolio" className="hover:text-gray-400">Portfolio</a>
        </div>
        <div className="flex space-x-4 justify-center pt-5">
          <a href="/termsOfService" className="hover:text-gray-400">Terms of Service</a>
          <a href="/privacyPolicy" className="hover:text-gray-400">Privacy Policy</a>
        </div>

        <p className="mt-4">
          © {new Date().getFullYear()} Arktic Studios. All rights reserved.
        </p>
      </div>

    </footer>
  )
}

export default Footer
