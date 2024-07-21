import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface AnimatedTextProps {
    text: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text }) => {
    const controls = useAnimation();
    const { ref, inView } = useInView({
        threshold: 0.1, // Adjust the threshold as needed
    });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        } else {
            controls.start('hidden');
        }
    }, [controls, inView]);

    const words = text.split(" ");

    // Variants for Container of words.
    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
        }),
    };

    // Variants for each word.
    const child = {
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            x: 20,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
    };

    return (
        <motion.div
            ref={ref as React.RefObject<HTMLDivElement>}
            style={{ overflow: "hidden", display: "flex", fontSize: "2rem" }}
            variants={container}
            initial="hidden"
            animate={controls}
        >
            {words.map((word, index) => (
                <motion.span
                    variants={child}
                    style={{ marginRight: "5px" }}
                    key={index}
                >
                    {word}
                </motion.span>
            ))}
        </motion.div>
    );
};

export default AnimatedText;
