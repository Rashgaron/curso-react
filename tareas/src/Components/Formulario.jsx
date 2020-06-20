import React, { Fragment, useState } from 'react'
import shortid from 'shortid'
const Formulario = ({ crearTarea }) => {
  // crear State de tareas
  const [tarea, actualizarTarea] = useState({
    nombreTarea: '',
    propietario: '',
    fecha: '',
    hora: '',
    descripcion: ''
  })

  // crear state de error

  const [error, actualizarError] = useState(false)

  // Funcion que se ejectua al escribir en un input
  const actualizarState = e => {
    actualizarTarea({
      ...tarea,
      [e.target.name]: e.target.value
    })
  }

  // Extraer valores de la tarea
  const { nombreTarea, propietario, fecha, hora, descripcion } = tarea
  // Al presionar enviar formulario

  const sumbitTarea = e => {
    e.preventDefault()
    if (nombreTarea.trim() === '' || propietario.trim() === '') {
      actualizarError(true)
      return
    } else {
      actualizarError(false)

      // Asignar ID
      tarea.id = shortid.generate()

      // Crear la tarea
      crearTarea(tarea)

      // Reiniciar el formulario
      actualizarTarea({
        nombreTarea: '',
        propietario: '',
        fecha: '',
        hora: '',
        descripcion: ''
      })
    }
  }
  return (
    <Fragment>
      <h2>Crear Tarea</h2>
      {error ? (
        <p className='alerta-error'>Nombre y destinatario obligatorios</p>
      ) : null}
      <form className='formulario' onSubmit={sumbitTarea}>
        <label>Nombre de la Tarea</label>
        <input
          type='text'
          name='nombreTarea'
          className='u-full-width'
          placeholder='Nombre Tarea'
          onChange={actualizarState}
          value={nombreTarea}
        ></input>
        <label>Para quien es?</label>
        <input
          type='text'
          name='propietario'
          className='u-full-width'
          placeholder='Nombre destinatario tarea'
          onChange={actualizarState}
          value={propietario}
        ></input>
        <label>Fecha</label>
        <input
          type='date'
          name='fecha'
          className='u-full-width'
          onChange={actualizarState}
          value={fecha}
        ></input>
        <label>Hora estimada</label>
        <input
          type='time'
          name='hora'
          className='u-full-width'
          onChange={actualizarState}
          value={hora}
        ></input>
        <label>Descripcion</label>
        <textarea
          className='u-full-width'
          name='descripcion'
          placeholder='Introduce la descripción de la tarea'
          onChange={actualizarState}
          value={descripcion}
        ></textarea>
        <button type='submit' className='u-full-width button-primary my-button'>
          Agregar Tarea
        </button>
      </form>
    </Fragment>
  )
}

export default Formulario
