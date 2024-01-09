import React from 'react'
import Logo, { LogoStudio } from "../../Components/Logo"

function Hero() {
    return (
        <div id="home" className="h-screen relative bg-slate-500 overflow-hidden">
        <video
            src='https://res.cloudinary.com/ddp8ln1ts/video/upload/v1704795384/mountain_-_34608_1440p_lz5dzb.mp4'
            autoPlay muted loop
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
