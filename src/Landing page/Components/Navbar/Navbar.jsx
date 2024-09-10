import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className=''> 
    <div className="container">
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav ms-5">
    <Link className="nav-link active" aria-current="page" to="/welcome">Welcome</Link>
              <Link className="nav-link" to="/showcase">Showcase</Link>
              <Link className="nav-link" to="/how-it-works">How it Works?</Link>
              <Link className="nav-link" to="/pricing">Pricing</Link>
              <a href="#" className="btn  btn-secondary rounded-pill btn-sm ps-3 pe-3 pt-2 " tabIndex="-1" role="button" aria-disabled="true">login</a>
    </div>
    </div>
  </div>
  </nav>
   </div>
    </div>
  )
}

export default Navbar;