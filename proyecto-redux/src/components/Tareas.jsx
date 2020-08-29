import React, { useEffect } from 'react'
import { cargarTareasAction } from '../actions/tareaActions'
import { useDispatch, useSelector } from 'react-redux'
import Tarea from './Tarea'
const Tareas = () => {
  const dispatch = useDispatch()
  let tareas = useSelector(state => state.tareas.tareas)
  useEffect(() => {
    // Consultar la api

    const cargarTareas = () => dispatch(cargarTareasAction())

    cargarTareas()

    // eslint-disable-next-line
  }, [])

  return (
    <div>
      {tareas.map(tarea => (
        <Tarea key={tarea.id} tarea={tarea}></Tarea>
      ))}
    </div>
  )
}

export default Tareas
