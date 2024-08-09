import React from 'react'

// Icons
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";


const Footer = () => {
  return (
    <div className='footerContainer sectionContainer'>
      <h1 className='copyrigt'>
      Copyright © 2024. All rights are reserved
      </h1>

      <div className='connects footerConnects'>
        <a href='https://linkedin.com/in/amanuel-abera-kedida'target="_blank" rel="noopener noreferrer" ><FaLinkedinIn className='connectIcon'/></a>
        <a href='https://github.com/ProgrammingInsider' target="_blank" rel="noopener noreferrer"><FaGithub className='connectIcon'/></a>
        <a href='https://youtube.com/@ProgrammingInsider' target="_blank" rel="noopener noreferrer"><FaYoutube className='connectIcon'/></a>
        <a href='https://t.me/Aman_A2208' target="_blank" rel="noopener noreferrer"><FaTelegramPlane className='connectIcon'/></a>
      </div>

    </div>
  )
}

export default Footer