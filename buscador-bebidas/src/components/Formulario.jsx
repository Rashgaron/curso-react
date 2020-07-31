import React, { useContext, useState } from 'react'
import { CategoriasContext } from '../context/CategoriasContext'
import { RecetasContext } from '../context/RecetasContext'
const Formulario = () => {
  const { categorias } = useContext(CategoriasContext)
  const { buscarRecetas, guardarConsultar } = useContext(RecetasContext)

  const [busqueda, guardarBusqueda] = useState({
    nombre: '',
    categoria: ''
  })

  //   funcion para leer los contenidos

  const obtenerDatosReceta = e => {
    guardarBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value
    })
  }
  return (
    <form
      className='col-12'
      onSubmit={e => {
        e.preventDefault()
        buscarRecetas(busqueda)
        guardarConsultar(true)
      }}
    >
      <fieldset className='text-center'>
        <legend>Busca bebidas por categoría o ingrediente</legend>
      </fieldset>
      <div className='row mt-4'>
        <div className='col-md-4'>
          <input
            name='nombre'
            className='form-control'
            type='text'
            placeholder='Buscar por ingrediente'
            onChange={obtenerDatosReceta}
          ></input>
        </div>
        <div className='col-md-4'>
          <select
            className='form-control'
            onChange={obtenerDatosReceta}
            name='categoria'
          >
            <option value=''>Selecciona Categoría</option>
            {categorias.map(cat => {
              return (
                <option key={cat.strCategory} value={cat.strCategory}>
                  {cat.strCategory}
                </option>
              )
            })}
          </select>
        </div>
        <div className='col-md-4'>
          <input
            type='submit'
            className='btn btn-block btn-primary'
            value='Buscar Bebidas'
          ></input>
        </div>
      </div>
    </form>
  )
}

export default Formulario
