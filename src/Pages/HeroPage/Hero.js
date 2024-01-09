import React from 'react'
import ReactPlayer from 'react-player'
import Logo from "../../Components/Logo"

function Hero() {
    return (
        <div id="home" className=" h-screen justify-center bg-[rgb(6,4,12)] ">
            <ReactPlayer
                url='https://youtu.be/ouQomNjeRmM'
                volume={0}
                playing={true}
                controls={false}
                loop={true}
                width="100%"
                height="100%"
                className="relative object-fill"
                config={{
                    youtube: {
                        playerVars: {
                            modestbranding: 1,
                            showinfo: 0,
                            controls: 0,
                            loop: 1,
                            rel: 0,
                            autohide: 1,
                        },
                    },
                }}
            />
            <div className="text-white overlay absolute top-0 left-0 w-full h-full justify-center items-center flex flex-col">
                <div className='text-6xl'>
                    <Logo />
                </div>
                {/* <p className='text-5xl'>Studios</p> */}
            </div>

        </div>
    )
}

export default Hero
