import React, { Fragment } from 'react';
import Formulario from './Formulario';
import ListaCartas from '../cartas/ListaCartas';
const Busqueda = () => {
	return (
		<div className='busqueda-container'>
			<h1>Buscador:</h1>
			<Formulario />
			<ListaCartas seccion='Busqueda' />
		</div>
	);
};

export default Busqueda;
