import React from 'react'
import{ Routes, Route, BrowserRouter, NavLink } from "react-router-dom"
import { Inicio } from '../components/Inicio';
import { Portafolio } from '../components/Portafolio';
import { Servicios }  from '../components/Servicios';
import { Curriculum } from '../components/Curriculum';
import { Contacto } from '../components/Contacto';
import  HeaderNav  from '../components/layout/HeaderNav';
import { FooterSection } from '../components/layout/FooterSection'



export const MisRutas = () => {
  return (
    <BrowserRouter>
    {/**Header y Navigation*/}
      <HeaderNav />
    {/**Contenido Centrar*/}
    <Routes>
          <Route path='/' element={<Inicio/>}/>
          <Route path='/portafolio' element={<Portafolio/>}/>
          <Route path='/servicios' element={<Servicios/>}/>
          <Route path='/curriculum' element={<Curriculum/>}/>
          <Route path='/contacto' element={<Contacto/>}/>
    </Routes>
    {/**Footer*/}
      <FooterSection />

    </BrowserRouter>
  )
}
