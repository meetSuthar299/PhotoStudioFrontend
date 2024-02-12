import React from 'react'
import { LogoStudio } from "../../Components/Logo"
import video from "../../img/gallery/forWebsite.mp4"
import SocialMediaLinks from '../../Components/SocialMediaLinks';
import AnimatedComponent from '../../Components/WrapperComponents/AnimatedComponent';

function Hero() {
    return (
        <div id="home" className="h-screen relative bg-slate-500 overflow-hidden">
            <div dangerouslySetInnerHTML={{
                __html: `<video 
                    loop muted autoplay playsinline
                    src="${video}"
                    class="w-full h-full object-cover absolute top-0 z-0"
                />`,
            }}></div>
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center flex-col z-1 text-white backdrop-brightness-75">

                <a className='text-6xl items-center justify-center hover:cursor-pointer hover:scale-105' href='/#about'>
                    <AnimatedComponent>
                        <LogoStudio />
                    </AnimatedComponent>
                </a>

                <div className="w-[50%] my-6 mx-auto h-[2px] bg-gradient-to-r from-[rgb(255,255,255,0)] via-[rgb(255,255,255)] to-[rgba(255,255,255,0)] rounded-full"></div>
                <AnimatedComponent>
                    <SocialMediaLinks />
                </AnimatedComponent>
                <a href='#services' className="btn w-72 py-4 absolute bottom-10 hover:scale-110 bg-[rgba(16,19,27,0.48)] backdrop-blur-lg rounded border border-zinc-600">Explore Our Services</a>
            </div>
        </div>

    )
}

export default Hero;

