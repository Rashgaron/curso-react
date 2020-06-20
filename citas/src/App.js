import React, { Fragment, useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Cita from "./components/Cita";

// import MiFormulario from "./components/MiFormulario";
function App() {
  // Citas en local storage

  let citasIniciales = JSON.parse(localStorage.getItem("citas"));

  if (!citasIniciales) {
    citasIniciales = [];
  }

  // Arreglo de citas
  const [citas, guardarCitas] = useState(citasIniciales);

  // Use useEffect para realizar ciertas operaciones cuando el state cambia

  useEffect(() => {
    let citasIniciales = JSON.parse(localStorage.getItem("citas"));
    
    if (citasIniciales) {
      localStorage.setItem("citas", JSON.stringify(citas));
    } else {
      localStorage.setItem("citas", JSON.stringify([]));
    }
  }, [citas]);
  //cada vez que el state de citas cambie, se va a ejecutar el useEffect

  //Función que tome las citas actuales y agregue la nueva

  const crearCita = (cita) => {
    guardarCitas([...citas, cita]);
  };

  // Funcion que elimina una cita por su id

  const eliminarCita = (id) => {
    const nuevasCitas = citas.filter((cita) => cita.id !== id);
    guardarCitas(nuevasCitas);
  };

  // Mensaje condicional

  console.log(citas.length);

  const titulo =
    citas.length === 0 ? "No hay ninguna tarea actualmente" : "Administra tus tareas";
  return (
    <Fragment>
      <h1>Administrador de Tareas</h1>

      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario crearCita={crearCita}></Formulario>
          </div>

          <div className="one-half column">
            <h2>{titulo}</h2>
            {citas.map((cita) => (
              <Cita
                key={cita.id}
                cita={cita}
                eliminarCita={eliminarCita}
              ></Cita>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
