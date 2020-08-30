import React, { useState, Fragment } from 'react'
const Carta = ({ carta }) => {
  const [cantidad, guardarCantidad] = useState(0)

  const handleClick = e => {
    console.log(cantidad)
    if (cantidad === 0 && e < 0) return
    if (cantidad >= 0) guardarCantidad(cantidad + e)

    console.log(cantidad)
  }
  if (!carta.image_uris) return null
  return (
    <Fragment>
      <div className='col-12 col-md-5 col-lg-4 col-xl-3  justify-content-center d-flex'>
        <div className='card col-8 col-md-12 col-sm-7 m-1 pt-3'>
          <img alt={carta.name} src={carta.image_uris.large} className='w-100 img-card'></img>

          <div className='card-body'>
            <div className='row'>
              <div className='col justify-content-between d-flex'>
                <button
                  type='button'
                  className='btn btn-danger'
                  onClick={() => handleClick(-1)}
                >
                  -
                </button>
                <p>{cantidad}</p>
                <button
                  type='button'
                  className='btn btn-success'
                  onClick={() => handleClick(1)}
                >
                  +
                </button>
              </div>
              <div className='col-12 justify-content-center d-flex'>
                <button
                  type='button'
                  className='btn btn-primary'
                  onClick={() => {
                    guardarCantidad(0)
                  }}
                >
                  Agregar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Carta
