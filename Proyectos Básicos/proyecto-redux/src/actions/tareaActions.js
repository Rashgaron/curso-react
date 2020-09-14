import {
  AGREGAR_TAREA,
  AGREGAR_TAREA_ERROR,
  AGREGAR_TAREA_EXITO,
  CARGAR_TAREAS,
  CARGAR_TAREAS_EXITO,
  CARGAR_TAREAS_ERROR,
  ELIMINAR_TAREA_EXITO,
  ELIMINAR_TAREA_ERROR,
  ELIMINAR_TAREA,
} from "../types";
import clienteAxios from "../config/axios";
import Swal from "sweetalert2";

export function eliminarTareaAction(id) {
  return async (dispatch) => {
    dispatch(eliminarTarea());
    try {
      await clienteAxios.delete(`/tareas/${id}`);
      dispatch(eliminarTareaExito(id));
      Swal.fire("Correcto", "La tarea se eliminó correctamente", "success");
    } catch (error) {
      console.log(error);
      dispatch(eliminarTareaError());
      Swal.fire({
        icon: "error",
        title: "Hubo un error",
        text: "Hubo un error, intenta de nuevo",
      });

    }
  };
}
const eliminarTarea = () => ({
  type: ELIMINAR_TAREA,
  payload: true,
});
const eliminarTareaExito = (id) => ({
  type: ELIMINAR_TAREA_EXITO,
  payload: id,
});

const eliminarTareaError = () => ({
  type: ELIMINAR_TAREA_ERROR,
  payload: true,
});
export function cargarTareasAction() {
  return async (dispatch) => {
    dispatch(cargarTareas());
    try {
      const tareas = await clienteAxios.get("/tareas");
      console.log(tareas.data);

      dispatch(cargarTareasExito(tareas.data));
    } catch (error) {
      console.log(error);
      dispatch(cargarTareasError);
    }
  };
}
const cargarTareas = () => ({
  type: CARGAR_TAREAS,
  payload: true,
});
const cargarTareasExito = (tareas) => ({
  type: CARGAR_TAREAS_EXITO,
  payload: tareas,
});

const cargarTareasError = () => ({
  type: CARGAR_TAREAS_ERROR,
});

export function crearNuevaTareaAction(tarea) {
  console.log(tarea);
  return async (dispatch) => {
    dispatch(agregarTarea());

    try {
      // insertar en la api

      await clienteAxios.post("/tareas", tarea);

      // Si todo sale bien, actualiza el state

      dispatch(agregarTareaExito(tarea));

      // Alerta

      Swal.fire("Correcto", "La tarea se agregó correctamente", "success");
    } catch (error) {
      console.log(error);

      // Si hay un error, cambiar el state

      dispatch(agregarTareaError(true));

      Swal.fire({
        icon: "error",
        title: "Hubo un error",
        text: "Hubo un error, intenta de nuevo",
      });
    }
  };
}

const agregarTarea = () => ({
  type: AGREGAR_TAREA,
  payload: true,
});

// Si la tarea se guarda en base de datos

const agregarTareaExito = (tarea) => ({
  type: AGREGAR_TAREA_EXITO,
  payload: tarea,
});

// Si hubo un error

const agregarTareaError = (estado) => ({
  type: AGREGAR_TAREA_ERROR,
  payload: estado,
});
