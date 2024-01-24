import React, { useEffect } from 'react'
import PageBanner from '../../Components/PageBanner'
import Contact from '../Contact'
import AnimatedComponent from '../../Components/AnimatedComponent'
import WhatToExpect from '../../Components/WhatToExpect';
import { useLocation } from 'react-router-dom';

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
    <div>
      <PageBanner
        text={'Personal Services'}
        backgroundImage={"https://res.cloudinary.com/ddp8ln1ts/image/upload/v1704868123/IMG_2820_os1xpx.jpg"}
        links={[{ name: 'What To Expect', link: '/personalService/#whatToExpect' }, { name: 'Get a Quote', link: '/personalService/#contact' }]}
      />
      <div className="lg:px-20 px-10 pb-10">
        <AnimatedComponent>
          <WhatToExpect
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
      <Contact />
    </div>
  )
}

export default PersonalService
