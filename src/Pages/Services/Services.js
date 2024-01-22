import React, { useEffect, useState } from 'react'
import ItemCard from '../../Components/ItemCard'
import portraitImg from "../../img/gallery/portrait-img.jpg"
import printImg from "../../img/gallery/print-img.jpg"
import autoImg from "../../img/gallery/auto-img.jpg"
import editingImg from "../../img/gallery/editing-img.jpg"
import eventImg from "../../img/gallery/event-img.jpg"
import commercialImg from "../../img/gallery/Commercia-Img.jpg"
import nightDiaryImg from "../../img/gallery/nightDiaries.jpg";
import AnimatedComponent from '../../Components/AnimatedComponent'
import ServiceCard from '../../Components/ServiceCard'
import ParalaxComponent from '../../Components/ParalaxComponent'

function Services() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Attach the event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id='services' className='section '>
      <ParalaxComponent backgroundImage='url(https://res.cloudinary.com/ddp8ln1ts/image/upload/q_60/v1704868127/IMG_7527_wmhqsf.jpg)'>
        <h1 className='text-4xl lg:text-5xl text-white text-center z-10 relative mx-auto pb-10'>
          Our Services
        </h1>
        <p className='text-lg lg:text-xl font-light text-white text-center z-10 relative mx-auto'>
          Elevating Your Vision, Exceeding Your Expectations.
        </p>
      </ParalaxComponent>
      <div className='px-5 lg:px-16 pt-5 pb-24'>
        <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-5">
          <AnimatedComponent>
            <ServiceCard
              img={"https://res.cloudinary.com/ddp8ln1ts/image/upload/q_60/v1704924907/B8B98E71-DCFC-4EFE-8F58-2A3E12B0F607_jrefnu.jpg"}
              title={"Business"}
              disc={""}
              offerings={[
                "Professional Corporate Headshots",
                "Video Production",
                "Product and Brand Photography",
                "Custom Website Development",
                "Social Media Marketing",
                "Search Engine Optimization(SEO)",
              ]}
              link={"/corporateService"}
            />
          </AnimatedComponent>
          <AnimatedComponent>
            <ServiceCard
              img={"https://res.cloudinary.com/ddp8ln1ts/image/upload/q_40/v1705296476/edit-5_etttao.jpg"}
              title={"Automotive"}
              disc={"We capture the elegance, power, and intricate details that unveil the unique personality of every vehicle, from sleek sports cars to vintage classics."}
              offerings={[
                "Private Vehicle Photoshoot",
                "Dealership Media",
                "Aerial Drone Photography & Videography",
                "360-Degree Interior and Exterior Shots",
              ]}
              link={"/automotiveService"}
            />
          </AnimatedComponent>
          <AnimatedComponent>
            <ServiceCard
              img={eventImg} 
              title={"Personal"}
              disc={"Capture the memories of your wedding, parties, conferences, and other memorable occasions. From natural moments to atmosphere capture, we make sure every significant aspect is exquisitely captured on camera."}
              offerings={[
                "Individual Portrait Photoshoots",
                "Professional Head Shots",
                "Family Portrait Sessions",
                "Engagement & Couple Portrait Sessions",
                "Event Photography & Videography",
              ]}
              link={"/personalService"}
            />
          </AnimatedComponent>
        </div>
      </div>
    </section>
  )
}

export default Services
