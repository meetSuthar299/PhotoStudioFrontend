import React, { useState } from 'react';
import { FaMailBulk } from 'react-icons/fa';
import SocialMediaLinks from '../Components/SocialMediaLinks';
import collage from "../img/gallery/shapeCollage.jpg";
import AnimatedComponent from '../Components/AnimatedComponent';
import PageBanner from '../Components/PageBanner';

const Contact = () => {
  const initialFormData = {
    customerName: '',
    customerEmail: '',
    services: [],
    budget: 0,
    message: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleCheckboxChange = (value) => {
    const updatedServices = formData.services.includes(value)
      ? formData.services.filter((service) => service !== value)
      : [...formData.services, value];

    setFormData({ ...formData, services: updatedServices });
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    if (formData.services.length === 0) {
      console.error('Please select at least one service');
      return;
    }

    try {
      const response = await fetch('https://api-arktik.onrender.com/contactUs/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Email sent successfully!');
        setFormData(initialFormData);
        setIsFormSubmitted(true);
      } else {
        console.error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };
  return (
    <section id="contact" className="">
      <PageBanner text="Bring your Visions to Reality" backgroundImage={collage} />
      {isFormSubmitted ? (
        <div className="grid max-w-screen-xl sm:mx-auto text-center items-center justify-center h-[40vh]">
          <div>
            <AnimatedComponent>
              <h1 className="mb-10 font-sans text-3xl font-primary sm:text-4xl">
                Thank You for Reaching Out!
              </h1>
              <p className="mb-4 text-xl font-thin">
                We have received your message and will get back to you soon.
              </p>
            </AnimatedComponent>
          </div>
        </div>
      ) : (
        <AnimatedComponent>
          <div className="relative grid max-w-screen-xl gap-8 lg:grid-cols-2 sm:mx-auto p-14">
            <div className='flex flex-col'>

              <h1 className="mb-10 font-sans text-3xl font-bold sm:text-4xl">
                Let's Connect!
              </h1>
              <p className="mb-4 text-xl pb-5 pr-5 font-light">Fill out this questionnaire for your custom quote! </p>
              <p className="mb-4 text-xl pb-5 pr-5 font-thin">Our team is dedicated to providing you with services that are specifically catered to your budget and needs. Our goal is to meet and exceed your vision. </p>
              <div className="flex items-center mb-4 text-left text-xl">
                <FaMailBulk className="mr-3 " />
                <p className='font-thin'>contact@arkticstudios.com</p>
              </div>
              <div className="flex items-center mb-4 text-left text-xl">
                <SocialMediaLinks />
              </div>

            </div>

            <form onSubmit={sendEmail} className='text-xl'>
              <label className="block mb-6">
                <span className="">Your name</span>
                <input
                  type="text"
                  name="customerName"
                  className="p-2 block w-full mt-1 focus:shadow-lg bg-[rgba(117,117,117,0.14)] shadow-inner"
                  onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
                />
              </label>
              <label className="block mb-6">
                <span className="">Email address</span>
                <input
                  name="customerEmail"
                  type="email"
                  className="p-2 block w-full mt-1 focus:shadow-lg bg-[rgba(117,117,117,0.14)] shadow-inner "
                  required
                  onChange={(e) => setFormData({ ...formData, customerEmail: e.target.value })}
                />
              </label>
              {/* Services  */}
              <label className="block mb-6">
                <span className="text-xl">Services you are interested in:</span>
                <div className="mt-2">
                  <div>
                    <input
                      type="checkbox"
                      name="services"
                      value="Corporate"
                      id="Corporate"
                      className="mr-2"
                      onChange={() => handleCheckboxChange('Corporate')}
                    />
                    <label htmlFor="Corporate">Corporate</label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      name="services"
                      value="Automotive"
                      id="Automotive"
                      className="mr-2"
                      onChange={() => handleCheckboxChange('Automotive')}
                    />
                    <label htmlFor="Automotive">Automotive</label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      name="services"
                      value="Personal"
                      id="Personal"
                      className="mr-2"
                      onChange={() => handleCheckboxChange('Personal')}
                    />
                    <label htmlFor="Personal">Personal</label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      name="services"
                      value="Prints"
                      id="Prints"
                      className="mr-2"
                      onChange={() => handleCheckboxChange('Prints')}
                    />
                    <label htmlFor="Prints">Prints</label>
                  </div>
                </div>
              </label>
              {/* budget */}
              <label className="block mb-6">
                <span className="text-xl">Your budget</span>
                <input
                  type="range"
                  name="budget"
                  min="0"
                  max="5000"
                  step="100"
                  defaultValue="0"
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                />
                <div className="flex justify-between text-xs px-2">
                  <span>$0</span>
                  <span>$5,000</span>
                </div>
                <div className="text-center">
                  <span className="text-lg font-semibold">$</span>
                  <span className="text-lg font-semibold">{formData.budget}</span>
                </div>
              </label>
              {/* message */}
              <label className="block mb-6">
                <span className="">Message</span>
                <textarea
                  name="message"
                  className="p-2 block w-full mt-1 focus:shadow-lg bg-[rgba(117,117,117,0.14)] shadow-inner"
                  rows="3"
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
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
        </AnimatedComponent>
      )}
    </section>
  );
};

export default Contact;

