'use client'

import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { menuVariants, menuItemVariants } from './animations'

const MobileMenu = ({ isOpen, closeMenu }) => {
    return (
        <AnimatePresence>
            {isOpen && (
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
    )
}

export default MobileMenu