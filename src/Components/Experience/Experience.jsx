import React from 'react';
import "./Experience.css";
import { themeContext } from '../../context';
import { useContext } from 'react';


const Experience = () => {

    
  const theme = useContext (themeContext);
  const darkMode = theme.state.darkMode; 

  return (
    <div className='experience mt-[400px]' id='Experience'> 
        <div className='achievement'>
            <div className='circle' style={{color:darkMode? 'black':''}}>8+ </div>
            <span>Years</span>
            <span>Experience</span>
        </div>
        <div className='achievement'>
            <div className='circle' style={{color:darkMode? 'black':''}}>20+ </div>
            <span>Completed</span>
            <span>Projects</span>
        </div>
        <div className='achievement'>
            <div className='circle' style={{color:darkMode? 'black':''}}>5+ </div>
            <span>Companies</span>
            <span>Work</span>
        </div>
    </div>
  )
}

export default Experience;