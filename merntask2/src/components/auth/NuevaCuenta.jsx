import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const NuevaCuenta = () => {
  // State para iniciar sesión

  const [usuario, guardarUsuario] = useState({
    nombre: '',
    email: '',
    password: '',
    confirmar: ''
  })

  const { nombre, email, password, confirmar } = usuario

  const onChange = e => {
    guardarUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    })
  }
  const onSubmit = event => {
    event.preventDefault()

    // Validar que no haya campos vacíos


    // Password mínimo de 6 carácteres

    //Los 2 passwords son iguales


    
    // Pasarlo al action
  }
  return (
    <div className='form-usuario'>
      <div className='contenedor-form sombra-dark'>
        <h1>Iniciar Sesión</h1>
        <form onSubmit={onSubmit}>
          <div className='campo-form'>
            <label htmlFor='nombre'>Nombre</label>
            <input
              type='text'
              id='nombre'
              name='nombre'
              placeholder='Tu nombre'
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
            <label htmlFor='confirmar'>Confirmar password</label>
            <input
              type='password'
              id='confirmar'
              name='confirmar'
              placeholder='Repite tu password'
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
        <Link to={'/'} className='enlace-cuenta'>Iniciar Sesión</Link>
      </div>
    </div>
  )
}

export default NuevaCuenta
