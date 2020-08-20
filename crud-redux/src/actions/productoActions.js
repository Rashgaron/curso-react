import { AGREGAR_PRODUCTO, AGREGAR_PRODUCTO_ERROR, AGREGAR_PRODUCTO_EXITO } from '../types';
import clienteAxios from '../config/axios'
// Crear nuevos productos

export function crearNuevoProductoAction(producto) {
	return async (dispatch) => {
		dispatch(agregarProducto());
		try {

			// insertar en la api
			await clienteAxios.post('/productos',producto)
			// Si todo sale bindActionCreators, actualiza el state
			dispatch(agregarProductoExito(producto));
			console.log('Producto añadido')
		} catch (error) {
			console.log('Ha sudecido un error',error);
			// Si hay un error, cambiar el state
			dispatch(agregarProductoError(true));
		}
	};
}

const agregarProducto = () => ({
	type: AGREGAR_PRODUCTO,
	payload: true
});

// Si el producto se guarda en base de datos

const agregarProductoExito = (producto) => ({
	type: AGREGAR_PRODUCTO_EXITO,
	payload: producto
});

// Si hubo un error

const agregarProductoError = (estado) => ({
	type: AGREGAR_PRODUCTO_ERROR,
	payload: estado
});
