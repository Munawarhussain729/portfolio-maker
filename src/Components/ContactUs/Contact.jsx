import React, { useRef } from 'react'
import SectionWrapper from '../../elements/SectionWrapper'
import Button from '../../elements/Button'
import Scene from '../../elements/Scene'
import emailjs from '@emailjs/browser';

function Contact() {
    const form = useRef();
  

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID,
                form.current, {
                publicKey: process.env.REACT_APP_PUBLIC_KEY,
            })
            .then(
                () => {

                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error);
                },
            );
    };

    return (
        <SectionWrapper id={'contact'} title={'Contact Us'}>
            <div className='grid grid-cols-1 gap-5 md:grid-cols-2'>
                <div className='flex justify-center items-center w-full'>
                    <Scene />
                    {/* <img src='/contact-us.png' alt='contact' width={300} height={500} /> */}
                </div>
                <div className='bg-gray-100 p-5 rounded-lg'>
                    <form ref={form} onSubmit={sendEmail}>
                        <div className='my-3'>
                            <h1 className='font-semibold mb-1 text-[20px] text-gray-600'>Your Email:</h1>
                            <input
                                required={true}
                                type='email'
                                name='from_email'
                                placeholder='sample@gmail.com'
                                className='p-1 outline-gray-400 text-sm text-gray-500 rounded-md w-full'
                            />
                        </div>
                        <div className='my-4'>
                            <h1 className='font-semibold mb-1 text-[20px] text-gray-600'>Subject:</h1>
                            <input
                                type='text'
                                required={true}
                                name='subject'
                                placeholder='Demo Request'
                                className='p-1 outline-gray-400 text-sm text-gray-500 rounded-md w-full'
                            />
                        </div>
                        <div className='my-3'>
                            <h1 className='font-semibold mb-1 text-[20px] text-gray-600'>Message:</h1>
                            <textarea
                                rows={3}
                                name='message'
                                required={true}
                                placeholder='sample@gmail.com'
                                className='p-1 outline-gray-400 text-sm text-gray-500 rounded-md w-full'
                            />
                        </div>
                        <div className='mt-4'>
                            <Button
                                type='submit'
                                variant='default'
                                text={'Send Message'}
                            />
                        </div>
                    </form>
                </div>
            </div>
        </SectionWrapper>
    )
}

export default Contact
