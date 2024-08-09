import React, { useEffect, useState } from 'react'

// Icons
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { FaDribbble } from "react-icons/fa";
import { IoLogoDocker } from "react-icons/io5";
import Detail from './Detail';


const Projects = ({projects, filter}) => {
  const [detail, viewDetail] = useState(false);

  useEffect(() => {

    const adjustScrollPosition = () => {
        const hash = window.location.hash;
        if (hash) {
            const element = document.querySelector(hash);
            if (element) {
              
                const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
              
                window.scrollTo({
                    top: elementTop - 100,
                    behavior: 'smooth'
                });
            }
        }
    };

    adjustScrollPosition();
    window.addEventListener('hashchange', adjustScrollPosition);

    return () => {
        window.removeEventListener('hashchange', adjustScrollPosition);
    };
}, []);

  if(projects.length === 0){
    return <h1 className='NoProjects'>New <span className='comingProject'>{filter}</span> Projects Coming Soon</h1>
  }

  return (
    projects.map((item,index)=>{
            
        const {projectImage,projectName,projectDesc,projectTech,GitHuB,Demo,Design,DockerImage,projectType, id} = item;
      
        
        return <>
          {detail && (
                <>
                    <div className="overlay" onClick={()=>viewDetail(false)}/>
                    <Detail viewDetail={viewDetail} />
                </>
          )}
          <div className='project' key={index} id={id} data-testid="project">
                  <div className='projectQuickView'>
                    <img src={projectImage} className='projectImg' alt={projectName} />
                  </div>
                  
                  <div className='projectDetail'>
                  <h1 className='projectType' data-testid={projectType}>{projectType}</h1>
                    <h1 className='projectName'>{projectName}</h1>

                    <p className='projectDesc'>{projectDesc}</p>
                    <button className='viewDetailBtn' onClick={()=>viewDetail(true)}>View Details</button>
                    <ul className='techs'>
                      {
                        projectTech.map((item,index)=>{
                    
                          return(<li className='tech' key={index}>{item}</li>)
                        })
                      }
                    </ul>

                    <div className='projectBtns'>
                      <a href={GitHuB} target="_blank" rel="noopener noreferrer" className='projectBtn'>
                        Code
                        <FaGithub className='projectBtnIcon'/>
                      </a>
                      <a href={Demo} target="_blank" rel="noopener noreferrer" className='projectBtn'>
                        Live Demo
                        <FiExternalLink className='projectBtnIcon'/>
                      </a>
                    {Design && (
                        <a href={Design} target="_blank" rel="noopener noreferrer" className='projectBtn'>
                          UI Design
                          <FaDribbble  className='projectBtnIcon'/>
                        </a>
                    )}
                    {DockerImage && (
                        <a href={DockerImage} target="_blank" rel="noopener noreferrer" className='projectBtn'>
                          Docker Image
                          <IoLogoDocker  className='projectBtnIcon'/>
                        </a>
                    )}
                    </div>
                  </div>
            </div>
            <h1 className='moreProjects'>More Projects Coming Soon</h1>
        </>

      })
  )
}

export default Projects