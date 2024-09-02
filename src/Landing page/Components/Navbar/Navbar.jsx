import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <div className='container'> 
    <nav className='navbar navbar-light bg-light navbar-expand-sm fixed-top'>
    <a
    href='#'
    className='navbar-brand mb-0 h1'>
        <img
        className='d-inline-block align-top'
     src="../../Logo/PM.png" alt="" 
        width="30" height="30"/>
        Navbar
    </a>               
    <div className="collapse navbar-collapse">
        <ul className="navbar-nav">
            <li className="navbar-itme active">
                <a href="#" className='nav-link active'>
                Welcome
                </a>
            </li>
            <li className="navbar-itme active">
                <a href="#" className='nav-link'>
                Showcase
                </a>
            </li>
            <li className="navbar-itme active">
                <a href="#" className='nav-link'>
                How it works?
                </a>
            </li>
            <li className="navbar-itme active">
                <a href="#" className='nav-link'>
                Pricing
                </a>
            </li>   
        </ul>
    </div>
    </nav>
    </div>
  )
}

export default Navbar