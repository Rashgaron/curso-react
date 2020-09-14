import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";
import DatoState from "./context/datoState";
function App() {

  return (
    <DatoState>
      <div className="container p-3 col ">
        <div className="row  pt-5">
          <Header></Header>
        </div>
        <div className="row mt-5">
          <Formulario></Formulario>
        </div>
        <div className="row mt-5">
          <Listado ></Listado>
        </div>
      </div>
    </DatoState>
  );
}

export default App;
