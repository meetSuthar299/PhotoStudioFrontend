import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AnimatedComponent = ({ children }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView();
    const [scrollDirection, setScrollDirection] = useState('down');
    const lastScrollTop = useRef(0);

    const variants = {
        hidden: { opacity: 0, scale: 0.9, y: 50 },
        visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
    };

    const handleScroll = () => {
        const currentScrollTop = window.scrollY;
        setScrollDirection(currentScrollTop > lastScrollTop.current ? 'down' : 'up');
        lastScrollTop.current = currentScrollTop;
    };

    useEffect(() => {
        if (inView && scrollDirection === 'down' || scrollDirection === "up") {
            controls.start('visible');
        }
        // else if () {
        //     controls.start("visible")
        // }
        else {
            controls.start('hidden');
        }
    }, [controls, inView, scrollDirection]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <motion.div
            ref={ref}
            variants={variants}
            initial="hidden"
            animate={controls}
            className="overflow-hidden"
        >
            {children}
        </motion.div>
    );
};

export default AnimatedComponent;
