import React from 'react';

function ServiceCard({ img, title, disc, offerings }) {
  return (
    <div
      id={title}
      className="m-2 text-center relative overflow-hidden transition duration-200 transform hover:-translate-y-2 cursor-pointer lg:h-[70vh] md:h-[40vh] rounded-md shadow-md overflow-hidden border border-gray-300"
    >
      <img
        loading="lazy"
        className="object-cover w-full h-full rounded-md"
        src={img}
        alt={title}
        decoding="async"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-50 opacity-0 hover:opacity-100">
        <h1 className="mb-4 text-2xl lg:text-3xl text-white font-semibold">{title}</h1>
      </div>
      <div className="absolute inset-0 flex flex-col justify-center items-center px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-70 opacity-0 hover:opacity-100 text-center">
        {/* <p className="text-lg text-gray-300 font-light mb-4">{disc}</p> */}
        <ul className="text-gray-400">
          {offerings.map((offering, index) => (
            <li key={index} className="py-2 border-b border-gray-300">
              <h1 className="text-lg font-thin">{offering}</h1>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ServiceCard;
