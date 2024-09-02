import React from 'react';
import './Works.css';
import Upwork from '../../img/Upwork.png';
import Shopify from '../../img/Shopify.png';
import fiver from '../../img/fiverr.png';
import Amazon from '../../img/amazon.png';
import Facebook from '../../img/Facebook.png';
import { themeContext } from '../../context';
import { useContext } from 'react';
import { motion } from 'framer-motion';

const Works = () => {

    const theme = useContext (themeContext);
    const darkMode = theme.state.darkMode; 

  return (
    <div className='Works'> 
      <div className='Awesome'>
    <span style={{color: darkMode? 'white':''}}>Work for all these</span>
    <span>Brands and Clients</span>
    <span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, cumque. <br /> Soluta veritatis culpa qui ut laboriosam! Aperiam perspiciatis, expedita enim debitis,
        <br />
         voluptates neque in nesciunt saepe, ipsum molestias veritatis quod.
         <br />Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis explicabo impedit sint ab, <br />aspernatur eos saepe eveniet, quo nesciunt ea hic! Quasi praesentium providen </span>
         
          <div className='blur s-blur1 ' style={{background:"#abf1ff94"}}></div>
         <button className="button w-button">Hire Me</button>
</div>

{/* right side */}
<div className='w-right'>
    <motion.div
    initial={{rotate: 45}}
    whileInView={{rotate: 0}}
    transition={{duration: 3.5, type:'spring'}}

     className='w-mainCircle'>
    <div className='w-secCircle'>
            <img src={Upwork} alt="" />
        </div>
        <div className='w-secCircle'>
            <img src={fiver} alt="" />
        </div>
        <div className='w-secCircle'>
            <img src={Amazon} alt="" />
        </div>
        <div className='w-secCircle'>
            <img src={Shopify} alt="" />
        </div>
        <div className='w-secCircle'>
            <img src={Facebook} alt="" />
        </div>
    </motion.div>

{/* background circles */}
<div className='w-backCircle blueCircle'></div>
<div className='w-backCircle yellowCircle'></div>
</div>
</div>
  );
};

export default Works;