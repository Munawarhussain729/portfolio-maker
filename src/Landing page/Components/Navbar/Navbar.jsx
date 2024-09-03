import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <div className=''> 
    <div className="container">
    <nav className='navbar navbar-light bg-light navbar-expand-md fixed-top'>
    <a
    href='#'
    className='navbar-brand mb-0 h1'>
        <img
        className='d-inline-block align-top'
     src="../../Logo/PM.png" alt="" 
        width="30" height="30"/>
        Navbar
    </a>  
                 {/*toggle button */}
    <button
    type='button'
    data-bs-toggle='collapse'
    data-bs-target='#navbarNav'
    className='navbar-toggler'
    aria-controls='navbarNav'
    aria-expanded='false'
    aria-label='Toggle Navigation'>
        <span className='navbar-toggler-icon'></span>
    </button>

    <div className="collapse navbar-collapse">
        <ul className="navbar-nav"
        id='navbarNav'>
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
    </nav></div>
    </div>
  )
}

export default Navbar