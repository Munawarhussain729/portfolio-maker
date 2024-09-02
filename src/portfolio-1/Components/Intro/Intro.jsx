import React from 'react';
import './Intro.css';
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
import { themeContext } from '../../context';
import { useContext } from 'react';
import { motion } from 'framer-motion';
import { Grid } from '@mui/material';

const Intro = () => {

  const transition = { duration: 2, type: 'spring' }
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="intro">
      <Grid container rowSpacing={8} >
        <Grid item xs={12} md={6}>
          <div className="i-left">
            <div className="i-name">
              <span style={{ color: darkMode ? 'white' : '' }}>Hy, I Am </span>
              <span>Andrew Thomas</span>
              <span>Frontend Developer with high levelof experience in web designing and development, producing the Quality work.</span>
            </div>
            <button className="button i-button">Hire Me</button>
            <div className="i-icon">
              <img src={Github} alt="" />
              <img src={Linkedin} alt="" />
              <img src={Instagram} alt="" />
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className="i-right">
            <img src={Vector1} alt="" />
            <img src={Vector2} alt="" />
            <img src={Boy} alt="" />
            <motion.img
              initial={{ left: "-36%" }}
              whileInView={{ left: "-24%" }}
              transition={transition}
              src={GlassesImoji} alt="" />

            <motion.div
              initial={{ top: "-4%", left: "74%" }}
              whileInView={{ left: "68%" }}
              transition={transition}
              className='floating-div'

              style={{ top: '-4%', left: '68%' }}>
              <FloatingDiv image={crown} txt1='Web ' txt2='Developer' />
            </motion.div>
            <motion.div
              initial={{ top: "18rem", left: "9rem" }}
              whileInView={{ left: "0rem" }}
              transition={transition}
              className='floating-div'
              style={{ top: '18rem', left: '0rem' }}>
              <FloatingDiv image={thumbup} txt1='Best Design' txt2='Award' />
            </motion.div>
            {/* blur Div */}
            <div className='blur' style={{ background: "rgb(238, 210, 255)" }}></div>
            <div className='blur' style={{
              background: "#c1f5ff",
              top: '17rem',
              left: '-9rem',
              width: '22rem',
              height: '11rem',
            }}></div>
          </div>
        </Grid>
      </Grid>

    </div>
  )
}

export default Intro;