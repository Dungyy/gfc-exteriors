import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
})

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
})

export const metadata = {
    title: 'GFC Exteriors LLC',
    description:
        'GFC Exteriors LLC provides professional exterior services including siding, gutters, lawn care, pressure washing, and more in the Montevideo, MN area.',
    icons: {
        icon: '/GFC-svg.svg',
    },
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased md:pb-0`}
                suppressHydrationWarning
            >
                {children}
            </body>
        </html>
    )
}
