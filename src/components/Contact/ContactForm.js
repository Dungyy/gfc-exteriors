'use client'

import { services } from '../../global'
import SuccessMessage from './SuccessMessage'

const ContactForm = ({ formData, formStatus, handleChange, handleSubmit }) => {
    return (
        <div className="bg-gfc-dark-gray text-gray-800 rounded-lg p-8 shadow-xl relative overflow-hidden">
            {/* Gold accent corner */}
            <div className="absolute top-0 right-0 h-20 w-20 bg-gfc-gold rounded-bl-full opacity-20"></div>

            <h3 className="text-xl font-bold mb-6 text-white">Request a Free Quote</h3>

            {formStatus === 'success' ? (
                <SuccessMessage />
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
                                <option key={index} value={service.name}>
                                    {service.name}
                                </option>
                            ))}
                            <option value="Other">Other</option>
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
    )
}

export default ContactForm