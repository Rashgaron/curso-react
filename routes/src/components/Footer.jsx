import React, { Fragment } from 'react'
import styled from '@emotion/styled'

const TituloFooter = styled.h5`
  font-size: 15px;
  margin-bottom: 10px;
`
const Contenido = styled.p`
  font-size: 13px;
  line-height: 5px;
`

const Footer = () => {
  return (
    <Fragment>
      <div className='container  bg-dark  p-4'>
        <div className='row'>
          <div className='col-3 text-light'>
            <TituloFooter>Teléfono de contacto</TituloFooter>
            <hr className='border border-light'></hr>
            <Contenido>- 672622266</Contenido>
            <Contenido>- dannirodriguez99@gmail.com</Contenido>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Footer
