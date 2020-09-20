import {
	BUSCAR_PRODUCTOS,
	BUSCAR_PRODUCTOS_ERROR,
	BUSCAR_PRODUCTOS_EXITO,
	OBTENER_PRODUCTOS,
	OBTENER_PRODUCTOS_ERROR,
	OBTENER_PRODUCTOS_EXITO,
} from '../types';
const initialState = {
	productos: [],
	loading: null,
	error: null,
	categoria_seleccionada: null,
	productosBuscados: [],
};

export default function (state = initialState, action) {
	switch (action.type) {
		case OBTENER_PRODUCTOS:
			return {
				...state,
				loading: true,
				error: null,
				productosBuscados: [],
				categoria_seleccionada: action.payload,
			};
		case BUSCAR_PRODUCTOS:
			return {
				...state,
				loading: true,
				error: null,
				categoria_seleccionada: action.payload,
			};
		case BUSCAR_PRODUCTOS_EXITO:
			return {
				...state,
				loading: null,
				error: null,
				productosBuscados: action.payload,
			};
		case OBTENER_PRODUCTOS_EXITO:
			return {
				...state,
				loading: null,
				error: null,
				productos: action.payload,
			};
		case OBTENER_PRODUCTOS_ERROR:
		case BUSCAR_PRODUCTOS_ERROR:
			return {
				...state,
				loading: null,
				error: true,
			};
		default:
			return state;
	}
}
