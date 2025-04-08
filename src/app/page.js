// pages/index.js
import Navbar from '../components/Nav';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
// not showing yet
// import Testimonials from '../components/Testimonials'
// import Projects from '../components/Projects'
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import AnimatedSection from '../utils/AnimatedSection';
import CallBanner from '../utils/CallBanner';

export default function Home() {
    return (
        <>
            <div className="min-h-screen flex flex-col pb-16 md:pb-0">
                <Navbar />
                <main>
                    {/* Hero without animation wrapper since it should be visible immediately */}
                    <Hero />

                    {/* Services section with fade up animation */}
                    <AnimatedSection id="services">
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
    );
}
