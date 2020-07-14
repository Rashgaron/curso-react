import React, { Fragment, useState, useEffect } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import styled from "@emotion/styled";

function App() {

  // definir categoria y noticias

  const[categoria, guardarCategoria] = useState('')

  useEffect(()=>{
    const consultarAPI = async () =>{

    }
    consultarAPI()
  },[categoria])
  return (
    <Fragment>
      <Header titulo="Buscador de noticias"></Header>
      <div className="container white">
        <Formulario guardarCategoria={guardarCategoria}></Formulario>
      </div>
    </Fragment>
  );
}

export default App;
