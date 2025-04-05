// components/Testimonials.js
'use client'

import { useState, useEffect } from 'react'

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const testimonials = [
    {
      text: "GFC Exteriors did an incredible job with our siding replacement. Their attention to detail and quality of work exceeded our expectations. We couldn't be happier with the results!",
      author: 'Michael R.',
      location: 'Montevideo, MN',
      rating: 5,
    },
    {
      text: 'Jose and Cesar were professional, efficient, and did excellent work cleaning our gutters. They went above and beyond to make sure everything was done right. Highly recommended!',
      author: 'Jennifer L.',
      location: 'Sartell, MN',
      rating: 5,
    },
    {
      text: "I've used GFC for both pressure washing and lawn care services. Their team is always punctual, thorough, and leaves my property looking amazing. Great value for the quality of service.",
      author: 'David T.',
      location: 'Waite Park, MN',
      rating: 5,
    },
  ]

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length)
    }, 8000)

    return () => clearInterval(interval)
  }, [testimonials.length])

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
          <div className="h-1 w-20 bg-gfc-gold mx-auto"></div>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about
            our services.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative min-h-[250px] bg-gfc-light-gray rounded-xl p-10 shadow-lg overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-20 h-20 bg-gfc-gold opacity-10 rounded-br-3xl"></div>
            <div className="absolute bottom-0 right-0 w-20 h-20 bg-gfc-gold opacity-10 rounded-tl-3xl"></div>
            <div className="absolute -top-6 -right-6 text-8xl text-gfc-gold opacity-10">"</div>

            {/* Quote icon */}
            <div className="absolute top-8 left-8 text-4xl text-gfc-gold">"</div>

            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`transition-opacity duration-700 absolute inset-0 flex items-center justify-center p-10 ${index === activeIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
              >
                <div className="text-center">
                  <p className="text-lg text-gray-700 mb-6">{testimonial.text}</p>

                  <div className="flex items-center justify-center mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-5 w-5 ${i < testimonial.rating ? 'text-gfc-gold' : 'text-gray-300'}`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  <div className="font-semibold text-gfc-dark">
                    {testimonial.author}{' '}
                    <span className="font-normal text-gray-600">• {testimonial.location}</span>
                  </div>
                </div>
              </div>
            ))}

            {/* Navigation dots */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2 w-2 rounded-full transition-all duration-300 ${index === activeIndex ? 'bg-gfc-gold w-6' : 'bg-gray-300'
                    }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
