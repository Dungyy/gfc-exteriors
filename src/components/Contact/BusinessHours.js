'use client'

import { businessHours } from './constants'

const BusinessHours = () => {
    return (
        <div className="mt-8 pt-8 border-t border-gray-700">
            <h4 className="text-white font-semibold mb-4">Business Hours</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                {businessHours.map((item, index) => (
                    <div key={item.day || index} className="flex justify-between sm:block">
                        <div className="text-gray-300">{item.day}</div>
                        <div className="text-right text-gray-300">{item.hours}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BusinessHours