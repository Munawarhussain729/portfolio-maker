import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'

function Footer() {
    return (
        <footer className='bg-gray-100   h-full w-full'>
            <div className='max-w-screen-lg flex justify-between p-5 mx-auto'>
                <div>
                    <div className="group my-3">
                        <p className="cursor-pointer text-gray-500 hover:text-gray-700 transition-all font-bold delay-75">
                            Company:
                        </p>
                        <hr className="w-10 h-1 bg-gray-300 transition-all duration-300 group-hover:w-20 group-hover:bg-gray-500" />
                    </div>
                    <p>Home</p>
                    <p>About</p>
                    <p>Pricing</p>
                    <p>Contacts</p>
                </div>
                <div>
                    <div>
                        <div className="group my-3">
                            <p className="cursor-pointer text-gray-500 hover:text-gray-700 transition-all font-bold delay-75">
                                Drop Us Message:
                            </p>
                            <hr className="w-10 h-1 bg-gray-300 transition-all duration-300 group-hover:w-20 group-hover:bg-gray-500" />
                        </div>
                        <p className='flex items-center'><span><Icon icon={'mage:email'} /> </span>: munawarhussa.7@gmail.com</p>
                    </div>
                    <div>
                        <div className="group my-3">
                            <p className="cursor-pointer text-gray-500 hover:text-gray-700 transition-all font-bold delay-75">
                                Call Us:
                            </p>
                            <hr className="w-10 h-1 bg-gray-300 transition-all duration-300 group-hover:w-20 group-hover:bg-gray-500" />
                        </div>
                        <p className='flex items-center'><span><Icon icon={'ph:phone-light'} className='font-bold text-[25px]' /> </span>: 0309-1659708</p>
                    </div>
                </div>
            </div>
          
        </footer>
    )
}

export default Footer
