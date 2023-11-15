import React, { useState } from 'react'
import NavBar from '../navBar/NavBar'
import Footer from '../footer/Footer'
import '../about/about.css'

const Contact = () => {

  return (
    <div className='principal-layout'>
      <NavBar/>
      <div className='container'>
          <div>You are currently on the Contact page</div>
        </div>
      <Footer/>
    </div>
    
  )
}

export default Contact