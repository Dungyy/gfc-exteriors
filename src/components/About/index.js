// components/About.js
import Logo from '../../utils/Logo'
import { features } from './constants'

const About = () => {

  return (
    <section id="about" className="py-16 md:py-16 lg:py-20 bg-gfc-light-gray">
      <br />
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Image/Visual Side */}

          <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:pr-12">
            <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none">

              {/* Main visual */}
              <div className="bg-white p-3 sm:p-4 rounded-lg shadow-lg">
                <div className="aspect-w-4 aspect-h-3 bg-gray-100 rounded overflow-hidden">

                  <div className="absolute inset-0 flex items-center justify-center bg-gfc-black">
                    <div className="text-center mb-8">
                      <Logo className="w-40 sm:w-60 h-auto mb-4" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-16 sm:w-24 h-16 sm:h-24 bg-gfc-gold rounded-lg opacity-20"></div>
              <div className="absolute -bottom-4 -right-4 w-20 sm:w-32 h-20 sm:h-32 bg-gfc-gold rounded-lg opacity-20"></div>

              {/* Years of experience badge */}
              <div className="absolute -right-3 sm:-right-5 -bottom-3 sm:-bottom-5 bg-gfc-gold text-gfc-black w-16 h-16 sm:w-24 sm:h-24 rounded-full flex items-center justify-center shadow-lg">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold">5+</div>
                  <div className="text-[10px] sm:text-xs">Years Exp.</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-1/2">
            <br />
            <div className="text-sm font-semibold text-gfc-gold tracking-widest uppercase mb-2">
              About Our Company
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-gfc-black">
              Your Trusted Partner for Exterior Services
            </h2>

            <p className="text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base">
              GFC Exteriors LLC is a locally owned and operated company providing top-quality
              exterior services to homeowners across the region. With a focus on customer
              satisfaction and exceptional workmanship, we've built a reputation for reliability and
              excellence.
            </p>

            <p className="text-gray-700 mb-6 sm:mb-8 text-sm sm:text-base">
              Our team brings together years of experience in all aspects of exterior home services.
              From siding and gutters to lawn care and pressure washing, we have the expertise to
              handle all your exterior maintenance needs with precision and care.
            </p>

            {/* Feature boxes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start p-3 sm:p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-xl sm:text-2xl mr-3 sm:mr-4 text-gfc-gold">{feature.icon}</div>
                  <div>
                    <h3 className="font-bold text-sm sm:text-base text-gfc-dark-gray">{feature.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
