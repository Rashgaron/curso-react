import React, { Fragment } from 'react'
import Carousel from 'react-bootstrap/Carousel'
const Slider = () => {
  return (
    <Fragment>
      <Carousel >
        <Carousel.Item>
          <img
            className='d-block mx-auto w-100'
            src='https://d1vp8nomjxwyf1.cloudfront.net/wp-content/uploads/sites/406/2019/11/12151410/30.-DLX-800x533.jpg'
            alt='First slide'
          />
          {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block mx-auto w-100'
            src='https://www.reasonwhy.es/sites/default/files/nh-hotel-habitacion-futuro.jpg'
            alt='Second slide'
          />

          {/* <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block mx-auto w-100'
            src='https://www.parkpiolets.com/content/imgsxml/galerias/panel_habitaciones/6/des-0016-pioletspark-doblepremium320.jpg'
            alt='Third slide'
          />

          {/* <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
    </Fragment>
  )
}

export default Slider
