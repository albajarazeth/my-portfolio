import React from 'react'
import './Card.css'
const Card = () => {
  return (
    <div className="card">
      <div className='top'>
     <div className="left-column">
        <h2>Languages </h2> 
        <p>JavaScript</p>
        <p>Java</p>
        <p>TypeScript</p>
        <p>PostgreSQL</p>
      </div>
      <div className="right-column">
        <h2>Frameworks</h2>
        <p>React</p>
        <p>React Native</p>
        <p>Spring Boot</p>
        <p>AWS</p>
      </div>
      </div>
      <div className="bottom">
        <div className='skills'>
        <h2>Skills</h2>
        <p>Team Player</p>
        <p>Creative</p>
        <p>Self-motivated </p>
        <p>Optimistic</p>
        </div>
      </div>

    </div>
  )
}

export default Card