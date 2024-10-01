import React from 'react'
import { LogoStudio } from "../../Components/Logo"
import video from "../../img/gallery/forWebsite.mp4"
import SocialMediaLinks from '../../Components/SocialMediaLinks';
import AnimatedComponent from '../../Components/WrapperComponents/AnimatedComponent';
import { NavLink } from 'react-router-dom';

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
            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center z-10 text-white backdrop-brightness-75 text-center p-4">
                <AnimatedComponent>
                    <h1 className="text-7xl font-extrabold leading-tight text-lightGoldText"><LogoStudio /></h1>
                    <h2 className="text-2xl font-light leading-tight mt-4 mb-6 max-w-xl mx-auto">
                        Supporting your success with our Marketing Intelligence & Technology Solutions
                    </h2>
                    <div className="w-1/2 my-6 h-[2px] bg-gradient-to-r from-transparent via-white to-transparent rounded-full mx-auto"></div>
                    <div className="flex justify-center w-full">
                        <NavLink to="/#about" className="btn hover:scale-105 w-3/4 shadow-lg bg-[rgba(46,46,46,0.7)] hover:bg-[rgba(194,194,194,0.2)] rounded-lg text-xl transition-all backdrop-blur-md p-3">
                            Learn More
                        </NavLink>
                    </div>
                    {/* <SocialMediaLinks /> */}
                </AnimatedComponent>
            </div>

        </div>

    )
}

export default Hero;

