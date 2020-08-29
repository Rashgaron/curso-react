import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { crearNuevoProductoAction } from '../actions/productoAction';
const FormularioProducto = () => {
	const dispatch = useDispatch();

	const history = useHistory();
	const [ producto, guardarProducto ] = useState({
		nombre: '',
		precio: ''
	});

	const { nombre, precio } = producto;

	const handleChange = (e) => {
		guardarProducto({
			...producto,
			[e.target.name]: e.target.value
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (nombre.trim() === '' || precio.trim() === '') {
			console.log('Error');
			return null;
		}

	
		dispatch(crearNuevoProductoAction(producto));
		guardarProducto({
			nombre: '',
			precio: ''
		});
		history.push('/');
	};

	const handleClick = () => {
		history.push('/');
	};
	return (
		<div className="row">
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label>Nombre:</label>
					<input
						type="text"
						name="nombre"
						className="form-control"
						value={nombre}
						placeholder="Nombre del producto"
						onChange={handleChange}
					/>
				</div>
				<div className="form-group">
					<label>Precio:</label>
					<input
						type="number"
						name="precio"
						className="form-control"
						value={precio}
						onChange={handleChange}
					/>
				</div>
				<div className="row justify-content-between p-2">
					<button type="submit" className="btn btn-primary">
						Agregrar
					</button>
					<button type="button" className="btn btn-danger" onClick={handleClick}>
						Cancelar
					</button>
				</div>
			</form>
		</div>
	);
};

export default FormularioProducto;
