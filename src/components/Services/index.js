// components/Services.js
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { services, categories } from './constants'

const Services = () => {
  const [activeTab, setActiveTab] = useState('all')

  const filteredServices =
    activeTab === 'all' ? services : services.filter((service) => service.category === activeTab)

  return (
    <section id="services" className="py-5 bg-grey">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Professional Services</h2>
          <div className="h-1 w-20 bg-gfc-gold mx-auto"></div>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            We offer a comprehensive range of exterior services to meet all your home maintenance
            needs.
          </p>
        </div>
        
        {/* Service Categories */}
        <div className="flex flex-wrap justify-center mb-10 gap-2">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-full transition-all flex items-center ${
                activeTab === category.id
                  ? 'bg-gfc-gold text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </motion.button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group relative overflow-hidden bg-gfc-light-gray rounded-lg shadow-lg hover:shadow-xl transition-all border border-gray-100 hover:border-gfc-gold"
            >
              <div className="p-6">
                <div className="text-4xl mb-4 text-gfc-gold">
                  <motion.div 
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    {service.icon}
                  </motion.div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gfc-black group-hover:text-gfc-gold transition-colors">
                  {service.name}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="text-sm text-gray-500 mb-6">{service.details}</div>
                <Link
                  href="#contact"
                  className="inline-flex items-center text-gfc-gold hover:text-gfc-black font-medium transition-colors"
                >
                  Get a Quote
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 h-16 w-16 overflow-hidden">
                <div className="absolute top-0 right-0 transform translate-y-[-50%] translate-x-[50%] rotate-45 bg-gfc-gold h-8 w-24"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="#contact"
              className="btn bg-gfc-black hover:bg-gfc-gold text-white py-3 px-8 rounded-md inline-flex items-center transition-all hover:shadow-lg"
            >
              <span>Schedule Service</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Services