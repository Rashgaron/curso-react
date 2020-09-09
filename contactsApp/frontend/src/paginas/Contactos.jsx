import React, { useEffect } from 'react'
import Buscador from '../components/ui/Buscador'
import ListaLetras from '../components/contactos/ListaLetras'
import ListaNombres from '../components/contactos/ListaContactos'
import ListaConexiones from '../components/contactos/ListaConexiones'
import { useSelector, useDispatch } from 'react-redux'
import { descargarContactosAction } from '../actions/contactsActions'
import {
  cerrarSesionAction,
  usuarioAutenticadoAction
} from '../actions/authActions'
import styled from '@emotion/styled'


const Contactos = () => {
  const contactoSeleccionado = useSelector(
    state => state.contacts.contactoSeleccionado
  )

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(descargarContactosAction())
    // eslint-disable-next-line
  }, [])
  useEffect(() => {
    dispatch(usuarioAutenticadoAction())
    // eslint-disable-next-line
  }, [])
  const handleLogout = () => {
    dispatch(cerrarSesionAction())
  }
  return (
    <div className='row mt-2'>
      <div className='col-5'>
        <div className='row'>
          <div className='col-12 caja p-3'>
            <Buscador tipo='general'></Buscador>
          </div>
        </div>
        <div className='row  d-md-flex contenedor-lateral mt-2'>
          <div className='col-2 d-none d-md-flex caja p-0 '>
            <ListaLetras></ListaLetras>
          </div>
          <div className='col-9 caja'>
            <ListaNombres></ListaNombres>
          </div>
        </div>
      </div>
      <div className='col-7'>
        <div className='row caja p-3'>
          <div className='col-12 col-lg-6'>
            {contactoSeleccionado.length === 0 ? (
              <h3 className='titulo'>Seleccione un contacto</h3>
            ) : (
              <>
                <div className='row'>
                  <div className='col-6 col-lg-5'>
                    <img
                      src={contactoSeleccionado.avatar}
                      alt='avatar'
                      width='100%'
                    ></img>
                  </div>

                  <div className='col-6 col-lg-7 mt-auto mb-auto d-flex'>
                    <h3 className='titulo'>{contactoSeleccionado.name}</h3>
                  </div>
                </div>
              </>
            )}
          </div>
          <div className='col-12 col-lg-6  text-right'>
            <Buscador tipo='conexiones'></Buscador>
            <button className='btn btn-danger mt-1' onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
        <div className='row contenedor-derecho mt-2'>
          <div className='col caja'>
            <ListaConexiones></ListaConexiones>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contactos
