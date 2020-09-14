import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'

const Formulario = ({ guardarUsuario }) => {
  const [user, guardarDatos] = useState({
    usuario: '',
    password: ''
  })
  const { usuario, password } = user
  const [errorLogin, guardarErrorLogin] = useState(false)
  const [error, guardarError] = useState(false)

  const handleChange = e => {
    guardarDatos({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (usuario === '' || password === '') {
      guardarError(true)
      guardarErrorLogin(false)
      return
    }
    guardarError(false)
    guardarUsuario(user)
    guardarDatos({
      usuario: '',
      password: ''
    })
  }

  const buscarUsuario = () => {
    axios
      .post('https://crud-login-dani.herokuapp.com/login', user)
      .then(res => {
        console.log(res.data)
        if (res.data.length === 0) {
          guardarErrorLogin(false)
          axios
            .post('https://crud-login-dani.herokuapp.com/login/add', user)
            .then(res => {
              console.log(res.data)
            })
            .catch(err => console.log(err))
        } else {
          console.log('el usuario ya existe')
          guardarErrorLogin(true)
        }
      })
      .catch(err => console.log(err))
  }
  const newUser = () => {
    if (user.usuario.trim() !== '' && user.password.trim() !== '')
      buscarUsuario()
  }
  return (
    <div className='mt-2 col'>
      <h2 className=''>Iniciar sesión</h2>

      {error ? (
        <div className='alert alert-danger' role='alert'>
          Todos los campos son obligatorios
        </div>
      ) : null}
      {errorLogin ? (
        <div className='alert alert-danger' role='alert'>
          No se ha podido crear el usuario
        </div>
      ) : null}
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label>Usuario:</label>
          <input
            type='text'
            name='usuario'
            placeholder='Introduce tu usuario ...'
            className='form-control'
            onChange={handleChange}
            value={usuario}
          ></input>
        </div>

        <div className='form-group'>
          <label>Contraseña:</label>
          <input
            type='password'
            name='password'
            className='form-control'
            onChange={handleChange}
            value={password}
          ></input>
        </div>
        <div className='row p-0 m-0 d-flex justify-content-between '>
          <button type='submit' className='btn btn-primary col-4 p-1 '>
            Login
          </button>
        </div>
      </form>
      <button
        onClick={newUser}
        className='btn btn-success text-white waves-effect col-4 p-1 mt-2'
      >
        Register
      </button>
    </div>
  )
}

export default Formulario
