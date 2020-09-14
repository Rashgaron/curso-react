import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {useHistory} from 'react-router-dom'
import { editarProductoAction } from '../actions/productoActions'
const EditarProducto = () => {

const history = useHistory()

  const dispatch = useDispatch()

  const productoEditar = useSelector(state => state.productos.productoeditar)

  const [producto, guardarProducto] = useState({
    nombre: '',
    precio: ''
  })
  useEffect(() => {
    if (productoEditar) guardarProducto(productoEditar)
    else history.push('/')
    // eslint-disable-next-line
  }, [])

  const { nombre, precio } = producto

  const handleChange = e => {
    guardarProducto({
      ...producto,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = e => {
    e.preventDefault()

    dispatch(editarProductoAction(producto))
    history.push('/')
  }
  return (
    <div className='row justify-content-center'>
      <div className='col-md-8'>
        <div className='card mt-4'>
          <div className='card-body'>
            <h2 className='text-center mb-4  font-weight-bold'>
              Editar producto
            </h2>

            <form onSubmit={handleSubmit}>
              <div className='form-group'>
                <label>Nombre producto</label>
                <input
                  name='nombre'
                  type='text'
                  className='form-control'
                  placeholder='nombre producto'
                  onChange={handleChange}
                  value={nombre}
                />
              </div>
              <div className='form-group'>
                <label>Precio producto</label>
                <input
                  name='precio'
                  type='number'
                  className='form-control'
                  placeholder='Precio producto'
                  onChange={handleChange}
                  value={precio}
                />
              </div>
              <button
                type='submit'
                className='btn btn-primary font-weight-bold text-uppercase d-block w-100'
              >
                Guardar Cambios
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditarProducto
