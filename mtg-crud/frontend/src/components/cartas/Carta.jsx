import React, { useState, Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  guardarCartaAction,
  eliminarCartaAction,
  editarCartaAction
} from '../../actions/cartasActions'
const Carta = ({ carta, length }) => {
  const dispatch = useDispatch()
  let valorInicial = 0
  if (carta.cantidad) valorInicial = carta.cantidad

  const [cantidad, guardarCantidad] = useState(valorInicial)

  const handleClick = e => {
    if (cantidad === 0 && e < 0) return
    if (cantidad >= 0) guardarCantidad(cantidad + e)
  }
  if (!carta.image_uris) return null

  const guardarCartas = carta => {
    //Esto lo hago porque si igualo normal, se copia la referencia del objeto y trae problemas
    let nuevaCarta = JSON.parse(JSON.stringify(carta))
    nuevaCarta.cantidad = cantidad
    dispatch(guardarCartaAction(nuevaCarta))
  }

  let miCarta = false
  if (carta.cantidad || carta.cantidad === 0) miCarta = true

  console.log(carta.cantidad)
  if (length === 1) {
    return (
      <Fragment>
        <div className='col-12   justify-content-center d-flex'>
          <div className='card col-8 col-md-7 m-1 pt-3'>
            <img
              alt={carta.name}
              src={carta.image_uris.large}
              className='w-100 img-card'
            />

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
  } else
    return (
      <Fragment>
        <div className='col-12 col-md-5 col-lg-4 col-xl-3  justify-content-center d-flex'>
          <div className='card col-8 col-md-12 col-sm-7 m-1 pt-3'>
            <img
              alt={carta.name}
              src={carta.image_uris.large}
              className='w-100 img-card'
            />

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

export default Carta
