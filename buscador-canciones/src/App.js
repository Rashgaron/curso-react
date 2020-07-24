import React, { Fragment, useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Cancion from "./components/Cancion";
import Info from "./components/Info";
function App() {
  // Definir el state
  const [busquedaLetra, guardarBusquedaLetra] = useState({});
  const [letra, guardarLetra] = useState("");
  const [info, guardarInfo] = useState("");
  const { artista, cancion } = busquedaLetra;

  useEffect(() => {
    // Mirar que el objeto no esté vacío
    if (Object.keys(busquedaLetra).length === 0) return;

    const consultarApiLetra = async () => {
      const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
      const url2 = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;

      let respuesta = await fetch(url);
      const letra = await respuesta.json();

      respuesta = await fetch(url2);
      const informacion = await respuesta.json();
      guardarLetra(letra.lyrics);
      guardarInfo(informacion.artists[0]);

      console.log(letra.lyrics);
      console.log(informacion.artists[0]);
    };
    consultarApiLetra();
  }, [busquedaLetra, cancion, artista,info]);
  return (
    <Fragment>
      <Formulario guardarBusquedaLetra={guardarBusquedaLetra}></Formulario>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <Info info={info}></Info>
          </div>
          <div className="col-md-6">
            <Cancion letra={letra}></Cancion>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
