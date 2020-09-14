import React, { Fragment, useEffect } from 'react'
import Slider from '../components/Slider'
import Tarjeta from '../components/Tarjeta'
import imagen0 from '../img/img0.jpg'
import imagen1 from '../img/img1.png'
import imagen2 from '../img/img2.jpg'
import imagen3 from '../img/img3.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Inicio = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <Fragment>
      <Slider />
      <div className='conatiner'>
        <div
          className='row justify-content-center mt-5 mb-5
        '
        >
          <h2 data-aos='fade-up'>Bienvenido a nuestra página web</h2>
        </div>
        <div className='row'>
          <div className='col col-12   col-md-3'>
            <Tarjeta
              titulo='Muebles'
              descripcion='En nuestra tienda encontrarás gran variedad de muebles al mejor precio'
			  imagen={imagen1}
			  data='flip-left'
            />
          </div>

          <div className='col col-12 col-md-3'>
            <Tarjeta
              titulo='Juvenil'
              descripcion='El estilo más moderno, ya a tu disposición'
			  imagen={imagen2}
			  data='flip-left'
            />
          </div>

          <div className='col col-12 col-md-3 '>
            <Tarjeta
              titulo='Adulto'
              descripcion='Prefieres algo más conservador? Este es el sitio adecuado'
			  imagen={imagen3}
			  data='flip-right'
            />
          </div>

          <div className='col col-12  col-md-3'>
            <Tarjeta
              titulo='Infantil'
              descripcion='Encuentra los muebles más bonitos para tus peques'
			  imagen={imagen0}
			  data='flip-right'
            />
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Inicio
