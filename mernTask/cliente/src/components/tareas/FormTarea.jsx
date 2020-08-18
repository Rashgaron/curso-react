import React, { useContext, useState, useEffect } from 'react'
import proyectoContext from '../../context/proyectos/proyectoContext'
import tareaContext from '../../context/tareas/tareaContext'
const FormTarea = () => {
  // Extraer si un proyecto está activo
  const proyectosContext = useContext(proyectoContext)
  const { proyecto } = proyectosContext

  const tareasContext = useContext(tareaContext)
  const {
    tareaseleccionada,
    errortarea,
    agregarTarea,
    validarTarea,
    obtenerTareas,
    actualizarTarea,
    limpiarTarea
  } = tareasContext

  // Effect que detecta si hay una tarea seleccionada

  useEffect(() => {
    if (tareaseleccionada !== null) {
      guardarTarea(tareaseleccionada)
    } else {
      guardarTarea({
        nombre: ''
      })
    }
  }, [tareaseleccionada])
  // state del formulario

  const [tarea, guardarTarea] = useState({
    nombre: ''
  })
  // extraer nombre proyecto

  const { nombre } = tarea
  // Si no hay proyecto seleccionado
  if (!proyecto) {
    return null
  }
  // Array destructuring para extraer el proyecto actual

  const [proyectoActual] = proyecto

  // Leer valores del form

  const handleChange = e => {
    guardarTarea({
      ...tarea,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = e => {
    e.preventDefault()

    // validar
    if (nombre.trim() === '') {
      validarTarea()
      return
    }

    // Revisar si es edición o nueva tarea
    if (tareaseleccionada === null) {
      // agregar la nueva tarea al state de tareas
      tarea.proyecto = proyectoActual._id
      agregarTarea(tarea)
    } else {
      actualizarTarea(tarea)

      // elimina tarea seleccionada del state
      limpiarTarea();
    }

    // Obtener y filtrar tareas del proyectoa actual

    obtenerTareas(proyectoActual.id)
    // reiniciar el form
    guardarTarea({
      nombre: ''
    })
  }
  return (
    <div className='formulario'>
      <form onSubmit={handleSubmit}>
        <div className='contenedor-input'>
          <input
            type='text'
            className='input-text'
            placeholder='Nombre Tarea...'
            name='nombre'
            onChange={handleChange}
            value={nombre}
          ></input>
        </div>
        <div className='contenedor-input'>
          <input
            type='submit'
            className='btn btn-primario btn-submit btn-block'
            value={tareaseleccionada ? 'Editar tarea' : 'Agregar Tarea'}
          ></input>
        </div>
      </form>
      {errortarea ? (
        <p className='mensaje error'>El nombre de la tarea es necesario</p>
      ) : null}
    </div>
  )
}

export default FormTarea
