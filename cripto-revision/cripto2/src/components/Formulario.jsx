import React, { useEffect, useState } from 'react'
import Error from './Error'
import styled from '@emotion/styled'
import useMoneda from '../hooks/useMoneda'
import useCriptomoneda from '../hooks/useCriptomoneda'
import axios from 'axios'
const Boton = styled.input`
  margin-top: 20px;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  background-color: #66a2fe;
  border: none;
  width: 100%;
  border-radius: 10px;
  color: #fff;
  transition: background-color 0.3;
  &:hover {
    background-color: #326ac0;
    cursor: pointer;
  }
`
// Ejecutar llamado a la API

const Formulario = ({ guardarMoneda, guardarCriptomoneda }) => {
  // state del listado de criptomonedas
  const [listaCripto, guardarCriptomonedas] = useState([])
  const [error, guardarError] = useState(false)
  const MONEDAS = [
    { codigo: 'USD', nombre: 'Dolar de Estados Unidos' },
    { codigo: 'MXN', nombre: 'Peso Mexicano' },
    { codigo: 'EUR', nombre: 'Euro' },
    { codigo: 'GDP', nombre: 'Libra Esterlina' },
    { codigo: 'COD', nombre: 'Peso Colombiano' }
  ]
  const [moneda, SelectMonedas] = useMoneda('Elige tu Moneda', '', MONEDAS)

  const [criptomoneda, SelectCripto] = useCriptomoneda(
    'Elige tu Criptomoneda',
    '',
    listaCripto
  )

  useEffect(() => {
    const consultarAPI = async () => {
      const url =
        'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
      const resultado = await axios.get(url)
      guardarCriptomonedas(resultado.data.Data)
    }
    consultarAPI()
  }, [])

  const handleSubmit = e => {
    e.preventDefault()
    if (moneda === '' || criptomoneda === '') {
      guardarError(true)
      return
    } else {
      guardarError(false)
      guardarMoneda(moneda)
      guardarCriptomoneda(criptomoneda)
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      {error ? (
        <Error mensaje='Todos los campos son obligatorios'></Error>
      ) : null}
      <SelectMonedas></SelectMonedas>
      <SelectCripto></SelectCripto>
      <Boton type='submit' value='Calcular'></Boton>
    </form>
  )
}

export default Formulario
