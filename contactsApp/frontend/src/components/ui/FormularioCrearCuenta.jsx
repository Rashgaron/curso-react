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

  const[error, guardarError] = useState(false)
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
 
  const handleSubmit = e => {
    e.preventDefault()
    if (email.trim() === '' || password.trim() === '') {
      return
    } else {
      dispatch(registrarUsuarioAction({ email, password }))
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        {mensaje ? <p className='alert alert-danger'>{mensaje.msg}</p> : null}
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

        <button className='btn btn-success mt-3'>Login</button>
      </form>
      <Link to='/'>Iniciar sesión</Link>
    </>
  )
}

export default Formulario
