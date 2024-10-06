import React from 'react'
import SectionWrapper from '../../elements/SectionWrapper'
import Button from '../../elements/Button'
import Scene from '../../elements/Scene'

function Contact() {
    return (
        <SectionWrapper id={'contact'} title={'Contact Us'}>
            <div className='grid grid-cols-1 gap-5 md:grid-cols-2'>
                <div className='flex justify-center items-center w-full'>
                    <Scene />
                    {/* <img src='/contact-us.png' alt='contact' width={300} height={500} /> */}
                </div>
                <div className='bg-gray-100 p-5 rounded-lg'>
                    <div className='my-3'>
                        <h1 className='font-semibold mb-1 text-[20px] text-gray-600'>Your Email:</h1>
                        <input placeholder='sample@gmail.com' className='p-1 outline-gray-400 text-sm text-gray-500 rounded-md w-full' />
                    </div>
                    <div className='my-4'>
                        <h1 className='font-semibold mb-1 text-[20px] text-gray-600'>Subject:</h1>
                        <input placeholder='Demo Request' className='p-1 outline-gray-400 text-sm text-gray-500 rounded-md w-full' />
                    </div>
                    <div className='my-3'>
                        <h1 className='font-semibold mb-1 text-[20px] text-gray-600'>Message:</h1>
                        <textarea rows={3} placeholder='sample@gmail.com' className='p-1 outline-gray-400 text-sm text-gray-500 rounded-md w-full' />
                    </div>
                    <div className='mt-4'>
                        <Button
                            variant='default'
                            text={'Send Message'}
                        />
                    </div>
                </div>
            </div>
        </SectionWrapper>
    )
}

export default Contact
