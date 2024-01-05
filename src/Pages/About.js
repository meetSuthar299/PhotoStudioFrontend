import React from 'react';
import { Link } from 'react-scroll';
import homeImg from '../img/home/ArktikLogo.png';
import { motion } from 'framer-motion';
import { transition1 } from "../transitions";

const About = () => {
  return (
    <motion.section
      id='about'
      className='mx-auto lg:px-40 pt-40 pb-20 sm::px-20'
      initial="hidden"
      whileInView="visible"
    >
      <div className='flex flex-col lg:flex-row justify-center lg:justify-between items-center p-5'>
        {/* Text */}
        <motion.div
          className='lg:w-1/2 lg:pt-0 lg:pb-0 z-10 lg:relative flex flex-col items-center lg:items-start'
          initial={{ opacity: 1, y: "-50%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "-50%" }}
          transition={{ ...transition1, duration: 0.8 }}  // Adjust the duration as needed
        >
          <h1 className='text-3xl lg:text-6xl leading-tight mb-4 lg:mb-8 items-center'>
          Transforming Visions into Reality
          </h1>
          <p className='text-lg lg:text-2xl font-primary mb-8 lg:mb-12'>
            Where Chilling Elegance meets Thrilling Results
          </p>
          <a href='#contact' key='#contact' className='btn mb-8 lg:mb-0 cursor-pointer transition-all hover:scale-105'>Get in Touch</a>
        </motion.div>

        {/* Image */}
        <motion.div className='flex justify-center lg:justify-end'
          initial={{ opacity: 1, y: "50%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "-50%" }}
          transition={{ ...transition1, duration: 0.8 }}  // Adjust the duration as needed
        >
          <img src={homeImg} alt='Me' className='object-cover lg:h-[55vh] md:h-[65vh] sm:h-[50vh]' />
        </motion.div>
      </div>
    </motion.section>
  );
};
export default About;
