import React, { Fragment, useState, useEffect } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
function App() {
  const titulo = "Clima React App";
  // state del formulario

  const [busqueda, guardarBusqueda] = useState({
    ciudad: "",
    pais: "",
  });

  const { ciudad, pais } = busqueda;

  const [consultar, guardarConsultar] = useState(false);
  useEffect(() => {
    if (consultar) {
      console.log(ciudad);
      const consultarAPI = async () => {
        const appId = "61cf892cce775fe2122eaff13e89b033";
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        console.log(resultado);
      };
      consultarAPI();
    } else {
      guardarConsultar(false);
    }
  }, [consultar,ciudad,pais]);
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
            <div className="col m6 s12">2</div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
