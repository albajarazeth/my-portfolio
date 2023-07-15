import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import AppRoutes from './AppRoutes'
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
    <AppRoutes />
    </Router>
  )
}

export default App
