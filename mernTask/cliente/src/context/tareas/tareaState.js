import React, { useReducer } from "react";
import TareaContext from "./tareaContext";
import TareaReducer from "./tareaReducer";
import uuid from "uuid";
import {
  TAREAS_PROYECTO,
  AGREGAR_TAREA,
  VALIDAR_TAREA,
  ELIMINAR_TAREA,
  ESTADO_TAREA,
  TAREA_ACTUAL,
  ACTUALIZAR_TAREA,
  LIMPIAR_TAREA,
} from "../../types/index";
const TareaState = (props) => {
  const initialState = {
    tareas: [
      { id: 0, nombre: "Elegir Plataforma", estado: true, proyectoId: 1 },
      { id: 1, nombre: "Elegir Colores", estado: false, proyectoId: 2 },
      {
        id: 2,
        nombre: "Elegir Plataforma de Pago",
        estado: false,
        proyectoId: 3,
      },
      { id: 3, nombre: "Elegir Hosting", estado: true, proyectoId: 4 },
      { id: 4, nombre: "Elegir Plataforma", estado: true, proyectoId: 3 },
      { id: 5, nombre: "Elegir Colores", estado: false, proyectoId: 2 },
      {
        id: 6,
        nombre: "Elegir Plataforma de Pago",
        estado: false,
        proyectoId: 3,
      },
      { id: 7, nombre: "Elegir Plataforma", estado: true, proyectoId: 2 },
      { id: 8, nombre: "Elegir Colores", estado: false, proyectoId: 4 },
      {
        id: 9,
        nombre: "Elegir Plataforma de Pago",
        estado: false,
        proyectoId: 3,
      },
      { id: 10, nombre: "Elegir Plataforma", estado: true, proyectoId: 2 },
      { id: 11, nombre: "Elegir Colores", estado: false, proyectoId: 3 },
      {
        id: 12,
        nombre: "Elegir Plataforma de Pago",
        estado: false,
        proyectoId: 4,
      },
    ],
    tareasproyecto: null,
    errortarea: false,
    tareaseleccionada: null,
  };

  // Crear dispatch y state

  const [state, dispatch] = useReducer(TareaReducer, initialState);
  // crear las funciones

  // Obtener las tareas de un poryecto

  const obtenerTareas = (proyectoId) => {
    dispatch({
      type: TAREAS_PROYECTO,
      payload: proyectoId,
    });
  };

  // agregar una tarea al proyecto seleccionado

  const agregarTarea = (tarea) => {
    tarea.id = uuid.v4();
    dispatch({
      type: AGREGAR_TAREA,
      payload: tarea,
    });
  };
  // valida y muestra un error en caso que sea necesario

  const validarTarea = () => {
    dispatch({
      type: VALIDAR_TAREA,
    });
  };

  // Eliminar tarea por id

  const eliminarTarea = (id) => {
    dispatch({
      type: ELIMINAR_TAREA,
      payload: id,
    });
  };

  // Cambia el estado de cada tarea

  const cambiarEstadoTarea = (tarea) => {
    dispatch({
      type: ESTADO_TAREA,
      payload: tarea,
    });
  };

  // Extraer una tarea para edición

  const guardarTareaActual = (tarea) => {
    dispatch({
      type: TAREA_ACTUAL,
      payload: tarea,
    });
  };
  // edita tarea

  const actualizarTarea = (tarea) => {
    dispatch({
      type: ACTUALIZAR_TAREA,
      payload: tarea,
    });
  };

  const limpiarTarea = () => {
    dispatch({
      type: LIMPIAR_TAREA,
    });
  };

  return (
    <TareaContext.Provider
      value={{
        tareas: state.tareas,
        tareasproyecto: state.tareasproyecto,
        errortarea: state.errortarea,
        tareaseleccionada: state.tareaseleccionada,
        obtenerTareas,
        agregarTarea,
        validarTarea,
        eliminarTarea,
        cambiarEstadoTarea,
        guardarTareaActual,
        actualizarTarea,
        limpiarTarea,
      }}
    >
      {props.children}
    </TareaContext.Provider>
  );
};

export default TareaState;
