import React, { Fragment, useEffect } from 'react'
import styled from '@emotion/styled'
import img4 from '../img/img4.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'
import '../css/Empresa.css'
const Banner = styled.div``
const Empresa = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <Fragment className='content'>
      <div className='row'>
        <div className='col'>
          <img className='banner_img' src={img4} alt='imagen habitación'></img>
        </div>
      </div>
      <div className='row'>
        <div className='col-12 mt-4'>
          <h2>Quienes somos ?</h2>
        </div>
        <div className='col-12'>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
            necessitatibus voluptatem vel architecto, cum tempore dicta
            veritatis obcaecati, cupiditate, animi consectetur sint minus.
            Nostrum unde quis harum. Molestias reprehenderit accusantium
            expedita veniam rem quae repellendus! Quos quisquam nam iusto
            cupiditate, atque vero aspernatur sit expedita quaerat dolor rem
            facilis, veniam, maiores enim autem quae praesentium saepe similique
            amet esse error totam ut nihil. Dolore distinctio eos rerum
            repudiandae, fuga doloribus illum nobis aut similique expedita
            eveniet pariatur ratione ex odit soluta animi voluptate nemo
            incidunt molestiae aspernatur sit, placeat dolorem. Exercitationem
            repellat quos distinctio voluptas omnis quaerat odio iure quibusdam!{' '}
          </p>
        </div>
        <div className='col-12 mt-4'>
          <h3>Cual es nuestra ambición?</h3>
        </div>
        <div className='col-12'>
        <p >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            sequi soluta blanditiis reiciendis? Quod repudiandae asperiores iure
            cum odio sit, dolor tenetur provident officiis, sint modi omnis
            laborum tempora eaque, vitae praesentium in minima officia illo
            doloremque voluptatibus voluptate deserunt. Quasi sequi esse porro!
            Alias labore quo ut. Accusamus, odio.
          </p>
        </div>
      </div>
    </Fragment>
  )
}

export default Empresa
