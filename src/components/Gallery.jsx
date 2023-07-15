import React from 'react'
import './Gallery.css'

const Project = ({image}) => {
    return(
        <div className='image-conatiner'>
            <div>{image}</div>
        </div>
    )
}
const Gallery = () => {

 
    const images = ['one', 'two', 'three', 'four', 'five']
  return (
    <div>
        <div className='gallery-main-content'>
            {images.map((el,id)=> <Project image={el} key={id} />)}
        </div>
    </div>
  )
}

export default Gallery