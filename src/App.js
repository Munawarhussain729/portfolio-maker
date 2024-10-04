import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Home from './pages/Home';
import Welcome from './Components/Welcome/Welcome';
import AboutMe from './Components/About/AboutUs';
import Footer from './Components/Footer/Footer';
import Templates from './Components/Templates/Templates';
import Contact from './Components/ContactUs/Contact';

const App = () => {
  return (
    <div className='bg-gray-100 p-0'>
      <Navbar />
      <Welcome />
      <Templates />
      <AboutMe />
      <Contact />
      <Footer />

      {/* <BrowserRouter>  
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/showcase" element={<Showcase />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
      </BrowserRouter> */}
      <div className='text-black bg-gray-300 text-center py-1'>
        Copyrights@ 2024 SpotFolio. All rights reserved
      </div>
    </div>
  )
}

export default App