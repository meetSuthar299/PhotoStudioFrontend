 import React, { useEffect } from 'react';
import PageBanner from '../Components/PageBanner';
import AnimatedComponent from '../Components/WrapperComponents/AnimatedComponent';
import { GiMountaintop } from 'react-icons/gi';
import Contact from '../Pages/Contact';
import { RiTeamLine } from 'react-icons/ri';
import FlipCard from '../Components/FlipCard';
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
                text={'We are Arktic Studios'}
                backgroundImage={"https://res.cloudinary.com/ddp8ln1ts/image/upload/q_50/v1705297846/colorCheck1_j8ucjm.jpg"}
                links={[
                    { name: 'Our Story', link: '/aboutTeam/#ourStory' },
                    { name: 'Our Team', link: '/aboutTeam/#\ourTeam' },
                    { name: 'Our Values', link: '/aboutTeam/#values' }
                ]}
            />
            <div id="ourStory" className='py-40 px-10 md:px-20 bg-gray-100 transition-all'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-0'>
                    <div className='flex justify-center items-center text-[400px]'>
                        {/* <img src={homeImg} alt='Arktic Studios' className='object-cover h-96 rounded-lg' /> */}
                        <GiMountaintop />
                    </div>
                    <div className='text-center lg:text-left'>
                        <h1 className='text-xl font-bold'>The </h1>
                        <h1 className='text-4xl lg:text-5xl font-bold mb-2'>Arktic Story</h1>
                        <AnimatedComponent>
                            <p className='text-lg text-gray-700 my-8'>
                                Arktic Studios emerged from the collaborative vision of Meet Suthar and Fateh Sandhu, fueled by a shared
                                passion for transformative visual storytelling. Our journey began with a deep longing for careers aligned
                                with our creative spirits. We embarked humbly, crafting video narratives for entrepreneurs and small
                                businesses, embracing challenges and nurturing our innovative instincts despite modest budgets.
                                <br />
                                <br />
                                Today, Arktic Studios stands as a testament to our unwavering commitment to surpassing expectations and
                                building lasting connections with our clients. Empowered by state-of-the-art equipment and an unyielding passion,
                                we approach every project with boundless creativity and an unwavering dedication to excellence.
                                <br />
                                <br />
                                Beyond conventional storytelling, our mission at Arktic Studios is to inspire hope and catalyze transformative
                                change through the powerful medium of visual expression. We are champions of inspiration, dedicated to making a
                                meaningful impact in the world.
                            </p>
                            <a href='#contact' className='btn text-lg hover:scale-105'>Get in Touch</a>
                        </AnimatedComponent>
                    </div>
                </div>
                <section id="ourTeam" className="our-team py-40">
                    <h1 className='text-4xl lg:text-5xl font-bold pb-10'>Our Team</h1>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8'>
                        {teamMembers.map((member, index) => (
                            <FlipCard
                                key={index}
                                title={member.name}
                                frontData={{
                                    icon: <RiTeamLine />,
                                    img: member.imageUrl
                                }}
                                backData={{
                                    paragraph: member.description,
                                    //   bulletPoints: [
                                    //     'Professional executive portraits',
                                    //     'Dynamic team photos',
                                    //     'Impactful marketing imagery'
                                    //   ]
                                }}
                                size="vertical"
                            />
                        ))}
                    </div>
                </section>
                <section id='values' className="py-20">
                    <h1 className='text-4xl lg:text-5xl font-bold pb-10'>Our Values</h1>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-gray-800 text-white p-6 rounded-lg hover:scale-105 transition-all">
                            <h1 className="text-lg font-bold mb-2">Quality and Creativity</h1>
                            <p className="text-sm">At Arktic Studios, we prioritize the delivery of unparalleled quality and boundless creativity. From inception to realization, we strive to craft visually mesmerizing content that not only captivates but also endures in the minds of our clients and their audience.</p>
                        </div>
                        <div className="bg-gray-800 text-white p-6 rounded-lg hover:scale-105 transition-all">
                            <h1 className="text-lg font-bold mb-2">Dedication</h1>
                            <p className="text-sm">Dedication is the cornerstone of our work ethos at Arktic Studios. Our team is driven by an unwavering commitment to excellence in every facet of our endeavors. We pledge to exceed expectations, pouring passion and precision into every project to ensure optimal results.</p>
                        </div>
                        <div className="bg-gray-800 text-white p-6 rounded-lg hover:scale-105 transition-all">
                            <h1 className="text-lg font-bold mb-2">Relationship Driven</h1>
                            <p className="text-sm">At Arktic Studios, we cherish genuine connections with our clients and collaborators. We embrace teamwork, fostering an environment of open communication and mutual respect. Our partnerships are forged on shared values, creating a foundation of trust, transparency, and shared success.</p>
                        </div>
                    </div>
                </section>
            </div>
            <Contact />
        </div>
    );
}

export default AboutTeam;
