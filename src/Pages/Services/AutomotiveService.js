import React, { useEffect, useState } from 'react'
import PageBanner from '../../Components/PageBanner'
import Contact from '../Contact'
import AnimatedComponent from '../../Components/AnimatedComponent'

function AutomotiveService() {
  return (
    <div>
      <PageBanner text={'Automotive Service'} backgroundImage={"https://res.cloudinary.com/ddp8ln1ts/image/upload/v1705296352/film-23_csirlj.jpg"} />
      <div className="grid max-w-screen-xl sm:mx-auto text-center items-center justify-center h-[60vh]">
        <div>
          <AnimatedComponent>
            <h2 className="text-4xl font-bold mb-4">Exciting Things Are Coming!</h2>
            <p className="text-lg mb-8">We are working hard to bring you something amazing. Stay tuned for updates!</p>
          </AnimatedComponent>
        </div>
      </div>
      <Contact />
    </div>
  )
}

export default AutomotiveService
