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


    const expandButton = <button className='hover:scale-125 transition-all text-3xl absolute bottom-5 right-5' onClick={() => setIsFlipped(!isFlipped)}>{isFlipped ? <FaMinusCircle /> : <FaPlusCircle />}</button>
    const cardTitle = <h1 className="font-bold mb-2 text-xl lg:text-2xl flex text-center top-5 left-5">{title}</h1>
    const Icon = (
        <div className='text-4xl' alt="">
            {frontData.img}
        </div>)
    return (
        <AnimatedComponent>
            <div
                className={`${cardSize} h-[450px] my-3 transition-all break-inside relative`}
            >
                <motion.div
                    className="p-5 absolute top-0 h-full w-full bg-zinc-100 rounded-lg shadow-md hover:shadow-lg flex flex-col items-center justify-center border"
                    style={{ backfaceVisibility: 'hidden', transform: isFlipped ? `rotateY(${rotateXaxis}deg) rotateX(${rotateYaxis}deg)` : 'rotateX(0deg)' }}
                    animate={{ rotateY: isFlipped ? 180 : 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {Icon}
                    <h1 className="text-xl font-bold mt-3">{cardTitle}</h1>
                    {expandButton}
                </motion.div>

                <motion.div
                    className="p-2 absolute top-0 h-[100%] w-[100%] bg-zinc-800 text-white rounded-lg shadow-md hover:shadow-lg flex flex-col items-center justify-center border"
                    style={{ backfaceVisibility: 'hidden', transform: isFlipped ? 'rotateX(0deg)' : `rotateY(${-180}deg)` }}
                    animate={{ rotateY: isFlipped ? 0 : -180 }}
                    transition={{ duration: 0.5 }}
                >
                    {Icon}
                    
                    <p className="font-light text-sm py-2 text-center lg:text-base">{frontData.paragraph}</p>
                    {expandButton}
                </motion.div>
            </div>
        </AnimatedComponent>
    );
};

export default withHoverEffect(FlipCard);
