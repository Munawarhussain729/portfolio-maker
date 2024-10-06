import React from 'react'

function Button({ variant = 'default', text, onClick = () => { }, className = '', type = 'button' }) {
    const buttonVariant = {
        fill: 'bg-black text-white hover:bg-gray-300 hover:text-black',
        default: 'border border-gray-300 text-gray-600 hover:bg-gray-300  hover:text-black'
    }
    return (
        <button
            type={type}
            onClick={onClick}
            className={`py-2 px-6 cursor-pointer transition-colors duration-300 ease-in-out rounded-full ${buttonVariant[variant]} ${className}`}
        >
            {text}
        </button >

    )
}

export default Button
