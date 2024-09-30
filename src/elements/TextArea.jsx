import React from 'react'

function TextArea({ label, className }) {
    return (
        <div className={`w-full ${className}`}>
            {label && <label className='mb-2 font-medium text-sm '>{label}</label>}
            <textarea placeholder='Jams' className='p-2.5 outline-gray-100 border text-sm rounded-lg text-[16px] focus:outline-gray-300 focus:ring-gray-300 w-full' />
        </div>
    )
}

export default TextArea
