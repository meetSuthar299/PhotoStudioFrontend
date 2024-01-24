import React from 'react'
import { LogoStudio } from "../../Components/Logo"
import video from "../../img/gallery/forWebsite.mp4"
import { RotatingText } from 'react-rotating-text';
// import TypingHeading from '../../Components/typingHeadding';

function Hero() {
    const services = ["Video Production", "Photography", "Graphic Design", "Web Design"];
    return (
        <div id="home" className="h-screen relative bg-slate-500 overflow-hidden">
            <div dangerouslySetInnerHTML={{
                __html: `<video 
                    loop muted autoplay playsinline
                    src="${video}"
                    class="w-full h-full object-cover absolute top-0 left-0 z-0"
                />`,
            }}></div>
            <div className="overlay absolute top-0 left-0 w-full h-full flex justify-center items-center flex-col z-1 text-white">
                <div className='text-8xl mb-4'>
                    <LogoStudio />
                </div>
                {/* <h1 className="text-4xl font-semibold mb-6">Serving Calgary and beyond with</h1> */}
                {/* <TypingHeading headings={services} className="font-semibold " /> */}
                {/* <div className="flex flex-col sm:flex-row gap-4">
                    {services.map((service, index) => (
                        <div key={index} className="text-2xl font-light text-center">{service}</div>
                    ))}
                </div> */}
                {/* <RotatingText
                    items={services}
                    className="text-2xl font-light text-center"
                    pause={2000} // Pause between rotations in milliseconds
                /> */}
            </div>
        </div>

    )
}

export default Hero
