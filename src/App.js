import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Home from './pages/Home';
import Welcome from './Components/Welcome/Welcome';
import AboutMe from './Components/About/AboutUs';
import Footer from './Components/Footer/Footer';
import Templates from './Components/Templates/Templates';
import Contact from './Components/ContactUs/Contact';
import { useLayoutEffect, useRef } from "react"
import gsap from "gsap"


const App = () => {
  const comp = useRef(null)
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline()
      t1.from("#intro-slider", {
        xPercent: "-100",
        duration: 1.3,
        delay: 0.3,
      })
        .from(["#title-1", "#title-2", "#title-3"], {
          opacity: 0,
          y: "+=30",
          stagger: 0.5,
        })
        .to(["#title-1", "#title-2", "#title-3"], {
          opacity: 0,
          y: "-=30",
          delay: 0.3,
          stagger: 0.5,
        })
        .to("#intro-slider", {
          xPercent: "-100",
          duration: 0.5,
        })
        .from("#welcome", {
          opacity: 0,
          duration: 0.5,
        })
    }, comp)

    return () => ctx.revert()
  }, [])

  return (
    <div className="relative" ref={comp}>
      <div
        id="intro-slider"
        className="h-screen p-10 bg-gray-50 absolute top-0 left-0 font-spaceGrotesk z-10 w-full flex flex-col gap-10 tracking-tight"
      >
        <h1 className="text-8xl mt-5" id="title-1">
        Looking for Stunning Portfolios?
        </h1>
        <h1 className="text-8xl" id="title-2">
        You've Found the Perfect Place
        </h1>
        <h1 className="text-8xl" id="title-3">
       <span className='text-9xl'>SpotFolio</span> : Where Creativity Meets Excellence
        </h1>
      </div>

      <div id="welcome" className='bg-gray-100 p-0'>
        <Navbar />
        <Welcome />
        <Templates />
        <AboutMe />
        <Contact />
        <Footer />
        <div className='text-black bg-white text-center py-1'>
          Copyrights@ 2024 SpotFolio. All rights reserved
        </div>
      </div>
    </div>

  )
}

export default App