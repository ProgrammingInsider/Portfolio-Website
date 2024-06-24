import React from 'react'

// Images
import AboutMePoster from "../Assets/img/AboutMeImage.png"

const Aboutme = () => {
  return <>
      <div className='sectionContainer'>

        <div className='aboutMeContainer'>

          {/* About Me Section Banner */}
          <div className='aboutMePosterContainer'>
            <img src={AboutMePoster} alt='Poster' className='aboutMePoster'/>
          </div>
          
          {/* About Me In Detail */}
          <div className='aboutMeDesc'>
            <h1 className='sectionName'>About Me</h1>
            <h1 className='sectionHeadline'>Full-Stack Web Developer based in Addis Ababa, Ethiopia 📍</h1>
            <p className='aboutMePara aboutMePara1'>
            Hi there, I'm Amanuel Abera, a self-taught Full-stack Developer with a passion for creating dynamic and user-friendly web applications. I thrive on working across both front-end and back-end technologies, continually expanding my skill set and knowledge. 
            </p>

            <p className='aboutMePara'>
              My current stack includes technologies like React, Nodejs, Expressjs, Mongodb, and MySQL.
            </p>
          </div>  

        </div>

      </div>
  </>
}

export default Aboutme