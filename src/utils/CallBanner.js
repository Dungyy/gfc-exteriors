// components/CallBanner.js
'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { contactInfo, quoteButton } from "../global"
import Link from 'next/link'

const CallBanner = () => {
    const [isMobile, setIsMobile] = useState(false)

    // Check if we're on mobile
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 999)
        }

        // Initial check
        checkMobile()

        // Add listener for window resize
        window.addEventListener('resize', checkMobile)

        // Cleanup
        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    // Button animation variants
    const buttonVariants = {
        hover: {
            scale: 1.05,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 10
            }
        },
        tap: { scale: 0.95 }
    }

    // Pulsing animation for the quote button
    const quoteButtonVariants = {
        initial: { scale: 1 },
        animate: {
            scale: [1, 1.05, 1],
            transition: {
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
            }
        }
    }

    // Don't render anything on desktop
    if (typeof window !== 'undefined' && !isMobile) return null

    return (
        <motion.div
            className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 shadow-lg z-50"
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            style={{ position: 'fixed', bottom: 0 }}
        >
            <div className="flex justify-between items-center px-4 py-2">
                {/* Get Quote Button */}
                <Link
                    href={quoteButton.href}
                    className="p-8 flex-1 flex flex-col items-center justify-center py-2 mx-1 bg-gfc-gold text-gfc-black rounded-md"
                >
                    <motion.div
                        variants={quoteButtonVariants}
                        initial="initial"
                        animate="animate"
                        whileHover="hover"
                        whileTap="tap"
                        className="flex flex-col items-center"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        <span className="text-xs font-bold">{quoteButton.name}</span>
                    </motion.div>
                </Link>

                {/* Call Cesar */}
                <a
                    href={contactInfo.phone1.href}
                    className="p-3 flex-1 flex flex-col items-center justify-center py-2 mx-1 border border-gray-200 rounded-md"
                >
                    <motion.div
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                        className="flex flex-col items-center"
                    >
                        <motion.svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-gfc-gold mb-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            animate={{ rotate: [0, 5, -5, 0] }}
                            transition={{ duration: 0.5, repeat: 3, repeatDelay: 4 }}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </motion.svg>
                        <span className="text-xs font-bold">{contactInfo.phone1.name}</span>
                        <span className="text-xs">{contactInfo.phone1.number}</span>
                    </motion.div>
                </a>

                {/* Call Jose */}
                <a
                    href={contactInfo.phone2.href}
                    className="p-3 flex-1 flex flex-col items-center justify-center py-2 mx-1 border border-gray-200 rounded-md"
                >
                    <motion.div
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                        className="flex flex-col items-center"
                    >
                        <motion.svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-gfc-gold mb-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            animate={{ rotate: [0, 5, -5, 0] }}
                            transition={{ duration: 0.5, repeat: 3, repeatDelay: 5 }}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </motion.svg>
                        <span className="text-xs font-bold">{contactInfo.phone2.name}</span>
                        <span className="text-xs">{contactInfo.phone2.number}</span>
                    </motion.div>
                </a>
            </div>
        </motion.div>
    )
}

export default CallBanner