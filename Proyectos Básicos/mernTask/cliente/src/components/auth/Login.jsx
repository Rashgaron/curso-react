import React, { useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import alertaContext from '../../context/alertas/alertaContext'
import AuthContext from '../../context/autenticacion/authContext'
const Login = props => {
  // Obtener el context

  const alertasContext = useContext(alertaContext)
  const { alerta, mostrarAlerta } = alertasContext

  const authContext = useContext(AuthContext)
  const { mensaje, autenticado, iniciarSesion } = authContext

  // En caso de que el password o usuario no exista
  useEffect(() => {
    if (autenticado) props.history.push('/proyectos')

    if (mensaje) {
      mostrarAlerta(mensaje.msg, mensaje.categoria)
    }
        // eslint-disable-next-line
  }, [mensaje, autenticado, props.history])
  // State para iniciar sesión
  const [usuario, guardarUsuario] = useState({
    email: '',
    password: ''
  })
  const { email, password } = usuario
  const onChange = dato => {
    guardarUsuario({
      ...usuario,
      [dato.target.name]: dato.target.value
    })
  }
  const handleSubmit = e => {
    e.preventDefault()

    //Validar campos no vacíos

    if (email.trim() === '' || password.trim() === '') {
      mostrarAlerta('Todos los campos son obligatorios', 'alerta-error')
      return
    } else {
      //Pasarlo al action

      iniciarSesion({ email, password })
    }
  }

  return (
    <div className='form-usuario'>
      {alerta ? (
        <div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>
      ) : null}
      <div className='contenedor-form sombra-dark'>
        <h1>Iniciar Sesión</h1>
        <form onSubmit={handleSubmit}>
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
            <label htmlFor='password'>Password</label>
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
          Obtener cuenta
        </Link>
      </div>
    </div>
  )
}

export default Login
