import {
  AGREGAR_TAREA,
  AGREGAR_TAREA_ERROR,
  AGREGAR_TAREA_EXITO,
  CARGAR_TAREAS,
  CARGAR_TAREAS_ERROR,
  CARGAR_TAREAS_EXITO,
  ELIMINAR_TAREA,
  ELIMINAR_TAREA_ERROR,
  ELIMINAR_TAREA_EXITO,
} from "../types";

const initialState = {
  tareas: [],
  error: null,
  loading: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case AGREGAR_TAREA:
    case CARGAR_TAREAS:
    case ELIMINAR_TAREA:
      return {
        ...state,
        loading: action.payload,
      };

    case AGREGAR_TAREA_EXITO:
      return {
        ...state,
        loading: null,
        tareas: [...state.tareas, action.payload],
      };

    case CARGAR_TAREAS_ERROR:
    case ELIMINAR_TAREA_ERROR:
    case AGREGAR_TAREA_ERROR:
      return {
        ...state,
        loading: null,
        error: action.payload,
      };
    case CARGAR_TAREAS_EXITO:
      return {
        ...state,
        loading: null,
        tareas: action.payload,
      };

    case ELIMINAR_TAREA_EXITO:
      return {
        ...state,
        loading: null,
        tareas: state.tareas.filter((tarea) => tarea.id !== action.payload),
      };
    default:
      return state;
  }
}
