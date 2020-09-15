import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import { useSelector, useDispatch } from 'react-redux'
import { logOutAction } from '../../actions/authActions'
const Header = () => {
  const dispatch = useDispatch()
  const isEmpty = useSelector(state => state.firebaseReducer.auth.isEmpty)

  const handleClick = () => {
    dispatch(logOutAction())
    console.log('hola')
  }

  return (
    <>
      <div className='row justify-content-end bg-dark text-light'>
        {!isEmpty ? (
          <div className='col-auto'>
            {/* eslint-disable-next-line */}
            <a href='#' onClick={handleClick}>
              SignOut
            </a>
          </div>
        ) : (
          <>
            <div className='col-auto'>
              <Link to='/signIn'>SignIn</Link>
            </div>
            <div className='col-auto'>
              <Link to='/logIn'>LogIn</Link>
            </div>
          </>
        )}
      </div>
      <div className='row'>
        <Navbar></Navbar>
      </div>
    </>
  )
}

export default Header
