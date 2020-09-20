import {
  OBTENER_PRODUCTOS,
  OBTENER_PRODUCTOS_EXITO,
  OBTENER_PRODUCTOS_ERROR,
} from "../types";

import clienteAxios from '../config/axios'

export function obtenerProductosAction(categoria) {
  return async (dispatch) => {
    dispatch(obtenerProductos(categoria));
    try {
      let resultado;
      resultado = await clienteAxios.get(`api/productos/${categoria}`);
      dispatch(obtenerProductosExito(resultado.data.productos));
    } catch (error) {
      console.log(error);
      dispatch(obtenerProductosError());
    }
  };
}

const obtenerProductos = (categoria) => ({
  type: OBTENER_PRODUCTOS,
  payload: categoria
});

const obtenerProductosExito = (resultado) => ({
  type: OBTENER_PRODUCTOS_EXITO,
  payload: resultado,
});

const obtenerProductosError = () => ({
  type: OBTENER_PRODUCTOS_ERROR,
});
