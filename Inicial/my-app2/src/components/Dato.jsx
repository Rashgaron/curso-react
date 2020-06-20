import React from 'react';
const Dato = ({ dato, eliminarDato }) => {
	return (
		<div>
			<p>Nombre: {dato.nombre}</p>
			<p>Apellido: {dato.apellido}</p>
			<p>Edad: {dato.edad}</p>
			<button type="button" class="btn btn-danger" onClick={() => eliminarDato(dato.id)}>
				Eliminar
			</button>
		</div>
	);
};

export default Dato;
