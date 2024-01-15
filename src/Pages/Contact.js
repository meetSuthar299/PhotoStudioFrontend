import React from 'react';
import { FaMailBulk } from 'react-icons/fa';
import SocialMediaLinks from '../Components/SocialMediaLinks';
//import emailjs from 'emailjs-com';
import collage from "../img/gallery/shapeCollage.jpg"

const Contact = () => {
  const [budget, setBudget] = React.useState(2500); // Initial value set to $2,500
  const [timeline, setTimeline] = React.useState(2); // Initial timeline value, e.g., '2 Weeks'

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
  const timelineOptions = {
    1: "1 Week",
    2: "2 Weeks",
    3: "1 Month",
    4: "3 Months",
    5: "6 Months",
    6: "Flexible"
  };

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
          <p className="mb-4 text-xl pb-5 pr-5">Fill our this questionnaire for your custom quote! </p>
          <p className="mb-4 text-xl pb-5 pr-5">Our team is dedicated to providing you with services that are specifically catered to your budget and needs. Our goal is to meet and exceed your vision. </p>
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
            <span className="text-xl">Services you are interested in:</span>
            <div className="mt-2">
              <div>
                <input type="checkbox" name="services" value="Service1" id="service1" className="mr-2" />
                <label htmlFor="service1">Corporate</label>
              </div>
              <div>
                <input type="checkbox" name="services" value="Service2" id="service2" className="mr-2" />
                <label htmlFor="service2">Automotive</label>
              </div>
              <div>
                <input type="checkbox" name="services" value="Service3" id="service3" className="mr-2" />
                <label htmlFor="service3">Personal</label>
              </div>
              <div>
                <input type="checkbox" name="services" value="Service4" id="service4" className="mr-2" />
                <label htmlFor="service4">Prints</label>
              </div>
            </div>
          </label>
          <label className="block mb-6">
            <span className="text-xl">Desired Timeline:</span>
            <input
              type="range"
              name="timeline"
              min="1"
              max="6"
              value={timeline}
              onChange={(e) => setTimeline(e.target.value)}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer my-2"
            />
            <div className="text-center text-lg font-semibold">
              {timelineOptions[timeline]}
            </div>
          </label>
          <label className="block mb-6">
            <span className="text-xl">Your budget</span>
            <input
              type="range"
              name="budget"
              min="0"
              max="5000"
              step="100" // The step attribute allows the user to select budget in increments of $100.
              defaultValue="2500" // Starting value in the middle of the range
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
              onChange={e => setBudget(e.target.value)}
            />
            <div className="flex justify-between text-xs px-2">
              <span>$0</span>
              <span>$5,000</span>
            </div>
            <div className="text-center">
              <span className="text-lg font-semibold">$</span>
              <span className="text-lg font-semibold">{budget}</span>
            </div>
          </label>
          {/* <label>
            <span>Desired Timeline:</span>
            <select name="timeline">
              <option value="2_weeks">2 Weeks</option>
              <option value="1_month">1 Month</option>
              <option value="3_months">3 Months</option>
              <option value="6_months">6 Months</option>
              <option value="flexible">Flexible</option>
            </select>
          </label> */}
          {/* <label>
            <span>Priority Level:</span>
            <select name="priority">
              <option value="urgent">Urgent</option>
              <option value="regular" selected>Regular</option>
              <option value="no_rush">No Rush</option>
            </select>
          </label> */}
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
