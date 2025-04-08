'use client'

import { motion } from 'framer-motion'
import {
    floatingCircleVariants,
    floatingSquareVariants,
    particleVariants,
} from './AnimationVariants'

const BackgroundEffects = () => {
    // Background circles and squares position arrays
    const circles = [
        { size: 150, top: '10%', left: '5%', delay: 0 },
        { size: 80, top: '60%', left: '8%', delay: 1 },
        { size: 120, top: '75%', right: '10%', delay: 2 },
        { size: 60, top: '20%', right: '15%', delay: 3 },
    ]

    const squares = [
        { size: 60, top: '15%', right: '20%', delay: 0 },
        { size: 100, bottom: '10%', left: '15%', delay: 1 },
        { size: 80, top: '50%', right: '5%', delay: 2 },
    ]

    const particles = Array.from({ length: 10 }).map((_, i) => ({
        size: Math.random() * 8 + 4,
        left: `${Math.random() * 90 + 5}%`,
        bottom: `-10px`,
        delay: i,
    }))

    return (
        <>
            {/* Animated background lines */}
            <div className="absolute inset-0 opacity-5 overflow-hidden">
                {Array.from({ length: 10 }).map((_, i) => (
                    <motion.div
                        key={`line-${i}`}
                        className="absolute h-px bg-gfc-black transform -rotate-45"
                        initial={{ opacity: 0, width: '0%' }}
                        animate={{
                            opacity: 0.5,
                            width: '200%',
                            transition: {
                                duration: 1.5,
                                delay: i * 0.1,
                            },
                        }}
                        style={{
                            top: `${i * 100}px`,
                            left: 0,
                            right: 0,
                        }}
                    ></motion.div>
                ))}
            </div>

            {/* Animated floating circles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {circles.map((circle, i) => (
                    <motion.div
                        key={`circle-${i}`}
                        className="absolute rounded-full bg-gradient-to-br from-yellow-100 to-yellow-200 opacity-30"
                        style={{
                            width: circle.size,
                            height: circle.size,
                            top: circle.top,
                            left: circle.left,
                            right: circle.right,
                            zIndex: 1,
                        }}
                        custom={i}
                        variants={floatingCircleVariants}
                        animate="animate"
                    ></motion.div>
                ))}
            </div>

            {/* Animated floating squares */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {squares.map((square, i) => (
                    <motion.div
                        key={`square-${i}`}
                        className="absolute bg-gradient-to-tr from-gfc-gold/20 to-yellow-100/30"
                        style={{
                            width: square.size,
                            height: square.size,
                            top: square.top,
                            left: square.left,
                            right: square.right,
                            bottom: square.bottom,
                            zIndex: 1,
                        }}
                        custom={i}
                        variants={floatingSquareVariants}
                        animate="animate"
                    ></motion.div>
                ))}
            </div>

            {/* Rising particles effect */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {particles.map((particle, i) => (
                    <motion.div
                        key={`particle-${i}`}
                        className="absolute rounded-full bg-gfc-gold/40"
                        style={{
                            width: particle.size,
                            height: particle.size,
                            left: particle.left,
                            bottom: particle.bottom,
                            zIndex: 1,
                        }}
                        custom={i}
                        variants={particleVariants}
                        animate="animate"
                    ></motion.div>
                ))}
            </div>

            {/* Light diagonal gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-yellow-50/20 pointer-events-none"></div>
        </>
    )
}

export default BackgroundEffects
