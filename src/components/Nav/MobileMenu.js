'use client'

import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { menuVariants, menuItemVariants } from './animations'
import { FaTools, FaInfoCircle, FaAddressCard, FaFileInvoiceDollar } from "react-icons/fa";

const MobileMenu = ({ isOpen, closeMenu }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="md:hidden shadow-lg border-t border-gray-100 overflow-hidden"
                    variants={menuVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                >
                    <div className="container mx-auto px-4 py-3">
                        <nav className="space-y-2">
                            <motion.div variants={menuItemVariants} onClick={closeMenu}>
                                <Link href="#services" className="flex items-center py-3 px-3 rounded-lg text-gfc-dark-gray hover:text-gfc-gold hover:bg-gray-50 transition-all">
                                    <FaTools className="mr-3 text-gfc-gold" size={18} />
                                    <span className="font-medium">Services</span>
                                </Link>
                            </motion.div>
                            
                            <motion.div variants={menuItemVariants} onClick={closeMenu}>
                                <Link href="#about" className="flex items-center py-3 px-3 rounded-lg text-gfc-dark-gray hover:text-gfc-gold hover:bg-gray-50 transition-all">
                                    <FaInfoCircle className="mr-3 text-gfc-gold" size={18} />
                                    <span className="font-medium">About</span>
                                </Link>
                            </motion.div>
                            
                            <motion.div variants={menuItemVariants} onClick={closeMenu}>
                                <Link href="#contact" className="flex items-center py-3 px-3 rounded-lg text-gfc-dark-gray hover:text-gfc-gold hover:bg-gray-50 transition-all">
                                    <FaAddressCard className="mr-3 text-gfc-gold" size={18} />
                                    <span className="font-medium">Contact</span>
                                </Link>
                            </motion.div>
                            
                            <motion.div variants={menuItemVariants} onClick={closeMenu} className="pt-2">
                                <Link href="#contact" className="flex items-center justify-center py-3 px-4 bg-gfc-gold hover:bg-gfc-light-gold text-white rounded-lg transition-all shadow-md">
                                    <FaFileInvoiceDollar className="mr-2" size={18} />
                                    <span className="font-semibold">Get Free Quote</span>
                                </Link>
                            </motion.div>
                        </nav>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default MobileMenu