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
                  <NavLink to='/inicio'>Inicio</NavLink>                  
                </li>
                <li>
                  <NavLink to='/portafolio'>portafolio</NavLink>                  
                </li>
                <li>
                  <NavLink to='/servicios'>Servicio</NavLink>                  
                </li>
                <li>
                  <NavLink to='/curriculum'>Curriculum</NavLink>                  
                </li>
                <li>
                  <NavLink to='/contacto'>Contacto</NavLink>                  
                </li>
            </ul>
        </nav>
    </header>
  )
}
export default HeaderNav;
