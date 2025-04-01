// components/Contact.js
'use client'

import { useState } from 'react'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
    })

    const [formStatus, setFormStatus] = useState(null)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // Demo form submission - in a real application, you would connect to an API
        setFormStatus('success')
        // Reset form after some time
        setTimeout(() => {
            setFormStatus(null)
            setFormData({
                name: '',
                email: '',
                phone: '',
                service: '',
                message: '',
            })
        }, 3000)
    }

    const services = [
        'Siding/Gutters/Sofit/Facia',
        'Junk Removal',
        'Gutter Cleaning',
        'Lawn Care',
        'Pressure Washing',
        'Dump Trailer Rental',
        'Other',
    ]

    return (
        <section
            id="contact"
            className="py-20 text-gfc-dark-gray relative overflow-hidden"
            style={{ backgroundColor: '#e6c767' }}
        >
            {/* Decorative elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gfc-gold rounded-bl-full transform translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gfc-gold rounded-tr-full transform -translate-x-1/2 translate-y-1/2 blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h2>
                    <div className="h-1 w-24 bg-gfc-gold mx-auto"></div>
                    <p className="text-gfc-dark-gray mt-6 max-w-4xl mx-auto text-xlg md:text-xl">
                        Ready to transform your property? Contact us today for a free consultation and quote.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <div className="lg:col-span-1">
                        <div className="bg-gfc-dark-gray rounded-lg p-6 h-full">
                            <h3 className="text-xl font-bold mb-6 flex items-center">
                                <span className="text-gfc-gold mr-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                </span>
                                Contact Information
                            </h3>

                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 text-gfc-gold mt-1">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                            />
                                        </svg>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-white font-semibold">Phone</h4>
                                        <p className="text-gray-300 mt-1">Cesar: 320-226-2128</p>
                                        <p className="text-gray-300">Jose: 320-435-1703</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="flex-shrink-0 text-gfc-gold mt-1">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                            />
                                        </svg>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-white font-semibold">Email</h4>
                                        <p className="text-gray-300 mt-1">gfcexteriors@gmail.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="flex-shrink-0 text-gfc-gold mt-1">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                            />
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                            />
                                        </svg>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-white font-semibold">Service Area</h4>
                                        <p className="text-gray-300 mt-1">St. Cloud, MN and surrounding areas</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 pt-8 border-t border-gray-700">
                                <h4 className="text-white font-semibold mb-4">Business Hours</h4>
                                <div className="grid grid-cols-2 gap-2 text-sm">
                                    <div className="text-gray-300">Monday - Friday</div>
                                    <div className="text-right text-gray-300">8:00 AM - 6:00 PM</div>
                                    <div className="text-gray-300">Saturday</div>
                                    <div className="text-right text-gray-300">9:00 AM - 4:00 PM</div>
                                    <div className="text-gray-300">Sunday</div>
                                    <div className="text-right text-gray-300">Closed</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <div className="bg-gfc-dark-gray text-gray-800 rounded-lg p-8 shadow-xl relative overflow-hidden">
                            {/* Gold accent corner */}
                            <div className="absolute top-0 right-0 h-20 w-20 bg-gfc-gold rounded-bl-full opacity-20"></div>

                            <h3 className="text-xl font-bold mb-6 text-gray-100 ">Request a Free Quote</h3>

                            {formStatus === 'success' ? (
                                <div className="bg-green-50 border border-green-200 text-green-700 rounded-lg p-4 mb-6">
                                    <div className="flex items-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 mr-2"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <span>Message sent successfully! We'll get back to you soon.</span>
                                    </div>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="name" className="block text-gray-200 font-medium mb-2">
                                                Full Name*
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gfc-gold focus:border-transparent"
                                                placeholder="Your name"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="phone" className="block text-gray-200 font-medium mb-2">
                                                Phone Number*
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gfc-gold focus:border-transparent"
                                                placeholder="(xxx) xxx-xxxx"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-gray-200 font-medium mb-2">
                                            Email Address*
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gfc-gold focus:border-transparent"
                                            placeholder="your@email.com"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="service" className="block text-gray-200 font-medium mb-2">
                                            Service Interested In*
                                        </label>
                                        <select
                                            id="service"
                                            name="service"
                                            value={formData.service}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gfc-gold focus:border-transparent"
                                        >
                                            <option value="" disabled>
                                                Select a service
                                            </option>
                                            {services.map((service, index) => (
                                                <option key={index} value={service}>
                                                    {service}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-gray-200 font-medium mb-2">
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows="4"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gfc-gold focus:border-transparent"
                                            placeholder="Tell us about your project..."
                                        ></textarea>
                                    </div>

                                    <div>
                                        <button
                                            type="submit"
                                            className="w-full border-2 border-gfc-gold bg-transparent hover:bg-gfc-gold text-gfc-gold hover:text-gfc-black font-bold py-3 px-6 rounded-lg transition-all duration-300"
                                        >
                                            Send Message
                                        </button>
                                    </div>

                                    <div className="text-xs text-gfc-gold text-center">
                                        By submitting this form, you agree to be contacted about our services.
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
