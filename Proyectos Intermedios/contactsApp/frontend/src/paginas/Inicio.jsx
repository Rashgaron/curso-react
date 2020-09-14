import React from 'react'
import Formulario from '../components/ui/Formulario'

const Inicio = () => {
  return (
    <div className='row mt-5 p-2 contenedor-inicio'>
      <div className='col-md-8'>
        <img
          src='https://www.aramon.com/blog/wp-content/uploads/2018/12/mgasch_CERLER2019_180307__DSC5166.jpg'
          alt='imagen logo'
          width='100%'
        ></img>
      </div>
      <div className='col-12 col-md-4 d-flex justify-content-center'>
        <div className='mt-auto mb-auto'>
          <h3>Contacts app</h3>
          <Formulario></Formulario>
        </div>
      </div>
    </div>
  )
}

export default Inicio
