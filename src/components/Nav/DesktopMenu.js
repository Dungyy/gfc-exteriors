'use client'

import Link from 'next/link'

const DesktopMenu = () => {
    return (
        <div className="hidden md:flex items-center space-x-8">
            <Link href="#services" className="text-gfc-dark-gray hover:text-gfc-gold transition-colors">
                Services
            </Link>
            <Link href="#about" className="text-gfc-dark-gray hover:text-gfc-gold transition-colors">
                About
            </Link>
            <Link href="#contact" className="text-gfc-dark-gray hover:text-gfc-gold transition-colors">
                Contact
            </Link>
            <Link href="#contact" className="bg-gfc-gold hover:bg-gfc-light-gold text-white px-5 py-2 rounded-md transition-colors">
                Get Quote
            </Link>
        </div>
    )
}

export default DesktopMenu