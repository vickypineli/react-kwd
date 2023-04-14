import React from 'react'
import { NavLink } from 'react-router-dom'

 const HeaderNav = () => {
  return (
    <header className='header'>
    <div className='logo'>
      <span>K</span>
      <h3>KANDULA WEB DESING</h3> 
     </div>
     <nav>
            <ul>
            <li>
                  <NavLink to='/inicio' className={({isActive}) => isActive ? "active" : ""}>Inicio</NavLink>                  
                </li>
                <li>
                  <NavLink to='/portafolio' className={({isActive}) => isActive ? "active" : ""}>portafolio</NavLink>                  
                </li>
                <li>
                  <NavLink to='/servicios' className={({isActive}) => isActive ? "active" : ""}>Servicio</NavLink>                  
                </li>
                <li>
                  <NavLink to='/curriculum' className={({isActive}) => isActive ? "active" : ""}>Curriculum</NavLink>                  
                </li>
                <li>
                  <NavLink to='/contacto' className={({isActive}) => isActive ? "active" : ""}>Contacto</NavLink>                  
                </li>
            </ul>
        </nav>
    </header>
  )
}
export default HeaderNav;
