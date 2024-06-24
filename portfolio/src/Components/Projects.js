import React from 'react'

// Icons
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { FaDribbble } from "react-icons/fa";


const Projects = ({projects, filter}) => {

  if(projects.length === 0){
    return <h1 className='NoProjects'>New <span className='comingProject'>{filter}</span> Projects Coming Soon</h1>
  }

  return (
    projects.map((item,index)=>{
            
        const {projectImage,projectName,projectDesc,projectTech,GitHuB,Demo,Design,projectType} = item;
      
        
        return(
            <div className='project' key={index} data-testid="project">
                  <div className='projectQuickView'>
                    <img src={projectImage} className='projectImg' alt={projectName} />
                  </div>
                  
                  <div className='projectDetail'>
                  <h1 className='projectType' data-testid={projectType}>{projectType} Project</h1>
                    <h1 className='projectName'>{projectName}</h1>

                    <p className='projectDesc'>{projectDesc}</p>
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

                    </div>



                  </div>

                </div>
        )

      })
  )
}

export default Projects