import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { FirebaseContext } from '../../firebase/index'
import { useDispatch } from 'react-redux'
import { logoutAction } from '../../actions/cartasActions'
import styled from '@emotion/styled'

const TextoBotones = styled.button`
  font-size: 10px;

  @media (min-width:600px){
    font-size:15px
  }
`
const Header = () => {
  const dispatch = useDispatch()
  const { firebase, usuario } = useContext(FirebaseContext)
  const history = useHistory()
  const redireccionar = url => {
    history.push(url)
  }
  const logOut = () => {
    firebase.cerrarSesion()
    dispatch(logoutAction())
    redireccionar('/')
  }
  return (
    <div>
      <div className='row header-img'>
        <div className='col d-flex '>
          <h1 className='title-header'>MTG DB</h1>
        </div>
      </div>

      <div className='row '>
        <div className='col d-flex justify-content-end mt-3'>
          {usuario ? (
            <>
              <div className='col-3 col-md-2 justify-content-end d-flex '>
                <button
                  className='btn btn-danger '
                  type='button'
                  onClick={() => logOut()}
                >
                  Log Out
                </button>
              </div>
            </>
          ) : (
            <>
              <div className='col-3 col-md-2 justify-content-end d-flex '>
                <TextoBotones
                  className='btn btn-danger '
                  type='button'
                  onClick={() => redireccionar('/crear-cuenta')}
                >
                 Sign In
                </TextoBotones>
              </div>
              <div className='col-3 col-md-3 justify-content-end d-flex '>
                <TextoBotones
                  className='btn btn-danger'
                  type='button'
                  onClick={() => redireccionar('/login')}
                >
                  Log In
                </TextoBotones>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Header
