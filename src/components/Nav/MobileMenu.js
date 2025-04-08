'use client';

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { menuVariants, menuItemVariants } from './animations';
import { mainNavItems, quoteButton } from '../../global';

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
                            {mainNavItems.map((item, index) => (
                                <motion.div
                                    key={index}
                                    variants={menuItemVariants}
                                    onClick={closeMenu}
                                >
                                    <Link
                                        href={item.href}
                                        className="flex items-center py-3 px-3 rounded-lg text-gfc-dark-gray hover:text-gfc-gold hover:bg-gray-50 transition-all"
                                    >
                                        <span className="mr-3">{item.mobileIcon}</span>
                                        <span className="font-medium">{item.name}</span>
                                    </Link>
                                </motion.div>
                            ))}

                            <motion.div
                                variants={menuItemVariants}
                                onClick={closeMenu}
                                className="pt-2"
                            >
                                <Link
                                    href={quoteButton.href}
                                    className="flex items-center justify-center py-3 px-4 bg-gfc-gold hover:bg-gfc-light-gold text-white rounded-lg transition-all shadow-md"
                                >
                                    <span className="mr-2">{quoteButton.mobileIcon}</span>
                                    <span className="font-semibold">{quoteButton.name}</span>
                                </Link>
                            </motion.div>
                        </nav>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default MobileMenu;
