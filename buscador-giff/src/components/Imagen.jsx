import React from 'react'
const Imagen = ({ res }) => {
  return (
    <div className='col-8 col-md-3 imagen p-0 '>
      <img src={res.images.original.url} alt='giff' className='col'></img>
    </div>
  )
}

export default Imagen
