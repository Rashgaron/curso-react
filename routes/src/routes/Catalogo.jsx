import React, { useEffect } from 'react'
import 'aos/dist/aos.css'
import Aos from 'aos'
const Catalogo = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return <p>Desde catalogo</p>
}

export default Catalogo
