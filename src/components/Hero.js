import Link from 'next/link'
import Image from 'next/image'

const Hero = () => {
    return (
        <section className="relative py-24 bg-white text-gfc-black overflow-hidden">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-5">
                {Array.from({ length: 10 }).map((_, i) => (
                    <div
                        key={i}
                        className="absolute h-px bg-gfc-black transform -rotate-45"
                        style={{
                            top: `${i * 100}px`,
                            left: 0,
                            right: 0,
                        }}
                    ></div>
                ))}
            </div>

            {/* Hero content */}
            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center">
                    <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                            Transform Your <span className="text-gfc-gold">Home</span> With Expert Exterior
                            Services
                        </h1>
                        <p className="text-xl text-gray-700 mb-8 max-w-xl mx-auto lg:mx-0">
                            Professional home exterior solutions from a team you can trust. Quality work, fair
                            pricing, and exceptional results.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                            {/* Modern Gradient Button */}
                            <Link
                                href="#services"
                                className="bg-gradient-to-r from-yellow-500 to-gfc-gold hover:from-yellow-600 hover:to-yellow-500 text-white font-bold py-3 px-8 rounded-md shadow-md transition-all hover:shadow-xl transform hover:-translate-y-1"
                            >
                                Explore Services
                            </Link>

                            {/* Outlined Button with Hover Effect */}
                            <Link
                                href="#contact"
                                className="border-2 border-gfc-gold text-gfc-gold hover:bg-gfc-gold hover:text-white py-3 px-8 rounded-md transition-all shadow-md hover:shadow-lg"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>

                    {/* LOGO */}
                    <div className="lg:w-1/2 flex justify-center">
                        <div className="p-10 rounded-xl flex justify-center items-center">
                            <div className="relative w-80 h-80">
                                <Image
                                    src="/gfc2.jpeg"
                                    alt="GFC Exteriors Logo"
                                    fill
                                    className="object-contain mix-blend-darken"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Service highlights */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
                    {['Siding', 'Gutters', 'Lawn Care', 'Pressure Washing'].map((service, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 p-4 rounded-lg border border-gray-100 hover:border-gfc-gold hover:shadow-md transition-all"
                        >
                            <div className="text-gfc-gold mb-2 text-xl">{getServiceIcon(service)}</div>
                            <div className="font-semibold text-gfc-black">{service}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

// Helper function to get icons
function getServiceIcon(service) {
    switch (service) {
        case 'Siding':
            return '🏠'
        case 'Gutters':
            return '🌧️'
        case 'Lawn Care':
            return '🌿'
        case 'Pressure Washing':
            return '💦'
        default:
            return '✓'
    }
}

export default Hero
