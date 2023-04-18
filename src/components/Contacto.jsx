import React from 'react'

export const Contacto = () => {
  return (
    <div className='page'>
    <h1 className='heading'>¿Hablamos?</h1>
    <div className='contactSection'>
      <form className='contact' action='V.pinero70clase@gmail.com'>
        <input type="text" placeholder='Nombre' />
        <input type="text" placeholder='Apellido' />
        <input type="Email" placeholder='Email' />
        <textarea placeholder='Motivo de contacto' />
        <div  className='buttonSection'>
          <input  type="submit" value="enviar" />
        </div>
      </form>
    </div>
  </div>
  )
}
