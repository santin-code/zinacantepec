import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import { links } from '../data'
import { FaBars } from 'react-icons/fa'
import { MdOutlineClose } from 'react-icons/md'
import './navbar.css'
import Logo from '../images/a02539775843bd06cae6190613bdabb66003730a.png'

const Navbar = () => {

  const [showMenu, setShowMenu] = useState(false)

  return (
    <nav>
      <div className="container nav__container">
        <Link to='/' className='logo' onClick={()=> setShowMenu(false)} >
          <img src={Logo} alt='logo free fire' />
        </Link>
        <ul className={`nav__links ${showMenu ? 'show__nav' : 'hide__nav'} `}>
          {
            links.map(({name, path}, index) => {
              return (
                <li key={index} onClick={()=> setShowMenu(prev => !prev) } >
                  <NavLink
                    to={path} 
                  >{name}</NavLink>
                </li>
              )
            } )
          }
        </ul  >
         <button className='nav__toggle-btn' onClick={()=> setShowMenu(prev => !prev)}>
          { 
          showMenu ? <MdOutlineClose />  :  <FaBars />
          }
        </button> 
      </div>
    </nav>
  )
}

export default Navbar