'use client'

const SuccessMessage = () => {
    return (
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
                <span>
                    Message sent successfully! We'll get back to you soon.
                </span>
            </div>
        </div>
    )
}

export default SuccessMessage
