import React from 'react'
import "./Hero.css"
import profile_img from "../../assets/profile_img.jpg"

const Hero = () => {
  return (
    <div className='hero' id='home'>
      <img src={profile_img} alt="Profile Image" className='profileImg'/>
      <h1><span>I'm Shivansh Tripathi,</span> "B.Tech CSE Student | Full-Stack Developer | ML Enthusiast"</h1>
      <p>A CS undergrad crafting modern, intuitive web experiences while actively mastering intelligent Machine Learning algorithms.</p>
      <div className='hero-action'>
        <div className="hero-connect">
            <a target="_blank" href="https://www.linkedin.com/in/shivansh-tiwari-8470ba204/">Connect with me</a>
        </div>
        <div className="hero-resume">
            <a className='resume_btn' href="/SHIVANSH_RESUME.pdf" download="SHIVANSH_RESUME">My Resume</a>
        </div>
      </div>
    </div>
  )
}

export default Hero
