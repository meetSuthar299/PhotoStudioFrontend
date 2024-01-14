import React, { useEffect, useState } from 'react'
import ItemCard from '../../Components/ItemCard'
import portraitImg from "../../img/gallery/portrait-img.jpg"
import printImg from "../../img/gallery/print-img.jpg"
import autoImg from "../../img/gallery/auto-img.jpg"
import editingImg from "../../img/gallery/editing-img.jpg"
import eventImg from "../../img/gallery/event-img.jpg"
import commercialImg from "../../img/gallery/Commercia-Img.jpg"
import nightDiaryImg from "../../img/gallery/nightDiaries.jpg";



function Services() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Attach the event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <section id='services' className='section bg-gray-400'>
      <div
        className='relative bg-cover bg-center flex flex-col items-center justify-center py-40'
        style={{
          backgroundImage: `url(https://res.cloudinary.com/ddp8ln1ts/image/upload/v1704868127/IMG_7527_wmhqsf.jpg)`,
          backgroundPosition: `30% ${scrollY * 0.41}px`, // Adjust the multiplier for desired parallax effect,
          backgroundRepeat: `true`,
        }}
      >
        <div className='absolute inset-0 bg-black opacity-50'></div>
        <h1 className='text-3xl lg:text-5xl text-white text-center z-10 relative mx-auto pb-10'>
          arktic services
        </h1>
        <p className='text-lg lg:text-xl font-light text-white text-center z-10 relative mx-auto'>
          Elevating Your Vision, Exceeding Your Expectations.
        </p>
      </div>

      <div className='px-5 lg:px-16 pb-28 pt-16 section'>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <ItemCard
            imgSrc={eventImg}
            firstP="Occasions"
            secondP="Capture the memories of your wedding, parties, conferences, and other memorable occasions. From natural moments to atmosphere capture, we make sure every significant aspect is exquisitely captured on camera."
          />
          <ItemCard
            imgSrc={portraitImg}
            firstP="Portraits"
            secondP="Capture the unique essence and personalities of individuals, families, and couples in stunning portrait sessions, crafting cherished memories that last a lifetime."
          />
          <ItemCard
            imgSrc={commercialImg}
            firstP="Products"
            secondP="Illuminate your product's excellence with our expert photo and video services. Tailored for perfection, we highlight its unique features for visual brilliance"
          />
          <ItemCard
            imgSrc={autoImg}
            firstP="Arktik Garage"
            secondP="We capture the elegance, power, and intricate details that unveil the unique personality of every vehicle, from sleek sports cars to vintage classics."
          />
          {/* <ItemCard
          imgSrc={editingImg}
          firstP="Photo Editing and Retouching"
          secondP="Provide professional photo editing and retouching services to enhance the visual appeal and quality of images. From color correction to removing imperfections, I ensure the final images meet the highest standards."
        /> */}
          <ItemCard
            imgSrc={nightDiaryImg}
            firstP="Night Diaries"
            secondP="Capture the vibrant essence of your night club and restaurant with our professional video and photography services. Elevate your memories by transforming favorite moments into stunning, high-quality videos and photos, turning them into captivating pieces of art."
          />
          <ItemCard
            imgSrc={printImg}
            firstP="Prints"
            secondP="Visit our Gallery for captivating prints. Our high-quality prints and custom framing service transform your favorite images into stunning art, elevating your space with exquisite style."
          />
        </div>
      </div>
    </section>
  )
}

export default Services
