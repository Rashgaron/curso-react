import React, { Fragment, useState } from "react";
import styled from "@emotion/styled";
import './App.css'
const Section = styled.div`
  padding: 15px;
  border: 1px solid black;
  margin: 15px;
  width: 75%;
`;
function App() {
  const [contador, guardarContador] = useState(0);
  const aumentarContador = () => {
    guardarContador(contador + 1);
  };
  const decrementarContador = () => {
    guardarContador(contador - 1);
  };
  return (
    <Fragment>
      <Section>
        <h1>Desde App</h1>
        <p>El valor del contador es: {contador}</p>
        <div class="row">
          <div class='col s4'>
          <a  class="col-content  waves-effect waves-light btn" onClick={aumentarContador}>
            Incrementar
          </a>
          </div>
          <div class='col s4'>
          
          <a class="col-content waves-effect waves-light btn" onClick={decrementarContador}>
            Decrementar
          </a>
          </div>
        </div>
      </Section>
    </Fragment>
  );
}

export default App;
