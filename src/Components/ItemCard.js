import React from 'react';

function ItemCard({ imgSrc, firstP, secondP }) {

    return (
        <div className="m-2 text-center relative overflow-hidden transition duration-200 transform  shadow-xl hover:-translate-y-2 hover:shadow-2xl cursor-default border-slate-700 border">
            <img
                loading="lazy"
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                src={imgSrc}
                alt=""
                decoding="async"
                sizes="(max-width: 140px) 100vw, (max-width: 168px) 50vw, 33.3vw"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-50 opacity-100">
                <p className="mb-4 text-lg font-bold text-gray-100">{firstP}</p>
            </div>
            <div className="absolute inset-0 flex flex-col justify-center items-center px-6 py-4 transition-opacity duration-200 bg-[rgb(0,0,0)] opacity-0 hover:opacity-100 text-center">
                <p className="text-sm tracking-wide text-gray-300">{secondP}</p>
            </div>
        </div>
    );
}

export default ItemCard;
