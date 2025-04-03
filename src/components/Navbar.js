// components/Navbar.js
'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <nav className="bg-gfc-light-gray shadow-md sticky top-0 z-50">
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
                        <Link
                            href="#services"
                            className="text-gfc-dark-gray hover:text-gfc-gold transition-colors"
                        >
                            Services
                        </Link>
                        <Link
                            href="#about"
                            className="text-gfc-dark-gray hover:text-gfc-gold transition-colors"
                        >
                            About
                        </Link>
                        {/* <Link
              href="#testimonials"
              className="text-gfc-dark-gray hover:text-gfc-gold transition-colors"
            >
              Testimonials
            </Link> */}
                        <Link
                            href="#contact"
                            className="text-gfc-dark-gray hover:text-gfc-gold transition-colors"
                        >
                            Contact
                        </Link>
                        <Link
                            href="#contact"
                            className="bg-gfc-gold hover:bg-gfc-light-gold text-white px-5 py-2 rounded-md transition-colors"
                        >
                            Get Quote
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-gfc-dark-gray focus:outline-none"
                        >
                            {isMenuOpen ? (
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
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
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
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-gfc-light-gray border-t border-gray-200 py-2">
                    <div className="container mx-auto px-4">
                        <Link href="#services" className="block py-2 text-gfc-dark-gray hover:text-gfc-gold">
                            Services
                        </Link>
                        <Link href="#about" className="block py-2 text-gfc-dark-gray hover:text-gfc-gold">
                            About
                        </Link>
                        {/* <Link href="#testimonials" className="block py-2 text-gfc-dark-gray hover:text-gfc-gold">
              Testimonials
            </Link> */}
                        <Link href="#contact" className="block py-2 text-gfc-dark-gray hover:text-gfc-gold">
                            Contact
                        </Link>
                        <Link
                            href="#contact"
                            className="block py-2 mt-2 text-center bg-gfc-gold text-white rounded-md"
                        >
                            Get Free Quote
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar
