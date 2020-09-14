import React, { Fragment, useState } from 'react'
import Error from '../components/Error'
import { MDBBtn } from 'mdbreact'
const Formulario = () => {
  const [datos, actualizarDatos] = useState({
    nombre: '',
    numero: '',
    descripcion: ''
  })
  const [error, guardarError] = useState(false)
  const { nombre, numero, descripcion } = datos

  const guardarDatos = dato => {
    actualizarDatos({ ...datos, [dato.target.name]: dato.target.value })
  }
  const handleSubmit = e => {
    e.preventDefault()
    if (nombre === '' || numero==='' || descripcion === '') {
      guardarError(true)
      return
    } else {
      guardarError(false)
      console.log(datos)
      actualizarDatos({
        nombre: '',
        numero: '',
        descripcion: ''
      })
    }
  }
  return (
    <Fragment>
      <div className='container'>
       
        {error?<Error mensaje='Todos los campos son obligatorios'></Error> : null}
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label>Nombre:</label>
            <input
              type='text'
              name='nombre'
              class='form-control'
              value={nombre}
              placeholder='Nombre ...'
              onChange={guardarDatos}
            ></input>
          </div>
          <div className='form-group'>
            <label>Num. telf.:</label>
            <input
              type='text'
              class='form-control'
              name='numero'
              value={numero}
              placeholder='Número ...'
              onChange={guardarDatos}
            ></input>
          </div>
          <div className='form-group'>
            <label>Detalles:</label>
            <textarea
              type='text'
              class='form-control'
              name='descripcion'
              value={descripcion}
              placeholder='Detalles a consultar ...'
              onChange={guardarDatos}
            ></textarea>
          </div>
          <MDBBtn color='primary' type='submit'>
            Enviar
          </MDBBtn>
          {/* <button type='submit' class='btn btn-primary waves-effect'>Enviar</button> */}
        </form>
      </div>
    </Fragment>
  )
}

export default Formulario
