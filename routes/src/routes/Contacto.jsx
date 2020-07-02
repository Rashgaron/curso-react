import React, { Fragment, useEffect } from 'react'
import Iframe from 'react-iframe'
import Formulario from '../components/Formulario'
import 'aos/dist/aos.css'
import Aos from 'aos'
const Contacto = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
      }, [])
  return (
    <Fragment>
      <div className='content'>
       
        <div className='row'>
          <h2 className='col'>Donde puedes encontrarnos?</h2>
        </div>
        <div className='row'>
          <div className='col mt-2 mb-4'>
            <Iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50565.632421580325!2d-1.0235269674260208!3d37.617406475650625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd634222a43ab56d%3A0x47d790cefef6f9ff!2sCartagena%2C%20Murcia!5e0!3m2!1sen!2ses!4v1593690147712!5m2!1sen!2ses'
              width='100%'
              height='300px'
              frameborder='0'
              allowfullscreen=''
              aria-hidden='false'
              tabindex='0'
            ></Iframe>
          </div>
        </div>
        <div className='row justify-content-md-center'>
          <div className='col-12'>
            <h2>Quieres contactar con nosotros ?</h2>
            <p>Rellena nuestro formulario</p>
          </div>
          <div className='col col-md-8 col-lg-6 mt-3 mb-4  '>
            <Formulario></Formulario>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Contacto
