import React, { Fragment, useState } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import styled from "@emotion/styled";

function App() {
  return (
    <Fragment>
      <Header titulo="Buscador de noticias"></Header>
      <div className="container white">
        <Formulario></Formulario>
      </div>
    </Fragment>
  );
}

export default App;
