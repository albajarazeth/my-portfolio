import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  return (
    <nav className='nav-container'>
        <ul className='nav-ul'>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/technologies'>Technologies</Link>
          <Link to='/projects'>Experience</Link>
        </ul>
      </nav>
  )
}

export default Navbar