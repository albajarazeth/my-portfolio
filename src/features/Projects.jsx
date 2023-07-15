import React from 'react'
import Navbar from '../components/Navbar'
import './Projects.css'
import Gallery from '../components/Gallery'

const Projects = () => {
  return (
    <section className='main-contianer'>
      <div>    
        <Navbar />
      </div>
    <div className='projects-container'>
      <section className='websites'>
        <div className='title-container'> <span className='title'>Projects</span></div>
       <div className='gallery-container'>
         <Gallery />
       </div>
      </section>

      <section>
      <div className='title-container'> <span className='title'>Repositories</span></div>
      <div className='gallery-container'>
         <Gallery />
       </div>
      </section>
     
   
    </div>

    <div>

    </div>



  </section>
  )
}

export default Projects