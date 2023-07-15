import React from 'react'
import './Home.css'
import BlackIcon from '../assets/code-icon-1.png'

import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <section className='main-contianer'>
      <Navbar />
      <div className='home-container'>
      <div className='home-content'>
      <p className='header'>Hey! I'm Alba <br/> A software developer.</p>
      {/* <img className='code-icon' src={BlackIcon} alt='Code Icon' /> */}
      </div>
  
      </div>
    </section>
  )
}

export default Home