import React, { useState } from 'react'
import Error from './Error'
import shortid from 'shortid'
const Formulario = ({ guardarGasto, guardarCrearGasto }) => {
  const [nombre, guardarNombre] = useState('')
  const [cantidad, guardarCantidad] = useState(0)
  const [error, guardarError] = useState(false)

  //   Cuando el usuario agrega un gasto

  const agregarGasto = e => {
    e.preventDefault()

    // Validar

    if (cantidad < 1 || isNaN(cantidad) || nombre.trim() === '') {
      guardarError(true)
      return
    }
    guardarError(false)
    // Construir el gasto
    const gasto = {
      nombre,
      cantidad,
      id: shortid.generate()
    }

    // Pasar el gasto al componente principal

    guardarGasto(gasto);
    guardarCrearGasto(true);

    // Resetear el form

    guardarNombre('')
    guardarCantidad(0)
  }
  return (
    <form onSubmit={agregarGasto}>
      <h2>Agrega tus gastos aquí</h2>
      {error ? (
        <Error mensaje='Ambos campos son obligatorios o Presupuesto incorrecto'></Error>
      ) : null}
      <div className='campo'>
        <label>Nombre del gasto</label>
        <input
          type='text'
          className='u-full-width'
          placeholder='EJ. Transporte'
          value={nombre}
          onChange={e => guardarNombre(e.target.value)}
        ></input>
        <label>Cantidad del gasto</label>
        <input
          type='text'
          className='u-full-width'
          placeholder='EJ. 300'
          onChange={e => guardarCantidad(parseInt(e.target.value, 10))}
        ></input>

        <input
          type='submit'
          className='button-primary u-full-width'
          valu='Agregar gasto'
        ></input>
      </div>
    </form>
  )
}

export default Formulario
