import React from 'react';
import './Services.css';
import HeartImojo from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png'
import Card from '../Card/Card';
import Resume from './Resume.pdf';
import { themeContext } from '../../context';
import { useContext } from 'react';
import { motion } from 'framer-motion';

const Services = () => {

    const transition={duration: 1, type:'spring'}

    const theme = useContext (themeContext);
    const darkMode = theme.state.darkMode; 

  return (
    <div className="Services" id="Services">
        {/* left side */}
        <div className='Awesome'>
            <span style={{color: darkMode? 'white':''}}>My Awesome</span>
            <span>Services</span>
            <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, cumque. <br /> Soluta veritatis culpa qui ut laboriosam! Aperiam perspiciatis, expedita enim debitis,
                <br />
                 voluptates neque in nesciunt saepe, ipsum molestias veritatis quod.
            </span>

<a href={Resume} download> 
               <button className="button s-button">Download CV</button>
</a>            <div className='blur s-blur1 ' style={{background:"#abf1ff94"}}></div>

        </div>
        {/* right side */}
        <div className="Cards">
            <motion.div
            initial={{left:"25rem"}}
            whileInView={{left:"14rem"}}
            transition={transition}
            
            style={{left:'14rem'}}>
                <Card
            emoji={HeartImojo}
            heading={'Design'}
            detail={"Figma, Sketch, Photoshop, Adobe, Adobe xd"}
/>
</motion.div>
{/* 2nd card */}
<motion.div 
 initial={{top:"12rem"}}
 whileInView={{left:"0rem"}}
 transition={transition}
style={{top:'12rem', left:'-4rem'}}>
    <Card 
    emoji={Glasses}
    heading={'Developer'}
    detail={'Html, CSS, javaScript, React, Figma, wordPress'} />
</motion.div>
{/* 3rd card */}
<motion.div
 initial={{left:"25rem"}}
 whileInView={{left:"14rem"}}
 transition={transition}
 
style={{top:'19rem', left:'12rem'}}>
    <Card 
    emoji={Humble}
    heading={'UI/UX'}
    detail= {"Lorem ipsum dolor dolorsit amet consectetur adipisicing elit. Ratione, cumque "} />
</motion.div>

<div className='blur s-blur2' style={{background: "var(--purple)"}}></div>
        </div>
    </div>
    )
}

export default Services;