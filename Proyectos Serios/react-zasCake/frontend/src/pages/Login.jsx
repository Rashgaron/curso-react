import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { logInAction } from '../actions/authActions'
const Login = () => {
  // redux
  const dispatch = useDispatch()

  const [usuario, guardarUsuario] = useState({
    email: '',
    password: ''
  })
  const { email, password } = usuario
  const handleChange = e => {
    guardarUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (email.trim() === '' || password.trim() === '') {
      return
    }
    console.log(usuario)
    dispatch(logInAction(email, password))

    guardarUsuario({
      email: '',
      password: ''
    })
  }
  return (
    <>
      <div className='row justify-content-center'>
        <div className='col-4 m-5'>
          <form onSubmit={handleSubmit}>
            <div className='form-group'>
              <label>Correo:</label>
              <input
                className='form-control'
                placeholder='Introduce tu correo'
                name='email'
                type='email'
                value={email}
                onChange={handleChange}
              ></input>
            </div>
            <div className='form-group'>
              <label>Contraseña:</label>
              <input
                className='form-control'
                placeholder='Introduce tu contraseña'
                name='password'
                type='password'
                value={password}
                onChange={handleChange}
              ></input>
            </div>
            <button type='submit' className='btn btn-dark'>
              Entrar
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login
