import React from 'react'
import { useDispatch } from 'react-redux'
import styled from '@emotion/styled'
import {
  seleccionarContactoAction,
  buscarConexionesAction
} from '../../actions/contactsActions'
const Lista = styled.li`
  list-style: none;
`

const Contacto = ({ contacto   }) => {
  const dispatch = useDispatch()

  const handleClick = e => {
    dispatch(seleccionarContactoAction(contacto))
    dispatch(buscarConexionesAction())
     
  }

  if(contacto.end === 'true') return null
  return (
    <Lista>
      <a href='#' className='enlace-contacto' onClick={handleClick}>
        {contacto.name}
      </a>
    </Lista>
  )
}

export default Contacto
