import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { iniciarSesionAction } from '../../actions/authActions'
import { useHistory, Link } from 'react-router-dom'
const Formulario = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const autenticado = useSelector(state => state.auth.autenticado)
  let mensaje = useSelector(state => state.auth.mensaje)
  const [usuario, guardarUsuario] = useState({
    email: '',
    password: '',
    remember: false
  })

  const [error, guardarError] = useState(false)
  const { email, password, remember } = usuario

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
    let rem = localStorage.getItem('remember')
    console.log(rem)
    if (rem === 'true') {
      let email = localStorage.getItem('email')
      guardarUsuario({
        ...usuario,
        ['email']: email,
        ['remember']: rem === 'true'
      })
    }
    // eslint-disable-next-line
  }, [])

  const [sucedeError, guardarSucedeError] = useState(false)
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
      dispatch(iniciarSesionAction({ email, password }))
    }
    localStorage.setItem('remember', remember)
    if (remember) {
      localStorage.setItem('email', email)
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
        <div className='form-check'>
          <input
            className='form-check-input'
            type='checkbox'
            name='remember'
            checked={remember}
            onChange={handleCheck}
          ></input>
          <label className='form-check-label'>Remember me</label>
        </div>
        <button className='btn btn-success mt-3'>Login</button>
      </form>
      <Link to='/crear-cuenta'>Registrarme</Link>
    </>
  )
}

export default Formulario
