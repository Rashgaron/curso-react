import React, { useState, Fragment } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
const Formulario = ({ tarea, guardarNuevaTarea }) => {
	const [ data, saveData ] = useState({
		nombre: '',
		descripcion: ''
	});
	const { nombre, descripcion } = data;

	const [ error, guardarError ] = useState(false);

	const handleChange = (e) => {
		saveData({
			...data,
			[e.target.name]: e.target.value
		});
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		if (nombre === '' || descripcion === '') {
			guardarError(true);
			return;
		} else {
			guardarError(false);
			console.log('se ha hecho submit del formulario');
			guardarNuevaTarea(data);

			// llamada a la api para guardar tarea
			axios
				.post('http://localhost:4000/tareas/add', data)
				.then((res) => console.log(res.data))
				.catch((err) => console.log(err));

			saveData({
				nombre: '',
				descripcion: ''
			});
		}
	};
	return (
		<Fragment>
			{error ? (
				<div className="alert alert-danger row" role="alert">
					Todos los campos son obligatorios
				</div>
			) : null}

			<form onSubmit={handleSubmit} className="container">
				<div className="row">
					<label className='col-12'>Nombre:</label>
					<input
					className='col-12'
						name="nombre"
						onChange={handleChange}
						value={nombre}
						type="text"
						placeholder="Escribe el nombre"
					/>
				</div>
				<div className="row">
					<label className='col-12'>Descripcion:</label>
					<textarea className='col-12' name="descripcion" onChange={handleChange} value={descripcion} />
				</div>
				<button type="submit" className="btn btn-success">
					Subir
				</button>
			</form>
		</Fragment>
	);
};

export default Formulario;
