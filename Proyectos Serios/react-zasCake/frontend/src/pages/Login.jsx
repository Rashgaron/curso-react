import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { logInAction } from '../actions/authActions'
import { useHistory } from 'react-router-dom'
const Login = () => {
  const history = useHistory()

  // redux
  const dispatch = useDispatch()

  const [usuario, guardarUsuario] = useState({
    email: '',
    password: ''
  })
  const { email, password } = usuario

  const [error, guardarError] = useState({
    error: false,
    msg: ''
  })

  const handleChange = e => {
    guardarUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    })
  }

  const guardarAlerta = msg => {
    guardarError({
      error: true,
      msg: msg
    })
    setTimeout(function () {
      guardarError({
        ...error,
        ['error']: false
      })
    }, 5000)
  }

  async function logIn (email, password) {
    const res = await dispatch(logInAction(email, password))
    if (res.message) {
      guardarAlerta(res.message)

      return
    } else {
      guardarUsuario({
        email: '',
        password: ''
      })
      history.push('/')
    }
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (email.trim() === '' || password.trim() === '') {
      let msg = ``
      if (email.trim() === '') msg += `Correo obligatorio`
      if (password.trim() === '') msg += `Contraseña obligatoria`
      guardarAlerta(msg)
      return
    }
    logIn(email, password)
  }

  return (
    <>
      <div className='row justify-content-center'>
        <div className='col-4 m-5'>
          <form onSubmit={handleSubmit}>
            {error.error ? (
              <div className='alert alert-danger' role='alert'>
                {error.msg}
              </div>
            ) : null}
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
