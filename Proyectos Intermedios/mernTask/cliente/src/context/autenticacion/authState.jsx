import React, { useReducer } from 'react'
import authReducer from './authReducer'
import authContext from './authContext'
import clienteAxios from '../../config/axios'
import tokenAuth from '../../config/tokenAuth'
import {
  REGISTRO_EXITOSO,
  REGISTRO_ERROR,
  OBTENER_USUARIO,
  LOGIN_EXITOSO,
  LOGIN_ERROR,
  CERRAR_SESION
} from '../../types'
const AuthState = props => {
  const initialState = {
    token: localStorage.getItem('token'),
    autenticado: null,
    usuario: null,
    mensaje: null,
    cargando: true
  }

  const [state, dispatch] = useReducer(authReducer, initialState)

  // Las funciones

  const registrarUsuario = async datos => {
    try {
      const respuesta = await clienteAxios.post('/api/usuarios', datos)
      console.log(respuesta)
      dispatch({
        type: REGISTRO_EXITOSO,
        payload: respuesta.data
      })

      // Obtener el usuario

      usuarioAutenticado()
    } catch (error) {
      console.log(error.response)
      const alerta = {
        msg: error.response.data.msg,
        categoria: 'alerta-error'
      }
      dispatch({
        type: REGISTRO_ERROR,
        payload: alerta
      })
    }
  }

  // Retorna el usuario autenticado

  const usuarioAutenticado = async () => {
    const token = localStorage.getItem('token')
    if (token) {
      // Todo: Función para enviar el token por headers
      tokenAuth(token)
    }

    try {
      const respuesta = await clienteAxios.get('/api/auth')
      // console.log(respuesta)

      dispatch({
        type: OBTENER_USUARIO,
        payload: respuesta.data
      })
    } catch (err) {
      console.log(err.response)
      dispatch({
        type: LOGIN_ERROR
      })
    }
  }

  // Cuando el usuario inicia sesión

  const iniciarSesion = async datos => {
    try {
      const respuesta = await clienteAxios.post('/api/auth', datos)
      console.log(respuesta)

      dispatch({
        type: LOGIN_EXITOSO,
        payload: respuesta.data
      })

      // Obtener el usuario
      usuarioAutenticado()
    } catch (err) {
      console.log(err.response.data.msg)
      const alerta = {
        msg: err.response.data.msg,
        categoria: 'alerta-error'
      }
      dispatch({
        type: LOGIN_ERROR,
        payload: alerta
      })
    }
  }

  // Cierra la sesión del usuario

  const cerrarSesion = () => {
    dispatch({ type: CERRAR_SESION })
  }
  return (
    <authContext.Provider
      value={{
        token: state.stoken,
        autenticado: state.autenticado,
        usuario: state.usuario,
        mensaje: state.mensaje,
        cargando: state.cargando,
        registrarUsuario,
        usuarioAutenticado,
        iniciarSesion,
        cerrarSesion
      }}
    >
      {props.children}
    </authContext.Provider>
  )
}

export default AuthState
