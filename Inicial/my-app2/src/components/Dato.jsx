import React from 'react';
import './Dato.css';
const Dato = ({ dato, eliminarDato }) => {
	return (
		<div className="contenedor">
			<p>
				<span>Nombre:</span> {dato.nombre}
			</p>
			<p>
				<span>Apellido:</span> {dato.apellido}
			</p>
			<p>
				<span>Edad:</span> {dato.edad}
			</p>
			<button type="button" class="btn btn-danger" onClick={() => eliminarDato(dato.id)}>
				Eliminar
			</button>
		</div>
	);
};

export default Dato;
