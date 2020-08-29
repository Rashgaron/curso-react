import {
	AGREGAR_PRODUCTO,
	AGREGAR_PRODUCTO_ERROR,
	AGREGAR_PRODUCTO_EXITO,
	DESCARGAR_PRODUCTOS,
	DESCARGAR_PRODUCTOS_EXITO,
	ELIMINAR_PRODUCTO_EXITO
} from '../types';

const initialState = {
	productos: [],
	error: null,
	loading: null,
	productoEliminar: null,
	productoEditar: null
};

export default function(state = initialState, action) {
	switch (action.type) {
		case DESCARGAR_PRODUCTOS:
		case AGREGAR_PRODUCTO:
			return {
				...state,
				loading: action.payload
			};
		case DESCARGAR_PRODUCTOS_EXITO:
			return {
				...state,
				loading: null,
				error: null,
				productos: action.payload
			};
		case AGREGAR_PRODUCTO_EXITO:
			return {
				...state,
				loading: null,
				error: null,
				productos: [ ...state.productos, action.payload ]
			};

		case ELIMINAR_PRODUCTO_EXITO:
			return{
				...state,
				productos: state.productos.filter((dato)=> dato._id !== action.payload)
			}
		default:
			return state;
	}
}
