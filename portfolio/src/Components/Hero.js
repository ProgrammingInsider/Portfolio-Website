import React from 'react'

// Icons
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";

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
import Docker from "../Assets/img/docker.png"
import GitHubAction from "../Assets/img/GitHub_action.png"






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
                <a href='https://t.me/Aman_A2208' target="_blank" rel="noopener noreferrer"><FaTelegramPlane className='connectIcon'/></a>
              </div>
          </div>
        </div>

         {/* Techonogy Stacks */}
          <table className='techStackContainer'>
            <thead className='techStackTitle'>
              <th><td>Tech Stack</td></th>
            </thead>
            <tbody className='techStacks'>
              <tr>
                <td className='techStackSector'>Frontend</td>
                <td className='techStackLists'>
                  <div className='frontendTechStack'>
                    <div className='eachTech'>
                      <span className='tooltip'>HTML5</span>
                      <img src={Html} alt='HTML Tech'/>
                    </div>
                    <div className='eachTech'>
                      <span className='tooltip'>CSS3</span>
                      <img src={Css} alt='CSS Tech'/>
                    </div>
                    <div className='eachTech'>
                      <span className='tooltip'>JavaScript</span>
                      <img src={JavaScript} alt='JavaScript Tech'/>
                    </div>
                    <div className='eachTech'>
                      <span className='tooltip'>React Js</span>
                      <img src={ReactLogo} alt='React Tech'/>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className='techStackSector'>Backend</td>
                <td className='techStackLists'>
                  <div className='backendTechStack'>
                    <div className='eachTech'>
                      <span className='tooltip'>Node js</span>
                      <img src={Node} alt='Node Tech'/>
                    </div>
                    <div className='eachTech'>
                      <span className='tooltip'>Express js</span>
                      <img src={Express} alt='Express Tech'/>
                    </div>
                    <div className='eachTech'>
                      <span className='tooltip'>MongoDB</span>
                      <img src={Mongodb} alt='MongoDB Tech'/>  
                    </div>
                    <div className='eachTech'>
                      <span className='tooltip'>MySQL</span>
                      <img src={Mysql} alt='MySQL Tech'/>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className='techStackSector'>Testing</td>
                <td className='techStackLists'>
                  <div className='testingTechStack'>
                    <div className='eachTech'>
                      <span className='tooltip'>React Testing Library</span>
                      <img src={ReactTesting} alt='React Testing Tech'/>
                    </div>
                    <div className='eachTech'>
                      <span className='tooltip'>Jest</span>
                      <img src={Jest} alt='Jest Tech'/>
                    </div>
                    <div className='eachTech'>
                      <span className='tooltip'>Cypress</span>
                      <img src={Cypress} alt='Cypress'/>
                    </div>
                    <div className='eachTech'>
                      <span className='tooltip'>Vitest</span>
                      <img src={Vitest} alt='Vitest'/>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className='techStackSector'>DevOps</td>
                <td className='techStackLists'>
                  <div className='devOpsTechStack'>
                    <div className='eachTech'>
                      <span className='tooltip'>Docker</span>
                      <img src={Docker} alt='DevOps Tech'/>
                    </div>
                    <div className='eachTech'>
                      <span className='tooltip'>GitHub Action</span>
                      <img src={GitHubAction} alt='DevOps Tech'/> 
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
    </div>
  </>
}

export default Hero