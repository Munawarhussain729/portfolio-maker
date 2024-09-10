import React from 'react';
import HeartImojo from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import Card from '../Card/Card';
import Resume from './Resume.pdf';
import { motion } from 'framer-motion';

const Services = () => {
    const transition = { duration: 1, type: 'spring' };

    return (
        <div className="flex flex-col lg:flex-row items-center justify-between h-auto lg:h-[90vh] mt-20 mx-4 md:mx-8 lg:mx-16" id="Services">
            {/* Left side */}
            <div className="flex flex-col gap-4 relative w-full h-full justify-center">
                <span className="text-black font-bold text-2xl md:text-3xl lg:text-4xl z-10">My Awesome</span>
                <span className="text-orange-500 font-bold text-2xl md:text-3xl lg:text-4xl z-10">Services</span>
                <span className="text-gray-600 text-sm md:text-base lg:text-lg mt-2 z-10">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, cumque. Soluta veritatis culpa qui ut laboriosam! Aperiam perspiciatis, expedita enim debitis,
                    voluptates neque in nesciunt saepe, ipsum molestias veritatis quod.
                </span>
                <a href={Resume} download>
                    <button className="bg-orange-500 text-white py-2 px-4 md:px-6 rounded-md w-36 mt-4">Download CV</button>
                </a>
                <div className='absolute w-[22rem] h-[14rem] bg-blue-200 rounded-full blur-3xl -top-16 left-[5rem]'></div>
            </div>

            {/* Right side */}
            <div className="flex flex-col gap-8 relative w-full h-full justify-center">
                <motion.div
                    initial={{ left: "25rem" }}
                    whileInView={{ left: "14rem" }}
                    transition={transition}
                    className="relative md:absolute md:left-[14rem]">
                    <Card
                        emoji={HeartImojo}
                        heading={'Design'}
                        detail={"Figma, Sketch, Photoshop, Adobe, Adobe xd"}
                    />
                </motion.div>

                <motion.div
                    initial={{ top: "12rem" }}
                    whileInView={{ left: "3rem" }}
                    transition={transition}
                    className="relative md:absolute md:left-[-4rem] md:top-[12rem]">
                    <Card
                        emoji={Glasses}
                        heading={'Developer'}
                        detail={'Html, CSS, JavaScript, React, Figma, WordPress'}
                    />
                </motion.div>

                <motion.div
                    initial={{ left: "28rem", top:'4rem' }}
                    whileInView={{ left: "26rem" }}
                    transition={transition}
                    className="relative md:absolute md:left-[12rem] md:top-[19rem]">
                    <Card
                        emoji={Humble}
                        heading={'UI/UX'}
                        detail={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, cumque"}
                    />
                </motion.div>

                <div className='absolute w-[22rem] h-[14rem] bg-purple-200 rounded-full blur-3xl top-72 left-[10rem] md:left-[14rem] md:top-[8rem]'></div>
            </div>
        </div>
    );
}

export default Services;
