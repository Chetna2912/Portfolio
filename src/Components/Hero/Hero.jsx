import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.jpg'
// import profile_img from '../../assets/profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll';


const Hero = () =>{
  return(
    <div id='home' className='hero'>
        <img src={profile_img}/>
        <h1><span>I'm Chetna Nagar,</span> student at IIT Madras.</h1>
        <p>I am student at IIT Madras pursuing BS in Data Science and Applications.</p>
        <div className="hero-action">
            {/* <div className="hero-connect">Connect with me</div> */}
            <div className="hero-connect">
              <AnchorLink className='anchor-link' offset={50} href='#contact'>
                <span onClick={() => setMenu("contact")}>Connect with me</span>
              </AnchorLink>
            </div>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <div className="hero-resume">My Resume</div>
            </a>
            {/* <div className="hero-resume">My Resume</div> */}
        </div>
    </div>
  )
}

export default Hero