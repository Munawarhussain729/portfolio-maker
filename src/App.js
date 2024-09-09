import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'bootstrap/dist/css/bootstrap-reboot.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './Landing page/Components/Navbar/Navbar';
import Welcome from './Landing page/Components/Welcome/Welcome';
import Showcase from './Landing page/Components/Showcase/Showcase';
import HowItWorks from './Landing page/Components/How it Works/HowWorks';
import Pricing from './Landing page/Components/Pricing/Pricing';

const App = () => {
  return (
    <div>
      <BrowserRouter>  {/* Wrap the entire app in BrowserRouter */}
      <Navbar/>
      <Routes>
        <Route path="/" element={<Welcome />} /> {/* Default Route */}
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/showcase" element={<Showcase />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
     </BrowserRouter>,
      
     </div>
  )
}

export default App