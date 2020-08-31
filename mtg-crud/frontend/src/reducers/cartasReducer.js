import {
	BUSCAR_CARTA,
	BUSCAR_CARTA_ERROR,
	BUSCAR_CARTA_EXITO,
	GUARDAR_CARTAS_EXITO,
	GUARDAR_CARTAS_ERROR,
	GUARDAR_CARTAS
} from '../types/index';
import _ from 'lodash';
import chunk from 'lodash/chunk';
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
			const indice = _.findIndex(state.cartasGuardadas, {
				id: action.payload.id
			});

      console.log(action.payload.cantidad)

      if(indice !== -1){

        console.log(state.cartasGuardadas[indice].cantidad)

        state.cartasGuardadas[indice].cantidad += action.payload.cantidad
        return{
          ...state
        }
      }
			return {
				...state,
				cartasGuardadas: [ ...state.cartasGuardadas, action.payload ]
			};

		case GUARDAR_CARTAS:
	
			return {
        ...state,
			};
		default:
			return state;
	}
}
