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
      <div className='col-12  p-0 justify-content-center ml-lg-3 '>
        {letras.map(letra => (
          <Letra key={letra} letra={letra}></Letra>
        ))}
      </div>
    </>
  )
}

export default ListaLetras
