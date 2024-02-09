import React from 'react';
import { withHoverEffect } from './withHoverEffect';

function ServiceCard({ img, title, offerings, link }) {
  const navigateToLink = () => {
    window.location.href = link;
  };

  return (
    <div
      onClick={navigateToLink}
      className="group relative overflow-hidden transition-all duration-400 transform cursor-pointer rounded shadow-md  md:h-[50vh] lg:h-[75vh]"
    >
      {/* Image */}
      <img
        loading="lazy"
        className="object-cover w-full h-full rounded"
        src={img}
        alt={title}
        decoding="async"
      />

      {/* Overlay for Title on Image */}
      <div className="sm:opacity-100 absolute inset-0 flex flex-col justify-center items-center backdrop-brightness-50">
        <h1 className="group-hover:opacity-0 mb-4 text-3xl lg:text-4xl text-white font-semibold z-10 hidden lg:flex">{title}</h1>
        <div className="mb-4 text-3xl lg:text-4xl text-white font-semibold z-10 lg:hidden text-center">
          <h1>{title}</h1>
          <a href={link} className="hover:scale-110 w-full shadow-md bg-[rgba(255,255,255,0.13)] hover:bg-[rgba(255,255,255,0.23)] rounded text-xl font-light absolute bottom-0 left-0 py-4">
            <h2>Learn More</h2>
          </a>
        </div>
      </div>

      {/* Details Overlay */}
      <div className="absolute inset-0 flex-col justify-between items-center px-5 py-20 opacity-0 hover:bg-opacity-100 hover:opacity-100 text-center z-10 hidden lg:flex backdrop-blur backdrop-brightness-[0.3] duration-1000">
        {/* <h1 className='mb-4 text-3xl lg:text-4xl text-white font-semibold z-10'>{title}</h1> */}
        <ul className="text-gray-100 w-full align-middle items-center">
          {offerings.map((offering, index) => (
            <React.Fragment key={index}>
              <li className="">
                <h2 className=" text-lg font-light py-3">{offering}</h2>
              </li>
              {index !== offerings.length - 1 && (
                <div className="w-[70%] mx-auto h-[1px] bg-gradient-to-r from-[rgb(255,255,255,0)] via-[rgb(255,255,255)] to-[rgba(255,255,255,0)] rounded-full"></div>
              )}
            </React.Fragment>
          ))}
        </ul>
        <a href={link} className="btn hover:scale-110 w-[75%] shadow-md bg-[rgba(78,78,78,0.22)] hover:bg-[rgba(194,194,194,0.23)] rounded text-xl transition-all">
          <h1>Learn More</h1>
        </a>
      </div>
    </div>

  );
}

export default withHoverEffect(ServiceCard);
