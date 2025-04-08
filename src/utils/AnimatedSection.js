// components/AnimatedSection.js
'use client'

import { motion } from 'framer-motion'

const AnimatedSection = ({
    children,
    className = '',
    delay = 0,
    id,
    direction = 'up',
}) => {
    // Set up variants based on direction
    let variants = {}

    switch (direction) {
        case 'up':
            variants = {
                hidden: { y: 100, opacity: 0 },
                visible: { y: 0, opacity: 1 },
            }
            break
        case 'down':
            variants = {
                hidden: { y: -100, opacity: 0 },
                visible: { y: 0, opacity: 1 },
            }
            break
        case 'left':
            variants = {
                hidden: { x: -100, opacity: 0 },
                visible: { x: 0, opacity: 1 },
            }
            break
        case 'right':
            variants = {
                hidden: { x: 100, opacity: 0 },
                visible: { x: 0, opacity: 1 },
            }
            break
        case 'scale':
            variants = {
                hidden: { scale: 0.8, opacity: 0 },
                visible: { scale: 1, opacity: 1 },
            }
            break
        default:
            variants = {
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
            }
    }

    return (
        <motion.section
            id={id}
            className={className}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={variants}
            transition={{
                duration: 0.6,
                delay: delay,
                ease: 'easeOut',
            }}
        >
            {children}
        </motion.section>
    )
}

export default AnimatedSection
