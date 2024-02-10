import React, { useEffect } from 'react'
import PageBanner from '../../Components/PageBanner'
import Contact from '../Contact'
import AnimatedComponent from '../../Components/WrapperComponents/AnimatedComponent'
import WhatToExpect from '../../Components/WhatToExpect';
import { useLocation } from 'react-router-dom';
import FlipCard from '../../Components/FlipCard';

import cityImg from '../../img/gallery/city.jpeg';
import CorporateHeadshot from '../../img/ServiceImgs/CorporateHeadshots.jpg';
import CorporateVideo from '../../img/ServiceImgs/CorporateVideo.jpg';
import CorporateProduct from '../../img/ServiceImgs/corporateProduct.jpg';
import SocialMedia from '../../img/ServiceImgs/SocialMedia.jpg';
import SEO from '../../img/ServiceImgs/SEO.jpg';
import WebDesign from '../../img/ServiceImgs/WebDesign.jpg';

import { RiTeamLine } from "react-icons/ri";
import { MdVideoCameraFront } from "react-icons/md";
import { RiVipCrownFill } from "react-icons/ri";
import { FaSellsy, FaConnectdevelop } from "react-icons/fa";
import { MdOutlineWeb } from "react-icons/md";


function CorporateService() {
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
        text={'Business Services'}
        backgroundImage={"https://res.cloudinary.com/ddp8ln1ts/image/upload/q_50/v1705297846/colorCheck1_j8ucjm.jpg"}
        links={[
          { name: 'What We Do', link: '/businessService/#whatWeDo' },
          { name: 'What to Expect', link: '/businessService/#whatToExpect' },
          { name: 'Get a Quote', link: '/businessService/#contact' }
        ]}
      />
      <div id='whatWeDo' className='pt-10'>
        <AnimatedComponent>
          <div className="flex flex-col items-center justify-center lg:px-20 md:px-10 px-10 py-10">
            <h1 className="text-4xl text-black text-center py-10">The ultimate hub for your business's content creation needs</h1>
            <p className="text-lg lg:text-xl font-light text-black text-center">
              We specialize in creating high-quality content that captures the essence of your business, products, and services. Our commitment is to help you stand out from the competition and achieve your business goals effectively.
            </p>
          </div>
        </AnimatedComponent>
      </div>
      <div className="lg:px-20 md:px-10 px-10">
        {/* <h1  className='text-4xl text-black text-center py-10'>What We Do</h1> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex flex-col ">
            <FlipCard
              title="Professional Corporate Headshots"
              frontData={{
                icon: <RiTeamLine />,
                img: CorporateHeadshot
              }}
              backData={{
                paragraph: "Capture the essence of your business professionals in action, ensuring every detail shines. Whether it's for executive profiles, team photos, or marketing materials, we will create high-quality headshots that leave a lasting impression."

              }}
              size="vertical"
            />
          </div>
          <div className="flex flex-col ">
            <FlipCard
              title="Video Production"
              frontData={{
                icon: <MdVideoCameraFront />,
                img: CorporateVideo
              }}
              backData={{
                paragraph: "Create a video that will engage your audience and help you stand out from the competition"
              }}
              size="horizontal"
            />
            <FlipCard
              title="Product and Brand Photography"
              frontData={{
                icon: <RiVipCrownFill />,
                img: CorporateProduct
              }}
              backData={{
                paragraph: "Showcase your product's unique features and essence through  high-quality images and videos that resonate with your brand identity and audience."
              }}
              size="horizontal"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex flex-col ">
            <FlipCard
              title="Social Media Marketing"
              frontData={{
                icon: <FaConnectdevelop />,
                img: SocialMedia
              }}
              backData={{
                paragraph: 'Enhance your online presence with a creative strategy to reach your target audience and achieve your business goals.'
              }}
              size="horizontal"
            />
            <FlipCard
              title="Search Engine Optimization"
              frontData={{
                icon: <FaSellsy />,
                img: SEO
              }}
              backData={{
                paragraph: "Improve your business's search engine ranking with our collaborative strategy, boosting online visibility and attracting more website visitors."

              }}
              size="horizontal"
            />
          </div>
          <div className="flex flex-col">
            <FlipCard
              title="Website Design & Development"
              frontData={{
                icon: <MdOutlineWeb />,
                img: WebDesign
              }}
              backData={{
                paragraph: 'Get your business online with our customized website design and development services. Our expert team creates websites tailored to your needs and goals.'

              }}
              size="vertical"
            />
          </div>
        </div>
        <div className="lg:px-20 px-10 pb-10">
          <AnimatedComponent>
            <WhatToExpect
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
    </div>

  )
}

export default CorporateService
