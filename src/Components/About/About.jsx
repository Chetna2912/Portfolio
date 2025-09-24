import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/profile_img.jpg'
// import profile_img from '../../assets/profile_img.svg'

const About = () =>{
  return(
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern}/>
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>Motivated and detail-oriented undergraduate at IIT Madras pursuing a BS in Data Science and Applications,
seeking a Python Developer Internship to apply strong programming, problem-solving, and analytical skills.</p>
                    <p>Eager to contribute to impactful software projects using Python, leverage hands-on experience from
academic and personal projects, and further develop expertise in software development and data-driven
solutions within a dynamic team environment.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>Python</p><hr style={{width:"80%"}}/></div>
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"85%"}}/></div>
                    <div className="about-skill"><p>React JS</p><hr style={{width:"60%"}}/></div>
                    <div className="about-skill"><p>JavaScript</p><hr style={{width:"65%"}}/></div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>2nd</h1>
                <p>YEAR STUDENT</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>3+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr /> 
            <div className="about-achievement">
                <h1>2028</h1>
                <p>GRADUATION COMPLETION</p>
            </div> 
        </div>
    </div>
  )
}

export default About