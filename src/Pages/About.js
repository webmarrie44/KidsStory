import React from 'react'
import cover from '../img/storyimg.png'
import '../Styles/Style.css'

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
      <div className="sticky-note">
          <h2>Story Time</h2>
      </div>
      
        <h3>The Mice and the Elephants</h3>
      </div>
      <div className="about-right">
      <div className="about-img">
      <img src={cover} alt="cover" />
      </div>
      
      </div>
    </div>
  )
}

export default About
