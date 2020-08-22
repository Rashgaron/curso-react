import {
	AGREGAR_PRODUCTO,
	AGREGAR_PRODUCTO_ERROR,
	AGREGAR_PRODUCTO_EXITO,
	COMENZAR_DESCARGA_PRODUCTOS,
	DESCARGA_PRODUCTOS_EXITO,
	DESCARGA_PRODUCTOS_ERROR,
	OBTENER_PRODUCTO_ELIMINAR,
	PRODUCTO_ELIMINADO_EXITO,
	PRODUCTO_ELIMINADO_ERROR,
	OBTENER_PRODUCTO_EDITAR,
	PRODUCTO_EDITADO_EXITO,
	PRODUCTO_EDITADO_ERROR,
	COMENZAR_EDICION_PRODUCTO
} from '../types';
import clienteAxios from '../config/axios';
import Swal from 'sweetalert2';

// Crear nuevos productos

export function crearNuevoProductoAction(producto) {
	return async (dispatch) => {
		dispatch(agregarProducto());
		try {
			// insertar en la api
			await clienteAxios.post('/productos', producto);
			// Si todo sale bindActionCreators, actualiza el state
			dispatch(agregarProductoExito(producto));
			// Alerta
			Swal.fire('Correcto', 'El producto se agregó correctamente', 'success');
		} catch (error) {
			// Si hay un error, cambiar el state
			dispatch(agregarProductoError(true));
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

// Funcion que descarga los productos de bd

export function obtenerProductosAction() {
	return (dispatch) => {
		dispatch(descargarProductos());

		try {
			setTimeout(async () => {
				const respuesta = await clienteAxios.get('/productos');
				dispatch(descargaProductosExitosa(respuesta.data));
			}, 2000);
		} catch (error) {
			console.log(error);
			dispatch(descargaProductosError());
		}
	};
}

const descargarProductos = () => ({
	type: COMENZAR_DESCARGA_PRODUCTOS,
	payload: true
});

const descargaProductosExitosa = (productos) => ({
	type: DESCARGA_PRODUCTOS_EXITO,
	payload: productos
});

const descargaProductosError = () => ({
	type: DESCARGA_PRODUCTOS_ERROR,
	payload: true
});

// Selecciona y elimina el producto

export function borrarProductoAction(id) {
	return async (dispatch) => {
		dispatch(obtenerProductoEliminar(id));
		try {
			await clienteAxios.delete(`/productos/${id}`);
			dispatch(eliminarProductoExito());
			// Si se eliminarProductoError, mostrar alerta
			Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
		} catch (error) {
			console.log(error);
			dispatch(eliminarProductoError());
		}
	};
}

const obtenerProductoEliminar = (id) => ({
	type: OBTENER_PRODUCTO_ELIMINAR,
	payload: id
});

const eliminarProductoExito = () => ({
	type: PRODUCTO_ELIMINADO_EXITO
});

const eliminarProductoError = () => ({
	type: PRODUCTO_ELIMINADO_ERROR,
	payload: true
});




// COLOCAR PRODUCTO EN EDICIÓN

export function obtenerProductoEditar(producto){
	return(dispatch)=>{
		dispatch(obtenerProductoEditarAction(producto))
	}
}

const obtenerProductoEditarAction = producto =>({
	type:OBTENER_PRODUCTO_EDITAR,
	payload:producto
})


// edita un registro en la api y state
export function editarProducto(producto){
	return (dispatch)=>>>>{}
	
}