'use client';

import { motion } from 'framer-motion';
import { fadeInUpVariants, serviceCardVariants } from './AnimationVariants';
import { FaHome, FaLeaf } from 'react-icons/fa';
import { MdOutlineRoofing } from 'react-icons/md';
import { FaWater } from 'react-icons/fa';

const ServiceCards = () => {
    const services = [
        { name: 'Siding', icon: <FaHome size={24} /> },
        { name: 'Gutters', icon: <MdOutlineRoofing size={24} /> },
        { name: 'Lawn Care', icon: <FaLeaf size={24} /> },
        { name: 'Pressure Washing', icon: <FaWater size={24} /> },
    ];

    return (
        <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16"
            variants={fadeInUpVariants}
            initial="hidden"
            animate="visible"
        >
            {services.map((service, index) => (
                <motion.div
                    key={index}
                    className="p-4 rounded-lg border border-gray-200 hover:border-gfc-gold hover:shadow-md transition-all cursor-pointer relative overflow-hidden"
                    custom={index}
                    variants={serviceCardVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                >
                    {/* Card background gradient that appears on hover */}
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-transparent opacity-0"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                    />

                    <motion.div
                        className="text-gfc-gold mb-2 text-xl relative z-10"
                        whileHover={{ scale: 1.0, rotate: 5 }}
                        transition={{
                            type: 'spring',
                            stiffness: 400,
                            damping: 10,
                        }}
                    >
                        {service.icon}
                    </motion.div>
                    <div className="font-semibold text-gfc-black relative z-10">{service.name}</div>
                </motion.div>
            ))}
        </motion.div>
    );
};

export default ServiceCards;
