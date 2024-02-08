import React, { useEffect } from 'react'
import PageBanner from '../../Components/PageBanner'
import Contact from '../Contact'
import AnimatedComponent from '../../Components/WrapperComponents/AnimatedComponent'
import WhatToExpect from '../../Components/WhatToExpect';
import { useLocation } from 'react-router-dom';
import FlipCard from '../../Components/FlipCard';
import cityImg from '../../img/gallery/city.jpeg';

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
      <div className="lg:px-40 px-10">
        {/* <h1 id='whatWeDo' className='text-4xl text-black text-center py-10'>What We Do</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="flex flex-col ">
            <FlipCard
              title="Photography"
              frontData={{}}
              backData={{ paragraph: 'We capture the essence of your business in action, ensuring every detail shines.' }}
              size="vertical"
            />
          </div>
          <div className="flex flex-col ">
            <FlipCard
              title="Photography"
              frontData={{}}
              backData={{ paragraph: 'We capture the essence of your business in action, ensuring every detail shines.' }}
              size="horizontal"
            />
            <FlipCard
              title="Photography"
              frontData={{}}
              backData={{ paragraph: 'We capture the essence of your business in action, ensuring every detail shines.' }}
              size="horizontal"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="flex flex-col ">
            <FlipCard
              title="Photography"
              frontData={{}}
              backData={{ paragraph: 'We capture the essence of your business in action, ensuring every detail shines.' }}
              size="horizontal"
            />
            <FlipCard
              title="Photography"
              frontData={{}}
              backData={{ paragraph: 'We capture the essence of your business in action, ensuring every detail shines.' }}
              size="horizontal"
            />
          </div>
          <div className="flex flex-col">
            <FlipCard
              title="Photography"
              frontData={{}}
              backData={{ paragraph: 'We capture the essence of your business in action, ensuring every detail shines.' }}
              size="vertical"
            />
          </div>
        </div> */}
        <AnimatedComponent>
          <WhatToExpect
            text="
          We aim to reveal the unique aspects that set your business apart, acknowledging its 
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
      <Contact />
    </div>

  )
}

export default CorporateService
