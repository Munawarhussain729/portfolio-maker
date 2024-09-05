import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <div className=''> 
    <div className="container bg-light">
    <nav class="navbar navbar-expand-sm navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav ms-5">
        <a class="nav-link active" aria-current="page" href="#">Welcome</a>
        <a class="nav-link" href="#">Showcase</a>
        <a class="nav-link" href="#">How it Works?</a>
        <a class="nav-link" href="#">Pricing</a>
    </div>
    </div>
  </div>
  <a href="#" class="btn  btn-secondary rounded-pill btn-sm disabled ps-3 pe-3" tabindex="-1" role="button"aria-disabled="true">login</a>

</nav>
   </div>
    </div>
  )
}

export default Navbar