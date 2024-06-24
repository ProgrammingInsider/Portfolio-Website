import React from 'react'

// Image
import Logo from "../Assets/img/ProgrammingInsiderLogo.png";
import YoutubeIcon from "../Assets/img/YoutubeIcon.png";


const Youtube = () => {
  return <>
  <div className='sectionContainer'>
       <h1 className='sectionName'>YouTube</h1>
       <h1 className='sectionHeadline'>Explore Project Development Tutorials 🎦</h1>
      
       <a href='https://youtube.com/@ProgrammingInsider' target="_blank" rel="noopener noreferrer">
        <div className='youtubeContainer'>
          <div className='programmingInsider'>
            <div className='youtubeLogoContainer'>
              <img src={Logo} className='youtubeLogo' alt='YouTube Logo'/>
            </div>
            <div className='youtubeDesc'>
              <h1 className='youtubeName'>Programming Insider</h1>
              <img src={YoutubeIcon} className='youtubeIcon' alt='YouTube Icon'/>
            </div>
          </div>

          <div className='youtubeStatus'>
            <div className='status'>
                  <h1>1K+</h1>
                  <p>Followers</p>
            </div>
            <div className='status'>
                  <h1>50+</h1>
                  <p>Tutorials</p>
            </div>
          </div>
              
        </div>
       </a>
  </div>
</>
}

export default Youtube