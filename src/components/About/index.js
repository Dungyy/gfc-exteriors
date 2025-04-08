// components/About.js

'use client'
import { useEffect, useState, useRef } from 'react'
import Logo from '../../utils/Logo'
import { TbCertificate } from 'react-icons/tb'
import { GiHouse } from 'react-icons/gi'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { teamFeatures } from '../../global'

const About = () => {
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start'],
    })

    // Create scroll-based animations
    const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1])
    const scale = useTransform(scrollYProgress, [0, 0.2], [0.95, 1])
    const y = useTransform(scrollYProgress, [0, 0.2], [50, 0])

    // Parallax effect for decorative elements
    const decorLeft = useTransform(scrollYProgress, [0, 1], [-5, -15])
    const decorRight = useTransform(scrollYProgress, [0, 1], [5, 15])

    // Trigger entrance animations on component mount
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true)
        }, 100)

        return () => clearTimeout(timer)
    }, [])

    // Custom animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    }

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: [0.25, 0.1, 0.25, 1.0], // Custom cubic-bezier easing
            },
        },
    }

    return (
        <section
            id="about"
            ref={sectionRef}
            className="py-16 md:py-16 lg:py-24 bg-gfc-light-gray relative overflow-hidden"
        >
            <br />
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden opacity-5 pointer-events-none">
                <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-gfc-gold"></div>
                <div className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full bg-gfc-gold"></div>
            </div>

            <motion.div
                style={{ opacity, scale, y }}
                className="container mx-auto px-4 relative z-10"
            >
                <motion.div
                    initial="hidden"
                    animate={isVisible ? 'visible' : 'hidden'}
                    variants={containerVariants}
                    className="flex flex-col lg:flex-row items-center"
                >
                    {/* Image/Visual Side */}
                    <motion.div
                        variants={itemVariants}
                        className="w-full lg:w-1/2 mb-12 lg:mb-0 lg:pr-12"
                    >
                        <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none">
                            {/* Main visual */}
                            <motion.div
                                whileHover={{
                                    y: -5,
                                    boxShadow:
                                        '0 25px 50px -12px rgba(119, 119, 119, 0.25)',
                                }}
                                transition={{ duration: 0.4 }}
                            >
                                <div className=" md:mt-9  aspect-w-4 aspect-h-3 rounded-lg overflow-hidden">
                                    <div className="md:mt-9 absolute inset-0 flex items-center justify-center bg-gfc-light-gray">
                                        <motion.div
                                            initial={{ scale: 0.9, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            transition={{
                                                duration: 0.6,
                                                delay: 0.4,
                                                ease: 'easeOut',
                                            }}
                                            className="text-center mb-8 "
                                        >
                                            <Logo className="w-40 sm:w-60 h-auto mb-4" />
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Decorative elements */}
                            <motion.div
                                style={{ x: decorLeft }}
                                className="absolute -top-6 -left-6 w-20 sm:w-28 h-20 sm:h-28 bg-gfc-gold rounded-xl opacity-20"
                            ></motion.div>

                            <motion.div
                                style={{ x: decorRight }}
                                className="absolute -bottom-6 -right-6 w-24 sm:w-32 h-24 sm:h-32 bg-gfc-gold rounded-xl opacity-20"
                            ></motion.div>

                            {/* Years of experience badge */}
                            <motion.div
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{
                                    scale: isVisible ? 1 : 0,
                                    opacity: isVisible ? 1 : 0,
                                }}
                                transition={{
                                    type: 'spring',
                                    stiffness: 200,
                                    damping: 15,
                                    delay: 0.8,
                                }}
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow:
                                        '0 15px 30px -10px rgba(0, 0, 0, 0.3)',
                                }}
                                className="absolute -right-3 sm:-right-5 -bottom-3 sm:-bottom-5 bg-gfc-gold text-gfc-black w-20 h-20 sm:w-28 sm:h-28 rounded-full flex items-center justify-center shadow-lg"
                            >
                                <div className="text-center">
                                    <div className="text-xl sm:text-3xl font-bold">
                                        5+
                                    </div>
                                    <div className="text-[10px] sm:text-xs font-medium">
                                        Years Exp.
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        variants={itemVariants}
                        className="w-full lg:w-1/2"
                    >
                        <motion.div
                            variants={itemVariants}
                            className="text-sm font-semibold text-gfc-gold tracking-widest uppercase mb-3 flex items-center"
                        >
                            <GiHouse className="mr-2 text-lg" />
                            About Our Company
                        </motion.div>

                        <motion.h2
                            variants={itemVariants}
                            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-gfc-black"
                        >
                            Your Trusted Partner for Exterior Services
                        </motion.h2>

                        <motion.p
                            variants={itemVariants}
                            className="text-gray-700 mb-5 sm:mb-6 text-sm sm:text-base leading-relaxed"
                        >
                            GFC Exteriors LLC is a locally owned and operated
                            company providing top-quality exterior services to
                            homeowners across the region. With a focus on
                            customer satisfaction and exceptional workmanship,
                            we&apos;ve built a reputation for reliability and
                            excellence.
                        </motion.p>

                        <motion.p
                            variants={itemVariants}
                            className="text-gray-700 mb-8 sm:mb-10 text-sm sm:text-base leading-relaxed"
                        >
                            Our team brings together years of experience in all
                            aspects of exterior home services. From siding and
                            gutters to lawn care and pressure washing, we have
                            the expertise to handle all your exterior
                            maintenance needs with precision and care.
                        </motion.p>

                        {/* Feature boxes */}
                        <motion.div
                            variants={itemVariants}
                            className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-8 sm:mb-10"
                        >
                            <AnimatePresence>
                                {teamFeatures.map((feature, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{
                                            opacity: isVisible ? 1 : 0,
                                            y: isVisible ? 0 : 20,
                                            transition: {
                                                duration: 0.4,
                                                delay: 0.9 + index * 0.15,
                                            },
                                        }}
                                        whileHover={{
                                            y: -8,
                                            boxShadow:
                                                '0 15px 30px -10px rgba(0, 0, 0, 0.2)',
                                            transition: { duration: 0.3 },
                                        }}
                                        className="flex border-gray-100 items-start p-4 sm:p-5 bg-white rounded-xl shadow-sm transition-all duration-300 backdrop-blur-sm bg-white/90 border border-gray-100"
                                    >
                                        <motion.div
                                            whileHover={{
                                                scale: 1.2,
                                                rotate: [0, -5, 5, -5, 0],
                                                transition: { duration: 0.5 },
                                            }}
                                            className="text-2xl sm:text-3xl mr-4 sm:mr-5 text-gfc-gold"
                                        >
                                            {feature.icon}
                                        </motion.div>
                                        <div>
                                            <h3 className="font-bold text-sm sm:text-base text-gfc-dark-gray">
                                                {feature.title}
                                            </h3>
                                            <p className="text-xs sm:text-sm text-gray-600 mt-1">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </motion.div>

                        <motion.div
                            variants={itemVariants}
                            whileHover={{ x: 5 }}
                            className="flex items-center mt-10 py-3 px-4 rounded-lg border border-gray-200 inline-block"
                        >
                            <motion.div
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.6 }}
                            >
                                <TbCertificate className="text-2xl text-gfc-gold mr-3" />
                            </motion.div>
                            <span className="text-sm font-medium text-gray-700">
                                Licensed, Bonded & Insured
                            </span>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    )
}

export default About
