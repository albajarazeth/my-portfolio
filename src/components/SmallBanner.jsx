import React from 'react'
import './SmallBanner.css'
import {AiFillCopy} from 'react-icons/ai'

const Notificaton = () => {
  return (
    <div className='notification-contianer'>
      <div className='notification-content'>
      <AiFillCopy />
      Email Copied
      </div>
    </div>
  )
}

export default Notificaton