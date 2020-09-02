import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ListaCartas from '../cartas/ListaCartas'
import { descargarCartasAction } from '../../actions/cartasActions'
const MisCartas = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(descargarCartasAction())
  }, [])

  const misCartas = useSelector(state => state.carta.cartasGuardadas)
  
  return <ListaCartas seccion='MisCartas'></ListaCartas>
}

export default MisCartas
