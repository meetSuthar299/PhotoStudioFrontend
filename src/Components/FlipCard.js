import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import cityImg from '../img/gallery/city.jpeg';
import { withHoverEffect } from './withHoverEffect';
import { FaPlusCircle, FaMinusCircle } from 'react-icons/fa';
import AnimatedComponent from './WrapperComponents/AnimatedComponent';

const FlipCard = ({ title, frontData, backData, size }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [rotateXaxis, setRotateXaxis] = useState(0);
    const [rotateYaxis, setRotateYaxis] = useState(0);
    const cardSize = size === 'vertical' ? 'md:h-[525px]' : 'md:h-[250px] ';


    const expandButton = <button className='hover:scale-110 transition-all text-4xl absolute bottom-5' onClick={() => setIsFlipped(!isFlipped)}>{isFlipped ? <FaMinusCircle /> : <FaPlusCircle />}</button>
    const cardTitle = <h1 className="font-bold mb-2 text-2xl flex top-14 text-center">{title}</h1>
    const Icon = (
        <div className='text-3xl absolute top-5' alt="">
            {frontData.img}
        </div>)
    return (
        <AnimatedComponent>
            <div
            onClick={() => setIsFlipped(!isFlipped)}
                className={`${cardSize} h-[450px] my-3 transition-all break-inside relative`}
            >
                <motion.div
                    className="bg-sky-100 p-5 absolute top-0 h-full w-full rounded-lg shadow-md hover:shadow-lg flex flex-col items-center justify-center border"
                    style={{ backfaceVisibility: 'hidden', transform: isFlipped ? `rotateY(${rotateXaxis}deg) rotateX(${rotateYaxis}deg)` : 'rotateX(0deg)' }}
                    animate={{ rotateY: isFlipped ? 180 : 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {Icon}
                    {cardTitle}
                    {/* <div className="w-[70%] mx-auto h-[2px] bg-gradient-to-r from-[rgb(255,255,255,0)] via-[rgb(0,0,0)] to-[rgba(255,255,255,0)] rounded-full"></div> */}
                    
                    {expandButton}
                </motion.div>

                <motion.div
                    className="p-2 absolute top-0 h-[100%] w-[100%] bg-gray-900 text-white rounded-lg shadow-md hover:shadow-lg flex flex-col items-center justify-center border"
                    style={{ backfaceVisibility: 'hidden', transform: isFlipped ? 'rotateX(0deg)' : `rotateY(${-180}deg)` }}
                    animate={{ rotateY: isFlipped ? 0 : -180 }}
                    transition={{ duration: 0.5 }}
                >
                    {Icon}
                    {/* {cardTitle} */}
                    <p className="font-light p-2 text-center lg:text-base">{frontData.paragraph}</p>
                    {expandButton}
                </motion.div>
            </div>
        </AnimatedComponent>
    );
};

export default withHoverEffect(FlipCard);
