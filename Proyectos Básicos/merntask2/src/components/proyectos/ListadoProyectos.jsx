import React, { useContext, useEffect } from 'react'
import Proyecto from './Proyecto'
import proyectoContext from '../../context/proyectos/proyectoContext'
const ListadoProyectos = () => {

  // Extraer proyectos de state inicial
  const proyectosContext = useContext(proyectoContext)
  const { proyectos, obtenerProyectos } = proyectosContext
 
 
 
  useEffect(()=>{
    obtenerProyectos()
  },[])




  // Revisar si proyectos tiene contenido
  if (proyectos.length === 0) return null


 
  return (
    <ul className='listado-proyectos'>
      {proyectos.map(proyecto => (
        <Proyecto key={proyecto.id} proyecto={proyecto}></Proyecto>
      ))}
    </ul>
  )
}

export default ListadoProyectos
