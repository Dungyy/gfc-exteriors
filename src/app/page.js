// pages/index.js
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import About from '../components/About'
import Testimonials from '../components/Testimonials'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import AnimatedSection from '../components/AnimatedSection'
import CallBanner from '../components/CallBanner'

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
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="min-h-screen flex flex-col pb-16 md:pb-0">
        <Navbar />
        <main>
          {/* Hero without animation wrapper since it should be visible immediately */}
          <Hero />

          {/* Services section with fade up animation */}
          <AnimatedSection id="services" delay={0.1}>
            <Services />
          </AnimatedSection>

          {/* About section with fade left animation */}
          <AnimatedSection id="about" direction="left" delay={0.1}>
            <About />
          </AnimatedSection>

          {/* Testimonials section with scale animation
          // <AnimatedSection id="testimonials" direction="scale" delay={0.1}>
          //   <Testimonials />
          // </AnimatedSection> */}

          {/* <Projects /> */}

          {/* Contact section with fade right animation */}
          <AnimatedSection id="contact" direction="scale" delay={0.1}>
            <Contact />
          </AnimatedSection>
        </main>
        <Footer />
        <CallBanner />
      </div>
    </>
  )
}
