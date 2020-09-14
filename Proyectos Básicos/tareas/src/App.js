import React, { useState, Fragment, useEffect } from "react";
import Formulario from "./Components/Formulario";
import Tarea from "./Components/Tarea";
function App() {
  // Tareas en local storage

  let tareasIniciales = JSON.parse(localStorage.getItem("tareas"));

  if (!tareasIniciales) {
    tareasIniciales = [];
  }

  // Arreglo de tareas

  const [tareas, guardarTareas] = useState(tareasIniciales);

  useEffect(() => {
    let tareasIniciales = JSON.parse(localStorage.getItem("tareas"));
    if (tareasIniciales) {
      localStorage.setItem("tareas", JSON.stringify(tareas));
    } else {
      localStorage.setItem("tareas", JSON.stringify([]));
    }
  }, [tareas]);

  // Funcion que tome las tareas actuales y agregue una nueva

  const crearTarea = (tarea) => {
    guardarTareas([...tareas, tarea]);
  };

  // Funcion que elimina una tarea por su id

  const eliminarTarea = (id) => {
    const nuevasTareas = tareas.filter((tarea) => tarea.id !== id);
    guardarTareas(nuevasTareas);
  };

  const titulo =
    tareas.length === 0
      ? "No hay ninguna tarea actualmente"
      : "Administra tus tareas";
  return (
    <Fragment>
      <h1>Administrador de Tareas</h1>

      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario crearTarea={crearTarea}></Formulario>
          </div>
          <div className="one-half column">
            <h2>{titulo}</h2>
            {tareas.map((tarea) => (
              <Tarea
                key={tarea.id}
                tarea={tarea}
                eliminarTarea={eliminarTarea}
              ></Tarea>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
