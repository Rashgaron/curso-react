import React, { useState, Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { guardarCartasAction } from '../../actions/cartasActions';
const Carta = ({ carta }) => {
	const dispatch = useDispatch();
	const [ cantidad, guardarCantidad ] = useState(0);

	const handleClick = (e) => {
		if (cantidad === 0 && e < 0) return;
		if (cantidad >= 0) guardarCantidad(cantidad + e);
	};
	if (!carta.image_uris) return null;

	const guardarCartas = (carta) => {
    //Esto lo hago porque si igualo normal, se copia la referencia del objeto y trae problemas
		let nuevaCarta = JSON.parse(JSON.stringify(carta));
		nuevaCarta.cantidad = cantidad;
		dispatch(guardarCartasAction(nuevaCarta));
	};
	return (
		<Fragment>
			<div className="col-12 col-md-5 col-lg-4 col-xl-3  justify-content-center d-flex">
				<div className="card col-8 col-md-12 col-sm-7 m-1 pt-3">
					<img alt={carta.name} src={carta.image_uris.large} className="w-100 img-card" />

					<div className="card-body">
						<div className="row">
							<div className="col justify-content-between d-flex">
								<button type="button" className="btn btn-danger" onClick={() => handleClick(-1)}>
									-
								</button>
								<p>{cantidad}</p>
								<button type="button" className="btn btn-success" onClick={() => handleClick(1)}>
									+
								</button>
							</div>
							<div className="col-12 justify-content-center d-flex">
								<button
									type="button"
									className="btn btn-primary"
									onClick={() => {
										guardarCartas(carta);
										guardarCantidad(0);
									}}
								>
									Agregar
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default Carta;
