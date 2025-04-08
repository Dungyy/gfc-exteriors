'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { services, quickLinks, contactInfo } from '../../global';
import { FaPhone, FaEnvelope, FaHome, FaTools, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gfc-black text-white pt-16 pb-8">
            <div className="container mx-auto px-4">
                {/* Footer top section */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 mb-12">
                    {/* Company Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-4 flex items-center">
                            <span className="text-4xl text-gfc-gold mr-2">GFC</span>
                            <span className="flex flex-col">
                                <span>Exteriors LLC</span>
                            </span>
                        </h3>
                        <p className="text-gray-400 mb-4">
                            Your one-stop solution for all exterior home services. Quality
                            workmanship and exceptional customer service.
                        </p>
                        <div className="text-gray-300 text-sm">
                            <p className="mb-2 flex items-center">
                                <FaPhone className="text-gfc-gold mr-2" />
                                {contactInfo.phone1.name}:&nbsp;
                                <a
                                    href={contactInfo.phone1.href}
                                    className="hover:text-gfc-gold transition-colors"
                                >
                                    {' '}
                                    {contactInfo.phone1.number}
                                </a>
                            </p>
                            <p className="mb-2 flex items-center">
                                <FaPhone className="text-gfc-gold mr-2" />
                                {contactInfo.phone2.name}:&nbsp;
                                <a
                                    href={contactInfo.phone2.href}
                                    className="hover:text-gfc-gold transition-colors"
                                >
                                    {' '}
                                    {contactInfo.phone2.number}
                                </a>
                            </p>
                            <p className="flex items-center">
                                <FaEnvelope className="text-gfc-gold mr-2" />
                                <a
                                    href={contactInfo.email.href}
                                    className="hover:text-gfc-gold transition-colors"
                                >
                                    {contactInfo.email.address}
                                </a>
                            </p>
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-xl font-bold mb-4 flex items-center">
                            <FaTools className="text-gfc-gold mr-2" />
                            Our Services
                        </h3>
                        <ul className="space-y-2">
                            {services.map((service, index) => (
                                <li key={index}>
                                    <Link
                                        href={service.href}
                                        className="text-gray-400 hover:text-gfc-gold transition-colors flex items-center"
                                    >
                                        <span className="text-gfc-gold mr-2">›</span>
                                        {service.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Quick Links & Scroll to Top */}
                    <div className="relative">
                        <h3 className="text-xl font-bold mb-4 flex items-center">
                            <FaHome className="text-gfc-gold mr-2" />
                            Quick Links
                        </h3>
                        <ul className="space-y-2">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-gfc-gold transition-colors flex items-center"
                                    >
                                        <span className="text-gfc-gold mr-2">›</span>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        {/* Scroll to top button */}
                        <motion.div
                            className="absolute right-8 top-3 mt-4"
                            animate={{ y: [0, -10, 0] }}
                            transition={{
                                repeat: Infinity,
                                duration: 1.5,
                                ease: 'easeInOut',
                            }}
                        >
                            <button
                                onClick={() =>
                                    window.scrollTo({
                                        top: 0,
                                        behavior: 'smooth',
                                    })
                                }
                                className="bg-gfc-gold text-black p-3 rounded-full shadow-lg hover:bg-yellow-500 transition-all duration-300 flex items-center justify-center"
                                aria-label="Scroll to top"
                            >
                                <FaArrowUp />
                            </button>
                        </motion.div>
                    </div>
                </div>

                {/* Footer bottom - Copyright */}
                <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
                    <p>&copy; {currentYear} GFC Exteriors LLC | All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
