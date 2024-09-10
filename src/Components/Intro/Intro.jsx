import React from 'react';
import Github from "../../img/github.png";
import Linkedin from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import Boy from "../../img/boy.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import GlassesImoji from "../../img/glassesimoji.png";
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import { motion } from 'framer-motion';
import { Grid } from '@mui/material';

const Intro = () => {

  const transition = { duration: 2, type: 'spring' };

  return (
    <div className="flex flex-col md:flex-row justify-between items-center h-auto mt-25 md:my-36 mx-4 md:mx-8 lg:mx-16">
      <Grid container columnSpacing={3} rowSpacing={10}>
        <Grid item xs={12} md={6}>
          <div className="flex-1 flex flex-col gap-8">
            <div className="flex flex-col min-w-[300px]">
              <span className="text-black font-bold text-3xl">Hy, I Am</span>
              <span className="text-orange-500 font-bold text-3xl">Andrew Thomas</span>
              <span className="text-gray-600 text-sm mt-2">Frontend Developer with high level of experience in web designing and development, producing quality work.</span>
            </div>
            <button className="bg-orange-500 text-white py-2 px-6 rounded-md w-28 ">Hire Me</button>
            <div className="flex mt-4">
              <img src={Github} alt="GitHub" className="w-8 h-8 mx-2 cursor-pointer transform hover:scale-110 transition duration-300" />
              <img src={Linkedin} alt="LinkedIn" className="w-8 h-8 mx-2 cursor-pointer transform hover:scale-110 transition duration-300" />
              <img src={Instagram} alt="Instagram" className="w-8 h-8 mx-2 cursor-pointer transform hover:scale-110 transition duration-300" />
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className="flex-1 flex justify-center relative">
            <img src={Vector1} alt="Vector 1" className="absolute scale-75 -left-20 -top-10 md:scale-40 lg:scale-80 xl:scale-100" />
            <img src={Vector2} alt="Vector 2" className="absolute scale-75 -top-10 md:scale-40 lg:scale-80 xl:scale-100" />
            <img src={Boy} alt="Boy" className="relative z-10 scale-100 md:scale-110 lg:scale-140 xl:scale-160" />
            <motion.img
              initial={{ left: "-36%" }}
              whileInView={{ left: "-28%" }}
              transition={transition}
              src={GlassesImoji} alt="Glasses Emoji"
              className="absolute -top-16 -left-24 scale-50 md:scale-75 lg:scale-100"
            />
            <motion.div
              initial={{ top: "-20%", left: "74%" }}
              whileInView={{ left: "50%" }}
              transition={transition}
              className="absolute md:left-[60%] lg:left-[68%] -top-16 md:top-4 z-20 w-[250px]">
              <FloatingDiv image={crown} txt1='Web ' txt2='Developer' />
            </motion.div>
            <motion.div
              initial={{ top: "18rem", left: "9rem" }}
              whileInView={{ left: "0rem" }}
              transition={transition}
              className="absolute md:top-[14rem] lg:top-[18rem] md:left-[8rem] lg:left-[0rem] top-64 left-4 z-20">
              <FloatingDiv image={thumbup} txt1='Best Design' txt2='Award' />
            </motion.div>
            <div className='absolute w-[22rem] h-[14rem] bg-purple-200 rounded-full blur-3xl -top-16 left-[56%]'></div>
            <div classNam e='absolute w-[22rem] h-[14rem] bg-blue-200 rounded-full blur-3xl top-72 -left-36'></div>
          </div>
        </Grid>
      </Grid>
    </div >
  );
}

export default Intro;