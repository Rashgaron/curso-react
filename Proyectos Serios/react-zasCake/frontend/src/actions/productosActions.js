import {
	OBTENER_PRODUCTOS,
	OBTENER_PRODUCTOS_EXITO,
	OBTENER_PRODUCTOS_ERROR,
	BUSCAR_PRODUCTOS,
	BUSCAR_PRODUCTOS_ERROR,
	BUSCAR_PRODUCTOS_EXITO,
} from '../types';

import clienteAxios from '../config/axios';

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
	payload: categoria,
});

const obtenerProductosExito = (resultado) => ({
	type: OBTENER_PRODUCTOS_EXITO,
	payload: resultado,
});

const obtenerProductosError = () => ({
	type: OBTENER_PRODUCTOS_ERROR,
});

export function buscarProductosAction(busqueda) {
	return async (dispatch) => {
		dispatch(buscarProductos(busqueda));
		try {
			let resultado;
			resultado = await clienteAxios.get(`api/productos/busqueda/${busqueda}`);
			dispatch(buscarProductosExito(resultado.data.productos));
		} catch (error) {
			console.log(error);
			dispatch(buscarProductosError());
		}
	};
}

const buscarProductos = (busqueda) => ({
	type: BUSCAR_PRODUCTOS,
	payload: busqueda,
});

const buscarProductosExito = (data) => ({
	type: BUSCAR_PRODUCTOS_EXITO,
	payload: data,
});

const buscarProductosError = () => ({
	type: BUSCAR_PRODUCTOS_ERROR,
});
