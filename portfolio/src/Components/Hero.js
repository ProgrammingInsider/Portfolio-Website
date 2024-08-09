import React from 'react'

// Icons
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
// import { FaTelegramPlane } from "react-icons/fa";

// Images
import Mypic from "../Assets/img/mypic.png";
import Html from "../Assets/img/html.svg";
import Css from "../Assets/img/css.svg";
import JavaScript from "../Assets/img/javascript.png";
import ReactLogo from "../Assets/img/reactlogo.png";
import Node from "../Assets/img/nodejs.svg";
import Express from "../Assets/img/express.svg";
import Mongodb from "../Assets/img/mongodb.svg";
import Mysql from "../Assets/img/mysql.svg";
import Jest from "../Assets/img/Jest.svg";
import ReactTesting from "../Assets/img/ReactTestingLibrary.svg";
import Cypress from "../Assets/img/cypress.svg";
import Vitest from "../Assets/img/vitest.svg";
import hy from "../Assets/emojis/hy.png"



const Hero = () => {
  return <>
     <div className='heroContainer'>
         <div className='upperHeroContent'>

          {/* My Profile Picture */}
          <div className='mypicContainer'>
              <img src={Mypic} alt='mypic' className='mypic'/>
          </div>

           {/* Headlines */}
          <div className='headlineContainer'>
              <h1 className='headline'>Full-Stack Web<br/> Developer  
              <img src={hy} alt='hy' width="40" style={{paddingLeft:"5px"}}/>
              </h1>

              <p className='subHeadline'>Hi, I'm Amanuel Abera. A passionate Full-Stack Developer based in Addis Ababa, Ethiopia. 📍</p>

              <div className='connects'>
                <a href='https://linkedin.com/in/amanuel-abera-kedida'target="_blank" rel="noopener noreferrer" ><FaLinkedinIn className='connectIcon'/></a>
                <a href='https://github.com/ProgrammingInsider' target="_blank" rel="noopener noreferrer"><FaGithub className='connectIcon'/></a>
                <a href='https://youtube.com/@ProgrammingInsider' target="_blank" rel="noopener noreferrer"><FaYoutube className='connectIcon'/></a>
                {/* <a href='https://t.me programmingInsider' target="_blank" rel="noopener noreferrer"><FaTelegramPlane className='connectIcon'/></a> */}
              </div>
          </div>
         </div>

         {/* Techonogy Stacks */}
        <div className='techStackContainer'>
        
          <p className='techStackTitle'>
          Tech Stack
          </p>

          <div className='techStacks'>
            <div className='frontendTechStack' title="Frontend Tech Stacks">
              <img src={Html} alt='HTML Tech'/>
              <img src={Css} alt='CSS Tech'/>
            </div>
            <div className='uxTechStack' title="UX Tech Stacks">
              <img src={JavaScript} alt='JavaScript Tech'/>
              <img src={ReactLogo} alt='React Tech'/>
            </div>
            <div className='backendTechStack' title="Backend Tech Stacks">
              <img src={Node} alt='Node Tech'/>
              <img src={Express} alt='Express Tech'/>
            </div>
            <div className='databaseTechStack' title="Database Tech Stacks">
              <img src={Mongodb} alt='MongoDB Tech'/>  
              <img src={Mysql} alt='MySQL Tech'/>
            </div>
            <div className='testingTechStack' title="Testing Tech Stacks">
              <img src={ReactTesting} alt='React Testing Tech'/>
              <img src={Jest} alt='Jest Tech'/>
            </div>
            <div className='testingTechStack' title="Testing Tech Stacks">
              <img src={Cypress} alt='Cypress'/>
              <img src={Vitest} alt='Vitest'/>
            </div>
          </div>

        </div>
    </div>
  </>
}

export default Hero