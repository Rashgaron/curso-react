import React, { Fragment } from 'react';
import Formulario from './Formulario';
import ListaCartas from '../cartas/ListaCartas';
const Busqueda = () => {
	return (
		<Fragment>
			<Formulario />
			<ListaCartas />
		</Fragment>
	);
};

export default Busqueda;
