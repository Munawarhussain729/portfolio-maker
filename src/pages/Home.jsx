import React from 'react'
import Welcome from '../Components/Welcome/Welcome'
import AboutMe from '../Components/About/AboutUs'
import Footer from '../Components/Footer/Footer'

function Home() {
    return (
        <div className='p-0 m-0'>
            <Welcome />
            <AboutMe />
            <Footer/>
            
        </div>
    )
}

export default Home
