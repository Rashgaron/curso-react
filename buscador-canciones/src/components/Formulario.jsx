import React, { useState } from 'react'
const Formulario = ({ guardarBusquedaLetra }) => {
  const [busqueda, guardarBusqueda] = useState({
    artista: '',
    cancion: ''
  })
  const [error, guardarError] = useState(false)
  // función a cada input para leer su contenido

  const actualizarState = e => {
    guardarBusqueda({ ...busqueda, [e.target.name]: e.target.value })
  }
  const { artista, cancion } = busqueda

  const handleSubmit = e => {
    e.preventDefault()
    if (artista.trim() === '' || cancion.trim() === '') {
      guardarError(true)
      return
    } else {
      guardarError(false)
      guardarBusquedaLetra(busqueda)
      guardarBusqueda({
        artista: '',
        cancion: ''
      })
    }
  }
  return (
    <div className='bg-info'>
      {error ? (
        <p className='alert alert-danger text-center p-2'>
          Todos los campos son obligatorios
        </p>
      ) : null}
      <div className='container'>
        <div className='row'>
          <form
            onSubmit={handleSubmit}
            className=' col card text-white bg-transparent mb-5 pt-5 pb-2'
          >
            <fieldset>
              <div className='row justify-content-center'>
                <legend className='text-center'>
                  Buscador letras canciones
                </legend>
              </div>
              <div className='row'>
                <div className='col-md-6'>
                  <div className='form-group'>
                    <label>Artista</label>
                    <input
                      type='text'
                      className='form-control'
                      name='artista'
                      placeholder='Nombre Artista'
                      onChange={actualizarState}
                      value={artista}
                    ></input>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='form-group'>
                    <label>Cancion</label>
                    <input
                      type='text'
                      className='form-control'
                      name='cancion'
                      placeholder='Nombre Cancion'
                      onChange={actualizarState}
                      value={cancion}
                    ></input>
                  </div>
                </div>
              </div>
              <button type='submit' className='btn btn-primary float-right'>
                Buscar
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Formulario
