'use client'

import Link from 'next/link'
import Image from 'next/image'

const Logo = () => {
    return (
        <Link href="/" className="flex items-center space-x-2">
            <div className="relative w-20 h-20">
                <Image
                    src="/bitmap.png"
                    alt="GFC Exteriors Logo"
                    fill
                    className="object-contain mix-blend-darken"
                    priority
                />
            </div>
            <div className="hidden md:flex flex-col">
                <span className="text-lg font-semibold text-gfc-black">Exteriors LLC</span>
            </div>
        </Link>
    )
}

export default Logo