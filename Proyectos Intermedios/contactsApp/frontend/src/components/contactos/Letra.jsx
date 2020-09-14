import React from 'react'
import { useDispatch } from 'react-redux'
import { buscarLetraAction } from '../../actions/contactsActions'
const Letra = ({ letra }) => {
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(buscarLetraAction(letra))
  }
  return (
    <button className='btn-letra col-12  ' onClick={handleClick}>
      {letra}
    </button>
  )
}

export default Letra
