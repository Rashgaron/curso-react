import React, { useState } from 'react'
import Error from './Error'
const Formulario = ({guardarBusqueda}) => {
  const [termino, guardarTermino] = useState('')
  const [error, guardarError] = useState(false)
  const handleSubmit = e => {
    e.preventDefault()

    // Validar
    if (termino.trim() === '') {
      guardarError(true)
      return
    }

    // enviar el termino de búsqueda hacia el componente principal
    else {
      guardarError(false)
      guardarBusqueda(termino)
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className='row'>
        <div className='form-group col-md-8'>
          <input
            type='text'
            className='form-control form-control-lg'
            placeholder='Busca una imagen, ejemplo: futbol o café'
            onChange={e => guardarTermino(e.target.value)}
          ></input>
        </div>
        <div className='form-group col-md-4'>
          <input
            type='submit'
            className='btn btn-lg btn-danger btn-block'
            value='Buscar'
          ></input>
        </div>
      </div>
      {error ? <Error mensaje='Agrega un término de búsqueda'></Error> : null}
    </form>
  )
}

export default Formulario
