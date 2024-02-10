import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { withHoverEffect } from './withHoverEffect';
import { FaPlusCircle, FaMinusCircle } from 'react-icons/fa';
import AnimatedComponent from './WrapperComponents/AnimatedComponent';

const FlipCard = ({ title, frontData, backData, size }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [rotateXaxis, setRotateXaxis] = useState(0);
    const [rotateYaxis, setRotateYaxis] = useState(0);
    const cardSize = size === 'vertical' ? 'md:h-[525px]' : 'md:h-[250px] ';


    const expandButton = <button className='hover:scale-110 transition-all text-4xl absolute bottom-5 z-10' onClick={() => setIsFlipped(!isFlipped)}>{isFlipped ? <FaMinusCircle /> : <FaPlusCircle />}</button>
    const cardTitle = <h1 className="font-bold mb-2 text-3xl flex top-14 text-center z-10">{title}</h1>
    const Icon = (
        <div className='text-4xl z-10' alt="">
            {frontData.icon}
        </div>)
    return (
        <AnimatedComponent>
            <div
                onClick={() => setIsFlipped(!isFlipped)}
                className={`${cardSize} h-[450px] my-3 transition-all break-inside relative`}
            >
                {/* Front of the card */}
                <motion.div
                    className="bg-zinc-50 text-white p-5 absolute top-0 h-full w-full rounded-lg shadow-md group hover:shadow-lg flex flex-col items-center justify-center border bg-cover bg-center"
                    style={{ backfaceVisibility: 'hidden',  backgroundImage: `url(${frontData.img})` }}
                    animate={{ rotateY: isFlipped ? 180 : 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className='absolute inset-0 rounded-lg bg-[rgba(10,10,14,0.79)] group group-hover:opacity-90 transition-all'></div>

                    {/* {Icon} */}
                    {cardTitle}
                    {expandButton}
                </motion.div>
                {/* Back of the card */}
                <motion.div
                    className="p-2 absolute top-0 h-[100%] w-[100%] bg-zinc-300 text-slate-700 rounded-lg shadow-md hover:shadow-lg flex flex-col items-center justify-center border"
                    style={{ backfaceVisibility: 'hidden', }}
                    animate={{ rotateY: isFlipped ? 0 : -180 }}
                    transition={{ duration: 0.5 }}
                >
                    {Icon}
                    <p className="p-2 text-center text-sm">{backData.paragraph}</p>
                    {expandButton}
                </motion.div>
            </div>
        </AnimatedComponent>
    );
};

export default withHoverEffect(FlipCard);
