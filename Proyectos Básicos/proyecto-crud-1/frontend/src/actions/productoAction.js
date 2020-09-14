import clienteAxios from '../config/axios';
import Swal from 'sweetalert2';

import {
	AGREGAR_PRODUCTO,
	AGREGAR_PRODUCTO_EXITO,
	AGREGAR_PRODUCTO_ERROR,
	ELIMINAR_PRODUCTO_EXITO,
	DESCARGAR_PRODUCTOS,
	DESCARGAR_PRODUCTOS_EXITO,
	DESCARGAR_PRODUCTOS_ERROR
} from '../types';

// Crear nuevos productos

export function crearNuevoProductoAction(producto) {
	return async (dispatch) => {
		dispatch(agregarProducto());

		try {
			// Insertar en la api

			await clienteAxios.post('/api/productos', producto);

			// Si todo sale bien, actualiza el state

			dispatch(agregarProductoExito(producto));
			descargarProductosAction()
			Swal.fire('Created!','Your product has been created.','success')

		} catch (error) {
			console.log(error);
			dispatch(agregarProductoError);
			Swal.fire({
				icon: 'error',
				title: 'Hubo un error',
				text: 'Hubo un error, intenta de nuevo'
			});
		}
	};
}

const agregarProducto = () => ({
	type: AGREGAR_PRODUCTO,
	payload: true
});

const agregarProductoExito = (producto) => ({
	type: AGREGAR_PRODUCTO_EXITO,
	payload: producto
});

const agregarProductoError = () => ({
	type: agregarProductoError,
	payload: true
});

// Funcion para descargar los productos de la BD

export function descargarProductosAction() {
	return async (dispatch) => {
		dispatch(descargarProductos());

		try {
			const respuesta = await clienteAxios.get('/api/productos');
			dispatch(descargarProductosExito(respuesta.data.Productos));
		} catch (error) {
			console.log(error);
			dispatch(descargarProductosError());
		}
	};
}
const descargarProductos = () => ({
	type: DESCARGAR_PRODUCTOS,
	payload: true
});
const descargarProductosExito = (productos) => ({
	type: DESCARGAR_PRODUCTOS_EXITO,
	payload: productos
});

const descargarProductosError = () => ({
	type: DESCARGAR_PRODUCTOS_ERROR
});

// Eliminar producto

export function eliminarProductoAction(id) {
	return async (dispatch) => {
		try {
			await clienteAxios.delete(`/api/productos/${id}`);
			dispatch(eliminarProductoExito(id));
			Swal.fire('Deleted!','Your file has been deleter.','success')
		} catch (error) {
			console.log(error);
		}
	};
}

const eliminarProductoExito = (id) => ({
	type: ELIMINAR_PRODUCTO_EXITO,
	payload: id
});
