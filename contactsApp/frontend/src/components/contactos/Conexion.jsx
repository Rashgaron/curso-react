import React from 'react'
import { useDispatch } from 'react-redux'
import {
  seleccionarContactoAction,
  buscarConexionesAction
} from '../../actions/contactsActions'

const Conexion = ({ conexion }) => {
  const dispatch = useDispatch()

  const handleClick = e => {
    dispatch(seleccionarContactoAction(conexion))
    dispatch(buscarConexionesAction())
  }
  if(conexion.end ==='true') return null

  return (
    <div className='m-3 caja-conexion' onClick={handleClick}>
      <img src={conexion.avatar} alt='imagen conexion' width='100%'></img>
      <p className='text-center'>{conexion.name}</p>
    </div>
  )
}

export default Conexion
