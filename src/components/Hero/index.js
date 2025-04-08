'use client'

import { motion } from 'framer-motion'
import { containerVariants } from './AnimationVariants'
import BackgroundEffects from './BackgroundEffects'
import HeroContent from './HeroContent'
import HeroLogo from './HeroLogo'
import ServiceCards from './ServiceCards'

const Hero = () => {
    return (
        <section className="relative py-24 bg-white text-gfc-black overflow-hidden">
            {/* Background animations and effects */}
            <BackgroundEffects />

            {/* Hero content */}
            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    className="flex flex-col lg:flex-row items-center"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Left side content with heading and buttons */}
                    <HeroContent />

                    {/* Right side with animated logo */}
                    <HeroLogo />
                </motion.div>

                {/* Service cards section */}
                <ServiceCards />
            </div>
        </section>
    )
}

export default Hero
