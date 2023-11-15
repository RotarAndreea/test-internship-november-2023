import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import image from '../../logo.svg'


const NavBar = () => {

  return (
        <header className='header'>
            <div className='logo-container'>
                <img src={image}/>
            </div>
            <div className='menu-section'>
                <div className='links'>
                    <Link className='link' to='/'>Home</Link>
                    <Link className='link' to='/about-us'>About</Link>
                    <Link className='link' to='/contact'>Contact</Link>
                </div>
            </div>
        </header>
        
  )
}

export default NavBar

