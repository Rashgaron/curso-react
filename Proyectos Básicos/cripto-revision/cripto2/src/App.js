import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import imagen from "./cryptomonedas.png";
import Formulario from "./components/Formulario";
import axios from "axios";
import Cotizacion from "./components/Cotizacion";
const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;
const Image = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`;

const Heading = styled.h1`
  font-family: "Bebas neue", cursive;
  color: #fff;
  text-align: left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;

  &::after {
    content: "";
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
  }
`;

function App() {
  var datosIniciales = JSON.parse(localStorage.getItem("myData"));

  const [moneda, guardarMoneda] = useState("");
  const [criptomoneda, guardarCriptomoneda] = useState("");
  const [cotizacion, guardarCotizacion] = useState({});
  const [state, guardarState] = useState({
    moneda: "",
    criptomoneda: "",
    cotizacion: "",
  });

  useEffect(() => {
    const cotizarCriptomoneda = async () => {
      // Evitamos ejecución la primera vez
      if (moneda === "") {
        return;
      }

      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;

      const resultado = await axios.get(url);
      guardarCotizacion(resultado.data.DISPLAY[criptomoneda][moneda]);
      guardarState({
        moneda: moneda,
        criptomoneda: criptomoneda,
        cotizacion: resultado.data.DISPLAY[criptomoneda][moneda],
      });
    };
    cotizarCriptomoneda();

    var datosIniciales = JSON.parse(localStorage.getItem("myData"));
    if (datosIniciales) {
      localStorage.setItem("myData", JSON.stringify(state));
      guardarCotizacion(datosIniciales.cotizacion);
    } else {
      localStorage.setItem("myData", JSON.stringify({}));
    }
  }, [moneda, criptomoneda, state]);

  return (
    <Contenedor>
      <div>
        <Image src={imagen} alt="imagen cripto"></Image>
      </div>
      <div>
        <Heading>Cotizador de criptomonedas</Heading>
        <Formulario
          guardarMoneda={guardarMoneda}
          guardarCriptomoneda={guardarCriptomoneda}
          monedaInicial={datosIniciales.moneda}
          criptomonedaInicial={datosIniciales.criptomoneda}
        ></Formulario>
        <Cotizacion cotizacion={cotizacion}></Cotizacion>
      </div>
    </Contenedor>
  );
}

export default App;
