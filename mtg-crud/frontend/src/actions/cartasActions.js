import {
  BUSCAR_CARTA,
  BUSCAR_CARTA_ERROR,
  BUSCAR_CARTA_EXITO,
  GUARDAR_CARTAS,
  GUARDAR_CARTAS_EXITO,
  GUARDAR_CARTAS_ERROR,
  ELIMINAR_CARTA,
  ELIMINAR_CARTA_EXITO,
  EDITAR_CARTA,
  EDITAR_CARTA_ERROR,
  EDITAR_CARTA_EXITO,
} from "../types/index";

import clienteAxios from "../config/axios";
import Swal from "sweetalert2";

// Guardar Carta

export function buscarCartaAction(carta) {
  return async (dispatch) => {
    dispatch(buscarCarta(carta));
    try {
      let resultado;

      resultado = await clienteAxios.get(
        `search?q=name%3A${carta.nombre}+lang%3A${carta.language}`
      );

      dispatch(buscarCartaExito(resultado.data.data));
    } catch (error) {
      console.log(error);
      dispatch(buscarCartaError());
    }
  };
}

const buscarCarta = (carta) => ({
  type: BUSCAR_CARTA,
  payload: carta,
});
const buscarCartaExito = (cartas) => ({
  type: BUSCAR_CARTA_EXITO,
  payload: cartas,
});
const buscarCartaError = () => ({
  type: BUSCAR_CARTA_ERROR,
});

// Guardar cartas

export function guardarCartaAction(carta) {
  return (dispatch) => {
    dispatch(guardarCarta(carta));
    try {
      console.log(carta);
      dispatch(guardarCartaExito(carta));
    } catch (error) {
      console.log(error);
      dispatch(guardarCartaError());
    }
  };
}

const guardarCarta = (carta) => ({
  type: GUARDAR_CARTAS,
  payload: carta,
});
const guardarCartaExito = (carta) => ({
  type: GUARDAR_CARTAS_EXITO,
  payload: carta,
});

const guardarCartaError = () => ({
  type: GUARDAR_CARTAS_ERROR,
});
export function eliminarCartaAction(carta) {
  return (dispatch) => {
    dispatch(eliminarCarta());
    try {
      dispatch(eliminarCartaExito(carta));
    } catch (error) {
      console.log(error);
    }
  };
}
const eliminarCarta = () => ({
  type: ELIMINAR_CARTA,
});

const eliminarCartaExito = (carta) => ({
  type: ELIMINAR_CARTA_EXITO,
  payload: carta,
});

export function editarCartaAction(carta) {
  return (dispatch) => {
    dispatch(editarCarta());
    try {
      dispatch(editarCartaExito(carta));
    } catch (error) {
      console.log(error);
    }
  };
}

const editarCarta = () => ({
  type: EDITAR_CARTA,
});

const editarCartaExito = (carta) => ({
  type: EDITAR_CARTA_EXITO,
  payload: carta,
});
