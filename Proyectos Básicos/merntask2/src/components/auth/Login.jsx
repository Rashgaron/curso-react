import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const Login = () => {
  // State para iniciar sesión

  const [usuario, guardarUsuario] = useState({
    email: '',
    password: ''
  })

  const { email, password } = usuario

  const onChange = e => {
    guardarUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    })
  }
  const onSubmit = event => {
    event.preventDefault()

    // Validar que no haya campos vacíos

    // Pasarlo al action
  }
  return (
    <div className='form-usuario'>
      <div className='contenedor-form sombra-dark'>
        <h1>Iniciar Sesión</h1>
        <form onSubmit={onSubmit}>
          <div className='campo-form'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              id='email'
              name='email'
              placeholder='Tu Email'
              value={email}
              onChange={onChange}
            ></input>
          </div>
          <div className='campo-form'>
            <label htmlFor='password'>password</label>
            <input
              type='password'
              id='password'
              name='password'
              placeholder='Tu password'
              value={password}
              onChange={onChange}
            ></input>
          </div>
          <div className='campo-form'>
            <input
              type='submit'
              className='btn btn-primario btn-block'
              value='Iniciar Sesión'
            ></input>
          </div>
        </form>
        <Link to={'/nueva-cuenta'} className='enlace-cuenta'>
          Obtener Cuenta
        </Link>
      </div>
    </div>
  )
}

export default Login
