import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import cityImg from '../img/gallery/city.jpeg';
import { withHoverEffect } from './withHoverEffect';
import { FaPlusCircle, FaMinusCircle } from 'react-icons/fa';

const FlipCard = ({ title, frontData, backData, size }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [rotateXaxis, setRotateXaxis] = useState(0);
    const [rotateYaxis, setRotateYaxis] = useState(0);
    const ref = useRef(null);
    const containerClass = size === 'vertical' ? 'h-[509px]' : 'h-[250px] ';

    const handleMouseMove = (event) => {
        const element = ref.current;
        const elementRect = element.getBoundingClientRect();
        const elementWidth = elementRect.width;
        const elementHeight = elementRect.height;
        const elementCenterX = elementWidth / 2;
        const elementCenterY = elementHeight / 2;
        const mouseX = event.clientY - elementRect.y - elementCenterY;
        const mouseY = event.clientX - elementRect.x - elementCenterX;
        const degreeX = (mouseX / elementWidth) * 20; //The number is the rotation factor
        const degreeY = (mouseY / elementHeight) * 20; //The number is the rotation factor
        setRotateXaxis(degreeX);
        setRotateYaxis(degreeY);
    };

    const expandButton = <button className='hover:scale-125 transition-all text-2xl' onClick={() => setIsFlipped(!isFlipped)}>{isFlipped ? <FaMinusCircle /> : <FaPlusCircle />}</button>

    return (
        <div
            className={`${containerClass} my-1 transition-all break-inside relative`}
            
            onMouseMove={handleMouseMove}
            ref={ref}
        >
            <motion.div
                className="absolute top-0 h-[100%] w-[100%] bg-slate-100 rounded shadow-md hover:shadow-lg flex flex-col items-center justify-center border "
                style={{ backfaceVisibility: 'hidden', transform: isFlipped ? `rotateX(${rotateXaxis}deg) rotateY(${rotateYaxis}deg)` : 'rotateY(0deg)' }}
                animate={{ rotateX: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-xl font-bold mb-2">{title}</h1>
                {expandButton}
            </motion.div>
            <motion.div
                className="absolute top-0 h-[100%] w-[100%] bg-slate-400 rounded shadow-md hover:shadow-lg flex flex-col items-center justify-center border"
                style={{ backfaceVisibility: 'hidden', transform: isFlipped ? 'rotateY(0deg)' : `rotateX(${-180}deg)` }}
                animate={{ rotateX: isFlipped ? 0 : -180 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-xl font-bold mb-2">{title}</h1>
                <p>{backData.paragraph}</p>
                {expandButton}
            </motion.div>
        </div>
    );
};

export default withHoverEffect(FlipCard);
