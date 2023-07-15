import React, { useRef, useState } from 'react'
import Navbar from '../components/Navbar'
import './About.css'
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai'
import {BiLogoGmail} from 'react-icons/bi'
import SmallBanner from '../components/SmallBanner'
const About = () => {

  function handleEmailClick(){


    const emailAddress = "jarazethalba@gmail.com";
    const subject = "Hello";
    const body = "I amn reaching out to you because...";
    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  }

  const [notification, setNotification] = useState(false);


  const emailRef = useRef(null);

  const handleCopy = async () => {

    if(emailRef.current){
      try{
        await navigator.clipboard.writeText(emailRef.current.value);
        setNotification(true)
        setTimeout(()=>{
          setNotification(false);
        }, 3000)
        console.log('copied')
      } catch (error){
        console.log('Error')
      }
    }
  }

  
  return (
    <section className='main-contianer'>
      <Navbar />
   
      <div className='about-container'>
      {
        notification && 
          <SmallBanner />

        
      }
      <div className='about-card'>
       <div className='card-content'>
       <div className='socials'>
        <ul className='social-links'>
         
          <li className='border-li slide_down'> <a href="https://github.com/albajarazeth"><AiFillGithub size={40} /></a></li>
          <li className='border-li slide_left'><a href="https://www.linkedin.com/in/alba-garza-612ab822b/"><AiFillLinkedin size={40} /></a></li>
          <div className='email-link'>
          <li className='border-li slide_diagonal' onClick={handleCopy}><BiLogoGmail size={40} /></li>
          <input
          ref={emailRef}
          type="text"
          value="jarazethalba@gmail.com"
          readOnly
          style={{ display: 'none' }}
          />
          </div>
          
          
        </ul>
       </div>
       <div className='about-text'>
       <div className='line'></div>
       <p>
       I'm Alba, a soon-to-be computer engineering graduate passionate about software development.
        I'm excited about the endless possibilities and creating innovative applications to improve lives.
         I stay updated with the latest programming languages, frameworks, and tools.
        </p>
        <div className='line'></div>
       </div>
      
       </div>

      
      </div>


      </div>


    </section>
  )
}

export default About