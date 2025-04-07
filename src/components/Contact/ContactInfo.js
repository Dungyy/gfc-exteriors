'use client'

import { contactInfo } from '../../global'
import BusinessHours from './BusinessHours'

const ContactInfo = () => {
    return (
        <div className="bg-gfc-dark-gray rounded-lg p-9 h-full">
            <h3 className="text-xl text-white font-bold mb-6 flex items-center">
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
                {/* Phone Information */}
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
                        <p className="text-gray-300 mt-1"
                            onClick={() => window.location.href = `tel:${contactInfo.phone1.number}`}>
                            {contactInfo.phone1.name}: <span className='hover:text-gfc-gold cursor-pointer transition-colors'>{contactInfo.phone1.number}</span>
                        </p>
                        <p className="text-gray-300 mt-1"
                            onClick={() => window.location.href = `tel:${contactInfo.phone2.number}`}>
                            {contactInfo.phone2.name}: <span className='hover:text-gfc-gold cursor-pointer transition-colors'>{contactInfo.phone2.number}</span>
                        </p>
                    </div>
                </div>

                {/* Email Information */}
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
                        <p className="text-gray-300 mt-1 hover:text-gfc-gold cursor-pointer transition-colors"
                            onClick={() => window.location.href = `mailto:${contactInfo.email.address}`}>
                            {contactInfo.email.address}
                        </p>
                    </div>
                </div>

                {/* Location Information */}
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
                        <p className="text-gray-300 mt-1">{contactInfo.location}</p>
                    </div>
                </div>
            </div>

            {/* Business Hours Component */}
            <BusinessHours />
        </div>
    )
}

export default ContactInfo