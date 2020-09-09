import { REGISTRO_EXITOSO, REGISTRO_ERROR, OBTENER_USUARIO, LOGIN_EXITOSO, LOGIN_ERROR, CERRAR_SESION } from '../types';
import clienteAxios from '../config/axios';
import tokenAuth from '../config/tokenAuth';
export function registrarUsuarioAction(usuario) {
	return async (dispatch) => {
		try {
			const respuesta = await clienteAxios.post('usuario', usuario);
			dispatch(registrarUsuarioExito(respuesta.data));

			usuarioAutenticadoAction();
		} catch (error) {
			console.log(error);
			const alerta = {
				msg: error.response.data.msg,
				categoria: 'alerta-error',
			};
			dispatch(registrarUsuarioError(alerta));
		}
	};
}

const registrarUsuarioExito = (usuario) => ({
	type: REGISTRO_EXITOSO,
	payload: usuario,
});
const registrarUsuarioError = (alerta) => ({
	type: REGISTRO_ERROR,
	payload: alerta,
});

export function usuarioAutenticadoAction() {
	return async (dispatch) => {
		const token = localStorage.getItem('token');
		if (token) {
			tokenAuth(token);
		}

		try {
			const respuesta = await clienteAxios.get('login');

			dispatch(usuarioAutenticado(respuesta.data));
		} catch (error) {
			console.log(error.response);
			dispatch(usuarioAutenticadoError());
		}
	};
}
const usuarioAutenticadoError = () => ({
	type: LOGIN_ERROR,
});
const usuarioAutenticado = (respuesta) => ({
	type: OBTENER_USUARIO,
	payload: respuesta,
});

export function iniciarSesionAction(datos) {
	return async (dispatch) => {
		try {
			const respuesta = await clienteAxios.post('login', datos);
			dispatch(iniciarSesionExito(respuesta.data));
			usuarioAutenticadoAction();
		} catch (err) {
			console.log(err.response.data.msg);
			const alerta = {
				msg: err.response.data.msg,
				categoria: 'alerta-error',
			};
			dispatch(iniciarSesionError(alerta));
		}
	};
}
const iniciarSesionExito = (respuesta) => ({
	type: LOGIN_EXITOSO,
	payload: respuesta,
});
const iniciarSesionError = (alerta) => ({
	type: LOGIN_ERROR,
	payload: alerta,
});

export function cerrarSesionAction() {
	return async (dispatch) => {
		dispatch(cerrarSesion());
	};
}
const cerrarSesion = () => ({
	type: CERRAR_SESION,
});
