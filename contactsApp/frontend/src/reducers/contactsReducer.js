import { SELECCIONAR_CONTACTO, BUSCAR_CONEXIONES, BUSCAR_LETRA, DESCARGAR_CONTACTOS ,DESCARGAR_CONTACTOS_EXITO} from '../types';
const initialState = {
	contactos: [],
	busqueda: [],
	contactosConectados: [],
	contactoSeleccionado: [],
	letraSeleccionada: '',

	loading: true,
	error: null,
};

export default function (state = initialState, action) {
	switch (action.type) {
		case SELECCIONAR_CONTACTO:
			return {
				...state,
				contactoSeleccionado: action.payload,
				contactosConectados: [],
			};

		case BUSCAR_CONEXIONES:
			for (let i = 0; i < state.contactoSeleccionado.connections.length; i++) {
				for (let j = 0; j < state.contactos.length; j++)
					if (
						state.contactos[j].connections.find(
							(connection) => connection === state.contactoSeleccionado.connections[i]
						)
					)
						if (
							!state.contactosConectados.find((contacto) => contacto.id === state.contactos[j].id) &&
							state.contactos[j].id !== state.contactoSeleccionado.id
						) {
							state.contactosConectados.push(state.contactos[j]);
						}
			}

			return {
				...state,
			};
		case BUSCAR_LETRA:
			state.busqueda = [];
			for (let i = 0; i < state.contactos.length; i++) {
				if (state.contactos[i].name[0] === action.payload) state.busqueda.push(state.contactos[i]);
			}

			return {
				...state,
			};
		case DESCARGAR_CONTACTOS:
			return {
				...state,
				loading: true,
			};
		case DESCARGAR_CONTACTOS_EXITO:
			return{
				...state,
				loading:false,
				contactos:action.payload
			}
		default:
			return state;
	}
}
