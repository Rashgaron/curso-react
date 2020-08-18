import React, { useContext, useEffect } from 'react'
import AuthContext from '../../context/autenticacion/authContext'

const Barra = () => {
  // Extraer la información de autenticación

  const authContext = useContext(AuthContext)
  const { usuario, usuarioAutenticado, cerrarSesion } = authContext

  useEffect(() => {
    usuarioAutenticado()
  }, [])
  console.log(usuario)

  return (
    <header className='app-header'>
      {usuario ? (
        <p className='nombre-usuario'>
          Hola <span>{usuario.usuario.nombre}</span>
        </p>
      ) : null}

      <nav className='nav-principal'>
        <button
          className='btn btn-blank cerrar-sesion text-white'
          onClick={() => cerrarSesion()}
        >
          Cerrar Sesion
        </button>
      </nav>
    </header>
  )
}

export default Barra
