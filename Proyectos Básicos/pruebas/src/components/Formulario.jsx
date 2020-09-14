import React, { useState, Fragment } from 'react';
import Error from './Error';
import shortid from 'shortid'
import styled from '@emotion/styled';
const Formulario = ({ guardarUsuarios }) => {
	const [ usuario, guardarUsuario ] = useState({
		nombre: '',
		apellido: ''
	});
	const [ error, guardarError ] = useState(false);
	const { nombre, apellido } = usuario;
	const validarFormulario = (e) => {
		e.preventDefault();
		if (nombre === '' || apellido === '') {
			guardarError(true);
			return;
		} else {
			guardarError(false);
			console.log('formulario enviado');
            console.log(usuario);
            usuario.id = shortid.generate()
			guardarUsuarios(usuario);
			guardarUsuario({
				nombre: '',
				apellido: ''
			});
		}
	};

	const guardarDato = (dato) => {
		guardarUsuario({
			...usuario,
			[dato.target.name]: dato.target.value
		});
	};
	return (
		<Fragment>
			{error ? <Error mensaje="Todos los campos son obligatorios" /> : null}
			<form onSubmit={validarFormulario}>
				<div className="input-field">
					<input
						placeholder="Introduce tu nombre"
						name="nombre"
						type="text"
						value={nombre}
						onChange={guardarDato}
					/>
					<label>Nombre:</label>
				</div>
				<div className="input-field">
					<input
						placeholder="Introduce tu apellido"
						name="apellido"
						type="text"
						value={apellido}
						onChange={guardarDato}
					/>
					<label>Apellido:</label>
				</div>
				<div className="col-content">
					<input type="submit" value="Enviar" className="col-content waves-effect btn" />
				</div>
			</form>
		</Fragment>
	);
};

export default Formulario;
