import React, { Fragment } from 'react';
import FormularioProducto from './FormularioProducto';
const crearProducto = () => {
	return (
		<Fragment>
			<div className="row justify-content-center">
				<h1>Crear Producto</h1>
			</div>
			<FormularioProducto />
		</Fragment>
	);
};

export default crearProducto;
