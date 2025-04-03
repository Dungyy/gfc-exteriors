import { Geist, Geist_Mono } from 'next/font/google'
// import CallBanner from '@/components/CallBanner'
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
    'GFC Exteriors LLC provides professional exterior services including siding, gutters, lawn care, pressure washing, and more in the St. Cloud, MN area.',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased md:pb-0`}>{children}</body>
      {/* <CallBanner /> */}
    </html>
  )
}
