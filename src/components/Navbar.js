'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const navRef = useRef(null)

    // Function to close menu
    const closeMenu = () => setIsMenuOpen(false)

    // Close menu on scroll or clicking outside
    useEffect(() => {
        const handleScroll = () => closeMenu()
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                closeMenu()
            }
        }

        if (isMenuOpen) {
            window.addEventListener('scroll', handleScroll)
            document.addEventListener('mousedown', handleClickOutside)
        }

        return () => {
            window.removeEventListener('scroll', handleScroll)
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [isMenuOpen])

    // Animation variants for the hamburger icon
    const topLineVariants = {
        closed: { rotate: 0, y: 0 },
        open: { rotate: 45, y: 9 }
    }

    const middleLineVariants = {
        closed: { opacity: 1 },
        open: { opacity: 0 }
    }

    const bottomLineVariants = {
        closed: { rotate: 0, y: 0 },
        open: { rotate: -45, y: -9 }
    }

    // Mobile menu animation variants
    const menuVariants = {
        closed: {
            opacity: 0,
            height: 0,
            transition: {
                duration: 0.3,
                when: "afterChildren",
                staggerChildren: 0.05,
                staggerDirection: -1
            }
        },
        open: {
            opacity: 1,
            height: "auto",
            transition: {
                duration: 0.3,
                when: "beforeChildren",
                staggerChildren: 0.05,
                staggerDirection: 1
            }
        }
    }

    const menuItemVariants = {
        closed: {
            opacity: 0,
            y: -10,
            transition: { duration: 0.1 }
        },
        open: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.1 }
        }
    }

    return (
        <nav className="bg-gfc-light-gray shadow-md sticky top-0 z-50" ref={navRef}>
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    {/* Logo and Brand */}
                    <Link href="/" className="flex items-center space-x-2">
                        <div className="relative w-20 h-20">
                            <Image
                                src="/bitmap.png"
                                alt="GFC Exteriors Logo"
                                fill
                                className="object-contain mix-blend-darken"
                                priority
                            />
                        </div>
                        <div className="hidden md:flex flex-col">
                            <span className="text-lg font-semibold text-gfc-black">Exteriors LLC</span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="#services" className="text-gfc-dark-gray hover:text-gfc-gold transition-colors">
                            Services
                        </Link>
                        <Link href="#about" className="text-gfc-dark-gray hover:text-gfc-gold transition-colors">
                            About
                        </Link>
                        <Link href="#contact" className="text-gfc-dark-gray hover:text-gfc-gold transition-colors">
                            Contact
                        </Link>
                        <Link href="#contact" className="bg-gfc-gold hover:bg-gfc-light-gold text-white px-5 py-2 rounded-md transition-colors">
                            Get Quote
                        </Link>
                    </div>

                    {/* Animated Hamburger Menu Button */}
                    <div className="md:hidden py-2 px-4">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-gfc-dark-gray focus:outline-none relative w-8 h-8 flex items-center justify-center"
                            aria-label="Toggle menu"
                        >
                            <div className="relative w-6 h-6">
                                <motion.div
                                    variants={topLineVariants}
                                    initial="closed"
                                    animate={isMenuOpen ? "open" : "closed"}
                                    className="absolute top-1 w-6 h-0.5 bg-gfc-dark-gray"
                                    transition={{ duration: 0.3 }}
                                />
                                <motion.div
                                    variants={middleLineVariants}
                                    initial="closed"
                                    animate={isMenuOpen ? "open" : "closed"}
                                    className="absolute top-[11px] w-6 h-0.5 bg-gfc-dark-gray"
                                    transition={{ duration: 0.3 }}
                                />
                                <motion.div
                                    variants={bottomLineVariants}
                                    initial="closed"
                                    animate={isMenuOpen ? "open" : "closed"}
                                    className="absolute bottom-1 w-6 h-0.5 bg-gfc-dark-gray"
                                    transition={{ duration: 0.3 }}
                                />
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            {/* Animated Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        className="md:hidden bg-gfc-light-gray border-t border-gray-200 overflow-hidden"
                        variants={menuVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                    >
                        <div className="container mx-auto px-4 py-2">
                            <motion.div variants={menuItemVariants} onClick={closeMenu}>
                                <Link href="#services" className="block py-2 text-gfc-dark-gray hover:text-gfc-gold transition-colors">
                                    Services
                                </Link>
                            </motion.div>
                            <motion.div variants={menuItemVariants} onClick={closeMenu}>
                                <Link href="#about" className="block py-2 text-gfc-dark-gray hover:text-gfc-gold transition-colors">
                                    About
                                </Link>
                            </motion.div>
                            <motion.div variants={menuItemVariants} onClick={closeMenu}>
                                <Link href="#contact" className="block py-2 text-gfc-dark-gray hover:text-gfc-gold transition-colors">
                                    Contact
                                </Link>
                            </motion.div>
                            <motion.div variants={menuItemVariants} onClick={closeMenu}>
                                <Link href="#contact" className="block py-3 mt-2 text-center bg-gfc-gold hover:bg-gfc-light-gold text-white rounded-md transition-colors">
                                    Get Free Quote
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}

export default Navbar
