// Hamburger button animation variants
export const topLineVariants = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: 45, y: 9 },
};

export const middleLineVariants = {
    closed: { opacity: 1 },
    open: { opacity: 0 },
};

export const bottomLineVariants = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: -45, y: -9 },
};

// Mobile menu animation variants
export const menuVariants = {
    closed: {
        opacity: 0,
        height: 0,
        transition: {
            duration: 0.3,
            when: 'afterChildren',
            staggerChildren: 0.05,
            staggerDirection: -1,
        },
    },
    open: {
        opacity: 1,
        height: 'auto',
        transition: {
            duration: 0.3,
            when: 'beforeChildren',
            staggerChildren: 0.05,
            staggerDirection: 1,
        },
    },
};

export const menuItemVariants = {
    closed: {
        opacity: 0,
        y: -10,
        transition: { duration: 0.1 },
    },
    open: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.1 },
    },
};
