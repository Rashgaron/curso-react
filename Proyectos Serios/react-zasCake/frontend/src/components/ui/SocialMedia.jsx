import React from 'react'
import Instagram from '../../assets/socialMedia/001-instagram.png'
import Facebook from '../../assets/socialMedia/facebook.png'
import Gmail from '../../assets/socialMedia/gmail.png'

import Whatsapp from '../../assets/socialMedia/whatsapp.png'
const SocialMedia = () => {
  return (
    <div className='row justify-content-center justify-content-md-end  mt-2 p-4'>
      <div className='col-2 col-md-1 icon'>
        <a href='https://www.instagram.com/zas_cake/?hl=en'>
          <img src={Instagram} alt='instagram' width='75%'></img>
        </a>
      </div>
      <div className='col-2 col-md-1 icon '>
        <a href='https://es-es.facebook.com/zascake'>
          <img src={Facebook} alt='facebook' width='75%'></img>
        </a>
      </div>
      <div className='col-2 col-md-1 icon'>
        <a href='https://www.flaticon.com/search?word=instagram&category_id=73'>
          <img src={Gmail} alt='facebook' width='75%'></img>
        </a>
      </div>
      <div className='col-2 col-md-1 icon '>
        <a href='https://www.flaticon.com/search?word=instagram&category_id=73'>
          <img src={Whatsapp} alt='facebook' width='75%'></img>
        </a>
      </div>
    </div>
  )
}

export default SocialMedia
