import React from 'react'
import styles from './Formulario.module.css'
import useSelect from '../hooks/useSelect'
const Formulario = ({ guardarCategoria }) => {
  const OPCIONES = [
    { value: 'general', label: 'General' },
    { value: 'business', label: 'Negocios' },
    { value: 'entertainment', label: 'Entretenimiento' },
    { value: 'health', label: 'Salud' },
    { value: 'science', label: 'Ciencia' },
    { value: 'sports', label: 'General' },
    { value: 'technology', label: 'Tecnología' }
  ]
  // Utilizar custom hook

  const [categoria, SelectNoticias] = useSelect('general', OPCIONES)

  // submit al form, pasar categoria a applicationCache.jsx
  const handleSubmit = e => {
    e.preventDefault()

    guardarCategoria(categoria)
  }

  return (
    <div
      className={`
    row ${styles.buscador}
    `}
    >
      <div className='col s12 m8 offset-m2'>
        <form onSubmit={handleSubmit}>
          <h2 className={styles.heading}>Encuentra noticias por categoría</h2>
          <SelectNoticias></SelectNoticias>
          <div className='input-field col s12'>
            <input
              type='submit'
              className={`
              btn-large waves-effect amber darken-2
              ${styles.btn_block}
              `}
              value='Buscar'
            ></input>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Formulario
