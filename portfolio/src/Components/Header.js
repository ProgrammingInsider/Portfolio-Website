import {useState} from 'react'

// Icons
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const[showMenu, setShowMenu] = useState(false)

  return (
    <div className='header'>
        
        {/* Logo Element */}
        <div className='logo'>Aman.dev</div>

        {/* Navigation */}
        <ul className={showMenu ? 'nav' : 'nav hideNav'} data-testid="nav">
          <a href='#Home' className='navLink' onClick={()=>setShowMenu(false)}><li>Home</li></a>
          <a href='#About' className='navLink' onClick={()=>setShowMenu(false)}><li>About</li></a>
          <a href='#Projects' className='navLink' onClick={()=>setShowMenu(false)}><li>Projects</li></a>
          {/* <a href='#YouTube' className='navLink' onClick={()=>setShowMenu(false)}><li>YouTube</li></a> */}
          <a href='#Contact' className='navLink' onClick={()=>setShowMenu(false)}><li>Contact</li></a>
          
          <IoClose className='closeMenu' alt='close' onClick={()=>setShowMenu(false)}/>
        </ul>

        {/* Menu Bar */}
        <FaBars className='showMenu' alt='bar' onClick={()=>setShowMenu(true)}/>
    </div>
  )
}

export default Header