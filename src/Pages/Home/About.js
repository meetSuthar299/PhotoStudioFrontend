import React from 'react';
import TypingHeading from '../../Components/typingHeadding';
import homeImg from '../../img/header/ArktikLogo.png';
import FlipCard from '../../Components/FlipCard';
import Testimonials from './Testimonials';
import AboutTeam from './AboutTeam';
import AnimatedComponent from '../../Components/WrapperComponents/AnimatedComponent';
import { GiMountaintop } from "react-icons/gi";

const About = () => {

  const services = [
    "Video Production",
    "Photography",
    "Graphic Design",
    "Web Development",
    "SEO",
    "Social Media Marketing",
    "Corporate Headshots",
    "Product Photography",
    "Event Photography",
    "Real Estate Photography"
  ];
  const teamMembers = [
    {
      name: 'Fateh Sandhu',
      role: 'Co-Founder',
      description: 'With a passion for storytelling and a keen eye for detail, Fateh co-founded Arktic Studios to empower businesses through creative visual content. He brings years of experience in video production and a commitment to delivering exceptional results to every project.',
      imageUrl: 'john-doe-image.jpg', // Replace with actual image URL
    },
    {
      name: 'Meet Suthar',
      role: 'Co-Founder',
      description: 'As a visionary entrepreneur, Meet co-founded Arktic Studios with a mission to redefine the standard of visual storytelling. His expertise in photography and dedication to client satisfaction drive the studio\'s success, ensuring every project exceeds expectations.',
      imageUrl: 'jane-smith-image.jpg', // Replace with actual image URL
    },
  ];
  const customerReviews = [
    {
      name: 'John Doe',
      review: 'Arktic Studios helped us launch our new product with an outstanding promotional video. Their team is incredibly talented and professional. They listened to our vision and brought it to life in ways we couldn\'t have imagined. Highly recommend!',
      company: 'ABC Tech Solutions',
    },
    {
      name: 'Jane Smith',
      review: 'Working with Arktic Studios was a game-changer for our brand. Their attention to detail and creative flair elevated our marketing efforts to new heights. We saw an immediate impact on engagement and brand awareness. Thank you for your exceptional work!',
      company: 'XYZ Fashion',
    },
    {
      name: 'Jane Smith',
      review: 'Working with Arktic Studios was a game-changer for our brand. Their attention to detail and creative flair elevated our marketing efforts to new heights. We saw an immediate impact on engagement and brand awareness. Thank you for your exceptional work!',
      company: 'XYZ Fashion',
    },
    {
      name: 'Jane Smith',
      review: 'Working with Arktic Studios was a game-changer for our brand. Their attention to detail and creative flair elevated our marketing efforts to new heights. We saw an immediate impact on engagement and brand awareness. Thank you for your exceptional work!',
      company: 'XYZ Fashion',
    },
  ];

  return (
    <section id='about' className='bg-gray-100 lg:px-20 md:px-10 px-10 py-28'>
      <div className='mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
          <div className='text-center lg:text-left'>
            <AnimatedComponent>
              <h1 className='text-lg font-bold'>We are arktic.</h1>
              <h1 className='text-4xl lg:text-5xl font-bold mb-2'>your all-in-one destination for</h1>
              <TypingHeading headings={services} />
            </AnimatedComponent>
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
              <a href='#contact' className='btn text-lg'>Get in Touch</a>
            </AnimatedComponent>
          </div>
          <div className='flex justify-center items-center text-[400px]'>
            {/* <img src={homeImg} alt='Arktic Studios' className='object-cover h-96 rounded-lg' /> */}
            <GiMountaintop />
          </div>
        </div>
        {/* <AboutTeam teamMembers={teamMembers} /> */}
        {/* <Testimonials reviews={customerReviews} /> */}
      </div>
    </section>
  );
};

export default About;
