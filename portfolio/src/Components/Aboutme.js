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
            Hi, I'm Amanuel Abera! <br/><br/> I'm a self-taught Full-stack Developer with a background in Mechanical Engineering and a fervent passion for creating dynamic, user-friendly web applications. My coding journey began at the age of 16, during my 11th grade, well before I embarked on my Mechanical Engineering degree. This early curiosity in technology evolved into a deep fascination with problem-solving, leading me to dive into web development with enthusiasm.
            </p>

            <p className='aboutMePara aboutMePara1'>
              Specializing in both front-end and back-end technologies, I continuously enhance my skills and stay updated with the latest industry trends. My current tech stack includes React, Node.js, Express.js, MongoDB, and MySQL.
            </p>

            <p className='aboutMePara'>
              I invite you to explore my projects in the Showcase section below, where you'll find detailed descriptions, live demos, GitHub repositories, and Docker images of my work. Each project highlights my commitment to excellence and innovation in web development.
            </p>
          </div>  

        </div>

      </div>
  </>
}

export default Aboutme