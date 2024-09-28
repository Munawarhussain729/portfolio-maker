import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Welcome from './Components/Welcome/Welcome';
import Showcase from './Components/Showcase/Showcase';
import HowItWorks from './Components/How it Works/HowWorks';
import Pricing from './Components/Pricing/Pricing';
import Home from './pages/Home';

const App = () => {
  return (
    <div className='bg-gray-100 p-0'>
      <BrowserRouter>  {/* Wrap the entire app in BrowserRouter */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} /> {/* Default Route */}
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/showcase" element={<Showcase />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
      </BrowserRouter>,
      <div className='text-black bg-gray-300 text-center py-1'>
        Copyrights@all rights reserved
      </div>
    </div>
  )
}

export default App