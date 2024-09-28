import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Landing page/Components/Navbar/Navbar';
import Welcome from './Landing page/Components/Welcome/Welcome';
import Showcase from './Landing page/Components/Showcase/Showcase';
import HowItWorks from './Landing page/Components/How it Works/HowWorks';
import Pricing from './Landing page/Components/Pricing/Pricing';
import Home from './pages/Home';

const App = () => {
  return (
    <div>
      <BrowserRouter>  {/* Wrap the entire app in BrowserRouter */}
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Default Route */}
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