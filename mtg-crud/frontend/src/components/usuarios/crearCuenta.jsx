import React, { useState } from 'react'
import { Formulario, Campo, InputSubmit, Error } from '../ui/Formulario'
import {useHistory} from 'react-router-dom'
import firebase from '../../firebase/index'

// validaciones

import useValidacion from '../../hooks/useValidacion'
import validarCrearCuenta from '../../validacion/validarCrearCuenta'
const STATE_INICIAL = {
  nombre: '',
  email: '',
  password: ''
}
const CrearCuenta = () => {
    const history = useHistory()
  const [error, guardarError] = useState(false)
  const {
    valores,
    errores,
    submitForm,
    handleSubmit,
    handleChange,
    handleBlur
  } = useValidacion(STATE_INICIAL, validarCrearCuenta, crearCuenta)

  const { nombre, email, password } = valores
  async function crearCuenta () {
    try {
      await firebase.registrar(nombre, email, password)
      history.push('/')
    } catch (error) {
      console.log('Hubo un error al crear el usuario ', error.message)
      guardarError(error.message)
    }
  }

  return (
    <div>
      <>
        <h1>Crear Cuenta</h1>
        <Formulario onSubmit={handleSubmit}>
          <Campo>
            <label htmlFor='nombre'>Nombre</label>
            <input
              type='text'
              id='nombre'
              placeholder='Tu nombre'
              name='nombre'
              value={nombre}
              onChange={handleChange}
              onBlur={handleBlur}
            ></input>
          </Campo>

          {errores.nombre && <Error>{errores.nombre}</Error>}
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
          <InputSubmit type='submit' value='Crear cuenta'></InputSubmit>
        </Formulario>
      </>
    </div>
  )
}

export default CrearCuenta
