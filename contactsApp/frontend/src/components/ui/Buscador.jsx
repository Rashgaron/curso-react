import React, { useState, useEffect } from 'react'
import {useDispatch} from 'react-redux'
import {buscarContactoAction} from '../../actions/contactsActions'
const Buscador = () => {

  const [buscar, guardarBuscar] = useState('')

  useEffect(()=>{
    if(buscar.trim() !==''){
      dispatch(buscarContactoAction(buscar))
    }


  },[])
  return (
    <input
      className='form-control'
      type='text'
      placeholder='Search'
      aria-label='Search'
      value={buscar}
      onChange={(e)=>guardarBuscar(e.target.value)}
    />
  )
}

export default Buscador
