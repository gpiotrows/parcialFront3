import React from 'react'

function Card({nombre, pelicula}) {
  return (
    <div className='card'>
      <p>Registro creado correctamente</p>
      <p>Nombre: {nombre}</p>
      <p>Pelicula: {pelicula}</p>
    </div>
  )
}

export default Card