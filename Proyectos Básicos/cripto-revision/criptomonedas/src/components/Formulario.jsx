import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import Error from './Error'

import useMoneda from '../hooks/useMoneda'
import useCryptomoneda from '../hooks/useCryptomoneda'
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
  transition: all 0.3s ease;

  &:hover {
    background-color: #326ac0;
    cursor: pointer;
  }
`
const Formulario = ({ guardarMoneda, guardarCriptomoneda }) => {
  // state del listado de criptomonedas
  const [listacripto, guardarCriptomonedas] = useState([])
  const [error, guardarError] = useState(false)
  const MONEDAS = [
    { codigo: 'USD', nombre: 'Dolar de Estados Unidos' },
    { codigo: 'MXN', nombre: 'Peso Mexicano' },
    { codigo: 'EUR', nombre: 'Euro' },
    { codigo: 'GBP', nombre: 'Libra Esterlina' },
    { codigo: 'COD', nombre: 'Peso Colombiano' }
  ]
  // Utilizar useMoneda
  const [moneda, SelectMonedas] = useMoneda('Elige tu Moneda', '', MONEDAS)

  //   Utilizar cryptomoneda

  const [criptomoneda, SelectCripto] = useCryptomoneda(
    'Elige tu criptomoneda',
    '',
    listacripto
  )

  // Ejecutar llamado a la api

  useEffect(() => {
    const consultarAPI = async () => {
      const url =
        'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=EUR'
      const resultado = await axios.get(url)
      guardarCriptomonedas(resultado.data.Data)
    }
    consultarAPI()
  }, [])

  //   cuando el usuario hace submit

  const cotizarMoneda = e => {
    e.preventDefault()
    if (moneda === '' || criptomoneda === '') {
      guardarError(true)
      return
    } else {
      // pasar los datos al componente principal

      guardarError(false)
      guardarMoneda(moneda)
      guardarCriptomoneda(criptomoneda)
    }
  }
  return (
    <form onSubmit={cotizarMoneda}>
      {error ? (
        <Error mensaje='Todos los campos son obligatorios'></Error>
      ) : null}
      <SelectMonedas></SelectMonedas>

      <SelectCripto></SelectCripto>
      <Boton type='submit' value='calcular'></Boton>
    </form>
  )
}

export default Formulario
