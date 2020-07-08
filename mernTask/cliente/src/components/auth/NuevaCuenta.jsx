import React, { useState } from 'react'
import {Link} from 'react-router-dom'
const NuevaCuenta = () => {
  // State para iniciar sesión
  const [usuario, guardarUsuario] = useState({
    email: '',
    nombre:'',
    password: '',
    confirmar:'',
  })
  const [error, guardarError] = useState(false)
  const { email, nombre, password, confirmar } = usuario
  const onChange = dato => {
    guardarUsuario({
      ...usuario,
      [dato.target.name]: dato.target.value
    })
  }
  const handleSubmit=(e)=>{
      e.preventDefault()

      //Validar campos no vacíos

      if(email===''|| password===''|| nombre===''|| confirmar !== password || password.length<6){
          guardarError(true)
          return
      }
      else{
          guardarError(false)
      //Pasarlo al action

        guardarUsuario({
            nombre:'',
            email:'',
            password:'',
            confirmar:''
        })
    }
  }
  return (
    <div className='form-usuario'>
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
