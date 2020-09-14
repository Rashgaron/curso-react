import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { buscarContactoAction } from '../../actions/contactsActions'
const Buscador = ({tipo}) => {
  const [buscar, guardarBuscar] = useState('')
  const dispatch = useDispatch()
  useEffect(() => {
    
      
      dispatch(buscarContactoAction(buscar.trim(),tipo))
    // eslint-disable-next-line
  }, [buscar])
  return (
    <input
      className='form-control'
      type='text'
      placeholder='Search'
      aria-label='Search'
      value={buscar}
      onChange={e => guardarBuscar(e.target.value)}
    />
  )
}

export default Buscador
