import React, { useState } from 'react'
import {Link} from 'react-router-dom'
const Login = () => {
  // State para iniciar sesión
  const [usuario, guardarUsuario] = useState({
    email: '',
    password: ''
  })
  const [error, guardarError] = useState(false)
  const { email, password } = usuario
  const onChange = dato => {
    guardarUsuario({
      ...usuario,
      [dato.target.name]: dato.target.value
    })
  }
  const handleSubmit=(e)=>{
      e.preventDefault()

      //Validar campos no vacíos

      if(email===''|| password===''){
          guardarError(true)
          return
      }
      else{
          guardarError(false)
      //Pasarlo al action
    }
  }
  return (
    <div className='form-usuario'>
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
