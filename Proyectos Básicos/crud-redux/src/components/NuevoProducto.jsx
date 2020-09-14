import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// useDispatch, mandar a ejecutar las acciones que queremos

// UseSelector  acceder al state dentro del componente

// Actions de Redux
import { mostrarAlerta, ocultarAlertaAction } from '../actions/alertaActions'
import { crearNuevoProductoAction } from '../actions/productoActions.js'
const NuevoProducto = ({ history }) => {
  // State del componente

  const [nombre, guardarNombre] = useState('')
  const [precio, guardarPrecio] = useState(0)

  // utilizar use dispatch y crear funcion
  const dispatch = useDispatch()

  // Acceder al state del store

  const cargando = useSelector(state => state.productos.loading)

  const error = useSelector(state => state.productos.error)

  const alerta = useSelector(state => state.alerta.alerta)

  // mandar llamar el action de productoAction
  const agregarProducto = producto =>
    dispatch(crearNuevoProductoAction(producto))

  const handleSubmit = e => {
    e.preventDefault()

    // validar formulario

    if (nombre.trim() === '' || precio <= 0) {
      const alerta = {
        msg: 'Ambos campos son obligatorios',
        classes: ' alert alert-danger tex-center text-uppercase p-3'
      }
      dispatch(mostrarAlerta(alerta))
      return
    }
    // si no hay errores
    dispatch(ocultarAlertaAction())
    // crear el nuevo producto

    agregarProducto({
      nombre,
      precio
    })

    // redireccionar
    history.push('/')
  }
  return (
    <div className='row justify-content-center'>
      <div className='col-md-8'>
        <div className='card mt-4'>
          <div className='card-body'>
            <h2 className='text-center mb-4  font-weight-bold'>
              Agregar nuevo producto
            </h2>
            {alerta ? <p className={alerta.classes}>{alerta.msg}</p> : null}

            <form onSubmit={handleSubmit}>
              <div className='form-group'>
                <label>Nombre producto</label>
                <input
                  name='nombre'
                  type='text'
                  onChange={e => guardarNombre(e.target.value)}
                  className='form-control'
                  placeholder='nombre producto'
                  value={nombre}
                />
              </div>
              <div className='form-group'>
                <label>Precio producto</label>
                <input
                  name='precio'
                  type='number'
                  value={precio}
                  onChange={e => guardarPrecio(Number(e.target.value))}
                  className='form-control'
                  placeholder='Precio producto'
                />
              </div>
              <button
                type='submit'
                className='btn btn-primary font-weight-bold text-uppercase d-block w-100'
              >
                Agregar
              </button>
            </form>

            {cargando ? <p>Cargando</p> : null}
            {error ? (
              <p className='alert alert-danger p-2 mt-4 text-center'>
                Hubo un error
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  )
}

export default NuevoProducto
