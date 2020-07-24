import React, { createContext, useState, useEffect } from 'react'

// Crear Context
export const CategoriasContext = createContext()

// Provider es donde se encuentran las funciones y state
const CategoriasProvider = props => {
  // crear state context

  const [categorias, guardarCategorias] = useState([])

  //   ejecutar el llamado a la api

  useEffect(() => {
    const consultarAPI = async () => {
      const url = ` https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`
      const response = await fetch(url)
      const cat = await response.json()
      guardarCategorias(cat.drinks)
    }
    consultarAPI()
  }, [])
  return (
    <CategoriasContext.Provider value={{
        categorias
    }}>
      {props.children}
    </CategoriasContext.Provider>
  )
}
export default CategoriasProvider
