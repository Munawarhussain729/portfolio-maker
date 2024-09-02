import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <div className='container'> 
    <nav className='navbar navbar-light bg-light navbar-expand-lg fixed-top'>
        <span className='navbar-brand mb-0 h1'>
            Navbar
        </span>

        {/* <ul className='navbar fs-3'>
            <Link to='/'>
            <li>Welcome</li>
            </Link> 
            
            <Link to='showcase'>
            <li>Showcase</li>
            </Link> 
            
            <Link to='howitWorks'>
            <li>How it Works?</li>
            </Link> 
            
            <Link to='pricing'>
            <li>Pricing</li>
            </Link> 
            
        </ul> */}
    </nav>
    </div>
  )
}

export default Navbar