import React, { Fragment } from 'react'
import Slider from '../components/Slider'
import Tarjeta from '../components/Tarjeta'
const Inicio = () => {
  return (
    <Fragment>
      <Slider></Slider>
      <div className='conatiner'>
        <div
          className='row justify-content-center mt-5
        '
        >
          <h5>Bienvenido a nuestra página web</h5>
        </div>
        <div className='row'>
          <div className='col col-12   col-md-3'>
            <Tarjeta
              titulo='Muebles'
              descripcion='En nuestra tienda encontrarás gran variedad de muebles al mejor precio'
            ></Tarjeta>
          </div>

          <div className='col col-12 col-md-3'>
            <Tarjeta titulo='Juvenil' descripcion='El estilo más moderno, ya a tu disposición'></Tarjeta>
          </div>

          <div className='col col-12 col-md-3 '>
            <Tarjeta titulo='Adulto' descripcion='Prefieres algo más conservador? Este es el sitio adecuado'></Tarjeta>
          </div>

          <div className='col col-12  col-md-3'>
            <Tarjeta titulo='Infantil' descripcion='Encuentra los muebles más bonitos para tus peques'></Tarjeta>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Inicio
