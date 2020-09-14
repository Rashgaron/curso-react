import React from 'react'
import styled from '@emotion/styled'
const ResultadoDiv = styled.div`
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;
`
const Parrafos = styled.p`
  font-size: 18px;
  span{
      font-weight:bold;
    
  }
`
const Precio = styled.p`
  font-size: 30px;
`
const Cotizacion = ({ resultado }) => {
  if (Object.keys(resultado).length === 0) return null
  else
    return (
      <ResultadoDiv>
        <Precio>
          El precio es: <span>{resultado.PRICE}</span>
        </Precio>
        <Parrafos>
          Precio más alto del día: <span>{resultado.HIGHDAY}</span>
        </Parrafos>
        <Parrafos>
          El precio más bajo del día: <span>{resultado.LOWDAY}</span>
        </Parrafos>
        <Parrafos>
          Variación últimas 24h: <span>{resultado.CHANGEPCT24HOUR}</span>
        </Parrafos>
        <Parrafos>
          Última actualización: <span>{resultado.LASTUPDATE}</span>
        </Parrafos>
      </ResultadoDiv>
    )
}

export default Cotizacion
