import React, { Fragment } from 'react';
import Carta from './Carta';

import { useSelector } from 'react-redux';
const ListaCartas = () => {
	const cartas = useSelector((state) => state.carta.cartas);
	const cartaBusqueda = useSelector((state) => state.carta.cartaBuscar.nombre);
	const loading = useSelector((state) => state.carta.loading);
	const error = useSelector((state) => state.carta.error);
	const busquedaCorrecta = useSelector((state) => state.carta.busquedaCorrecta);

		return (
			<Fragment>
				<div>
					<div className="row justify-content-center p-3">
						{busquedaCorrecta ? <h1 className="col-12 text-center">{cartaBusqueda}</h1> : null}
						{loading ? <p className="col-12 text-center">Cargando</p> : null}
						{error ? (
							<p className="col-12 text-center">No se han encontrado coincidencias</p>
						) : (
							<div className="row justify-content-between">
								{cartas.map((carta) => <Carta key={carta.id} carta={carta} />)}
							</div>
						)}
					</div>
				</div>
			</Fragment>
		);
};

export default ListaCartas;
