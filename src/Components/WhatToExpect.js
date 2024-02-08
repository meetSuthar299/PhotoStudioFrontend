import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import AnimatedComponent from './WrapperComponents/AnimatedComponent';

const WhatToExpect = ({ title, text, steps }) => {
    const sectionVariants = {
        initial: { opacity: 0, y: 40 },
        animate: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
    };

    const itemVariants = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
    };

    const controls = useAnimation();

    useEffect(() => {
        controls.start('animate');
    }, [controls]);

    const stepTitles = ["Consultation", "Collaborative Planning", "Dynamic Photoshoot", "Polished Delivery"];

    return (
        <motion.section id="whatToExpect" className="pt-24">
            <h2 className="text-5xl font-extrabold pb-20 text-center">What to Expect</h2>
            <p className="text-xl mb-12 text-center font-light px-2 lg:px-36">
                {text}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {steps.map((step, index) => (
                    <motion.div key={index + 1} variants={itemVariants}>
                        <div className="flex flex-col items-center mb-8">
                            <div className="mb-4 w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                                <span className="text-white text-lg font-bold">{index + 1}</span>
                            </div>
                            <AnimatedComponent>
                                <h1 className="text-center text-xl">{stepTitles[index]}</h1>
                                <p className="text-gray-500 text-center px-10">{step}</p>
                            </AnimatedComponent>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
};

export default WhatToExpect;
