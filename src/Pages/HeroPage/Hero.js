import React from 'react'
import ReactPlayer from 'react-player'
import Logo from "../../img/header/Logo.png"

function Hero() {
    return (
        <div id="home" className=" h-screen justify-center bg-[rgb(6,4,12)] text-white">
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
            <div className="overlay absolute top-0 left-0 w-full h-full flex justify-center items-center">
                <img className="w-96" src={Logo}/>
            </div>
        </div>
    )
}

export default Hero
