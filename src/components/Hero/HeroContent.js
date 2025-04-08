'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { itemVariants } from './AnimationVariants';

const HeroContent = () => {
    return (
        <motion.div
            className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0"
            variants={itemVariants}
        >
            <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                variants={itemVariants}
            >
                Transform Your{' '}
                <motion.span
                    className="text-gfc-gold inline-block"
                    animate={{
                        scale: [1, 1.05, 1],
                        transition: {
                            repeat: Infinity,
                            repeatType: 'reverse',
                            duration: 2,
                        },
                    }}
                >
                    Home
                </motion.span>{' '}
                With Expert Exterior Services
            </motion.h1>

            <motion.p
                className="text-xl text-gray-700 mb-8 max-w-xl mx-auto lg:mx-0"
                variants={itemVariants}
            >
                Professional home exterior solutions from a team you can trust. Quality work, fair
                pricing, and exceptional results.
            </motion.p>

            <motion.div
                className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4"
                variants={itemVariants}
            >
                {/* Animated Gradient Button */}
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link
                        href="#services"
                        className="bg-gradient-to-r from-yellow-500 to-gfc-gold hover:from-yellow-600 hover:to-yellow-500 text-white font-bold py-3 px-8 rounded-md shadow-md transition-all hover:shadow-xl transform hover:-translate-y-1 inline-block"
                    >
                        Explore Services
                    </Link>
                </motion.div>

                {/* Animated Outlined Button */}
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link
                        href="#contact"
                        className="border-2 border-gfc-gold text-gfc-gold hover:bg-gfc-gold hover:text-white py-3 px-8 rounded-md transition-all shadow-md hover:shadow-lg inline-block"
                    >
                        Contact Us
                    </Link>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default HeroContent;
