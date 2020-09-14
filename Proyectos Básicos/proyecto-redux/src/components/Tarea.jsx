import React, { Fragment } from 'react'
import { useDispatch } from 'react-redux'
import { eliminarTareaAction } from '../actions/tareaActions'
const Tarea = ({ tarea }) => {
  const dispatch = useDispatch()
  return (
    <Fragment>
      <div className='row col-12'>
        <div className='col-7 w-100'>
          <h3>{tarea.nombre}</h3>
          <p>{tarea.descripcion}</p>
        </div>
        <div className='col-5 w-100'>
          <button className='btn btn-danger' type='button' onClick={()=>dispatch(eliminarTareaAction(tarea.id))}>
            Eliminar
          </button>
        </div>
      </div>
    </Fragment>
  )
}

export default Tarea
