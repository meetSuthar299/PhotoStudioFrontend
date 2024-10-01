import React, { useEffect, useState } from 'react'
import eventImg from "../../img/gallery/event-img.jpg"
import AnimatedComponent from '../../Components/WrapperComponents/AnimatedComponent'
import ServiceCard from '../../Components/ServiceCard'
import ParalaxComponent from '../../Components/WrapperComponents/ParalaxComponent'

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
      <ParalaxComponent backgroundImage='url(https://res.cloudinary.com/ddp8ln1ts/image/upload/q_30/v1704868127/IMG_7527_wmhqsf.jpg)'>
        <h1 className='text-4xl lg:text-5xl text-white text-center z-10 relative mx-auto pb-10'>
          Our Services
        </h1>
        <p className='text-lg lg:text-xl font-light text-white text-center z-10 relative mx-auto'>
          Elevating Your Vision, Exceeding Your Expectations.
        </p>
      </ParalaxComponent>
      <div className='px-5 lg:px-16 pt-5 pb-24'>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-5">
          <AnimatedComponent>
            <ServiceCard
              img={eventImg}
              title={"Software"}
              disc={"Custom software and cloud solutions to enhance operational efficiency."}
              offerings={[
                "Website Development",
                "Software Development",
                "Mobile Application Development",
                "Cloud Computing Solutions",
                "API Integration Services",
                "Data Analytics and Reporting",
              ]}
              link={"/customSoftwareServices/"}
            />
          </AnimatedComponent>

          <AnimatedComponent>
            <ServiceCard
              img={"https://res.cloudinary.com/ddp8ln1ts/image/upload/q_30/v1704924907/B8B98E71-DCFC-4EFE-8F58-2A3E12B0F607_jrefnu.jpg"}
              title={"Marketing"}
              disc={"Elevating your brand through strategic marketing and creative design."}
              offerings={[
                "Comprehensive Brand Strategy",
                "Digital Marketing & Advertising",
                "Search Engine Optimization (SEO)",
                "Graphic Design & Branding",
                "Content Marketing Strategy",
              ]}
              link={"/strategicBusinessServices/"}
            />
          </AnimatedComponent>

          <AnimatedComponent>
            <ServiceCard
              img={"https://res.cloudinary.com/ddp8ln1ts/image/upload/v1704922335/IMG_7975_ataipw.jpg"}
              title={"Media"}
              disc={"Capturing impactful moments with professional photography and videography."}
              offerings={[
                "Professional Photography & Videography",
                "Promotional Video Production",
                "Aerial Photography & Videography",
                "Custom Vehicle Branding Solutions",
                "Dealership Marketing Materials",
              ]}
              link={"/automotiveMediaServices/"}
            />
          </AnimatedComponent>
        </div>


      </div>
    </section>
  )
}

export default Services