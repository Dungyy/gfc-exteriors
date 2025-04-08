'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { logoVariants } from './AnimationVariants';

const HeroLogo = () => {
    return (
        <motion.div className="lg:w-1/2 flex justify-center" variants={logoVariants}>
            <motion.div
                className="p-10 rounded-xl flex justify-center items-center relative"
                whileHover={{ scale: 1.02, rotate: 2 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
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
    );
};

export default HeroLogo;
