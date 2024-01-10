import React from 'react';
import homeImg from '../../img/home/ArktikLogo.png';
// import StarsBackground from '../../Components/StarsBackground';

const About = () => {
  const teamMembers = [
    {
      name: 'Fateh Sandhu',
      role: 'Co-Founder',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      imageUrl: 'john-doe-image.jpg', // Replace with actual image URL
    },
    {
      name: 'Meet Suthar',
      role: 'Co-Founder',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      imageUrl: 'jane-smith-image.jpg', // Replace with actual image URL
    },
  ];
  return (
    <section id='about' className='pb-20 mx-auto lg:px-40 pt-32 sm::px-20 p-10'>
      <div className='h-32 flex items-center'>
        <h1 className='text-3xl lg:text-5xl text-center mx-auto'>
          Where your Vision Meets Victory
        </h1>
      </div>
        <div className='flex flex-col lg:flex-row justify-center lg:justify-between items-center'>
          {/* Text */}
          <div className='lg:w-1/2 lg:pt-0 lg:pb-0 z-10 lg:relative flex flex-col items-center lg:items-start'>
            <p className='text-lg lg:text-2xl font-light mb-8 lg:mb-12'>
              Discover a world of cinematic excellence with Arktic Studios, your premier video production team nestled in the heart of Calgary.
              We are committed to inspiring entrepreneurs and small businesses by providing innovative creative solutions.
              Elevate your brand presence through our expert videography and photography services, designed to distinguish you in a competitive landscape.
            </p>
            <a href='#contact' key='#contact' className='btn mb-8 lg:mb-0 cursor-pointer transition-all hover:scale-105'>Get in Touch</a>
          </div>

          {/* Image */}
          <div className='flex justify-center lg:justify-end'>
            <img src={homeImg} alt='Me' className='object-cover lg:h-[55vh] md:h-[65vh] sm:h-[50vh]' />
          </div>
        </div>

        {/* TEAM SECTION! */}
        {/* <div className="container mx-auto text-center pb-20 pt-40">
        <h1 className='text-3xl lg:text-6xl leading-tight pb-5 lg:mb-8 text-center'>
          Meet the Arktic Team
        </h1>
        <div className="flex flex-col lg:flex-row justify-center items-center space-y-8 lg:space-y-0 lg:space-x-12 mt-28">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="bg-gray-300 w-24 h-24 rounded-full overflow-hidden mb-4">
                <img src={member.imageUrl} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
              <p className="text-gray-  700 mt-2">{member.description}</p>
            </div>
          ))}
        </div>
      </div> */}

    </section>
  );
};
export default About;
