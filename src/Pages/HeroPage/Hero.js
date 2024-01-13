import React from 'react'
import { LogoStudio } from "../../Components/Logo"
import video from "../../img/gallery/forWebsite.mp4"

function Hero() {
    return (
    <div id="home" className="h-screen relative bg-slate-500 overflow-hidden">
        <video
            src={video}
            muted
            loop
            autoPlay 
            className="w-full h-full object-cover absolute top-0 left-0 z-0"
        />
        <div className="text-white overlay absolute top-0 left-0 w-full h-full flex justify-center items-center flex-col z-1">
            <div className='text-6xl'>
                <LogoStudio />
            </div>
        </div>
    </div>

    )
}

export default Hero
