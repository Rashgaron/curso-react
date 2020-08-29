import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import {crearNuevaTareaAction} from '../actions/tareaActions'
const NuevaTarea = ({ history }) => {
  // Redux

  const dispatch = useDispatch()

  const [tarea, guardarTarea] = useState({
    nombre: '',
    descripcion: ''
  })

  const { nombre, descripcion } = tarea

  const handleChange = e => {
    guardarTarea({
      ...tarea,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()

    if (nombre === '' || descripcion === '') {
      return console.log('Todos los campos son obligatorios')
    }
    console.log('tarea agregada')

    dispatch(crearNuevaTareaAction(tarea))

    history.push('/')
  }
  return (
    <div>
      <form onSubmit={handleSubmit} className='row justify-content-center'>
        <div className='from-group row col-12 col-lg-8'>
          <label>Nombre de la tarea:</label>

          <input
            type='text'
            className='form-control  '
            name='nombre'
            placeholder='Nombre tarea'
            value={nombre}
            onChange={handleChange}
          ></input>
        </div>

        <div className='form-group row col-12 col-lg-8'>
          <label>Descripcion de la tarea:</label>
          <textarea
            type='text'
            className='form-control '
            name='descripcion'
            value={descripcion}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type='submit' className='btn btn-success col-4 col-lg-5'>
          Agregar
        </button>
      </form>
    </div>
  )
}

export default NuevaTarea
