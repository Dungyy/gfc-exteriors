'use client'

import Link from 'next/link'
import { mainNavItems, quoteButton } from '../../global'

const DesktopMenu = () => {
    return (
        <div className="hidden md:flex items-center mr-4">
            <nav className="flex items-center space-x-1 mr-2">
                {mainNavItems.map((item, index) => (
                    <Link
                        key={index}
                        href={item.href}
                        className="flex items-center px-4 py-2 rounded-lg text-gfc-dark-gray hover:text-gfc-gold hover:bg-gray-50 transition-all"
                    >
                        <span className="mr-2">{item.icon}</span>
                        <span className="font-medium">{item.name}</span>
                    </Link>
                ))}
            </nav>

            <Link
                href={quoteButton.href}
                className="flex items-center bg-gfc-gold hover:bg-gfc-light-gold text-white px-5 py-2 rounded-lg transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 ml-2"
            >
                <span className="mr-2">{quoteButton.icon}</span>
                <span className="font-semibold">{quoteButton.name}</span>
            </Link>
        </div>
    )
}

export default DesktopMenu
