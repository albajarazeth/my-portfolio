import React from 'react'
import Navbar from '../components/Navbar'
import './Technologies.css'
import Card from '../components/Card'

const Technologies = () => {
  return (
    <section className='main-contianer'>
      <Navbar />
      <div className='tech-container'>
        <Card />
      </div>
    </section>
  )
}

export default Technologies