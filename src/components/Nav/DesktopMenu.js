'use client'

import Link from 'next/link'
import { FaTools, FaInfoCircle, FaAddressCard, FaFileInvoiceDollar } from "react-icons/fa";

const DesktopMenu = () => {
    return (
        <div className="hidden md:flex items-center mr-4">
            <nav className="flex items-center space-x-1 mr-2">
                <Link 
                    href="#services" 
                    className="flex items-center px-4 py-2 rounded-lg text-gfc-dark-gray hover:text-gfc-gold hover:bg-gray-50 transition-all"
                >
                    <FaTools className="mr-2 text-gfc-gold" size={16} />
                    <span className="font-medium">Services</span>
                </Link>
                
                <Link 
                    href="#about" 
                    className="flex items-center px-4 py-2 rounded-lg text-gfc-dark-gray hover:text-gfc-gold hover:bg-gray-50 transition-all"
                >
                    <FaInfoCircle className="mr-2 text-gfc-gold" size={16} />
                    <span className="font-medium">About</span>
                </Link>
                
                <Link 
                    href="#contact" 
                    className="flex items-center px-4 py-2 rounded-lg text-gfc-dark-gray hover:text-gfc-gold hover:bg-gray-50 transition-all"
                >
                    <FaAddressCard className="mr-2 text-gfc-gold" size={16} />
                    <span className="font-medium">Contact</span>
                </Link>
            </nav>
            
            <Link 
                href="#contact" 
                className="flex items-center bg-gfc-gold hover:bg-gfc-light-gold text-white px-5 py-2 rounded-lg transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 ml-2"
            >
                <FaFileInvoiceDollar className="mr-2" size={16} />
                <span className="font-semibold">Get Free Quote</span>
            </Link>
        </div>
    )
}

export default DesktopMenu