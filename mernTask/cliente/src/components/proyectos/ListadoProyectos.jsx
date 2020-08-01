import React, { useContext, useEffect } from 'react'
import Proyecto from './Proyecto'
import proyectoContext from '../../context/proyectos/proyectoContext'
const ListadoProyectos = () => {
  // extraer proyectos de state inicial
  const proyectosContext = useContext(proyectoContext)
  const { proyectos, obtenerProyectos } = proyectosContext
  // Obtener proyectos al cargar el componente
  useEffect(() => {
    obtenerProyectos()
  }, [])
  // Revisar si hay proyectos

  if (proyectos.length === 0) return null
  else {
    return (
      <ul className='listado-proyectos'>
        {proyectos.map(proyecto => (
          <Proyecto key={proyecto.id} proyecto={proyecto}></Proyecto>
        ))}
      </ul>
    )
  }
}

export default ListadoProyectos
