import {
	BUSCAR_CARTA,
	BUSCAR_CARTA_ERROR,
	BUSCAR_CARTA_EXITO,
	GUARDAR_CARTAS_EXITO,
	GUARDAR_CARTAS_ERROR,
	GUARDAR_CARTAS
} from '../types/index';

const initialState = {
	cartaBuscar: {},
	cartas: [],
	error: null,
	loading: null,
	busquedaCorrecta: null,
	cartasGuardadas: []
};

export default function(state = initialState, action) {
	switch (action.type) {
		case BUSCAR_CARTA:
			return {
				...state,
				loading: true,
				cartaBuscar: action.payload,
				busquedaCorrecta: null
			};
	
		case GUARDAR_CARTAS_ERROR:
		case BUSCAR_CARTA_ERROR:
			return {
				...state,
				loading: null,
				error: true
			};
		case BUSCAR_CARTA_EXITO:
			return {
				...state,
				loading: null,
				error: null,
				cartas: action.payload,
				busquedaCorrecta: true
			};
		case GUARDAR_CARTAS_EXITO:
			let resultado = state.cartasGuardadas.find((carta) => carta.id === action.payload.id);
			if (resultado) {
        console.log('ya hay una carta igual');
        resultado.cantidad+=action.payload.cantidad
        console.log(resultado)
				return {
					...state,
				};
			}
			return {
				...state,
				cartasGuardadas: [ ...state.cartasGuardadas, action.payload ]
			};
		default:
			return state;
	}
}
