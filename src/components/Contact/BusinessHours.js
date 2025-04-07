'use client'

import React from 'react'
import { businessHours } from '../../global'
import { FaClock } from 'react-icons/fa'

const BusinessHours = () => {

    return (
        <div className="mt-8 pt-8 border-t border-gray-700 max-w-md">
            <h4 className="text-white font-semibold mb-4 flex items-center">
                <FaClock className="text-gfc-gold mr-2" />
                Business Hours
            </h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                {businessHours.map((item, index) => (
                    <React.Fragment key={item.day || index}>
                        <div className="text-gray-300">{item.day}</div>
                        <div className="text-gray-300">{item.hours}</div>
                    </React.Fragment>
                ))}
            </div>
        </div>
    )
}

export default BusinessHours