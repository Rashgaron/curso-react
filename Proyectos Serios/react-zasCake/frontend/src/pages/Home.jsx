import React from 'react'
import Footer from '../components/ui/Footer.jsx'
import TarjetasArticulos from '../components/Home.jsx/TarjetasArticulos'
import styled from '@emotion/styled'
import TarjetaTrabajador from '../components/Home.jsx/TarjetaTrabajador'
import ImageEffect from 'react-image-effects'
const Titulo = styled.h1`
  font-family: 'Times New Roman';
  font-size: 70px;
  font-weight: bold;
`

const Home = () => {
  return (
    <>
      <div className='row'>
        <div className='col-12 p-0 home-background justify-content-center d-flex'>
          <div className='col-8 text-center text-white mt-auto mb-auto'>
            <h3>Lorem ipsum dolor sit amet.</h3>
            <Titulo>Lorem ipsum dolor sit</Titulo>
            <h3>Lorem ipsum dolor sit amet consectetur.</h3>
          </div>
        </div>
      </div>
      <TarjetasArticulos></TarjetasArticulos>
      <div className='row home-background2 justify-content-center'>
        <TarjetaTrabajador></TarjetaTrabajador>

      </div>

      <Footer></Footer>
    </>
  )
}

export default Home
