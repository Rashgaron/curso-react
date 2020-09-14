import React from 'react'
import SocialMedia from './SocialMedia'
const Footer = () => {
  return (
    <>
      <div className='row bg-dark text-light text-center text-md-left '>

        <SocialMedia></SocialMedia>

        <div className='col-12 d-flex flex-wrap'>
          <div className='col-3 text-md-left'>
            <h3>Horario:</h3>
            <ul>
              <p>De lunes a viernes:</p>
              <li>10:00-13:30</li>
              <li>17:00-20:00</li>
              <p>Sábados:</p>
              <li>10:00-13:00</li>
            </ul>
          </div>
          <div className='col-3 text-md-left'>
            <h3>Contacto:</h3>
            <ul>
              <li>ZasCake@gmail.com</li>
            </ul>
          </div>
          <div className='col-12 col-md-6 p-3'>
            {/* eslint-disable-next-line */}
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11979.078107117359!2d2.130592787479314!3d41.357362968269136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbbb4d56aebb56647!2sZAS*21%20Cake!5e0!3m2!1sen!2ses!4v1600106734053!5m2!1sen!2ses'
              width='100%'
              height='100%'
              frameBorder='0'
              allowFullScreen=''
              aria-hidden='false'
              tabIndex='0'
            ></iframe>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
