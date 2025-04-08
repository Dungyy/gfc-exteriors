'use client'

// Animation variants for Hero components
export const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3,
        },
    },
}

export const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.5 },
    },
}

export const fadeInUpVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.6, ease: 'easeOut' },
    },
}

export const serviceCardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: (i) => ({
        scale: 1,
        opacity: 1,
        transition: {
            delay: i * 0.1 + 0.8,
            duration: 0.4,
        },
    }),
    hover: {
        y: -5,
        boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
        borderColor: '#D4AF37',
        scale: 1.03,
        transition: { duration: 0.2 },
    },
}

export const logoVariants = {
    hidden: { scale: 0.8, opacity: 0, rotate: -5 },
    visible: {
        scale: 1,
        opacity: 1,
        rotate: 0,
        transition: {
            type: 'spring',
            stiffness: 200,
            damping: 20,
            delay: 0.5,
        },
    },
}

// Background animation variants
export const floatingCircleVariants = {
    animate: (i) => ({
        y: [0, -15, 0],
        x: [0, i % 2 === 0 ? 10 : -10, 0],
        scale: [1, 1.05, 1],
        transition: {
            duration: 5 + i,
            repeat: Infinity,
            ease: 'easeInOut',
        },
    }),
}

export const floatingSquareVariants = {
    animate: (i) => ({
        rotate: [0, i % 2 === 0 ? 10 : -10, 0],
        scale: [1, 1.1, 1],
        transition: {
            duration: 8 + i,
            repeat: Infinity,
            ease: 'easeInOut',
        },
    }),
}

export const particleVariants = {
    animate: (i) => ({
        y: [0, -100 - i * 50],
        x: [0, i % 2 === 0 ? 50 : -50],
        opacity: [0, 0.5, 0],
        scale: [0, 1, 0],
        transition: {
            duration: 10 + i * 2,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 3,
        },
    }),
}
