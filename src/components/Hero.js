'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

const Hero = () => {
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    }
    
    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5 }
        }
    }
    
    const fadeInUpVariants = {
        hidden: { y: 60, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    }
    
    const serviceCardVariants = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: i => ({
            scale: 1,
            opacity: 1,
            transition: { 
                delay: i * 0.1 + 0.8,
                duration: 0.4 
            }
        }),
        hover: {
            y: -5,
            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
            borderColor: "#D4AF37",
            scale: 1.03,
            transition: { duration: 0.2 }
        }
    }
    
    const logoVariants = {
        hidden: { scale: 0.8, opacity: 0, rotate: -5 },
        visible: {
            scale: 1,
            opacity: 1,
            rotate: 0,
            transition: { 
                type: "spring", 
                stiffness: 200, 
                damping: 20,
                delay: 0.5
            }
        }
    }

    // Background animation variants
    const floatingCircleVariants = {
        animate: (i) => ({
            y: [0, -15, 0],
            x: [0, i % 2 === 0 ? 10 : -10, 0],
            scale: [1, 1.05, 1],
            transition: {
                duration: 5 + i,
                repeat: Infinity,
                ease: "easeInOut"
            }
        })
    }

    const floatingSquareVariants = {
        animate: (i) => ({
            rotate: [0, i % 2 === 0 ? 10 : -10, 0],
            scale: [1, 1.1, 1],
            transition: {
                duration: 8 + i,
                repeat: Infinity,
                ease: "easeInOut"
            }
        })
    }

    const particleVariants = {
        animate: (i) => ({
            y: [0, -100 - (i * 50)],
            x: [0, i % 2 === 0 ? 50 : -50],
            opacity: [0, 0.5, 0],
            scale: [0, 1, 0],
            transition: {
                duration: 10 + (i * 2),
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 3
            }
        })
    }
    
    const services = [
        { name: 'Siding', icon: '🏠' },
        { name: 'Gutters', icon: '🌧️' },
        { name: 'Lawn Care', icon: '🌿' },
        { name: 'Pressure Washing', icon: '💦' }
    ]

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
        <section className="relative py-24 bg-white text-gfc-black overflow-hidden">
            {/* Animated background lines */}
            <div className="absolute inset-0 opacity-5 overflow-hidden">
                {Array.from({ length: 10 }).map((_, i) => (
                    <motion.div
                        key={`line-${i}`}
                        className="absolute h-px bg-gfc-black transform -rotate-45"
                        initial={{ opacity: 0, width: "0%" }}
                        animate={{ 
                            opacity: 0.5, 
                            width: "200%",
                            transition: { 
                                duration: 1.5, 
                                delay: i * 0.1 
                            }
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
                            zIndex: 1
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
                            zIndex: 1
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
                            zIndex: 1
                        }}
                        custom={i}
                        variants={particleVariants}
                        animate="animate"
                    ></motion.div>
                ))}
            </div>

            {/* Light diagonal gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-yellow-50/20 pointer-events-none"></div>

            {/* Hero content */}
            <div className="container mx-auto px-4 relative z-10">
                <motion.div 
                    className="flex flex-col lg:flex-row items-center"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div 
                        className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0"
                        variants={itemVariants}
                    >
                        <motion.h1 
                            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                            variants={itemVariants}
                        >
                            Transform Your{" "}
                            <motion.span 
                                className="text-gfc-gold inline-block"
                                animate={{ 
                                    scale: [1, 1.05, 1],
                                    transition: { 
                                        repeat: Infinity, 
                                        repeatType: "reverse", 
                                        duration: 2
                                    }
                                }}
                            >
                                Home
                            </motion.span>{" "}
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
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link
                                    href="#services"
                                    className="bg-gradient-to-r from-yellow-500 to-gfc-gold hover:from-yellow-600 hover:to-yellow-500 text-white font-bold py-3 px-8 rounded-md shadow-md transition-all hover:shadow-xl transform hover:-translate-y-1 inline-block"
                                >
                                    Explore Services
                                </Link>
                            </motion.div>

                            {/* Animated Outlined Button */}
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link
                                    href="#contact"
                                    className="border-2 border-gfc-gold text-gfc-gold hover:bg-gfc-gold hover:text-white py-3 px-8 rounded-md transition-all shadow-md hover:shadow-lg inline-block"
                                >
                                    Contact Us
                                </Link>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {/* Animated LOGO */}
                    <motion.div 
                        className="lg:w-1/2 flex justify-center"
                        variants={logoVariants}
                    >
                        <motion.div 
                            className="p-10 rounded-xl flex justify-center items-center relative"
                            whileHover={{ scale: 1.02, rotate: 2 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                            {/* Logo background is kept transparent */}
                            
                            <div className="relative w-80 h-80">
                                <Image
                                    src="/gfc2.jpeg"
                                    alt="GFC Exteriors Logo"
                                    fill
                                    className="object-contain mix-blend-darken"
                                    priority
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* Animated Service highlights */}
                <motion.div 
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16"
                    variants={fadeInUpVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className=" p-4 rounded-lg border border-gray-100 hover:border-gfc-gold hover:shadow-md transition-all cursor-pointer relative overflow-hidden"
                            custom={index}
                            variants={serviceCardVariants}
                            initial="hidden"
                            animate="visible"
                            whileHover="hover"
                        >
                            {/* Card background gradient that appears on hover */}
                            <motion.div 
                                className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-transparent opacity-0"
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 1 }}
                                transition={{ duration: 0.3 }}
                            />
                            
                            <motion.div 
                                className="text-gfc-gold mb-2 text-xl relative z-10"
                                whileHover={{ scale: 1.2, rotate: 5 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                                {service.icon}
                            </motion.div>
                            <div className="font-semibold text-gfc-black relative z-10">{service.name}</div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default Hero