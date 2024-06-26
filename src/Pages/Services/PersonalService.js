import React, { useEffect } from 'react'
import PageBanner from '../../Components/PageBanner'
import Contact from '../Contact'
import AnimatedComponent from '../../Components/WrapperComponents/AnimatedComponent'
import StepsToSuccess from '../../Components/StepsToSuccess';
import { useLocation } from 'react-router-dom';
import { motion } from "framer-motion";

import FlipCard from '../../Components/FlipCard';

import { MdFamilyRestroom, MdOutlineCelebration } from "react-icons/md";
import { MdOutlinePhotoCameraFront } from "react-icons/md";
import { MdFaceRetouchingNatural } from "react-icons/md";
import { GiLovers } from "react-icons/gi";

import portraitImg from '../../img/ServiceImgs/portrait-img.jpg';
import professionalPic from '../../img/ServiceImgs/professionalPic.jpg';
import familyPic from '../../img/ServiceImgs/familyPic.jpg';
import engagementPic from '../../img/ServiceImgs/engagementPic.jpg';
import eventPic from '../../img/ServiceImgs/eventPic.jpg';

function PersonalService() {
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
    <motion.section
      className='section '
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
    >
      <PageBanner
        text={'Personal Services'}
        backgroundImage={"https://res.cloudinary.com/ddp8ln1ts/image/upload/v1704868123/IMG_2820_os1xpx.jpg"}
        links={[
          { name: 'What We Do', link: '/personalService/#whatWeDo' },
          { name: 'Steps to Success', link: '/personalService/#stepsToSuccess' },
          { name: 'Get a Quote', link: '/personalService/#contact' },
        ]}
      />
      <div id='whatWeDo' className='pt-10'>
        <AnimatedComponent>
          <div className="flex flex-col items-center justify-center lg:px-20 md:px-10 px-10 py-10">
            <h1 className="text-4xl text-black text-center py-10">Unveil Unforgettable Moments with Our Personalized Services</h1>
            <p className="text-lg lg:text-xl font-light text-black text-center">
              Dive into a world of unparalleled creativity as we specialize in capturing the essence of your precious moments. With our personalized services, we ensure that your unique story shines through, helping you cherish and relive those special memories for years to come.
            </p>
          </div>
        </AnimatedComponent>
      </div>
      <div className="lg:px-20 md:px-10 px-10">
        {/* <h1  className='text-4xl text-black text-center py-10'>What We Do</h1> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex flex-col ">
            <FlipCard
              title="Individual Portrait Photoshoots"
              frontData={{
                icon: <MdOutlinePhotoCameraFront />,
                img: portraitImg
              }}
              backData={{
                paragraph: "Capture your essence with our individual portrait photoshoots. Whether it's for personal or professional use, our experienced photographers will ensure you look your best. From choosing the perfect backdrop to guiding you through poses, we'll create stunning portraits that reflect your unique personality and style.",

              }}
              size="vertical"
            />
          </div>
          <div className="flex flex-col ">
            <FlipCard
              title="Professional Head Shots"
              frontData={{
                icon: <MdFaceRetouchingNatural />,
                img: professionalPic
              }}
              backData={{
                paragraph: "Elevate your professional image with our expert headshot services. Our team specializes in capturing your unique essence, ensuring you make a lasting impression in any professional setting. With meticulous attention to detail and a keen eye for aesthetics, we guarantee headshots that exude professionalism and confidence."

              }}
              size="horizontal"
            />
            <FlipCard
              title="Family Portrait Sessions"
              frontData={{
                icon: <MdFamilyRestroom />,
                img: familyPic
              }}
              backData={{
                paragraph: "Capture cherished moments with our family portrait sessions. Our skilled photographers specialize in creating beautiful and meaningful images that reflect the love and connection within your family. Whether it's a formal studio shoot or a relaxed outdoor session, we'll ensure you have timeless photos to treasure for generations."

              }}
              size="horizontal"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex flex-col ">
            <FlipCard
              title="Engagement & Couple Portrait Sessions"
              frontData={{
                icon: <GiLovers />,
                img: engagementPic
              }}
              backData={{
                paragraph: "Celebrate your love story with our engagement and couple portrait sessions. Our talented photographers specialize in capturing the unique connection and chemistry between you and your partner. Whether you prefer a romantic outdoor setting or a cozy indoor shoot, we'll work with you to create stunning images that reflect your love and personalities."

              }}
              size="horizontal"
            />
            {/* <FlipCard
              title="Search Engine Optimization"
              frontData={{
                img: <FaSellsy />,
                paragraph: "Improve your business's search engine ranking with our collaborative strategy, boosting online visibility and attracting more website visitors."
              }}
              backData={{ paragraph: '' }}
              size="horizontal"
            /> */}
          </div>
          <div className="flex flex-col">
            <FlipCard
              title="Event Photography & Videography"
              frontData={{
                icon: <MdOutlineCelebration />,
                img: eventPic
              }}
              backData={{
                paragraph: 'Get your business online with our customized website design and development services. Our expert team creates websites tailored to your needs and goals.'
              }}
              size="horizontal"
            />
          </div>
        </div>
        <div className="lg:px-20 px-10 pb-10">
          <AnimatedComponent>
            <StepsToSuccess
              text="Our mission is to elevate your personal story and highlight your unique qualities, uncovering the distinctive aspects that define you. Here's our tailored approach to delivering services that seamlessly align with your distinct vision."
              steps={[
                "Let's dive into a conversation about your project and your personal vision.",
                "Together, we'll outline personalized plans, curate shot ideas, finalize locations, and set dates.",
                "We'll capture moments that reflect your personality, ensuring every detail shines.",
                'Your selected images will be presented in high resolution, ready for seamless sharing and cherishing.',
              ]}
            />
          </AnimatedComponent>
        </div>
      </div>
      <Contact />
    </motion.section>
  )
}

export default PersonalService
