import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { buscarCartaAction } from '../../actions/cartasActions'
const Formulario = () => {
  const dispatch = useDispatch()
  const [options, saveOptions] = useState([
    {
      language: 'English',
      value: 'en'
    },
    {
      language: 'Spanish',
      value: 'es'
    },
    {
      language: 'French',
      value: 'fr'
    },
    {
      language: 'German',
      value: 'de'
    },
    {
      language: 'Italian',
      value: 'it'
    },
    {
      language: 'Portuguese',
      value: 'pt'
    },
    {
      language: 'Japanese',
      value: 'ja'
    },
    {
      language: 'Korean',
      value: 'ko'
    },
    {
      language: 'Russian',
      value: 'ru'
    },
    {
      language: 'Simplified Chinese',
      value: 'zhs'
    }
  ])
  const [carta, guardarCarta] = useState({
    nombre: '',
    language: 'en'
  })

  const { nombre } = carta

  const handleChange = e => {
    guardarCarta({
      ...carta,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = e => {
    e.preventDefault()

    if (nombre.trim() === '') {
      return null
    }

    dispatch(buscarCartaAction(carta))
    guardarCarta({
      nombre: '',
      language: 'en'
    })
  }

  useEffect(() => {
    // dispatch(buscarCartaAction(carta))
  }, [])
  return (
    <form className='w-75 row' onSubmit={handleSubmit}>
      <div className='form-group col-8'>
        <input
          type='text'
          className='form-control'
          placeholder='Nombre de la carta'
          value={nombre}
          name='nombre'
          onChange={handleChange}
        ></input>
      </div>
      <select
        className='form-control col-3'
        onChange={handleChange}
        name='language'
      >
        {options.map(option => (
          <option value={option.value}>{option.language}</option>
        ))}
      </select>
      <div className='col'>
        <button type='submit' className='btn btn-primary btn-large mt-2'>
          Buscar
        </button>
      </div>
    </form>
  )
}

export default Formulario
