import React, { useState } from 'react'
import { Tilt } from 'react-tilt'
import CustomModal from '../../elements/CustomModel'
import Button from '../../elements/Button'
import Loader from '../../elements/Loader'

const templateData = [
    {
        title: '3D Portfolio',
        link: 'https://spotfolio-3d-template.vercel.app/',
        price: '20$',
        image: '3d-portfolio.png'
    }, {
        title: 'Main page Portfolio',
        link: 'https://spotfolio-mainpage-portfolio.vercel.app/',
        price: '20$',
        image: 'main-page-portfolio.png'
    }, {
        title: 'Simple Full Stack Dev Portfolio',
        link: 'https://spotfolio-simple-template.vercel.app/',
        price: '20$',
        image: 'simple-portfolio.png'
    }, {
        title: 'Spotfolio Animated Portfolio',
        link: 'https://spotfolio-animated-template.vercel.app/',
        price: '20$',
        image: 'animated-portfolio.png'
    }
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
    const [open, setOpen] = useState(false)
    const [selectedTemplate, setSelectedTemplate] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const handleClose = () => {
        setOpen(false)
        setIsLoading(false)
        setSelectedTemplate(null)
    }

    const handleIframeLoad = () => {
        setIsLoading(false)
    }

    return (
        <section id='templates' className='px-1 bg-white md:px-10 py-16'>
            <CustomModal
                open={open}
                title={selectedTemplate?.title}
                setOpen={setOpen}
            >
                <div className='px-2'>
                    {isLoading && (
                        <div className="flex flex-col justify-center items-center h-[80vh] w-[80vw]">
                            <Loader />
                            Loading...
                        </div>
                    )}
                    <iframe
                        src={selectedTemplate?.link}
                        className={`h-[80vh] w-[80vw] ${isLoading ? 'hidden' : ''}`}  // Hide iframe when loading
                        onLoad={handleIframeLoad}  // Trigger when iframe is loaded
                    />
                    <div className='flex w-full pb-2 gap-x-3 items-center justify-between'>
                        <Button text={'Close'} onClick={handleClose} className='px-9' />
                    </div>
                </div>
            </CustomModal>
            <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
                Templates
            </h2>
            <div className=' w-full flex justify-center flex-wrap'>
                {
                    templateData.map((item) => {
                        return (
                            <div
                                onClick={() => {
                                    setOpen(true)
                                    setSelectedTemplate(item)
                                    setIsLoading(true)
                                }}
                                className='m-2 md:m-3 w-[300px] h-[400px] lg:w-[400px] lg:h-[500px] cursor-pointer'
                            >
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
