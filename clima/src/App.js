import React, { Fragment, useState, useEffect } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import Clima from "./components/Clima";
import Error from './components/Error'
function App() {
  //Titulo que se pasa por prop a Header
  const titulo = "Clima React App";

  const [error, guardarError] = useState(false);
  // State para hacer la consulta
  const [consultar, guardarConsultar] = useState(false);
  const [resultado, guardarResultado] = useState({});
  // state del formulario
  const [busqueda, guardarBusqueda] = useState({
    ciudad: "",
    pais: "",
  });

  // Extraemos los valores de busqueda
  const { ciudad, pais } = busqueda;

  // Cada vez que haya  un cambio, si consultar === true, hacer peticion a la api

  useEffect(() => {
    const consultarAPI = async () => {
      if (consultar) {
        const appId = "61cf892cce775fe2122eaff13e89b033";
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        guardarResultado(resultado);
        guardarConsultar(false);

        if (resultado.cod === "404") guardarError(true);
        else guardarError(false);
      }
    };
    consultarAPI();
  }, [consultar, pais, ciudad]);
  let componente;
  if (error) {
    componente = <Error mensaje="No hay resultados"></Error>;
  } else {
    componente = <Clima resultado={resultado}></Clima>;
  }
  return (
    <Fragment>
      <Header titulo={titulo}></Header>

      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Formulario
                busqueda={busqueda}
                guardarBusqueda={guardarBusqueda}
                guardarConsultar={guardarConsultar}
              ></Formulario>
            </div>
            <div className="col m6 s12">{componente}</div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
