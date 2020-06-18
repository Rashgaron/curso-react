import React, { Fragment, useState } from 'react'
import { v4 as uuid } from 'uuid'
const MiFormulario = ({crearTarta}) => {
  // Crear State de tartas

  const [tarta, actualizarTarta] = useState({
    nombre: '',
    ubicacion: '',
    fecha: '',
    descripcion: ''
  })

  const [error, actualizarError] = useState(false)

  // Funcion que se ejecuta el escribir en un input
  // Modificamos el state cana vez que hay un cambio
  const actualizarState = e => {
    actualizarTarta({
      ...tarta,
      [e.target.name]: e.target.value
    })
  }

  // Extraer valores del state

  const { nombre, ubicacion, fecha, descripcion } = tarta
  //Se envia la info de la tarta si cumple los requisitos
  const submitTarta = e => {
    e.preventDefault()
    if (
      nombre.trim() === '' ||
      ubicacion.trim() === '' ||
      fecha.trim() === '' ||
      descripcion.trim() === ''
    ) {
      actualizarError(true)
      return
    } else {
      actualizarError(false)
      tarta.id = uuid()
      console.log(tarta)
    }


    // crear tarta

    crearTarta(tarta);

    // Reiniciar el form 

    actualizarTarta({
      nombre: '',
      ubicacion: '',
      fecha: '',
      descripcion: ''
    })
  }

  return (
    <Fragment>
      <h2>Tus tartas</h2>
      {error ?
        (<p className="alerta-error">Todos los campos son obligatorios</p>)
      : null}
      <form onSubmit={submitTarta}>
        <label>Nombre</label>
        <input
          type='text'
          name='nombre'
          placeholder='Introduce tu nombre'
          className='u-full-width'
          onChange={actualizarState}
        ></input>

        <label>Ubicación</label>
        <input
          type='text'
          name='ubicacion'
          placeholder='Introduce tu ubicación'
          className='u-full-width'
          onChange={actualizarState}
        ></input>
        <label>Fecha</label>
        <input
          type='date'
          name='fecha'
          className='u-full-width'
          onChange={actualizarState}
        ></input>

        <label>Descripción de la tarta</label>
        <textarea
          type='text'
          name='descripcion'
          placeholder='Introduce la descripcion de tu tarta'
          className='u-full-width'
          onChange={actualizarState}
        ></textarea>
        <button type='submit' className='u-full-width button-primary'>
          Enviar
        </button>
      </form>
    </Fragment>
  )
}
export default MiFormulario
