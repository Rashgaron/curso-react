import React, { useState } from 'react'
import { Formulario, Campo, InputSubmit, Error } from '../ui/Formulario'
import { useHistory } from 'react-router-dom'
import firebase from '../../firebase/index'

// validaciones

import useValidacion from '../../hooks/useValidacion'
import validarIniciarSesion from '../../validacion/validarIniciarSesion'

const STATE_INICIAL = {
  email: '',
  password: ''
}

const Login = () => {
  const history = useHistory()
  const [error, guardarError] = useState(false)
  const {
    valores,
    errores,
    submitForm,
    handleSubmit,
    handleChange,
    handleBlur
  } = useValidacion(STATE_INICIAL, validarIniciarSesion, iniciarSesion)

  const { email, password } = valores

  async function iniciarSesion () {
    try {
      await firebase.login(email, password)
      history.push('/')
    } catch (error) {
      console.log('Hubo un error al autenticar el usuario ', error.message)
      guardarError(error.message)
    }
  }
  return (
    <div>
      <>
        <h1>Iniciar Sesión</h1>
        <Formulario onSubmit={handleSubmit}>
          <Campo>
            <label htmlFor='email'>Email:</label>
            <input
              type='email'
              id='email'
              placeholder='Tu email'
              name='email'
              value={email}
              onChange={handleChange}
              onBlur={handleBlur}
            ></input>
          </Campo>

          {errores.email && <Error>{errores.email}</Error>}
          <Campo>
            <label htmlFor='password'>Password:</label>
            <input
              type='password'
              id='password'
              placeholder='Tu password'
              name='password'
              value={password}
              onChange={handleChange}
              onBlur={handleBlur}
            ></input>
          </Campo>

          {errores.password && <Error>{errores.password}</Error>}
          {error && <Error>{error}</Error>}
          <InputSubmit type='submit' value='Iniciar sesión'></InputSubmit>
        </Formulario>
      </>
    </div>
  )
}

export default Login
