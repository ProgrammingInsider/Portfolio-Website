import {useState, useEffect} from 'react'

// LocalStorage
import projectCollection from '../LocalStorage/LocalStorage';

// Components
import Projects from './Projects';



const Portfolio = () => {
  const[index,setIndex] = useState(0);
  const[filter, setFilter] = useState("All")
  const[projects, setProjects] = useState(projectCollection);

  useEffect(()=>{

    if(filter === "All"){
      setProjects(projectCollection)
    }else{
      setProjects(()=>projectCollection.filter((item)=>item.projectType === filter))
    }
      
  },[index,filter])

  return <>
      <div className='sectionContainer'>
            <h1 className='sectionName'>Portfolio</h1>
            <h1 className='sectionHeadline'>Each Project is a  Unique Piece of development 🧩</h1>

            <div className='projectsContainer'>

                {/* Project Filter */}
                  <ul className='projectFilters'>
                      <li 
                      className={index === 0 ? 'projectFilter activeFilter':'projectFilter'}
                      onClick={()=>{setIndex(0);setFilter("All")}}
                      data-testid="allBtn">Full Stack</li>

                      <li 
                      className={index === 1 ? 'projectFilter activeFilter':'projectFilter'}
                      onClick={()=>{setIndex(1);setFilter("UI/UX")}}
                      data-testid="htmlcssBtn">UI/UX</li>
                  </ul>

                {/* Iterate Through Projects */}
                <Projects projects={projects} filter={filter}/>
                
            </div>
      </div>
  </>
}

export default Portfolio