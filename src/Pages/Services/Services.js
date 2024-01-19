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
      <ParalaxComponent backgroundImage='url(https://res.cloudinary.com/ddp8ln1ts/image/upload/v1704868127/IMG_7527_wmhqsf.jpg)'>
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
              img={printImg}
              title={"Corporate"}
              disc={""}
              offerings={[
                "Professional Corporate Headshots",
                "Engaging Corporate Documentaries",
                "Striking Product Photography",
                "Custom Website Development",
                "Effective Search Engine Optimization (SEO)",
              ]}
              link={"/corporateService"}
            />
          </AnimatedComponent>
          <AnimatedComponent>
            <ServiceCard
              img={autoImg}
              title={"Automotive"}
              disc={"We capture the elegance, power, and intricate details that unveil the unique personality of every vehicle, from sleek sports cars to vintage classics."}
              offerings={[
                "Professional Automotive Photography",
                "4K Showcase Videos",
                "Dynamic Aerial Drone Automotive Photography",
                "360-Degree Interior and Exterior Automotive Photography",
                "Tailored Social Media Campaigns for Automotive Brands",
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
                "Family Portrait Sessions",
                "Professional Head Shots",
                "Professional Event Photography",
                "Documentary-style Event Coverage",
                "Exclusive Destination Event Photography",
                "Private Photography Workshops and Classes",
              ]}
              link={"/personalService"}
            />
          </AnimatedComponent>
          {/* <AnimatedComponent>
            <ItemCard
              imgSrc={portraitImg}
              firstP="Portraits"
              secondP="Capture the unique essence and personalities of individuals, families, and couples in stunning portrait sessions, crafting cherished memories that last a lifetime."
            />
          </AnimatedComponent> */}
          {/* <AnimatedComponent>
            <ItemCard
              imgSrc={commercialImg}
              firstP="Products"
              secondP="Illuminate your product's excellence with our expert photo and video services. Tailored for perfection, we highlight its unique features for visual brilliance"
            />
          </AnimatedComponent> */}
          {/* <AnimatedComponent>
            <ItemCard
              imgSrc={nightDiaryImg}
              firstP="Night Diaries"
              secondP="Capture the vibrant essence of your night club and restaurant with our professional video and photography services. Elevate your memories by transforming favorite moments into stunning, high-quality videos and photos, turning them into captivating pieces of art."
            />
          </AnimatedComponent> */}
        </div>
      </div>
    </section>
  )
}

export default Services
