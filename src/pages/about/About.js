import React from 'react'
import './about.css'
import NavBar from '../navBar/NavBar'
import Footer from '../footer/Footer'

const About = () => {
  return (
    <div className='principal-layout'>
      <NavBar/>
      <div className='container'>
          <div>You are currently on the About Page</div>
        </div>
      <Footer/>
    </div>

  )
}

export default About