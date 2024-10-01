import React from 'react';
import TypingHeading from '../../Components/typingHeadding';
import AnimatedComponent from '../../Components/WrapperComponents/AnimatedComponent';
import { GiMountaintop } from "react-icons/gi";
import { NavLink } from 'react-router-dom';

const About = () => {

  const services = [
    "Web Development",
    "Search Engine Optimization",
    "Social Media Marketing",
    "Video Production",
    "Photography",
    "Graphic Design",
    "Corporate Headshots",
    "Product Photography",
    "Event Photography",
    "Real Estate Photography"
  ];

  return (
    <section id='about' className='bg-gray-100 lg:px-20 md:px-10 px-10 py-28'>
      <div className='mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
          <div className='text-center lg:text-left'>
            <h1 className='text-2xl font-bold'>MIT</h1>
            <h1 className='text-3xl lg:text-4xl font-bold mb-4'>Your all-in-one destination for</h1>
            <TypingHeading headings={services} />
            <AnimatedComponent>
              <p className='text-xl text-gray-700 my-8'>
                Unlock your brand's potential with bold, creative visual solutions. We turn ideas into
                compelling stories and innovative digital experiences that captivate audiences. Whether
                enhancing your online presence or crafting memorable brand moments, we're dedicated to
                delivering results that elevate your business and set you apart from the competition.
              </p>
              <div className='flex'>
                <NavLink to='/portfolio/' className='btn text-md hover:w-[120%] w-[50%] m-1 rounded hover:'>
                  Portfolio
                </NavLink>
                <NavLink to='/aboutTeam/' className='btn text-md hover:w-[120%] w-[50%] m-1 rounded'>
                  Our Story
                </NavLink>
              </div>
            </AnimatedComponent>
          </div>
          <div className='flex justify-center items-center text-[400px]'>
            {/* <img src={homeImg} alt='Arktic Studios' className='object-cover h-96 rounded-lg' /> */}
            <GiMountaintop />
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
