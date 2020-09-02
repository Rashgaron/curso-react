import React, { Fragment } from 'react'
import Carta from './Carta'

import { useSelector } from 'react-redux'
const ListaCartas = ({ seccion }) => {
  let busqueda = useSelector(state => state.carta.cartas)
  let misCartas = useSelector(state => state.carta.cartasGuardadas)

  let cartas = misCartas
  if (seccion === 'Busqueda') cartas = busqueda
   const cartaBusqueda = useSelector(state => state.carta.cartaBuscar.nombre)
  const loading = useSelector(state => state.carta.loading)
  const error = useSelector(state => state.carta.error)
  const busquedaCorrecta = useSelector(state => state.carta.busquedaCorrecta)
  let mostrarBusqueda = false

  if ((seccion === 'Busqueda') & busquedaCorrecta) mostrarBusqueda = true
  if ((seccion !== 'Busqueda') & (cartas.length === 0))
    return (
      <div className='row justify-content-center mt-2'>
        <p>Agrega cartas en el menú de Búsqueda</p>
      </div>
    )
  return (
    <Fragment>
      <div>
        <div className='row justify-content-center p-3'>
          {mostrarBusqueda ? (
            <h1 className='col-12 text-center'>{cartaBusqueda}</h1>
          ) : null}
          {loading ? <p className='col-12 text-center'>Cargando</p> : null}
          {error ? (
            <p className='col-12 text-center'>
              No se han encontrado coincidencias
            </p>
          ) : (
            <div className='row justify-content-around'>
             
              {cartas.map(carta => (
                <Carta key={carta.id} carta={carta} length={cartas.length} />
              ))}
            </div>
          )}
        </div>
      </div>
    </Fragment>
  )
}

export default ListaCartas
