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
  }

  return (
    <>
      <div className='row justify-content-end bg-dark text-light p-1 align-items-center'>
        {!isEmpty ? (
          <div className='col-auto'>
            {/* eslint-disable-next-line */}
            <button
              className='btn btn-danger btn-sm'
              onClick={handleClick}
            >SignOut</button>
          </div>
        ) : (
          <>
            <div className='col-auto'>
              <Link to='/signIn' className='btn btn-success'>SignIn</Link>
            </div>
            <div className='col-auto'>
              <Link to='/logIn' className='btn btn-primary btn-sm'>LogIn</Link>
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
