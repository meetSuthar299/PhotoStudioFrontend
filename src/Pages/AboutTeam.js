import React, { useEffect } from 'react';
import PageBanner from '../Components/PageBanner';
import AnimatedComponent from '../Components/WrapperComponents/AnimatedComponent';
import { GiMountaintop } from 'react-icons/gi';
import Contact from '../Pages/Contact';
import { useLocation } from 'react-router-dom';

function AboutTeam() {
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

    const teamMembers = [
        {
            name: 'Meet Suthar',
            role: 'Co-Founder',
            description: 'As a visionary entrepreneur, Meet co-founded Arktic Studios with a mission to redefine the standard of visual storytelling. His expertise in photography and dedication to client satisfaction drive the studio\'s success, ensuring every project exceeds expectations.',
            imageUrl: 'https://media.licdn.com/dms/image/C5603AQFcjbqojXjUWA/profile-displayphoto-shrink_200_200/0/1615353371518?e=1713398400&v=beta&t=35xiG5p5xKR7Z1IaNpUKF0KJYjefoyOt60KrWcoYU24', // Replace with actual image URL
        },
    ];

    return (
        <div id='aboutTeam'>
            <PageBanner
                text={'About M.I.T  Solutions'}
                backgroundImage={"https://res.cloudinary.com/ddp8ln1ts/image/upload/q_50/v1705297846/colorCheck1_j8ucjm.jpg"}
                links={[
                    { name: 'Our Story', link: '/aboutTeam/#ourStory' },
                    { name: 'Our Values', link: '/aboutTeam/#values' },
                    { name: 'Our Success Stories', link: '/aboutTeam/#success' }
                ]}
            />
            <div id="ourStory" className='py-40 px-10 md:px-20 bg-gray-100 transition-all'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-0'>
                    <div className='flex justify-center items-center text-[200px] lg:text-[400px] pb-10'>
                        <GiMountaintop />
                    </div>
                    <div className='text-center lg:text-left'>
                        <h1 className='text-2xl font-bold'>The </h1>
                        <h1 className='text-4xl lg:text-5xl font-bold mb-2'>M.I.T Story</h1>
                        <AnimatedComponent>
                            <p className='text-lg text-gray-700 my-8'>
                                M.I.T. Solutions was founded by a passion for harnessing the power of technology and creativity to elevate businesses. Our journey began with a desire to empower brands through innovative digital experiences and strategic marketing solutions. Starting with small projects, we focused on delivering impactful results for entrepreneurs and small businesses, turning challenges into opportunities for growth.
                                <br />
                                <br />
                                Today, M.I.T. Solutions exemplifies our commitment to exceeding client expectations and forging lasting partnerships. Equipped with cutting-edge technology and a relentless drive for excellence, we approach every project with creativity and precision.
                                <br />
                                <br />
                                Our mission goes beyond just delivering services; we aim to inspire transformation and drive positive change in the digital landscape. At M.I.T. Solutions, we believe in the potential of every brand to shine brightly, and we are dedicated to helping you unlock that potential.
                            </p>
                            <a href='#contact' className='btn text-lg hover:scale-105'>Get in Touch</a>
                        </AnimatedComponent>
                    </div>
                </div>

                <section id='values' className="py-20">
                    <h1 className='text-2xl font-bold'>The </h1>
                    <h1 className='text-4xl lg:text-5xl font-bold mb-2 pb-10'>M.I.T Values</h1>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-gray-800 text-white p-6 rounded-lg transition-all">
                            <h1 className="text-lg font-bold mb-2">Innovation</h1>
                            <p className="text-sm">We harness cutting-edge technology to deliver exceptional results that elevate your brand.</p>
                        </div>
                        <div className="bg-gray-800 text-white p-6 rounded-lg transition-all">
                            <h1 className="text-lg font-bold mb-2">Commitment</h1>
                            <p className="text-sm">Dedicated to understanding your needs, we tailor solutions that drive impact and success.</p>
                        </div>
                        <div className="bg-gray-800 text-white p-6 rounded-lg transition-all">
                            <h1 className="text-lg font-bold mb-2">Collaboration</h1>
                            <p className="text-sm">Building trust through open communication, we create lasting partnerships for mutual growth.</p>
                        </div>
                    </div>
                </section>
                <section id='success' className="py-20">
                    <h1 className='text-4xl lg:text-5xl font-bold pb-10'>Client Success Stories</h1>
                    <AnimatedComponent>
                        <p className='text-lg text-gray-700 mb-8'>
                            We take pride in our client partnerships and the success we’ve achieved together. Here are a few stories that showcase the impact of our work:
                        </p>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                            <div className='bg-white p-6 rounded-lg shadow-lg'>
                                <h2 className='font-bold text-lg'>Transforming a Local Business</h2>
                                <p className='text-sm text-gray-600'>We helped a local retail store revamp their online presence, resulting in a 30% increase in sales within three months.</p>
                            </div>
                            <div className='bg-white p-6 rounded-lg shadow-lg'>
                                <h2 className='font-bold text-lg'>Streamlining Operations</h2>
                                <p className='text-sm text-gray-600'>Our custom software solution enabled a small business to reduce operational costs by 25% and improve efficiency.</p>
                            </div>
                        </div>
                    </AnimatedComponent>
                </section>
            </div>

            <Contact />
        </div>
    );
}

export default AboutTeam;
