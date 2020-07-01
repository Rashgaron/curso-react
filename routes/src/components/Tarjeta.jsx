import React from 'react'
import { Card } from 'react-bootstrap'
import styled from '@emotion/styled'

const Informacion = styled.p`
  font-size: 10px;
`
const Tarjeta = ({ titulo, descripcion }) => {
  return (
    <Card className='mb-2'>
      <Card.Img
        variant='top'
        src='https://htmlcolorcodes.com/assets/images/html-color-codes-color-palette-generators-7a5b8241.jpg'
      />
      <Card.Body>
        <Card.Title>{titulo}</Card.Title>
        <Informacion>{descripcion}</Informacion>
      </Card.Body>
    </Card>
  )
}

export default Tarjeta
