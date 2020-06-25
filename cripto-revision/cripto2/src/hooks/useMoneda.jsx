import React, { Fragment, useState } from 'react'
import styled from '@emotion/styled'

const Label = styled.label`
  font-family: 'Bebas Neue', cursive;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 2.4rem;
  margin-top: 2rem;
  display: block;
`
const Select = styled.select`
  width: 100%;
  display: block;
  padding: 1rem;
  -webkit-appearance: none;
  border-radius: 10px;
  border: none;
  font-size: 1.2rem;
`

const useMoneda = (mensaje, stateInicial, opciones) => {
  // State de nuestro custom hooks

  const [state, actualizarState] = useState(stateInicial)
  const Seleccionar = () => (
    <Fragment>
      <Label>{mensaje}</Label>
      <Select onChange={e => actualizarState(e.target.value)} value={state}>
        <option value=''>-- Seleccionar --</option>
        {opciones.map(opcion => (
          <option key={opcion.codigo} value={opcion.codigo}>
            {opcion.nombre}
          </option>
        ))}
      </Select>
    </Fragment>
  )
  //   Retornar el state

  return [state, Seleccionar, actualizarState]
}
export default useMoneda
