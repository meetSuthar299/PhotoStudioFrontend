import React, { useEffect } from 'react'
import PageBanner from '../../Components/PageBanner'
import Contact from '../Contact'
import AnimatedComponent from '../../Components/WrapperComponents/AnimatedComponent'
import StepsToSuccess from '../../Components/StepsToSuccess';
import { useLocation } from 'react-router-dom';
import FlipCard from '../../Components/FlipCard';
import { motion } from "framer-motion";

import CorporateHeadshot from '../../img/ServiceImgs/CorporateHeadshots.jpg';
import CorporateVideo from '../../img/ServiceImgs/CorporateVideo.jpg';
import CorporateProduct from '../../img/ServiceImgs/corporateProduct.jpg';
import SocialMedia from '../../img/ServiceImgs/SocialMedia.jpg';
import SEO from '../../img/ServiceImgs/SEO.jpg';
import WebDesign from '../../img/ServiceImgs/WebDesign.jpg';

import { RiCloudFill, RiCodeSSlashLine, RiTeamLine } from "react-icons/ri";
import { MdMobileFriendly, MdVideoCameraFront } from "react-icons/md";
import { RiVipCrownFill } from "react-icons/ri";
import { FaSellsy, FaConnectdevelop, FaServer } from "react-icons/fa";
import { MdOutlineWeb } from "react-icons/md";


function SoftwareSolutions() {
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
        text={'Software Solutions'}
        backgroundImage={"https://res.cloudinary.com/ddp8ln1ts/image/upload/q_50/v1705297846/colorCheck1_j8ucjm.jpg"}
        links={[
          { name: 'What We Do', link: '/software/#whatWeDo' },
          { name: 'Steps to Success', link: '/software/#stepsToSuccess' },
          { name: 'Get a Quote', link: '/software/#contact' }
        ]}
      />
      <div id='whatWeDo' className='pt-10'>
        <AnimatedComponent>
          <div className="flex flex-col items-center justify-center lg:px-20 md:px-10 px-10 py-10">
            <h1 className="text-4xl text-black text-center py-10">Your Premier Destination for Web Development & Software Solutions</h1>
            <p className="text-lg lg:text-xl font-light text-black text-center">
              At MIT Solutions, we excel in delivering innovative software solutions tailored to your business needs. Our focus is on empowering your organization with technology that enhances efficiency, drives growth, and helps you achieve your strategic goals.
            </p>
          </div>

        </AnimatedComponent>
      </div>
      <div className="lg:px-20 md:px-10 px-10">
        {/* <h1  className='text-4xl text-black text-center py-10'>What We Do</h1> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex flex-col ">
            <FlipCard
              title="Custom Software Development"
              frontData={{
                icon: <RiCodeSSlashLine />,
                img: "https://plus.unsplash.com/premium_photo-1720287601920-ee8c503af775?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }}
              backData={{
                paragraph: "We specialize in building scalable, custom software solutions tailored to meet your business objectives. From automation to complex integrations, our team ensures your software enhances productivity and innovation.",
                bulletPoints: [
                  'End-to-end software development',
                  'System integration & automation',
                  'Cloud-based solutions'
                ]
              }}
              size="vertical"
            />
          </div>
          <div className="flex flex-col ">
            <FlipCard
              title="Mobile App Development"
              frontData={{
                icon: <MdMobileFriendly />,
                img: "https://plus.unsplash.com/premium_photo-1683936163005-a506303344b3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }}
              backData={{
                paragraph: "Design and develop cutting-edge mobile applications that boost user engagement and drive business success. We build seamless mobile experiences for iOS, Android, and hybrid platforms."
              }}
              size="horizontal"
            />
            <FlipCard
              title="Cloud Services"
              frontData={{
                icon: <RiCloudFill />,
                img: "https://plus.unsplash.com/premium_photo-1681487942927-e1a2786e6036?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }}
              backData={{
                paragraph: "Leverage the power of the cloud to enhance scalability, reduce costs, and optimize your infrastructure. We provide cloud migration, hosting, and managed cloud solutions tailored to your needs."
              }}
              size="horizontal"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex flex-col ">
            <FlipCard
              title="Digital Transformation"
              frontData={{
                icon: <FaConnectdevelop />,
                img: "https://plus.unsplash.com/premium_photo-1683288537140-e5dd2c5f0911?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }}
              backData={{
                paragraph: 'Empower your business with cutting-edge digital transformation strategies that streamline processes and enhance customer experiences. We help businesses modernize their operations and embrace technology for long-term success.'
              }}
              size="horizontal"
            />
            <FlipCard
              title="Managed IT Services"
              frontData={{
                icon: <FaServer />,
                img: "https://plus.unsplash.com/premium_photo-1720534084908-bd8dca31a658?q=80&w=1047&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }}
              backData={{
                paragraph: "Focus on your core business while we handle the technical infrastructure. Our managed IT services ensure your systems run smoothly, with ongoing support, security monitoring, and performance optimization."
              }}
              size="horizontal"
            />
          </div>
          <div className="flex flex-col">
            <FlipCard
              title="Website Design & Development"
              frontData={{
                icon: <MdOutlineWeb />,
                img: "https://plus.unsplash.com/premium_photo-1683288537078-a04cc87545f6?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }}
              backData={{
                paragraph: "Your website is the face of your company online. We create dynamic, SEO-optimized, and responsive websites that help your business thrive. Our services include design, development, and ongoing maintenance to ensure your site stays ahead of the curve.",
                bulletPoints: [
                  'Custom designs on WordPress, React, and more',
                  'Mobile responsiveness & SEO optimization'
                ]
              }}
              size="vertical"
            />
          </div>
        </div>

        <div className="lg:px-20 px-10 pb-10">
          <AnimatedComponent>
            <StepsToSuccess
              text="We aim to reveal the unique aspects that set your business apart, acknowledging its 
                    special appeal to your target audience. Here's our customized approach to delivering content that effortlessly aligns with your 
                    strategic vision."
              steps={[
                "Let's initiate a discussion about your project and your vision.",
                "Together, we'll formulate comprehensive plans, curate shot lists, finalize locations, and set dates.",
                "We meticulously capture your corporate essence in action, ensuring every detail shines.",
                'Your selected images are delivered in high resolution, primed for seamless integration into your corporate identity.',
              ]}
            />
          </AnimatedComponent>
        </div>
      </div>
      <Contact />
    </motion.section>

  )
}

export default SoftwareSolutions
