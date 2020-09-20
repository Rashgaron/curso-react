import React, { Fragment, useState } from 'react'
import {
  obtenerProductosAction,
  buscarProductosAction
} from '../../actions/productosActions'
import { useDispatch } from 'react-redux'

const Sidebar = () => {
  const dispatch = useDispatch()
  const handleClick = e => {
    dispatch(obtenerProductosAction(e))
  }
  const [busqueda, guardarBusqueda] = useState('')

  const handleChange = e => {
    guardarBusqueda(e.target.value)
  }
  const handleSubmit = e => {
    e.preventDefault()
    if (busqueda.trim() === '') {
      return
    }

    dispatch(buscarProductosAction(busqueda.trim()))

    guardarBusqueda('')
  }
  return (
    <Fragment>
      <div className='col-auto bg-light mt-3 mb-3 sidebar-box p-2 '>
        <h2>Nuestros Productos </h2>
        <div className='col-12'>
          <form onSubmit={handleSubmit}>
            <div className='form-group row justify-content-between'>
              <input
                className='form-control col-8 col-lg-12'
                name='busqueda'
                value={busqueda}
                onChange={handleChange}
                placeholder='Que quieres buscar?'
              ></input>
              <button className='btn btn-success col-3 col-lg-12 mt-lg-1 btn-sm'>Buscar</button>
            </div>
          </form>
        </div>
        <ul>
          <li>
            <a
              href='#'
              onClick={() => handleClick('ALIMENTACION|PASTAS DE AZUCAR')}
            >
              Fondant
            </a>
          </li>
          <li>
            <a
              href='#'
              onClick={() =>
                handleClick('ALIMENTACION|AROMAS Y CONCENTRADOS|LIQUIDOS')
              }
            >
              Colorantes
            </a>
          </li>
          <li>
            <a href='#' onClick={() => handleClick('MOLDES')}>
              Moldes
            </a>
          </li>
        </ul>
      </div>
    </Fragment>
  )
}

export default Sidebar
