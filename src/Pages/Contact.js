import React, { useEffect } from 'react';
import { useLocation } from 'react-router';
import { FaMailBulk } from 'react-icons/fa';
import SocialMediaLinks from '../Components/SocialMediaLinks';
//import emailjs from 'emailjs-com';
import collage from "../img/gallery/shapeCollage.jpg"

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    // emailjs
    //   .sendForm('service_5vnbn9n', 'template_bry6jpg', e.target, 'mbr_CpZ4_INnTiNLn')
    //   .then(
    //     (result) => {
    //       console.log('Email sent successfully!', result.text);
    //       // Optionally, you can show a success message or redirect to a thank-you page.
    //     },
    //     (error) => {
    //       console.log('Error sending email:', error.text);
    //       // Optionally, you can show an error message.
    //     }
    //   );

    // // Reset the form fields after submission (optional).
    // e.target.reset();
  };

  const location = useLocation()

  {/* <section id="contact" >
    <div className='relative bg-cover bg-center flex flex-col items-center justify-center py-52' style={{ backgroundImage: `url(${collage})` }}>
      <div className='absolute inset-0 bg-slate-900 opacity-70'></div>
      <h1 className='text-3xl lg:text-5xl text-white text-center z-10 relative mx-auto'>
        Lets Bring your Visions to Reality! 
      </h1>
    </div>
    <div className="relative grid max-w-screen-xl gap-8 lg:grid-cols-2 sm:mx-auto p-14"> */}


  return (
    <section id="contact" className="">
      <div className='relative bg-cover bg-center flex flex-col items-center justify-center py-52' style={{ backgroundImage: `url(${collage})` }}>
        <div className='absolute inset-0 bg-slate-900 opacity-70'></div>
        <h1 className='text-3xl lg:text-5xl text-white text-center z-10 relative mx-auto'>
          Bring your Visions to Reality
        </h1>
      </div>
      <div className="relative grid max-w-screen-xl gap-8 lg:grid-cols-2 sm:mx-auto p-14">
        {/* Message and links */}
        <div className='flex flex-col justify-center'>
          <h1 className="mb-10 font-sans text-3xl font-bold sm:text-4xl">
            Let's Connect!
          </h1>
          <p className="mb-4 text-xl pb-5 pr-5">If you have any questions, collaboration opportunities, or just want to say hi, feel free to shoot us an email!</p>
          <div className="flex items-center mb-4 text-left text-xl">
            <FaMailBulk className="mr-3" />
            <p>contact@arkticstudios.com</p>
          </div>
          <div className="flex items-center mb-4 text-left text-xl">
            <SocialMediaLinks />
          </div>
        </div>
        {/* Form */}
        <form onSubmit={sendEmail} className='text-xl'>
          <label className="block mb-6">
            <span className="">Your name</span>
            <input
              type="text"
              name="from_name"
              className="p-2 block w-full mt-1 focus:shadow-lg bg-[rgba(117,117,117,0.14)] shadow-inner"
            />
          </label>
          <label className="block mb-6">
            <span className="">Email address</span>
            <input
              name="from_email"
              type="email"
              className="p-2 block w-full mt-1 focus:shadow-lg bg-[rgba(117,117,117,0.14)] shadow-inner "
              required
            />
          </label>
          <label className="block mb-6">
            <span className="">Message</span>
            <textarea
              name="message"
              className="p-2 block w-full mt-1 focus:shadow-lg bg-[rgba(117,117,117,0.14)] shadow-inner"
              rows="3"
            ></textarea>
          </label>
          <div className="mb-6">
            <button
              type="submit"
              className="btn text-white text-xl transition-all duration-200 ease-in-out hover:scale-105 focus:bg-[rgba(139,139,139,0.21)] focus:text-black hover:shadow-lg w-full"
            >
              Contact
            </button>
          </div>
        </form>
      </div>

    </section>
  )
};

export default Contact;
