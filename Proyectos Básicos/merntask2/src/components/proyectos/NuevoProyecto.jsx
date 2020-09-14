import React, { Fragment, useState, useContext } from 'react'
import proyectoContext from '../../context/proyectos/proyectoContext'
const NuevoProyecto = () => {
  // Obtener el state del formulario

  const proyectosContext = useContext(proyectoContext)
  const { formulario, mostrarFormulario } = proyectosContext

  // State para proyecto
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

  const handleSubmit = e => {
    e.preventDefault()

    guardarProyecto({
      nombre: ''
    })
  }

  const handleClick = () => {
    mostrarFormulario()
  }
  return (
    <Fragment>
      <button
        type='button'
        className='btn btn-block btn-primario'
        onClick={handleClick}
      >
        Nuevo Proyecto
      </button>

      {formulario ? (
        <form className='formulario-nuevo-proyecto' onSubmit={handleSubmit}>
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
    </Fragment>
  )
}

export default NuevoProyecto
