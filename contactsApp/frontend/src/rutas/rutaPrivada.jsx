import React, { useEffect } from 'react'

import { Route, Redirect } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { usuarioAutenticadoAction } from '../actions/authActions'

const RutaPrivada = ({ component: Component, ...props }) => {
  const autenticado = useSelector(state => state.auth.autenticado)
  const cargando = useSelector(state => state.auth.cargando)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(usuarioAutenticadoAction())
    // eslint-disable-nex-line
  }, [])

  return (
    <Route
      {...props}
      render={props =>
        !autenticado && !cargando ? (
          <Redirect to='/'></Redirect>
        ) : (
          <Component {...props}></Component>
        )
      }
    ></Route>
  )
}

export default RutaPrivada
