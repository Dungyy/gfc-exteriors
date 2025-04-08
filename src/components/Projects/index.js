// components/ProjectShowcase.js
'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import AnimatedSection from '../../utils/AnimatedSection';
import { projects } from './constants';

const ProjectShowcase = () => {
    // Replace these with your actual project images

    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0); // -1 for left, 1 for right
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const autoPlayRef = useRef(null);
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);

    // Auto-advance slides
    useEffect(() => {
        if (isAutoPlaying) {
            autoPlayRef.current = setInterval(() => {
                setDirection(1);
                setCurrentIndex(prevIndex => (prevIndex + 1) % projects.length);
            }, 5000);
        }

        return () => {
            if (autoPlayRef.current) {
                clearInterval(autoPlayRef.current);
            }
        };
    }, [isAutoPlaying]);

    // Navigate to previous slide
    const prevSlide = () => {
        setDirection(-1);
        setIsAutoPlaying(false);
        setCurrentIndex(prevIndex => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
    };

    // Navigate to next slide
    const nextSlide = () => {
        setDirection(1);
        setIsAutoPlaying(false);
        setCurrentIndex(prevIndex => (prevIndex + 1) % projects.length);
    };

    // Jump to a specific slide
    const goToSlide = index => {
        setDirection(index > currentIndex ? 1 : -1);
        setIsAutoPlaying(false);
        setCurrentIndex(index);
    };

    // Handle touch events for mobile swiping
    const handleTouchStart = e => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchMove = e => {
        touchEndX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
        if (touchStartX.current - touchEndX.current > 50) {
            // Swipe left, go to next slide
            nextSlide();
        }
        if (touchEndX.current - touchStartX.current > 50) {
            // Swipe right, go to previous slide
            prevSlide();
        }
    };

    // Animation variants
    const slideVariants = {
        enter: direction => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
        },
        exit: direction => ({
            x: direction > 0 ? -1000 : 1000,
            opacity: 0,
        }),
    };

    return (
        <AnimatedSection id="projects" className="py-20 bg-gfc-light-gray">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
                    <div className="h-1 w-20 bg-gfc-gold mx-auto"></div>
                    <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
                        Browse through our portfolio of completed projects and see the quality of
                        our work firsthand.
                    </p>
                </div>

                {/* Slideshow container */}
                <div
                    className="relative max-w-5xl mx-auto overflow-hidden rounded-xl shadow-2xl"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    {/* Main slideshow */}
                    <div className="relative aspect-[16/9] bg-gfc-black">
                        <AnimatePresence initial={false} custom={direction}>
                            <motion.div
                                key={currentIndex}
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: {
                                        type: 'spring',
                                        stiffness: 300,
                                        damping: 30,
                                    },
                                    opacity: { duration: 0.2 },
                                }}
                                className="absolute inset-0"
                            >
                                <div className="relative w-full h-full">
                                    <Image
                                        src={projects[currentIndex].image}
                                        alt={projects[currentIndex].title}
                                        fill
                                        className="object-cover"
                                    />
                                    {/* Overlay with text */}
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                                        <h3 className="text-2xl font-bold">
                                            {projects[currentIndex].title}
                                        </h3>
                                        <p className="mt-2">{projects[currentIndex].description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Navigation arrows */}
                        <button
                            onClick={prevSlide}
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gfc-gold/80 hover:bg-gfc-gold text-gfc-black p-2 rounded-full z-10"
                            aria-label="Previous slide"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 19l-7-7 7-7"
                                />
                            </svg>
                        </button>
                        <button
                            onClick={nextSlide}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gfc-gold/80 hover:bg-gfc-gold text-gfc-black p-2 rounded-full z-10"
                            aria-label="Next slide"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        </button>

                        {/* Autoplay toggle */}
                        <button
                            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                            className="absolute right-4 top-4 bg-gfc-black/60 hover:bg-gfc-black text-white p-2 rounded-full z-10"
                            aria-label={isAutoPlaying ? 'Pause slideshow' : 'Play slideshow'}
                        >
                            {isAutoPlaying ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>

                    {/* Thumbnail navigation */}
                    <div className="bg-gfc-black py-2 px-4 flex justify-center space-x-2 overflow-x-auto">
                        {projects.map((project, index) => (
                            <motion.button
                                key={project.id}
                                onClick={() => goToSlide(index)}
                                className={`w-3 h-3 rounded-full flex-shrink-0 transition-all ${
                                    index === currentIndex
                                        ? 'bg-gfc-gold scale-125'
                                        : 'bg-white/50 hover:bg-white'
                                }`}
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Category buttons */}
                <div className="flex flex-wrap justify-center gap-2 mt-8">
                    <motion.button
                        className="px-4 py-2 rounded-full bg-gfc-black text-white hover:bg-gfc-gold hover:text-gfc-black transition-all"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        All Projects
                    </motion.button>
                    <motion.button
                        className="px-4 py-2 rounded-full bg-white text-gfc-black border border-gray-200 hover:border-gfc-gold transition-all"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Siding
                    </motion.button>
                    <motion.button
                        className="px-4 py-2 rounded-full bg-white text-gfc-black border border-gray-200 hover:border-gfc-gold transition-all"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Gutters
                    </motion.button>
                    <motion.button
                        className="px-4 py-2 rounded-full bg-white text-gfc-black border border-gray-200 hover:border-gfc-gold transition-all"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Lawn Care
                    </motion.button>
                    <motion.button
                        className="px-4 py-2 rounded-full bg-white text-gfc-black border border-gray-200 hover:border-gfc-gold transition-all"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Pressure Washing
                    </motion.button>
                </div>

                {/* View All Projects button */}
                <div className="text-center mt-10">
                    <motion.button
                        className="bg-gfc-gold hover:bg-gfc-light-gold text-gfc-black font-bold py-3 px-8 rounded-md shadow-md inline-flex items-center transition-all hover:shadow-xl"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span>View All Projects</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 ml-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                        </svg>
                    </motion.button>
                </div>
            </div>
        </AnimatedSection>
    );
};

export default ProjectShowcase;
