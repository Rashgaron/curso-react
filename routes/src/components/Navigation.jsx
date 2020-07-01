import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'
import '../css/Navigation.css'
const Navigation = () => {
  return (
    <Fragment>
      <div className='row bg-light'>
        <Navbar expand='md' className='col col-4 col-md-6 '>
          <Navbar.Toggle aria-controls='basic-navbar-nav'></Navbar.Toggle>
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav>
              <NavLink
                exact
                activeClassName='active_link'
                className=' p-2 mr-2 text-dark nav_link'
                to='/'
              >
                Inicio
              </NavLink>
              <NavLink
                exact
                activeClassName='active_link'
                className=' p-2 mr-2 text-dark nav_link'
                to='/empresa'
              >
                Empresa
              </NavLink>
              <NavLink
                exact
                activeClassName='active_link'
                className=' p-2 mr-2 text-dark nav_link'
                to='/catalogo'
              >
                Catalogo
              </NavLink>
              <NavLink
                exact
                activeClassName='active_link'
                className=' p-2  text-dark nav_link'
                to='/contacto'
              >
                Contacto
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className='col col-s-3 col-md-6 p-2 '>
          <div>
            <a href='/'>
              <h2 id='enlace_titulo'>Muebles Mariano</h2>
            </a>
          </div>

        </div>

      </div>
    </Fragment>
  )
}

export default Navigation
