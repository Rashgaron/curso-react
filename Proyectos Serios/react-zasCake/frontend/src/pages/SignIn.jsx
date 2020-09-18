import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { signInAction } from '../actions/authActions'
import { useHistory } from 'react-router-dom'
const SignIn = () => {
  const history = useHistory()
  // redux
  const dispatch = useDispatch()

  const [usuario, guardarUsuario] = useState({
    email: '',
    password: '',
    repassword: ''
  })
  const { email, password, repassword } = usuario

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

  async function signIn (email, password) {
    const res = await dispatch(signInAction(email, password))
    if (res.message) {
      guardarAlerta(res.message)

      return
    } else {
      guardarUsuario({
        email: '',
        password: '',
        repassword: ''
      })
      history.push('/')
    }
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (
      email.trim() === '' ||
      password.trim() === '' ||
      repassword.trim() === '' ||
      password.trim() !== repassword.trim()
    ) {
      let msg
      if (email.trim() === '') msg = `Correo obligatorio`
      if (password.trim() === '') msg += `\n Contraseña obligatoria`
      if (password.trim() !== repassword.trim())
        msg += `\n Las contraseñas deben coincidir`

      guardarAlerta(msg)
      return
    }
    signIn(email, password)
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
            <div className='form-group'>
              <label>Repite la contraseña:</label>
              <input
                className='form-control'
                placeholder='Introduce tu contraseña'
                name='repassword'
                type='password'
                value={repassword}
                onChange={handleChange}
              ></input>
            </div>
            <button type='submit' className='btn btn-dark'>
              SignIn
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default SignIn
