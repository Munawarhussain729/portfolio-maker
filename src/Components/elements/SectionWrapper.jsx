import React from 'react'

function SectionWrapper({ id, className = 'bg-white', title, children }) {
  return (
    <section id={id} className={`px-6 py-16 md:px-20  ${className}`} >
      <div className='max-w-screen-lg mx-auto'>
        <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          {title}
        </h2>
        <div>
          {children}
        </div>
      </div>
    </section>
  )
}

export default SectionWrapper
