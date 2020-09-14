import clienteAxios from '../config/axios';
import {
	SELECCIONAR_CONTACTO,
	BUSCAR_CONEXIONES,
	BUSCAR_LETRA,
	DESCARGAR_CONTACTOS,
	DESCARGAR_CONTACTOS_EXITO,
	BUSCAR_CONTACTO,
	BUSCAR_CONTACTO_EXITO,
} from '../types';
// import {useDispatch} from 'react-redux'
import {usuarioAutenticadoAction} from './authActions'

// Seleccionar contacto

export function seleccionarContactoAction(contacto) {
	return (dispatch) => {
		try {
			dispatch(seleccionarContacto(contacto));
		} catch (error) {
			console.log(error);
		}
	};
}

const seleccionarContacto = (contacto) => ({
	type: SELECCIONAR_CONTACTO,
	payload: contacto,
});

// Buscar conexiones

export function buscarConexionesAction() {
	return (dispatch) => {
		try {
			dispatch(buscarConexiones());
		} catch (error) {
			console.log(error);
		}
	};
}

const buscarConexiones = () => ({
	type: BUSCAR_CONEXIONES,
});

// Buscar por letra

export function buscarLetraAction(letra) {
	return (dispatch) => {
		try {
			dispatch(buscarLetra(letra));
		} catch (error) {
			console.log(error);
		}
	};
}

const buscarLetra = (letra) => ({
	type: BUSCAR_LETRA,
	payload: letra,
});

// Descargar Contactos

export function descargarContactosAction() {
	return async (dispatch) => {
		dispatch(descargarContactos());
		dispatch(usuarioAutenticadoAction())
		try {
			const contactos = await clienteAxios.get('contacts');
			dispatch(descargarContactosExito(contactos.data));
		} catch (error) {
			console.log(error);
		}
	};
}
const descargarContactos = () => ({
	type: DESCARGAR_CONTACTOS,
});
const descargarContactosExito = (contactos) => ({
	type: DESCARGAR_CONTACTOS_EXITO,
	payload: contactos,
});

// Buscar contacto

export function buscarContactoAction(busqueda, tipo) {
	return async (dispatch) => {
		dispatch(buscarContacto());
		try {
			if (busqueda.trim === '') return;
			dispatch(buscarContactoExito(busqueda, tipo));
		} catch (error) {
			console.log(error);
		}
	};
}

const buscarContacto = () => ({
	type: BUSCAR_CONTACTO,
});

const buscarContactoExito = (busqueda, tipo) => ({
	type: BUSCAR_CONTACTO_EXITO,
	payload: { busqueda, tipo },
});
