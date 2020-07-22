import React, { useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import ListadoImagenes from "./components/ListadoImagenes";

function App() {
  // state de la app
  const [busqueda, guardarBusqueda] = useState("");
  const [imagenes, guardarImagenes] = useState([]);
  const [paginaActual, guardarPaginaActual] = useState(1);
  const [totalPaginas, guardarTotalPaginas] = useState(1);
  useEffect(() => {
    const consultarApi = async () => {
      if (busqueda === "") return;
      else {
        const imagenesPorPagina = 30;
        const key = "17478426-7402ae0bda556fa4a7b847cbf";
        const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imagenesPorPagina}&page=${paginaActual}
    `;

        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        guardarImagenes(resultado.hits);
        // calcular el total de paginas
        const calcularTotalPaginas = Math.ceil(
          resultado.totalHits / imagenesPorPagina
        );
        guardarTotalPaginas(calcularTotalPaginas);
      }
      // Mover pantalla hacia arriba

      const jumbotron = document.querySelector(".jumbotron");
      jumbotron.scrollIntoView({ behavior: "smooth" });
    };
    consultarApi();
  }, [busqueda, paginaActual]);

  // definir la página paginaAnterior

  const paginaAnterior = () => {
    if (paginaActual > 1) {
      const nuevaPaginaActual = paginaActual - 1;

      guardarPaginaActual(nuevaPaginaActual);
    }
  };

  const paginaSiguiente = () => {
    if (paginaActual < totalPaginas) {
      const nuevaPaginaActual = paginaActual + 1;

      guardarPaginaActual(nuevaPaginaActual);
    }
  };
  return (
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center">Buscador de Imágenes</p>
        <Formulario guardarBusqueda={guardarBusqueda}></Formulario>
      </div>
      <div className="row justify-content-center">
        <ListadoImagenes imagenes={imagenes}></ListadoImagenes>

        {paginaActual === 1 ? null : (
          <button
            type="button"
            className="bbtn btn-info mr-1"
            onClick={paginaAnterior}
          >
            &laquo; Anterior{" "}
          </button>
        )}
        {paginaActual === totalPaginas ? null : (
          <button
            type="button"
            className="bbtn btn-info "
            onClick={paginaSiguiente}
          >
            Siguiente &raquo;
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
