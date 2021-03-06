import React, { useState, Fragment, useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FirebaseContext } from '../../firebase/index'
import {
  guardarCartaAction,
  eliminarCartaAction,
  editarCartaAction
} from '../../actions/cartasActions'
import _ from 'lodash'

const Carta = ({ carta, length }) => {
  const { usuario } = useContext(FirebaseContext)
  const cartasGuardadas = useSelector(state => state.carta.cartasGuardadas)
  const dispatch = useDispatch()
  let valorInicial = 0
  if (carta.cantidad) valorInicial = carta.cantidad

  const [cantidad, guardarCantidad] = useState(valorInicial)

  const handleClick = e => {
    if (cantidad === 0 && e < 0) return
    if (cantidad >= 0) guardarCantidad(cantidad + e)
  }
  if (!carta.image_uris & !carta.img_large) return null

  const guardarCartas = carta => {
    let indice = _.findIndex(cartasGuardadas, {
      id: carta.id
    })

    console.log(usuario.uid)
    if (indice !== -1) {
      let nuevaCarta = {}
      nuevaCarta.id = carta.id
      nuevaCarta.cantidad = cantidad + cartasGuardadas[indice].cantidad
      nuevaCarta.propietario = usuario.uid
      dispatch(editarCartaAction(nuevaCarta))
    } else {
      //Esto lo hago porque si igualo normal, se copia la referencia del objeto y trae problemas
      let nuevaCarta = JSON.parse(JSON.stringify(carta))
      nuevaCarta.cantidad = cantidad
      nuevaCarta.propietario = usuario.uid
      dispatch(guardarCartaAction(nuevaCarta))
    }
  }

  let miCarta = false
  if (carta.cantidad || carta.cantidad === 0) {
    miCarta = true
  }

  if (length === 1) {
    if (!usuario) {
      return (
        <div className='col-12   justify-content-center d-flex'>
          <div className='card col-8 col-md-7 m-1 pt-3 pb-3'>
            {miCarta ? (
              <img
                alt={carta.name}
                src={carta.img_large}
                className='w-100 img-card'
              />
            ) : (
              <img
                alt={carta.name}
                src={carta.image_uris.large}
                className='w-100 img-card'
              />
            )}
          </div>
        </div>
      )
    } else
      return (
        <Fragment>
          <div className='col-12   justify-content-center d-flex'>
            <div className='card col-8 col-md-7 m-1 pt-3'>
              {miCarta ? (
                <img
                  alt={carta.name}
                  src={carta.img_large}
                  className='w-100 img-card'
                />
              ) : (
                <img
                  alt={carta.name}
                  src={carta.image_uris.large}
                  className='w-100 img-card'
                />
              )}

              <div className='card-body'>
                <div className='row'>
                  <div className='col justify-content-between d-flex'>
                    <button
                      type='button'
                      className='btn btn-danger'
                      onClick={() => handleClick(-1)}
                    >
                      -
                    </button>
                    <p>{cantidad}</p>
                    <button
                      type='button'
                      className='btn btn-success'
                      onClick={() => handleClick(1)}
                    >
                      +
                    </button>
                  </div>

                  {miCarta ? (
                    <div className='col-12 justify-content-around mt-2 d-flex'>
                      <div className='row'>
                        <button
                          type='button'
                          className='btn btn-warning'
                          onClick={() => {
                            //Esto lo hago porque si igualo normal, se copia la referencia del objeto y trae problemas
                            let nuevaCarta = JSON.parse(JSON.stringify(carta))
                            nuevaCarta.cantidad = cantidad
                            dispatch(editarCartaAction(nuevaCarta))
                          }}
                        >
                          Editar
                        </button>
                      </div>
                      <div className='row'>
                        <button
                          type='button'
                          className='btn btn-danger'
                          onClick={() => {
                            dispatch(eliminarCartaAction(carta))
                          }}
                        >
                          Eliminar
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className='col-12 justify-content-center d-flex'>
                      <button
                        type='button'
                        className='btn btn-primary'
                        onClick={() => {
                          guardarCartas(carta)
                          guardarCantidad(0)
                        }}
                      >
                        Agregar
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Fragment>
      )
  } else {
    if (!usuario) {
      return (
        <div className='col-12 col-md-5 col-lg-4 col-xl-3  justify-content-center d-flex'>
          <div className='card col-8 col-md-12 col-sm-7 m-1  pt-3 pb-3'>
            {miCarta ? (
              <img
                alt={carta.name}
                src={carta.img_large}
                className='w-100 img-card'
              />
            ) : (
              <img
                alt={carta.name}
                src={carta.image_uris.large}
                className='w-100 img-card'
              />
            )}
          </div>
        </div>
      )
    }
    return (
      <Fragment>
        <div className='col-12 col-md-5 col-lg-4 col-xl-3  justify-content-center d-flex'>
          <div className='card col-8 col-md-12 col-sm-7 m-1 pt-3'>
            {miCarta ? (
              <img
                alt={carta.name}
                src={carta.img_large}
                className='w-100 img-card'
              />
            ) : (
              <img
                alt={carta.name}
                src={carta.image_uris.large}
                className='w-100 img-card'
              />
            )}

            <div className='card-body'>
              <div className='row'>
                <div className='col justify-content-between d-flex'>
                  <button
                    type='button'
                    className='btn btn-danger'
                    onClick={() => handleClick(-1)}
                  >
                    -
                  </button>
                  <p>{cantidad}</p>
                  <button
                    type='button'
                    className='btn btn-success'
                    onClick={() => handleClick(1)}
                  >
                    +
                  </button>
                </div>
                <div className='col-12 justify-content-center d-flex'>
                  {miCarta ? (
                    <div className='col-12 justify-content-between mt-2 d-flex'>
                      <div className='row'>
                        <button
                          type='button'
                          className='btn btn-warning'
                          onClick={() => {
                            //Esto lo hago porque si igualo normal, se copia la referencia del objeto y trae problemas
                            let nuevaCarta = JSON.parse(JSON.stringify(carta))
                            nuevaCarta.cantidad = cantidad
                            dispatch(editarCartaAction(nuevaCarta))
                          }}
                        >
                          Editar
                        </button>
                      </div>
                      <div className='row'>
                        <button
                          type='button'
                          className='btn btn-danger'
                          onClick={() => {
                            dispatch(eliminarCartaAction(carta))
                          }}
                        >
                          Eliminar
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className='col-12 justify-content-center d-flex'>
                      <button
                        type='button'
                        className='btn btn-primary'
                        onClick={() => {
                          guardarCartas(carta)
                          guardarCantidad(0)
                        }}
                      >
                        Agregar
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default Carta
