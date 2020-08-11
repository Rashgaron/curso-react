import React, { useReducer } from 'react'
import datoContext from './datoContext'
import datoReducer from './datoReducer'
import { GUARDAR_DATO } from '../types'
const DatoState = props => {
  const initialState = {
    dato: { }
  }

  const [state, dispatch] = useReducer(datoReducer, initialState)

  const guardarDato = (info) => {
    dispatch({
      type: GUARDAR_DATO,
      payload:info
    })
  }
  return (
    <datoContext.Provider value={{ dato: state.dato, guardarDato }}>
      {props.children}
    </datoContext.Provider>
  )
}

export default DatoState
