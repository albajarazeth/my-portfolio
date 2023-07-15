import React from 'react'
import {Route, Routes } from 'react-router-dom';
import Home from './features/Home';
import About from './features/About';
import Technologies from './features/Technologies';
import Projects from './features/Projects';


function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/technologies' element={<Technologies/>}/>
      <Route path='/projects' element={<Projects/>}/>
    </Routes>
  )
}

export default AppRoutes