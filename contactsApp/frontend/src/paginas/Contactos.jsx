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
// import ReactSpinner from 'react-spinjs';
const Contactos = () => {
  const contactoSeleccionado = useSelector(
    state => state.contacts.contactoSeleccionado
  )

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(descargarContactosAction())
  }, [])
  useEffect(() => {
    dispatch(usuarioAutenticadoAction())
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
        <div className='row'>
          <div className='col-2 caja'>
            <ListaLetras></ListaLetras>
          </div>
          <div className='col-10 caja'>
            <ListaNombres></ListaNombres>
          </div>
        </div>
      </div>
      <div className='col-7'>
        <div className='row caja p-3'>
          <div className='col-8'>
            {contactoSeleccionado.length === 0 ? (
              <h3>Seleccione un contacto</h3>
            ) : (
              <>
                <div className='row'>
                  <div className='col-3'>
                    <img
                      src={contactoSeleccionado.avatar}
                      alt='avatar'
                      width='100%'
                    ></img>
                  </div>

                  <div className='col-6 mt-auto mb-auto d-flex'>
                    <h3>{contactoSeleccionado.name}</h3>
                  </div>
                </div>
              </>
            )}
          </div>
          <div className='col-4  text-right'>
            <Buscador tipo='conexiones'></Buscador>
            <button className='btn btn-danger mt-1' onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
        <div className='row'>
          <div className='col caja'>
            <ListaConexiones></ListaConexiones>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contactos
