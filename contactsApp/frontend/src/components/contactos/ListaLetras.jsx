import React from 'react'
import Letra from './Letra'

let letras = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
]

const ListaLetras = () => {
  return (
    <>
      {letras.map(letra => (
        <Letra key={letra} letra={letra}></Letra>
      ))}
    </>
  )
}

export default ListaLetras
