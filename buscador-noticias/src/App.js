import React, { Fragment, useState, useEffect } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoNoticias from "./components/ListadoNoticias";
import styled from "@emotion/styled";

function App() {
  // definir categoria y noticias

  const [categoria, guardarCategoria] = useState("");
  const [noticias, guardarNoticias] = useState([]);
  useEffect(() => {
    const consultarAPI = async () => {
      const url = `http://newsapi.org/v2/top-headlines?country=gb&category=${categoria}&apiKey=71891d2c703c4bb2ac35c60205624a2f`;
      const respuesta = await fetch(url);
      const noticias = await respuesta.json();
      guardarNoticias(noticias.articles);
    };
    consultarAPI();
  }, [categoria]);
  return (
    <Fragment>
      <Header titulo="Buscador de noticias"></Header>
      <div className="container white">
        <Formulario guardarCategoria={guardarCategoria}></Formulario>
        <ListadoNoticias noticias={noticias}></ListadoNoticias>
      </div>
    </Fragment>
  );
}

export default App;
