import React, { Fragment, useState, useEffect } from 'react'
import Producto from './Producto'
import { useSelector } from 'react-redux'
import styled from '@emotion/styled'

const TituloCategoria = styled.h2`
  font-family: 'Times New Roman', Times, serif;
`

const ListaProductos = () => {
  const MAX_PROD_PAG = 30

  let productos = []

  productos = useSelector(state => state.productosReducer.productos)
  const productosBuscados = useSelector(
    state => state.productosReducer.productosBuscados
  )

  if (productosBuscados.length !== 0) productos = productosBuscados
  const loading = useSelector(state => state.productosReducer.loading)
  const categoria_seleccionada = useSelector(
    state => state.productosReducer.categoria_seleccionada
  )

  const [paginaActual, guardarPaginaActual] = useState(0)
  const cantidadProductos = productos.length
  const [productosPagina, guardarProductosPagina] = useState([])

  useEffect(() => {
    if (productos.length !== 0) {
      guardarProductosPagina([])
      for (let i = 0; i < MAX_PROD_PAG; i++) {
        let j = i + MAX_PROD_PAG * paginaActual
        if (!productos[j]) break
        guardarProductosPagina(productosPagina => [
          ...productosPagina,
          productos[j]
        ])
      }
    }
  }, [productos, paginaActual])

  useEffect(() => {
    guardarPaginaActual(0)
  }, [productos])

  const handleClick = step => {
    if ((step < 0) & (paginaActual === 0)) return
    else if (
      (step > 0) &
      (paginaActual >= parseInt(cantidadProductos / MAX_PROD_PAG, 10))
    )
      return
    else guardarPaginaActual(paginaActual => paginaActual + step)
  }

  return (
    <Fragment>
      <div className='col-12'>
        {categoria_seleccionada ? (
          <TituloCategoria>{categoria_seleccionada}</TituloCategoria>
        ) : (
          <TituloCategoria>Selecciona un apartado</TituloCategoria>
        )}
      </div>
      <div className='row align-items-center text-center p-4 justify-content-center'>
        {loading ? <p className='col-12'>Cargando...</p> : null}
        {productosPagina.map(producto => (
          <Producto producto={producto} key={producto._id}></Producto>
        ))}
      </div>

      {productosPagina.length !== 0 ? (
        <>
          <div className='row justify-content-between'>
            <div className='col-auto'>
              <button className='btn' onClick={() => handleClick(-1)}>
                Atrás
              </button>
            </div>
            <div className='col-auto'>
              <p>
                {paginaActual}/{parseInt(cantidadProductos / MAX_PROD_PAG, 10)}
              </p>
            </div>
            <div className='col-auto'>
              <button className='btn' onClick={() => handleClick(1)}>
                Adelante
              </button>
            </div>
          </div>
        </>
      ) : null}
    </Fragment>
  )
}

export default ListaProductos
