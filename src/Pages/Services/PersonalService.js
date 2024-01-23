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
            text="Elevating a vehicle through photography transcends mere aesthetics—it's a celebration of diverse designs. 
            Our mission is to unravel these distinctive features, recognizing that each vehicle appeals to a unique demographic. 
            Here's the tailored approach to deliver content that aligns seamlessly with your distinct vision."
            setDescription={[
              "Let's discuss your project and your unique vision.",
              "Together, we'll craft shot lists, choose locations, and set dates.",
              "We capture your vehicle in action, ensuring every detail shines.",
              'Your chosen images arrive in high resolution, ready for seamless uploading.',
            ]}
          />
        </AnimatedComponent>
      </div>
      <Contact />
    </div>
  )
}

export default PersonalService
