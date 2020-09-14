import React from 'react'
const Login = ({ user, guardarLogin }) => {
  const { usuario } = user
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12 d-flex justify-content-center'>
          <h2>Bienvenid@ {usuario}</h2>
        </div>
        <div className='col d-flex justify-content-center'>
          <button
            className='btn btn-danger'
            onClick={() => guardarLogin(false)}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login
