import { MOSTRAR_ALERTA, OCULTAR_ALERTA } from "../types";

import clienteAxios from "../config/axios";
import Swal from "sweetalert2";

// Muestra una alerta

export function mostrarAlerta(alerta) {
  return (disaptch) => {
    disaptch(crearAlerta(alerta));
  };
}

const crearAlerta = (alerta) => ({
  type: MOSTRAR_ALERTA,
  payload: alerta,
});

// ocultar alerta

export function ocultarAlertaAction() {
  return (dispatch) => {
    dispatch(ocultarAlerta());
  };
}

const ocultarAlerta = () => ({
  type: OCULTAR_ALERTA,
});
