import React from 'react'
import SectionWrapper from '../elements/SectionWrapper'
import { Tilt } from 'react-tilt'

const templateData = [
    {
        title: '3D Portfolio',
        link: 'https://munawar-hussain-portfolio.vercel.app/',
        price: '20$',
        image: '3d-portfolio.png'
    }, {
        title: '3D Portfolio',
        link: 'https://munawar-hussain-portfolio.vercel.app/',
        price: '20$',
        image: '3d-portfolio.png'
    }, {
        title: '3D Portfolio',
        link: 'https://munawar-hussain-portfolio.vercel.app/',
        price: '20$',
        image: '3d-portfolio.png'
    }, {
        title: '3D Portfolio',
        link: 'https://munawar-hussain-portfolio.vercel.app/',
        price: '20$',
        image: '3d-portfolio.png'
    }, {
        title: '3D Portfolio',
        link: 'https://munawar-hussain-portfolio.vercel.app/',
        price: '20$',
        image: '3d-portfolio.png'
    }, {
        title: '3D Portfolio',
        link: 'https://munawar-hussain-portfolio.vercel.app/',
        price: '20$',
        image: '3d-portfolio.png'
    }, {
        title: '3D Portfolio',
        link: 'https://munawar-hussain-portfolio.vercel.app/',
        price: '20$',
        image: '3d-portfolio.png'
    },
]

const defaultOptions = {
    reverse: false,  // reverse the tilt direction
    max: 35,     // max tilt rotation (degrees)
    perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.1,    // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000,   // Speed of the enter/exit transition
    transition: true,   // Set a transition on enter/exit.
    axis: null,   // What axis should be disabled. Can be X or Y.
    reset: true,    // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}


function Templates() {
    return (
        <section id='templates' className='px-1 bg-white md:px-10 py-16'>
            <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
                Templates
            </h2>
            <div className=' w-full flex justify-center flex-wrap'>
                {
                    templateData.map((item) => {
                        return (
                            <div className='m-2 md:m-3 w-[300px] h-[400px] lg:w-[400px] lg:h-[500px] cursor-pointer'>
                                <Tilt options={defaultOptions} style={{ height: '100%', width: '100%' }}>
                                    <div className='shadow-md'>
                                        <img src={`/portfolios/${item.image}`} alt={item.title} className='rounded-md' />
                                    </div>
                                </Tilt>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Templates
