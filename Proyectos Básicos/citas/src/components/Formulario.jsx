import React, { Fragment, useState } from 'react'
import { v4 as uuid } from 'uuid'
import PropTypes from 'prop-types'
const Formulario = ({ crearCita }) => {
  // Crear State de citas
  const [cita, actualizarCita] = useState({
    nombreTarea: '',
    propietario: '',
    fecha: '',
    hora: '',
    descripcion: ''
  })

  const [error, actualizarError] = useState(false)

  // Funcion que se ejecuta el escribir en un input
  const actualizarState = e => {
    actualizarCita({
      ...cita,
      [e.target.name]: e.target.value
    })
  }

  //   Extraer valores

  const { nombreTarea, propietario, fecha, hora, descripcion } = cita

  //   Al presionar enviar formulario

  const submitCita = e => {
    e.preventDefault()

    // Validar
    if (
      nombreTarea.trim() === '' ||
      propietario.trim() === '' ||
      fecha.trim() === '' ||
      hora.trim() === '' ||
      descripcion.trim() === ''
    ) {
      actualizarError(true)
      return
    } else {
      //Eliminar el mensaje previo de error

      actualizarError(false)

      // Asignar ID
      cita.id = uuid()
      console.log(cita)
      // Crear la Cita

      crearCita(cita)

      // Reiniciar el form}

      actualizarCita({
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
        <p className='alerta-error'>Todos los campos son obligatorios</p>
      ) : null}
      <form className='formulario' onSubmit={submitCita}>
        <label>Nombre Tarea</label>
        <input
          type='text'
          name='nombreTarea'
          className='u-full-width'
          placeholder='Nombre Tarea'
          onChange={actualizarState}
          value={nombreTarea}
        ></input>
        <label>Para quien es ?</label>
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

        <label>Descripción</label>
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
Formulario.propTypes = {
  crearCita: PropTypes.func.isRequired
}
export default Formulario
