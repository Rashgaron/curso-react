import React, { Fragment, useState, useContext } from 'react'
import proyectoContext from '../../context/proyectos/proyectoContext'
const NuevoProyecto = () => {
  // Obtener el state del formulario
  const proyectosContext = useContext(proyectoContext)

  const {
    formulario,
    errorformulario,
    mostrarFormulario,
    agregarProyecto,
    mostrarError
  } = proyectosContext

  //State para Proyecto

  const [proyecto, guardarProyecto] = useState({
    nombre: ''
  })

  const { nombre } = proyecto

  const onChangeProyecto = e => {
    guardarProyecto({
      ...proyecto,
      [e.target.name]: e.target.value
    })
  }

  const onSubmitProyecto = e => {
    e.preventDefault()

    //Validar proyecto
    if (nombre === '') {
      mostrarError()
      return
    }
    //Agregar al State
    agregarProyecto(proyecto)
    //Reiniciar el form
    guardarProyecto({
      nombre: ''
    })
  }
  if (formulario) console.log('formulario esta visible')
  return (
    <Fragment>
      <button
        onClick={() => mostrarFormulario()}
        type='button'
        className='btn btn-block btn-primario'
      >
        Nuevo Proyecto
      </button>

      {formulario ? (
        <form className='formulario-nuevo-proyecto' onSubmit={onSubmitProyecto}>
          <input
            type='text'
            className='input-text'
            placeholder='Nombre Proyecto'
            name='nombre'
            value={nombre}
            onChange={onChangeProyecto}
          ></input>

          <input
            type='submit'
            className='btn btn-primario btn-block'
            value='Agregar Proyecto'
          ></input>
        </form>
      ) : null}
      {errorformulario ? (
        <p className='mensaje error'>El nombre es obligatorio</p>
      ) : null}
    </Fragment>
  )
}

export default NuevoProyecto
