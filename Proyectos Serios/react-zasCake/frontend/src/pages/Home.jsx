import React from 'react'
import TarjetasArticulos from '../components/Home.jsx/TarjetasArticulos'
import styled from '@emotion/styled'
import TarjetaTrabajador from '../components/Home.jsx/TarjetaTrabajador'
import { Parallax } from 'react-parallax'
import backgroundImage from '../assets/backgrounds/body-background2.jpg'
import backgroundImage2 from '../assets/backgrounds/fondo2.jpg'
const Titulo = styled.h1`
  font-family: 'Times New Roman';
  font-size: 70px;
  font-weight: bold;
`

const Home = () => {
  return (
    <>
      <div className='row'>
        <Parallax
          bgImage={backgroundImage}
          strength={300}
          className='col-12 p-0    '
        >
          <div className='row justify-content-center align-items-center home-background'>
            <div className='col-8 text-center text-white  '>
              <h3>Lorem ipsum dolor sit amet.</h3>
              <Titulo>Lorem ipsum dolor sit</Titulo>
              <h3>Lorem ipsum dolor sit amet consectetur.</h3>
            </div>
          </div>
        </Parallax>

        <TarjetasArticulos></TarjetasArticulos>

        <Parallax bgImage={backgroundImage2} strength={300}>
          <div className='row justify-content-center home-background align-items-center'>
            <TarjetaTrabajador></TarjetaTrabajador>
          </div>
        </Parallax>

        
      </div>
    </>
  )
}

export default Home
