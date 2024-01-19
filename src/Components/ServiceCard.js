import React from 'react'

function ServiceCard({ img, title, disc }) {

  return (
    <div id={title} className="m-2 text-center relative overflow-hidden transition duration-200 transform hover:-translate-y-2 cursor-pointer lg:h-[70vh] md:h-[40vh]">
      <img
        loading="lazy"
        className="object-cover w-full h-full"
        src={img}
        alt={title}
        decoding="async"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-50 opacity-100">
        <h1 className="mb-4 text-3xl text-gray-100">{title}</h1>
      </div>
      <div className="absolute inset-0 flex flex-col justify-center items-center px-6 py-4 transition-opacity duration-200 bg-[rgb(0,0,0)] opacity-0 hover:opacity-100 text-center">
        <p className="text-lg tracking-wide text-gray-300 font-light">{disc}</p>
      </div>
    </div>
  )
}

export default ServiceCard
