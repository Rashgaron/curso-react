import React, { Fragment } from "react";
import Formulario from "./components/Formulario";
import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.css";
function App() {
  return (
    <Fragment>
      <div className="container">
        <div className="row ">
          <div className="col-6 mt-5 d-flex justify-content-center">
            
            <Formulario></Formulario>
          </div>
          <div className="col-6 d-flex justify-content-center">
            <p>Tareas</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
