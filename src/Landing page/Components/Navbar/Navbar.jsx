import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className=''> 
    <div className="container bg-light">
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav ms-5">
        {/* <a className="nav-link active" aria-current="page" href="/src/Landing page/Components/Welcome/Welcome.jsx">Welcome</a>
        <a className="nav-link" href="/Showcase">Showcase</a>
        <a className="nav-link" href="/src/Landing page/Components/How it Works/HowWorks.jsx">How it Works?</a>
        <a className="nav-link" href="/src/Landing page/Components/Pricing/Pricing.jsx">Pricing</a> */}

<Link className="nav-link active" aria-current="page" to="/welcome">Welcome</Link>
              <Link className="nav-link" to="/showcase">Showcase</Link>
              <Link className="nav-link" to="/how-it-works">How it Works?</Link>
              <Link className="nav-link" to="/pricing">Pricing</Link>
    </div>
    </div>
  </div>
  <a href="#" className="btn  btn-secondary rounded-pill btn-sm disabled ps-3 pe-3" tabIndex="-1" role="button" aria-disabled="true">login</a>

</nav>
   </div>
    </div>
  )
}

export default Navbar;