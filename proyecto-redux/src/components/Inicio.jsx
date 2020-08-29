import React, { useEffect } from 'react'
import Tareas from './Tareas'
const Inicio = ({ history }) => {
  return (
    <div className='row'>
      <div className='col-12 panel'>
        <div className='col '>
          <div className='row justify-content-center'>
            <p>Haz click para AGREGAR tareas</p>
          </div>
        </div>
        <div className='col'>
          <div className='row justify-content-center'>
            <button
              type='submit'
              className='btn btn-primary font-weight-bold text-uppercase d-block '
              onClick={() => history.push('/nueva-tarea')}
            >
              Agregar
            </button>
          </div>
        </div>
      </div>
      <div className='col-12'>
        <Tareas></Tareas>
      </div>
    </div>
  )
}

export default Inicio
