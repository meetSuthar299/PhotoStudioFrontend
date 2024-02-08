import React, { useState, useRef, useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';

const spring = {
    type: 'spring',
    stiffness: 300,
    damping: 40,
};

export function withHoverEffect(Component) {
    return (props) => {
        const [isFlipped, setIsFlipped] = useState(false);
        const [rotateXaxis, setRotateXaxis] = useState(0);
        const [rotateYaxis, setRotateYaxis] = useState(0);
        const ref = useRef(null);
        const dx = useSpring(0, spring);
        const dy = useSpring(0, spring);

        const handleClick = () => {
            setIsFlipped((prevState) => !prevState);
        };

        const handleMouseMove = (event) => {
            const element = ref.current;
            const elementRect = element.getBoundingClientRect();
            const elementWidth = elementRect.width;
            const elementHeight = elementRect.height;
            const elementCenterX = elementWidth / 2;
            const elementCenterY = elementHeight / 2;
            const mouseX = event.clientY - elementRect.y - elementCenterY;
            const mouseY = event.clientX - elementRect.x - elementCenterX;
            const degreeX = (mouseX / elementWidth) * 5; //The number is the rotation factor
            const degreeY = (mouseY / elementHeight) * 5; //The number is the rotation factor
            setRotateXaxis(degreeX);
            setRotateYaxis(degreeY);
        };

        const handleMouseLeave = () => {
            setRotateXaxis(0);
            setRotateYaxis(0);
        };

        useEffect(() => {
            dx.set(-rotateXaxis);
            dy.set(rotateYaxis);
        }, [rotateXaxis, rotateYaxis]);

        return (
            <motion.div
                onClick={handleClick}
                transition={spring}
                style={{
                    perspective: '1200px',
                    transformStyle: 'preserve-3d',
                    width: '100%',
                    height: '100%',
                }}
            >
                <motion.div
                    ref={ref}
                    whileHover={{ scale: 1.01}}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    transition={spring}
                    style={{
                        width: '100%',
                        height: '100%',
                        rotateX: dx,
                        rotateY: dy,
                    }}
                >
                    <Component {...props} isFlipped={isFlipped} />
                </motion.div>
            </motion.div>
        );
    };
}
