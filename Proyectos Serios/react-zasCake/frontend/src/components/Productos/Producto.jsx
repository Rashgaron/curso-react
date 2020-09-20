import React from 'react'
import styled from '@emotion/styled'

const TextArticulo = styled.p`
  font-family: 'Times-New-Roman';
  font-size: 12px;
`
const Producto = ({ producto }) => {
  const {
    nombre,
    url_imagen_principal,
    descripcion,
    precio_bruto,
    referencia
  } = producto
  return (
    <>
      <div className='col-12 col-sm-5 col-md-3 justify-content-center p-2 '>
        <div className='product-card'>
          <div className='row justify-content-center'>
            <img
              className='card-img w-50'
              src={url_imagen_principal}
              alt={nombre}
            />
          </div>
          <div className='row p-2'>
            <div className='col-12'>
              <TextArticulo className='card-title'>{nombre}</TextArticulo>
            </div>
            <div className='col-12'>
              <h6 className='card-subtitle mb-2 text-muted'>
                N.Ref: {referencia}
              </h6>
            </div>
            <div className='col-12 justify-content-between align-items-center'>
              <div className='price text-success'>
                <h5 class='mt-4'>{precio_bruto}Eur</h5>
              </div>
              <a href='#' className='btn btn-primary mt-3'>
                <i class='fas fa-shopping-cart'></i> Add to Cart
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Producto
