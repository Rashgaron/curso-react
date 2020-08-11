import React, { useState, useContext } from 'react'
import datoContext from '../context/datoContext'
const Formulario = () => {
  const datosContext = useContext(datoContext)
  const { guardarDato } = datosContext

  const [busqueda, guardarBusqueda] = useState({
    tema: '',
    tipo: ''
  })

  const { tema, tipo } = busqueda

  const handleChange = e => {
    guardarBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()

    if (tema.trim() === '' || tipo === '') {
      return
    } else {
      guardarDato(busqueda)

      guardarBusqueda({
        tema: '',
        tipo: ''
      })
    }
  }
  return (
    <form className='form col-12' onSubmit={handleSubmit}>
      <div className='row justify-content-center p-2'>
        <div className='form-group col-12 col-md-8 col-lg-9'>
          <input
            type='text'
            className='form-control'
            placeholder='Tema a buscar'
            onChange={handleChange}
            value={tema}
            name='tema'
          ></input>
        </div>

        <select
          className='form-control d-flex col-11 col-md-4 col-lg-3 '
          onChange={handleChange}
          value={tipo}
          name='tipo'
        >
          <option value=''>---Selecciona un tipo---</option>
          <option value='stickers'>Stickers</option>
          <option value='gifs'>Gifs</option>
        </select>

        <div className='col justify-content-center d-flex mt-5'>
          <input
            type='submit'
            className='btn btn-success col-4'
            value='Buscar'
          ></input>
        </div>
      </div>
    </form>
  )
}

export default Formulario
