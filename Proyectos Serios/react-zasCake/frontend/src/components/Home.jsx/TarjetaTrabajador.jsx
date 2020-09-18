import React from 'react'
import styled from '@emotion/styled'
const TextoTrabajador = styled.p`
  font-size: 20px;
  @media (min-width: 769px) {
    font-size: 25px;
  }
`
const TarjetaTrabajador = () => {
  return (
    <>
      <div className='col-9 d-md-flex bg-light mt-5 mb-5 p-3'>
        <div className='col-12 col-md-5 p-0'>
          <div className='imagen-trabajador '></div>
        </div>
        <div className='col-12 col-md-7'>
          <h1>Lorem, ipsum dolor.</h1>
          <TextoTrabajador>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
            quidem, accusamus ex quibusdam repellat excepturi?
          </TextoTrabajador>
          <TextoTrabajador>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            dicta deserunt maxime debitis deleniti, sequi natus id vel quo ad
            dolor repellendus quaerat. Doloremque numquam voluptates culpa
            voluptas! Illum, officiis similique veritatis impedit rerum
            doloribus, incidunt blanditiis dignissimos sed dolore maiores? At
            quasi eligendi, corrupti voluptas ex ullam. Dolor, consectetur?
          </TextoTrabajador>
        </div>
      </div>
    </>
  )
}

export default TarjetaTrabajador
