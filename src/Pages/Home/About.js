import React from 'react';
import TypingHeading from '../../Components/typingHeadding';
import AnimatedComponent from '../../Components/WrapperComponents/AnimatedComponent';
import { GiMountaintop } from "react-icons/gi";

const About = () => {

  const services = [
    "Video Production",
    "Photography",
    "Graphic Design",
    "Web Development",
    "Search Engine Optimization",
    "Social Media Marketing",
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
            <h1 className='text-lg font-bold'>We are arktic.</h1>
            <h1 className='text-4xl lg:text-5xl font-bold mb-4'>Your all-in-one destination for</h1>
            <TypingHeading headings={services} />
            <AnimatedComponent>
              <p className='text-lg text-gray-700 my-8'>
                Our goal is to help your business thrive through creative visual solutions.
                Our team is dedicated to delivering exceptional results, whether it's crafting compelling narratives
                through captivating storytelling or designing innovative digital experiences.
                We pride ourselves on our ability to understand your unique goals and bring them to life with
                precision and creativity. From enhancing your online presence to creating memorable brand experiences,
                we are committed to exceeding your expectations and helping you succeed in today's competitive landscape.
                Trust Arktic to be your partner in achieving your vision and reaching new heights of success.
              </p>
              <div className='flex'>
                <a href='#contact' className='btn text-md hover:w-[120%] w-[50%] m-1 rounded hover:'>Contact us</a>
                <a href='/aboutTeam/' className='btn text-md hover:w-[120%] w-[50%] m-1 rounded'>Our Story</a>
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
