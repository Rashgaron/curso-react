import React, { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import {
  logInAction,
  logOutAction,
  logInGoogleAction
} from '../actions/authActions'

const Login = () => {
  const isEmpty = useSelector(state => state.firebaseReducer.auth.isEmpty)
  const [user, saveUser] = useState({
    email: '',
    password: ''
  })

  const dispatch = useDispatch()

  const handleChange = e => {
    saveUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log(user)

    if (user.email.trim() === '' || user.password.trim() === '') {
      return null
    }
    dispatch(logInAction(user.email, user.password))
    saveUser({
      email: '',
      password: ''
    })
  }

  const handleLogOut = () => {
    dispatch(logOutAction())
  }

  const handleLoginGoogle = () => {
    dispatch(logInGoogleAction())
  }
  return (
    <>
      <h1>Formulario de Login</h1>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label>Email</label>
          <input
            type='email'
            name='email'
            className='form-control'
            value={user.email}
            onChange={handleChange}
          ></input>
        </div>
        <div className='form-group'>
          <label>Password</label>
          <input
            type='password'
            name='password'
            className='form-control'
            value={user.password}
            onChange={handleChange}
          ></input>
        </div>

        {isEmpty ? (
          <button className='btn btn-success' type='submit'>
            Log In
          </button>
        ) : (
          <button
            className='btn btn-danger'
            type='button'
            onClick={handleLogOut}
          >
            Log Out
          </button>
        )}
      </form>
      <a href='#' onClick={handleLoginGoogle}>
        Login with google
      </a>
    </>
  )
}

export default Login
