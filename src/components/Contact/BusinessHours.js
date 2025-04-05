'use client'

import { businessHours } from './constants'

const BusinessHours = () => {
    return (
        <div className="mt-8 pt-8 border-t border-gray-700">
            <h4 className="text-white font-semibold mb-4">Business Hours</h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
                {businessHours.map((item, index) => (
                    <>
                        <div key={`day-${index}`} className="text-gray-300">{item.day}</div>
                        <div key={`hours-${index}`} className="text-right text-gray-300">{item.hours}</div>
                    </>
                ))}
            </div>
        </div>
    )
}

export default BusinessHours