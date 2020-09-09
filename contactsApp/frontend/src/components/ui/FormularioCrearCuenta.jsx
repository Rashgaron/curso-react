import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { registrarUsuarioAction } from '../../actions/authActions'
import { useHistory, Link } from 'react-router-dom'
const Formulario = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const autenticado = useSelector(state => state.auth.autenticado)
  const mensaje = useSelector(state => state.auth.mensaje)
  if (mensaje) console.log(mensaje.msg)
  const [usuario, guardarUsuario] = useState({
    email: '',
    password: '',
    remember: false
  })

  const { email, password, remember } = usuario
  const [sucedeError, guardarSucedeError] = useState(false)
  const [error, guardarError] = useState(false)
  const handleChange = e => {
    guardarUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    })
  }
  const handleCheck = e => {
    let estado = remember ? false : true
    guardarUsuario({
      ...usuario,
      remember: estado
    })
  }

  useEffect(() => {
    if (autenticado) history.push('/contactos')
  }, [mensaje, autenticado, history])

  useEffect(() => {
    if (mensaje) guardarSucedeError(true)

    setInterval(function () {
      guardarSucedeError(false)
    }, 6000)
  }, [mensaje])

  const handleSubmit = e => {
    e.preventDefault()
    if (email.trim() === '' || password.trim() === '') {
      guardarError(true)

      setInterval(function () {
        guardarError(false)
      }, 6000)
      return
    } else {
      guardarError(false)
      dispatch(registrarUsuarioAction({ email, password }))
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        {sucedeError ? (
          <p className='alert alert-danger'>{mensaje.msg}</p>
        ) : null}
        {error ? (
          <p className='alert alert-danger'>Fallo con contraseña o email</p>
        ) : null}

        <div className='form-group'>
          <input
            className='form-control'
            placeholder='Email Address'
            type='email'
            name='email'
            value={email}
            onChange={handleChange}
          ></input>
        </div>
        <div className='form-group'>
          <input
            className='form-control'
            placeholder='Password'
            type='password'
            name='password'
            value={password}
            onChange={handleChange}
          ></input>
        </div>

        <button className='btn btn-success mt-3'>Sign Up</button>
      </form>
      <Link to='/'>Iniciar sesión</Link>
    </>
  )
}

export default Formulario
