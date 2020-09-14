import React, { useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import alertaContext from '../../context/alertas/alertaContext'
import AuthContext from '../../context/autenticacion/authContext'
const NuevaCuenta = props => {
  // Obtener el context

  const alertasContext = useContext(alertaContext)
  const { alerta, mostrarAlerta } = alertasContext

  const authContext = useContext(AuthContext)
  const { mensaje, autenticado, registrarUsuario } = authContext

  // En caso de que el usuario se haya autenticado
  // o registrado o sea un registro duplicado

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
    nombre: '',
    password: '',
    confirmar: ''
  })
  const { email, nombre, password, confirmar } = usuario
  const onChange = dato => {
    guardarUsuario({
      ...usuario,
      [dato.target.name]: dato.target.value
    })
  }
  const handleSubmit = e => {
    e.preventDefault()

    //Validar campos no vacíos

    if (
      password.trim() === '' ||
      email.trim() === '' ||
      nombre.trim() === '' ||
      confirmar.trim() === ''
    ) {
      mostrarAlerta('Todos los campos son obligatorios', 'alerta-error')
      // guardarError(true)
      return
    }

    // Password 6 caracteres mínimo

    if (password.length < 6) {
      mostrarAlerta('Password de al menos 6 carácteres', 'alerta-error')
      return
    }

    if (password !== confirmar) {
      mostrarAlerta('Los passwords no son iguales', 'alerta-error')
      return
    }

    // Pasarlo al action

    registrarUsuario({
      nombre,
      email,
      password
    })
  }
  return (
    <div className='form-usuario'>
      {alerta ? (
        <div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>
      ) : null}
      <div className='contenedor-form sombra-dark'>
        <h1>Obtener cuenta</h1>
        <form onSubmit={handleSubmit}>
          <div className='campo-form'>
            <label htmlFor='email'>Nombre</label>
            <input
              type='text'
              id='nombre'
              name='nombre'
              placeholder='Tu Nombre'
              value={nombre}
              onChange={onChange}
            ></input>
          </div>
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
            <label htmlFor='confirmar'>Confirmar Password</label>
            <input
              type='password'
              id='confirmar'
              name='confirmar'
              placeholder='Tu password'
              value={confirmar}
              onChange={onChange}
            ></input>
          </div>
          <div className='campo-form'>
            <input
              type='submit'
              className='btn btn-primario btn-block'
              value='Registrarme'
            ></input>
          </div>
        </form>
        <Link to={'/'} className='enlace-cuenta'>
          Volver a Iniciar Sesión
        </Link>
      </div>
    </div>
  )
}

export default NuevaCuenta
