'use client'

import { motion } from 'framer-motion'
import {
    topLineVariants,
    middleLineVariants,
    bottomLineVariants,
} from './animations'

const HamburgerButton = ({ isMenuOpen, toggle }) => {
    return (
        <button
            onClick={toggle}
            className="text-gfc-dark-gray focus:outline-none relative w-8 h-8 flex items-center justify-center"
            aria-label="Toggle menu"
        >
            <div className="relative w-6 h-6">
                <motion.div
                    variants={topLineVariants}
                    initial="closed"
                    animate={isMenuOpen ? 'open' : 'closed'}
                    className="absolute top-1 w-6 h-0.5 bg-gfc-dark-gray"
                    transition={{ duration: 0.3 }}
                />
                <motion.div
                    variants={middleLineVariants}
                    initial="closed"
                    animate={isMenuOpen ? 'open' : 'closed'}
                    className="absolute top-[11px] w-6 h-0.5 bg-gfc-dark-gray"
                    transition={{ duration: 0.3 }}
                />
                <motion.div
                    variants={bottomLineVariants}
                    initial="closed"
                    animate={isMenuOpen ? 'open' : 'closed'}
                    className="absolute bottom-1 w-6 h-0.5 bg-gfc-dark-gray"
                    transition={{ duration: 0.3 }}
                />
            </div>
        </button>
    )
}

export default HamburgerButton
