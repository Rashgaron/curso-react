import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
// Crear el context

export const CategoriasContext = createContext();

// provider es donde se encuentran las funciones y el state

const CategoriasProvider = (props) => {
  //Creamos el state del context

  const [categorias, guardarCategorias] = useState([]);

  useEffect(() => {
    axios
      .get(" https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list")
      .then(function (response) {
        console.log(response.data.drinks);
        guardarCategorias(response.data.drinks);
      })
      .catch(function (err) {
        console.log(err);
      });
  }, []);
  return (
    <CategoriasContext.Provider
      value={{
        categorias,
      }}
    >
      {props.children}
    </CategoriasContext.Provider>
  );
};

export default CategoriasProvider;
