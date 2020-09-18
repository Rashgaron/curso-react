import React, { useState } from 'react'
import Tarjeta from './Tarjeta'
import ImagenPrueba from '../../assets/Articles/pastelCrema.png'
import Cupcake from '../../assets/Articles/cupcake.png'
import Galleta from '../../assets/Articles/galletas.png'
import styled from '@emotion/styled'
const TituloArticulos = styled.h1`
  font-size: 40px;
  @media (min-width: 900px) {
    font-size: 80px;
  }
`
const TextoTitulo = styled.p`
  font-size: 20px;
  font-family: none;
`
const TarjetasArticulos = () => {
  const [tarjetas, guardarTarjetas] = useState([
    {
      titulo: 'Pasteles',
      texto: 'Nuestros Pasteles de primera',
      imagen: ImagenPrueba
    },
    {
      titulo: 'Cupcakes',
      texto: 'Nuestros Cupcakes de primera',
      imagen: Cupcake
    },
    {
      titulo: 'Galletas',
      texto: 'Nuestras Galletas de primera',
      imagen: Galleta
    }
  ])
  return (
    <div className='row mt-2'>
      <div className='col-12 text-center text-dark justify-content-center d-flex '>
        <div className='col-8 '>
          <TituloArticulos>Nuestras especialidades!</TituloArticulos>
          <TextoTitulo>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            expedita totam eum numquam et dolores suscipit tenetur aut modi odit
            beatae enim doloremque maxime eligendi, voluptatum a vitae excepturi
            facilis labore architecto ratione vel animi aliquam voluptas?
            Accusantium, ab? Reiciendis voluptatum dicta doloribus tempora
            quasi, consequuntur veritatis omnis neque magnam quisquam corporis
            non doloremque, pariatur qui dolor? Soluta rerum laboriosam magni,
            optio minima id eos aliquid possimus dolor totam reprehenderit
            facilis temporibus omnis a cumque nobis animi voluptatem illum
            accusamus officia ipsa quia eius! Esse, unde consequatur? Optio
            ducimus voluptatibus placeat magni, in, veniam doloremque cumque
            voluptatem eos nemo dicta.
          </TextoTitulo>
        </div>
      </div>

      <div className='col-12 d-sm-flex justify-content-around pb-5'>
        {tarjetas.map(tarjeta => (
          <Tarjeta tarjeta={tarjeta} key={tarjeta.titulo}></Tarjeta>
        ))}
      </div>
    </div>
  )
}

export default TarjetasArticulos
