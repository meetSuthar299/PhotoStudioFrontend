import React from 'react';

function ServiceCard({ img, title, offerings, link, disc }) {
  const navigateToLink = () => {
    window.location.href = link;
  };

  return (
    <div
      id={title}
      className="m-2 text-center relative overflow-hidden transition duration-200 transform hover:-translate-y-2 cursor-pointer lg:h-[85vh] md:h-[40vh] rounded-md shadow-md border border-gray-600"
      onClick={navigateToLink}
    >
      {/* before hover */}
      <div className="absolute inset-0 flex flex-col justify-center items-center px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-70 opacity-100 lg:h-[85vh] md:h-[40vh]">
        <h1 className="mb-4 text-2xl lg:text-3xl text-white font-semibold z-10">{title}</h1>
      </div>
      <img
        loading="lazy"
        className="object-cover w-full h-full rounded-md"
        src={img}
        alt={title}
        decoding="async"
      />
      {/* on hover */}
      <div className="absolute inset-0 flex-col justify-between items-center px-5 py-20 transition-opacity duration-200 bg-zinc-900 bg-opacity-100 opacity-0 hover:opacity-100 text-center z-10 hidden lg:flex lg:h-[85vh] md:h-[40vh]">
        <ul className="text-gray-200 w-full align-middle">
          {offerings.map((offering, index) => (
            <li key={index} className="py-6 border-b border-gray-300">
              <h2 className="text-xl font-extralight">{offering}</h2>
            </li>
          ))}
        </ul>
        <a href={link} className="gradient-link text-black py-5 w-[80%] rounded-md transition-all duration-200 absolute bottom-0">
          <span className='text-2xl font-light'>Learn More</span>
        </a>
      </div>
    </div>
  );
}

export default ServiceCard;
