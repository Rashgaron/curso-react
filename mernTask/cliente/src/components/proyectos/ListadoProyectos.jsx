import React, { useContext, useEffect } from 'react'
import Proyecto from './Proyecto'
import proyectoContext from '../../context/proyectos/proyectoContext'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import AlertaContext from '../../context/alertas/alertaContext'
const ListadoProyectos = () => {
  const alertaContext = useContext(AlertaContext)
  const { alerta, mostrarAlerta } = alertaContext

  // extraer proyectos de state inicial
  const proyectosContext = useContext(proyectoContext)
  const { mensaje, proyectos, obtenerProyectos } = proyectosContext
  // Obtener proyectos al cargar el componente
  useEffect(() => {
    // Si hay un error
    if (mensaje) {
      mostrarAlerta(mensaje.msg, mensaje.categoria)
    }
    obtenerProyectos()

    // eslint-disable-nextline
  }, [mensaje])
  // Revisar si hay proyectos

  if (proyectos.length === 0)
    return <p>No hay proyectos, comienza creando uno</p>
  else {
    return (
      <ul className='listado-proyectos'>
        {alerta ? (
          <div className={`alerta &{alerta.categoria}`}>{alerta.msg}</div>
        ) : null}
        <TransitionGroup>
          {proyectos.map(proyecto => (
            <CSSTransition
              key={proyecto._id}
              timeout={200}
              classNames='proyecto'
            >
              <Proyecto proyecto={proyecto}></Proyecto>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ul>
    )
  }
}

export default ListadoProyectos
