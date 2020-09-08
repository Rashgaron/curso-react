import React, { useEffect, useContext } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ListaCartas from '../cartas/ListaCartas'
import { descargarCartasAction } from '../../actions/cartasActions'
import { FirebaseContext } from '../../firebase/index'
const MisCartas = () => {
  const { usuario } = useContext(FirebaseContext)
  const cartaGuardada = useSelector(state => state.carta.cartaGuardada)
  const dispatch = useDispatch()
  useEffect(() => {
    if (cartaGuardada) {
      if (usuario) {
        dispatch(descargarCartasAction(usuario.uid))
        return
      }
    }
  }, [])

  // const misCartas = useSelector(state => state.carta.cartasGuardadas)

  return <ListaCartas seccion='MisCartas'></ListaCartas>
}

export default MisCartas
