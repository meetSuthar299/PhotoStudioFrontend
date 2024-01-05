import React from 'react';
import homeImg from '../img/home/ArktikLogo.png';

const About = () => {
  return (
    <section
      id='about'
      className='mx-auto lg:px-40 pt-40 pb-20 sm::px-20'
    >
      <div className='flex flex-col lg:flex-row justify-center lg:justify-between items-center p-5'>
        {/* Text */}
        <div
          className='lg:w-1/2 lg:pt-0 lg:pb-0 z-10 lg:relative flex flex-col items-center lg:items-start'
        >
          <h1 className='text-3xl lg:text-6xl leading-tight mb-4 lg:mb-8 items-center'>
            Transforming Visions into Reality
          </h1>
          <p className='text-lg lg:text-2xl font-primary mb-8 lg:mb-12'>
            Where Chilling Elegance meets Thrilling Results
          </p>
          <a href='#contact' key='#contact' className='btn mb-8 lg:mb-0 cursor-pointer transition-all hover:scale-105'>Get in Touch</a>
        </div>

        {/* Image */}
        <div className='flex justify-center lg:justify-end'>
          <img src={homeImg} alt='Me' className='object-cover lg:h-[55vh] md:h-[65vh] sm:h-[50vh]' />
        </div>
      </div>
    </section>
  );
};
export default About;
