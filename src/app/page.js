// app/pages.js

import Head from 'next/head'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import About from '../components/About'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>GFC Exteriors LLC & Services | Professional Exterior Solutions</title>
        <meta
          name="description"
          content="GFC Exteriors LLC provides professional exterior services including siding, gutters, lawn care, pressure washing, and more in the St. Cloud, MN area."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {/* You can include Google Fonts here */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main>
          <Hero />
          <Services />
          <About />
          {/* <Testimonials /> */}
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}
