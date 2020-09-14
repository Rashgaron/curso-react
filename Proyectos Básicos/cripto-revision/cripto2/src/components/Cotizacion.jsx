import React from 'react'
import styled from '@emotion/styled'

const Frase = styled.p`
  font-family:'Bebas Neue',cursive;
  font-size:28px;
  font-weight:100;
  color:#fff;

  span{
    font-size:40px;
  }

`
const Cotizacion = ({ cotizacion }) => {
  if (Object.keys(cotizacion).length === 0) return null
  return (
    <div>
      <Frase>
        El precio es: <span>{cotizacion.PRICE}</span>
      </Frase>
      <Frase>
        El precio más alto del día: <span>{cotizacion.HIGHDAY}</span>
      </Frase>
      <Frase>
        El precio más bajo del día: <span>{cotizacion.LOWDAY}</span>
      </Frase>
      <Frase>
        Últimas 24h: <span>{cotizacion.CHANGEPCT24HOUR}</span>
      </Frase>
      <Frase>
        Última actualización: <span>{cotizacion.LASTUPDATE}</span>
      </Frase>
    </div>
  )
}

export default Cotizacion
