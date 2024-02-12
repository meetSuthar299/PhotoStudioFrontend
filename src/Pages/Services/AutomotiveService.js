import React, { useEffect, useState } from 'react'
import PageBanner from '../../Components/PageBanner'
import Contact from '../Contact'
import AnimatedComponent from '../../Components/WrapperComponents/AnimatedComponent'
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import WhatToExpect from '../../Components/WhatToExpect';

import FlipCard from '../../Components/FlipCard';
import { GiRaceCar } from "react-icons/gi";
import { IoCarSport } from "react-icons/io5";
import { FaCar } from "react-icons/fa";
import { TbDrone } from "react-icons/tb";
import { MdFilterFrames } from "react-icons/md";

import Auto1 from '../../img/ServiceImgs/Auto1.jpg';
import Auto3 from '../../img/ServiceImgs/Auto3.jpg';
import Auto4 from '../../img/ServiceImgs/Auto4.jpg';
import Drone from '../../img/ServiceImgs/Drone.jpg';
import Print from '../../img/ServiceImgs/Print.jpg';

function AutomotiveService() {
  // scroll animation
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      let elem = document.getElementById(location.hash.slice(1))
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" })
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    }
  }, [location])

  return (
    <div>
      <PageBanner
        text={'Automotive Studio'}
        backgroundImage={"https://res.cloudinary.com/ddp8ln1ts/image/upload/q_30/v1705296352/film-23_csirlj.jpg"}
        links={[
          { name: 'What We Do', link: '/automotiveService/#whatWeDo' },
          { name: 'What To Expect', link: '/automotiveService/#whatToExpect' },
          { name: 'Get a Quote', link: '/automotiveService/#contact' }
        ]}
      />
      <div id='whatWeDo' className='pt-10'>
        <AnimatedComponent>
          <div className="flex flex-col items-center justify-center lg:px-20 md:px-10 px-10 py-10">
            <h1 className="text-4xl text-black text-center py-10">Revitalize Your Ride with Our Custom Automotive Services</h1>
            <p className="text-lg lg:text-xl font-light text-black text-center">
              Embark on a journey of automotive excellence as we specialize in enhancing the essence of your vehicle. With our personalized services, we ensure that your unique automotive story comes to life, allowing you to cherish and enjoy every moment behind the wheel for years to come.
            </p>
          </div>
        </AnimatedComponent>
      </div>
      <div className="lg:px-20 md:px-10 px-10">
        {/* <h1  className='text-4xl text-black text-center py-10'>What We Do</h1> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex flex-col ">
            <FlipCard
              title="Private Vehicle Photoshoot"
              frontData={{
                icon: <FaCar />,
                img: Auto1
              }}
              backData={{
                paragraph: "Capture the essence of your vehicle with our personalized photoshoots. Our experienced photographers will ensure it looks stunning, whether for personal enjoyment or professional purposes."

              }}
              size="vertical"
            />
          </div>
          <div className="flex flex-col ">
            <FlipCard
              title="Detailed Vehicle Videos"
              frontData={{
                icon: <IoCarSport />,
                img: Auto4
              }}
              backData={{
                paragraph: "Bring your vehicle to life with our detailed vehicle videos. Our team specializes in capturing the essence of your vehicle, ensuring it stands out in any setting. With meticulous attention to detail and a keen eye for aesthetics, we guarantee videos that showcase the professionalism and uniqueness of your vehicle."

              }}
              size="horizontal"
            />
            <FlipCard
              title="Dealership Media"
              frontData={{
                icon: <GiRaceCar />,
                img: Auto3
              }}
              backData={{
                paragraph: "Enhance your dealership's presence with our comprehensive media services. Our skilled photographers specialize in capturing captivating images that highlight the essence of your dealership and the vehicles you offer. Whether it's showcasing the showroom, conducting vehicle photo shoots, or capturing the dealership's atmosphere, we'll ensure your media portrays professionalism and quality."

              }}
              size="horizontal"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex flex-col ">
            <FlipCard
              title="Aerial Drone Photography & Videography"
              frontData={{
                icon: <TbDrone />,
                img: Drone
              }}
              backData={{
                paragraph: "Elevate your perspective with our aerial drone photography and videography services. Our skilled team specializes in capturing stunning aerial shots and videos that provide a unique and breathtaking view of your surroundings. Whether it's for personal or professional use, we'll work with you to capture the perfect angles and moments, ensuring you have captivating visuals that leave a lasting impression."

              }}
              size="horizontal"
            />
          </div>
          <div className="flex flex-col">
            <FlipCard
              title="Custom Prints and Wallpapers"
              frontData={{
                icon: <MdFilterFrames />,
                img: Print
              }}
              backData={{
                paragraph: "Transform your space with our custom prints and wallpapers. Our team specializes in creating personalized designs that reflect your unique style and personality. Whether you're looking to add a pop of color, showcase your favorite memories, or create a statement wall, we'll work with you to bring your vision to life.",
              }}
              size="horizontal"
            />
          </div>
        </div>
        <div className="lg:px-20 px-10 pb-10">
          <AnimatedComponent>
            <WhatToExpect
              text="Elevating a vehicle through photography transcends mere aesthetics—it's a celebration of diverse designs. 
            Our mission is to unravel these distinctive features, recognizing that each vehicle appeals to a unique demographic. 
            Here's the tailored approach to deliver content that aligns seamlessly with your distinct vision."
              steps={[
                "Let's discuss your project and your unique vision.",
                "Together, we'll craft shot lists, choose locations, and set dates.",
                "We capture your vehicle in action, ensuring every detail shines.",
                'Your chosen images arrive in high resolution, ready for seamless uploading.',
              ]}
            />
          </AnimatedComponent>
        </div>
      </div>
      <Contact />
    </div>
  )
}

export default AutomotiveService
