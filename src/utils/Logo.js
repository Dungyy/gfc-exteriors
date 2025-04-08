// components/Logo.jsx
import { motion } from 'framer-motion'
import Image from 'next/image'

const Logo = ({ className = '' }) => {
    return (
        <div className={`relative ${className}`}>
            <motion.div
                className="flex flex-col items-center"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
            >
                {/* SVG logo with filter for white coloring */}
                <div className="relative">
                    <Image
                        src="/GFC-svg.svg" // Assuming your SVG is stored in the public folder
                        alt="GFC Exteriors LLC Logo"
                        width={540}
                        height={240}
                        style={{
                            maxWidth: '100%',
                            height: 'auto',
                        }}
                        priority
                    />
                </div>

                {/* Optional: Bottom accent lines */}
                <div className="flex items-center justify-center w-full mt-3 space-x-3">
                    <motion.div
                        className="h-0.5 w-16 bg-gfc-gold"
                        whileHover={{ width: '70px' }}
                        transition={{ duration: 0.3 }}
                    ></motion.div>
                    <motion.div
                        className="w-2 h-2 rotate-45 bg-gfc-gold"
                        whileHover={{ rotate: 225 }}
                        transition={{ duration: 0.6 }}
                    ></motion.div>
                    <motion.div
                        className="h-0.5 w-16 bg-gfc-gold"
                        whileHover={{ width: '70px' }}
                        transition={{ duration: 0.3 }}
                    ></motion.div>
                </div>
            </motion.div>
        </div>
    )
}

export default Logo
