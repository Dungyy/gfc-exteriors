'use client';

import { useState, useRef, useEffect } from 'react';
import Logo from './Logo';
import DesktopMenu from './DesktopMenu';
import HamburgerButton from './HamburgerButton';
import MobileMenu from './MobileMenu';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navRef = useRef(null);

    // Function to close menu
    const closeMenu = () => setIsMenuOpen(false);

    // Close menu on scroll or clicking outside
    useEffect(() => {
        const handleScroll = () => closeMenu();
        const handleClickOutside = event => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                closeMenu();
            }
        };

        if (isMenuOpen) {
            window.addEventListener('scroll', handleScroll);
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMenuOpen]);

    return (
        <nav className="bg-gfc-light-gray shadow-md sticky top-0 z-50" ref={navRef}>
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    {/* Logo and Brand */}
                    <Logo />

                    {/* Desktop Navigation */}
                    <DesktopMenu />

                    {/* Animated Hamburger Menu Button */}
                    <div className="md:hidden py-2 px-4">
                        <HamburgerButton
                            isMenuOpen={isMenuOpen}
                            toggle={() => setIsMenuOpen(!isMenuOpen)}
                        />
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <MobileMenu isOpen={isMenuOpen} closeMenu={closeMenu} />
        </nav>
    );
};

export default Navbar;
