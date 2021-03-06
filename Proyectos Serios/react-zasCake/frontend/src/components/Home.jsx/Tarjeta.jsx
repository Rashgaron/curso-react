import React from 'react'
import styled from '@emotion/styled'

const TituloArticulo = styled.h3`
  font-size: 50px;
  margin-bottom: 0px;
`
const TextArticulo = styled.p`
  font-size: 20px;
  font-family: none;
`
const Tarjeta = ({ tarjeta }) => {
  return (
    <div className='col-sm-4 col-md-2 col-12 justify-content-center '>
      <TituloArticulo className='text-center mt-4'>
        {tarjeta.titulo}
      </TituloArticulo>
      <TextArticulo className='card-text text-center'>
        {tarjeta.texto}
      </TextArticulo>
      <div className='row justify-content-center'>
        <img
          src={tarjeta.imagen}
          className='tarjeta'
          alt='imagen'
          width='50%'
        ></img>
      </div>
    </div>
  )
}

export default Tarjeta
